# Lesson 5 — First Chrome API (still safe and simple)

Let’s use the <b>simplest, least scary API:</b> `chrome.runtime`

### What `chrome.runtime` is for

- Basic extension metadata

- Messaging

- Lifecycle awareness

It requires <b>no permissions.</b>

---

### Example: checking extension info

Add this to `popup.js`:

```
console.log("Extension ID:", chrome.runtime.id);
```

Reload → open popup → inspect → console.

You should see a long string ID.

This proves:

- Chrome APIs are available

- You’re running inside an extension context

- Your JS is wired correctly
