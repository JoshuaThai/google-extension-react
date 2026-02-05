# Lesson 8 — Thinking in React (Mental Model & Re-renders)

This lesson is about how React thinks, not new syntax.

Most React bugs come from a broken mental model — not from missing knowledge.

## 1️⃣ The most important truth in React

Your component function runs from top to bottom on every render.

Read that again.

React does not:

- “update one line”

- “change a variable”

- “patch your logic”

It <b>re-runs the function.</b>

## 2️⃣ What causes a re-render?

A component re-renders when:

- Its state changes

- Its props change

- Its parent re-renders

That’s it. No other triggers.

## 3️⃣ What re-renders do not do

Re-renders:

- ❌ Do NOT reset state

- ❌ Do NOT remount the component

- ❌ Do NOT lose event handlers

- ❌ Do NOT “start over” conceptually

State survives renders.

## 4️⃣ Render phase vs effect phase

### Render phase

- React runs your function

- JSX is evaluated

- No side effects allowed

```
const doubled = count * 2;
```

Good.

### Effect phase

- React commits DOM updates

- `useEffect` runs after render

```
useEffect(() => {
document.title = count;
}, [count]);
```

Side effects belong here.

## 5️⃣ Why “derived state” is a bug

❌ Wrong mental model:

> “I’ll store everything in state.”

Wrong code:

```
const [isEven, setIsEven] = useState(false);

useEffect(() => {
  setIsEven(count % 2 === 0);
}, [count]);
```

Correct mental model:

> “If it can be calculated, calculate it.”

Correct code:

```
const isEven = count % 2 === 0;
```

## 6️⃣ Why functions are re-created every render (and why that’s OK)

```
function App() {
    function handleClick() {
        setCount(count + 1);
    }
}
```

Yes:

- `handleClick` is re-created on every render

No:

- This is not a problem

- React is designed for this

Do not optimize prematurely.

## 7️⃣ The React flow (burn this in)

```
State changes
↓
Component re-runs
↓
JSX re-evaluates
↓
React updates DOM
↓
Effects run (if dependencies changed)
```

If you remember only one diagram — remember this.

# Exercises — Mental Model Drills

These are thinking exercises, but you’ll write code.

## 🧠 Exercise 1 — Render counter

Add:

```
console.log("App rendered");
```

Click buttons, type inputs, change state.

Observe:

- When it logs

- When it doesn’t

This is how you feel re-renders.

## 🧠 Exercise 2 — Derived value vs state

Create:

```
const [count, setCount] = useState(0);
```

Add:

```
const doubled = count \* 2;
```

Render both.

❌ Do NOT use `useState` or `useEffect` for `doubled`.

## 🧠 Exercise 3 — Parent re-render awareness

Create:

```
function Child() {
    console.log("Child rendered");
    return <p>Child</p>;
}
```

Render `<Child />` inside `App`.

Update state in `App`.

Observe:

- Child re-renders

- Why that’s expected

## 🧠 Exercise 4 — Find unnecessary state (important)

Review your existing code and ask:

- “Am I storing something I could compute?”

Remove at least `one piece of unnecessary state` if present.

## 🧠 Exercise 5 — Explain in code

Create comments explaining:

- Why a value is derived

- Why something is state

- Why an effect exists

If you can explain it, you understand it.
