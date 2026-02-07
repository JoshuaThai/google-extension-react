# Lesson 3 — Adding JavaScript (still very basic)

## Step 1: Create popup.js

```
console.log("Popup script loaded");
```

## Step 2: Link it in popup.html

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello from my extension</h1>
    <script src="popup.js"></script>
  </body>
</html>
```

## Step 3: Reload → Click popup → Open DevTools

Right-click popup → <b>Inspect</b>

You should see:

```
Popup script loaded
```
