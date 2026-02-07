# Lesson 2 — Adding something visible (a popup)

Now let’s add <b>one HTML page</b> and connect it.

## Step 1: Create popup.html

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello from my extension</h1>
  </body>
</html>
```

## Step 2: Update `manifest.json`

```
{
    "manifest_version": 3,
    "name": "Hello Extension",
    "version": "1.0",
    "action": {
    "default_popup": "popup.html"
    }
}
```

`"action"` defines what happens when you click the extension icon in Chrome’s toolbar.

This tells Chrome:

> “When the user clicks my extension icon, open this HTML file as a popup.”

## Step 3: Reload the extension

Click <b>Reload</b> on `chrome://extensions`

## Step 4: Click the extension icon

🎉 You should see your text.
