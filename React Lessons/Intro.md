# React — From Zero (Properly)

### What React actually is (no fluff)

React is <b>just JavaScript + functions</b> that return UI.

Think of React as:

> “A way to describe what the UI should look like for a given state.”

No more. No less.

## Step 1: A React component is just a function

```
function App() {
  return <h1>Hello world</h1>;
}
```

That’s it.<br>
No classes. No magic.

<ul>
<li>App is a <b>function</b>
<li>It <b>returns UI</b>
<li>That UI is written in <b>JSX</b>
</ul>

## Step 2: JSX (the syntax that feels weird at first)

JSX is not HTML — it’s JavaScript syntax that looks like HTML.

This:

```
<h1>Hello world</h1>
```

Actually becomes:

```
React.createElement("h1", null, "Hello world")
```

You don’t write that by hand — but it explains why JSX has rules.

JSX rules you MUST internalize

### 1. One parent element

---

❌ Wrong:

```
return <h1>Hi</h1><p>Bye</p>;
```

✅ Correct:

```
return (

  <div>
    <h1>Hi</h1>
    <p>Bye</p>
  </div>
);
```

—or—

```
return (
<>

<h1>Hi</h1>
<p>Bye</p>
</>
);
```

### 2. JavaScript goes inside {}

---

```
   function App() {
   const name = "Josh";

return <h1>Hello {name}</h1>;
}
```

- {} = “drop into JavaScript mode”

### 3. Attributes look like JS, not HTML

---

```
<button onClick={handleClick}>Click</button>
```

Not:

```
onclick="handleClick()"
```

## Step 3: Components compose other components

React apps are component trees.

```
function Header() {
  return <h1>My App</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome</p>
    </div>
  );
}
```

<b>Key idea:</b>

- Capitalized = component
- `<Header />` = function call that returns UI

## Step 4: Props (data going into a component)

Props are <b>function arguments.</b>

```
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return <Greeting name="Josh" />;
}
```

Same as:

```
Greeting({ name: "Josh" });
```

### Destructuring (you’ll see this everywhere)

```
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}
```

This is not React syntax — it’s <b>JavaScript destructuring.</b>

## Step 5: State (data that changes)

This is where React actually becomes React.

```
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### Read this slowly

```
const [count, setCount] = useState(0);
```

- count → current value

- setCount → function to update it

- 0 → initial value

⚠️ Never modify state directly

```
count = count + 1 ❌
setCount(count + 1) ✅
```

---

### Mental model (this is critical)

React does not update the UI directly.

Instead:

1. State changes

2. React re-runs your component function

3. React updates the DOM for you

You describe the UI — React handles updates.

## Step 6: Event handling (no magic)

```
function App() {
  function handleClick() {
    console.log("Clicked");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

- No parentheses unless passing arguments

- React calls it for you

---

## Your first memory-locking exercise (do this)

Don’t skip this.

Task:

Create a component that:

1. Displays your name

2. Has a button

3. Clicking the button toggles text between `"Student"` and `"Developer"`

Hints:

- You’ll need `useState`

- Boolean state is your friend
