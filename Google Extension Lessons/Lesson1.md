# Lesson 1 — Smallest possible extension (no JS)

Let’s create the simplest extension that can exist.

## Step 1: Create a folder

Name it anything, for example:

```
hello-extension
```

## Step 2: Create manifest.json

Put this <b>exactly</b> inside the folder:

```
{
"manifest_version": 3,
"name": "Hello Extension",
"version": "1.0"
}
```

That’s it.

No JavaScript. No UI.

## Step 3: Load it in Chrome

1. Open Chrome

2. Go to `chrome://extensions`

3. Turn <b>Developer mode</b> ON (top right)

4. Click <b>Load unpacked</b>

5. Select the <b>hello-extension</b> folder

✅ You should see your extension listed.

If you see an error → stop. Fix it.
<b>Nothing else matters until this works.</b>
