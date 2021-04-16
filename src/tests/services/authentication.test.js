import nock from "nock";
import auth from "../../components/services/authService";
import firebase from "../../components/services/firebaseProvider";
jest.mock("../../components/services/firebaseProvider");

nock.disableNetConnect();
const user = { displayName: "testName", uid: "1234" };
const testCredentials = ["abc12345", "käsekuchen"];
const emptyAuthServerResponse = { token: null, name: null };
const positiveAuthServerResponse = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1uNnM1eUB1ci1maXQtZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstbjZzNXlAdXItZml0LWRldi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsImF1ZCI6Imh0dHBzOlwvXC9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb21cL2dvb2dsZS5pZGVudGl0eS5pZGVudGl0eXRvb2xraXQudjEuSWRlbnRpdHlUb29sa2l0IiwiaWF0IjoxNjEzNzM3MTMxLCJleHAiOjE2MTM3NDA3MzEsInVpZCI6IjcwMWIzODliODQ4YTJiMWNmYWI4NjcwOTMxMDFkOGQ1YWM1NmFkZGQiLCJjbGFpbXMiOnsiYWRtaW4iOmZhbHNlfX0.j2nWwsdHWbIF7Uqw9IxZs-llO4ASzwC4zGRrO0ySggfF4DgAIKYtqY6-GKW4rYhNKTxVwYK4T2zWR9MPowmBL9YL8k3kVHPWcvV7ejOYmuhbXcIpgyv_sJSHCCkY_Qe-dojUv3glGR4919SS10GUUr5cefP-E8qT9v35nh09jAKvA5YphZh3hHK60dAvjU2grLxD8jKBipMaRVAsRfnIvuyXrrem0VN1Pk6F62D6Be3YKwJHf2alKpGAw8qS0ys184ils38QAIUmexLppUlmMhHF1kzF_6Stbt_1ECDopc7P3xzpOSDz7QSVaLuaWO_moNcVhQf2Ax14_SvZ_rOjvA",
  name: "Peter",
};
const firebaseSignInResponse = { user: { uid: "1234" } };

describe("test login method", () => {
  // necessary to avoid memory leaks with nock: see https://github.com/nock/nock#memory-issues-with-jest
  beforeEach(() => {
    if (!nock.isActive()) {
      nock.activate();
    }
  });

  // necessary to avoid memory leaks with nock: see https://github.com/nock/nock#memory-issues-with-jest
  afterEach(() => {
    return nock.restore();
  });

  test("check input parameter validation", async () => {
    const errMsg = "missing input parameters";
    await expect(auth.login("", "password")).rejects.toThrow(errMsg);
    await expect(auth.login("username", "")).rejects.toThrow(errMsg);

    await expect(auth.login("username")).rejects.toThrow(errMsg);

    await expect(auth.login("", "")).rejects.toThrow(errMsg);
    await expect(auth.login).rejects.toThrow(errMsg);
  });

  test("check login returns null if auth server response is empty", async () => {
    nock("http://localhost")
      .post(/\/proxy\/authentication\/.+/, {
        user: testCredentials[0],
        pass: testCredentials[1],
      })
      .reply(200, emptyAuthServerResponse);

    const res = await auth.login(...testCredentials);
    expect(res).toBe(null);
  });

  describe("test auth server token request errors", () => {
    test("check if login throws error if auth server response body is missing", async () => {
      nock("http://localhost")
        .post(/\/proxy\/authentication\/.+/)
        .reply(200);

      await expect(auth.login(...testCredentials)).rejects.toThrow(
        "Unexpected end of JSON input"
      );
    });

    test("check if login thows error if auth server response is not 200", async () => {
      nock("http://localhost")
        .post(/\/proxy\/authentication\/.+/)
        .reply(400)
        .post(/\/proxy\/authentication\/.+/)
        .reply(500);

      await expect(auth.login(...testCredentials)).rejects.toThrow("400");
      await expect(auth.login(...testCredentials)).rejects.toThrow("500");
    });

    test("check if login throws error if fetch fails", async () => {
      nock("http://localhost")
        .post(/\/proxy\/authentication\/.+/)
        .replyWithError("thrown for testing purposes");

      await expect(auth.login(...testCredentials)).rejects.toThrow(
        "Network request failed"
      );
    });
  });

  describe("test firebase signInWithCostumToken flow", () => {
    beforeEach(() => {
      return nock("http://localhost")
        .persist()
        .post(/\/proxy\/authentication\/.+/)
        .reply(200, positiveAuthServerResponse);
    });

    test("check login returns uid if firebase sign in is successfull", async () => {
      const signInWithCustomToken = jest
        .fn()
        .mockResolvedValue(firebaseSignInResponse);
      const setPersistence = jest.fn().mockResolvedValue();
      firebase.auth.mockImplementation(() => {
        return { signInWithCustomToken, setPersistence };
      });

      const user = await auth.login(...testCredentials);

      expect(signInWithCustomToken).toHaveBeenCalledWith(
        positiveAuthServerResponse.token
      );
      expect(user).toMatch(firebaseSignInResponse.user.uid);
    });

    test("check that setPersitence is called correctly", async () => {
      const signInWithCustomToken = jest
        .fn()
        .mockResolvedValue(firebaseSignInResponse);
      const setPersistence = jest.fn().mockResolvedValue();
      firebase.auth.mockImplementation(() => {
        return { signInWithCustomToken, setPersistence };
      });

      await auth.login(...testCredentials);
      expect(setPersistence).toHaveBeenCalledWith("session");

      await auth.login(...testCredentials, true);
      expect(setPersistence).toHaveBeenCalledWith("local");
    });

    test("check that error is returned if firebase sign in fails", async () => {
      const signInWithCustomToken = jest.fn().mockRejectedValue("test error");
      const setPersistence = jest.fn().mockResolvedValue();
      firebase.auth.mockImplementation(() => {
        return { signInWithCustomToken, setPersistence };
      });
      await expect(auth.login(...testCredentials)).rejects.toThrow(
        "test error"
      );
    });
  });
});

describe("test logout method", () => {
  test("check if logout throws error if firebase signout fails", async () => {
    const signOut = jest.fn().mockRejectedValue("test error");
    firebase.auth.mockImplementation(() => {
      return { signOut };
    });

    await expect(auth.logout).rejects.toThrow("test error");
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe("test isAuthenticated property", () => {
  test("check if isAuthenticated is true if there is user", () => {
    firebase.auth.mockImplementation(() => {
      return { currentUser: {} };
    });

    expect(auth.isAuthenticated).toBe(true);
  });

  test("check if isAuthenticated is false if there is no user", () => {
    firebase.auth.mockImplementation(() => {
      return { currentUser: null };
    });

    expect(auth.isAuthenticated).toBe(false);
  });
});

describe("test currentUser property", () => {
  test("check if currentUser returns correct properties", () => {
    firebase.auth.mockImplementation(() => {
      return { currentUser: user };
    });

    expect(auth.userId).toBe(user.uid);
  });

  test("check if currentUser is null if there is no user", () => {
    firebase.auth.mockImplementation(() => {
      return { currentUser: null };
    });

    expect(auth.userId).toBe(null);
  });
});

describe("test onAuthStateChanged callback", () => {
  test("check if onAuthStateChanged callback is called correctly if there is a user", () => {
    const onAuthStateChanged = jest.fn((cb) => cb(user));
    firebase.auth.mockImplementation(() => {
      return { onAuthStateChanged };
    });

    const mockCallback = jest.fn();
    auth.onAuthStateChanged(mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(user.uid);
  });

  test("check if onAuthStateChanged callback is called with null if there is no user", () => {
    const onAuthStateChanged = jest.fn((cb) => cb(null));
    firebase.auth.mockImplementation(() => {
      return { onAuthStateChanged };
    });

    const mockCallback = jest.fn();
    auth.onAuthStateChanged(mockCallback);

    expect(mockCallback).toHaveBeenCalledWith(null);
  });
});
