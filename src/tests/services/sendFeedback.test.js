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

test("error when fetch throws error", async () => {
  nock("http://localhost").post("/api/feedback").replyWithError("error");

  await expect(sendFeedback("whatever")).rejects.toThrow(
    "TypeError: Network request failed"
  );
});

test("error when negative server response", async () => {
  nock("http://localhost").post("/api/feedback").reply(400);

  await expect(sendFeedback("whatever")).rejects.toThrow();
});

test("positive server response should lead to resolved promise", async () => {
  nock("http://localhost").post("/api/feedback").reply(200);

  const res = await sendFeedback("whatever");
  expect(res.success).toBe(true);
});
