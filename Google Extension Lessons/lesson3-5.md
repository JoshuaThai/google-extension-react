# What "action" means (plain English)

`"action"` defines what happens when you click the extension icon in Chrome’s toolbar.

Think of the extension icon as a button.

`"action"` tells Chrome what that button should do.

## What `"default_popup"` means

```
"action": {
  "default_popup": "popup.html"
}
```

This tells Chrome:

> “When the user clicks my extension icon, open this HTML file as a popup.”

That’s it. Nothing more hidden than that.

## What Chrome actually does step-by-step

When you click the extension icon:

1. Chrome looks at `manifest.json`

2. It sees `"action"`

3. It sees "default_popup": "popup.html"

4. Chrome:

- Creates a tiny browser window

- Loads `popup.html` into it

- Runs any JS linked inside that HTML

When you click away → <b>popup is destroyed</b>

That’s why popup state does <b>not persist.</b>

## Important rule (this will save you pain later)

> If `default_popup` exists, Chrome will ALWAYS open the popup.

You cannot intercept the click in JavaScript.

That means:

- `chrome.action.onClicked` ❌ will NOT fire

- Side panels ❌ will NOT open

- Custom click behavior ❌ impossible

This is the #1 reason people get confused.

## Compare these two setups

### ✅ Popup-based extension

```
"action": {
  "default_popup": "popup.html"
}
```

Click icon → popup opens<br>
No JavaScript click handler needed

---

### ✅ Click-handled extension (NO popup)

```
"action": {
"default_title": "My Extension"
}
```

Now you can do:

```
chrome.action.onClicked.addListener(() => {
console.log("Icon clicked");
});
```

Only one of these can exist.

## Mental model (lock this in)

- `"action"` = the toolbar button

- `"default_popup"` = “this button opens a mini HTML page”

- Popup:
  - Has DOM

  - Can run JS

  - Dies when closed

- Popup is not background logic
