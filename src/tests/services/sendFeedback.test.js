import nock from "nock";
import { sendFeedback } from "../../components/services/sendFeedback";

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

test("check if promise rejects when fetch request fails", async () => {
  nock("http://localhost")
    .post("/api/feedback")
    .replyWithError("thrown for testing purposes");

  await expect(sendFeedback("fake input")).rejects.toThrow();
});

test("check if promise only resolves if server status code is 200", async () => {
  nock("http://localhost")
    .post("/api/feedback")
    .reply(400)
    .post("/api/feedback")
    .reply(200)
    .post("/api/feedback")
    .reply(500);

  await expect(sendFeedback("fake input")).rejects.toThrow();
  await expect(sendFeedback("fake input")).resolves.toBe(true);
  await expect(sendFeedback("fake input")).rejects.toThrow();
});
