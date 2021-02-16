import nock from "nock";
import { sendFeedback } from "../../components/services/sendFeedback";

nock("http://localhost").post("/api/feedback").reply(200);
nock("http://localhost").post("/api/feedback").reply(500);
nock("http://localhost")
  .post("/api/feedback")
  .replyWithError("TEST: network request failed");

test("positive server resoponse should resolve", async () => {
  const res = await sendFeedback("whatever");
  expect(res.success).toBe(true);
});

test("error when negative server response", async () => {
  await expect(sendFeedback("whatever")).rejects.toThrow();
});

test("error when fetch throws error", async () => {
  await expect(sendFeedback("whatever")).rejects.toThrow(
    "TypeError: Network request failed"
  );
});
