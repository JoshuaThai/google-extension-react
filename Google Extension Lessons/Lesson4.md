# Lesson 4 — Permissions (still fundamentals)

Now let’s answer the next “why doesn’t this work?” question before you hit it.

### Why Chrome APIs sometimes “don’t exist”

Chrome extensions are permission-gated.

If you don’t declare permission → the API is disabled, even if the docs say it exists.

## Example: `chrome.storage`

If you try this in popup.js without permission:

```
chrome.storage.local.set({ test: 123 });
```

You’ll get:

- Errors

- Or undefined

- Or silent failure

The fix: declare permission

```
"permissions": ["storage"]
```

Now Chrome allows it.

## Mental model for permissions

Think of `manifest.json` as a capability contract:

> “Chrome, I promise I only need these powers.”

Chrome responds:

- “Okay, I’ll expose those APIs.”

- “Everything else is blocked.”

No runtime asking. No dynamic enabling.

## Types of permissions (don’t memorize yet)

For now, just know there are two big buckets:

1. Extension permissions

```
"permissions": ["storage", "tabs", "sidePanel"]
```

2. Website access

```
"host_permissions": ["https://*.google.com/*"]
```

Different purposes. Same idea: <b>explicit access only.</b>

## Tiny exercise (no coding yet)

Answer this out loud (or type it):

Why does Chrome require permissions to be listed in manifest.json?
