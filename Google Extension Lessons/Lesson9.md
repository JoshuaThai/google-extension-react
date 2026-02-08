# Lesson 9 — Messaging (how the pieces talk)

Because popup and service worker are separate, they communicate by sending messages.

### Step A — Service worker listens for messages

In `background.js`, add this:

```
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
console.log("SW got message:", message);

if (message.type === "PING") {
sendResponse({ ok: true, reply: "PONG from service worker" });
}

// Returning true keeps the message channel open for async work (we'll use later)
return true;
});
```

### Step B — Popup sends a message

In `popup.html`, add a button:

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello from my extension</h1>
    <button id="pingBtn">Ping service worker</button>
    <script src="popup.js"></script>
  </body>
</html>
```

In `popup.js`, add:

```
document.getElementById("pingBtn").addEventListener("click", async () => {
const response = await chrome.runtime.sendMessage({ type: "PING" });
console.log("Popup got response:", response);
});
```

### Step C — Test it

1. Reload extension

2. Open popup → click Ping

3. Inspect popup console → you should see the response

4. Inspect service worker console → you should see the received message

That proves:

- Popup JS runs

- Service worker runs

- They can talk reliably

---

### Now your first “real” API use: active tab URL (still simple)

To read the active tab URL in the service worker, you’ll need:

#### Add permission

In `manifest.json`, add:

```
"permissions": ["tabs"]
```

Then in `background.js`, change your listener:

```
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
if (message.type === "GET_ACTIVE_TAB_URL") {
const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
sendResponse({ url: tab?.url ?? null });
}
return true;
});
```

And in popup.js, call it:

```
document.getElementById("pingBtn").addEventListener("click", async () => {
const response = await chrome.runtime.sendMessage({ type: "GET_ACTIVE_TAB_URL" });
console.log("Active tab URL:", response.url);
});
```
