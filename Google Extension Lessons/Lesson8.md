# Lesson 8 — Your first service worker (finally)

No tricks. No side effects. Just proof that it exists.

## Step 1: Add a service worker

Create a file:

```
background.js
```

Put this inside:

```
console.log("Service worker loaded");

chrome.runtime.onInstalled.addListener(() => {
console.log("Extension installed");
});
```

## Step 2: Register it in manifest.json

Update your manifest:

```
{
"manifest_version": 3,
"name": "Hello Extension",
"version": "1.0",
"action": {
"default_popup": "popup.html"
},
"background": {
"service_worker": "background.js"
}
}
```

## Step 3: Reload the extension

Go to `chrome://extensions` → <b>Reload</b>

Click <b>Service worker</b> (under your extension) → <b>Inspect</b>

You should see:

```
Service worker loaded
Extension installed
```

(If you don’t see both, stop and evaluate the code for any errors.)
