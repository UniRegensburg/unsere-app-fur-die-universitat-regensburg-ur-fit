export async function sendFeedback(msg) {
  let res;
  try {
    res = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ message: msg }),
    });
  } catch (error) {
    throw new Error(error);
  }

  if (res.status === 200) {
    return { success: true };
  } else {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
}
