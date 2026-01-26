# Lesson 2 — State (useState) for Real

<p style="font-size: 16px">This is the most important concept in React. If this clicks, everything else becomes easier.

## 1️⃣ What state actually is (clear mental model)

<p style="font-size: 16px"> State is:

> <b>Data that belongs to a component and can change over time.</b>

<p style="font-size: 16px"> When state changes:

1. React re-runs the component function

2. React updates the UI automatically

You do not update the DOM yourself.

## 2️⃣ The useState pattern (no mystery)

```
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <p>{count}</p>;
}
```

Break it down:

```
useState(0)
```

- 0 = initial value

```
const [count, setCount] = ...
```

- count → current value

- setCount → function that updates it

<p style="font-size: 16px"> React gives you both.

## 3️⃣ Updating state (the only correct way)

❌ Wrong:

```
count = count + 1;
```

✅ Correct:

```
setCount(count + 1);
```

Why?

- React only knows something changed when you call the setter

- Direct assignment does nothing to the UI

## 4️⃣ Event handlers + state (React bread & butter)

```
<button onClick={() => setCount(count + 1)}>
Increment
</button>
```

- onClick expects a function

- React calls it when the event happens

## Exercises (This Is Where Memory Forms)

All work goes in App.jsx.

<hr>

### 🧠 Exercise 1 — Counter (baseline)

Task

Create state called count starting at 0

Display the count

Add a button labeled Increment

Clicking the button increases the count by 1

<hr>

### 🧠 Exercise 2 — Decrement with constraint

Add another button labeled Decrement.

Rules:

Clicking it decreases the count

The count must never go below 0

(Hint: conditional logic inside the click handler)

---

### 🧠 Exercise 3 — Derived UI (important concept)

Display:

"Even" if the count is even

"Odd" if the count is odd

⚠️ Do not create another piece of state for this.
This should be derived from count.

---

### 🧠 Exercise 4 — Reset button (forces understanding)

Add a Reset button that sets the count back to 0.
