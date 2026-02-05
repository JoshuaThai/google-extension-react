# Lesson 7 — useEffect (What It’s Actually For)

This is the most <b>misused</b> hook in React.
We’re going to learn it <b>correctly</b>, not as a dumping ground.

## 1️⃣ The real purpose of `useEffect`

> `useEffect` is for <b>side effects.</b>

A <b>side effect</b> is anything that:

- Touches the outside world

- Happens because the UI rendered

Examples:

- Fetching data

- Reading/writing localStorage

- Setting timers

- Subscribing to events

❌ Not for:

- Simple derived values

- State you can compute during render

## 2️⃣ Basic shape (memorize this)

```
useEffect(() => {
// side effect
}, [dependencies]);
```

Think:

> “Run this effect when these values change.”

## 3️⃣ Dependency array (this is where people mess up)

### Case 1 — Run once (on mount)

```
useEffect(() => {
console.log("Component mounted");
}, []);
```

Runs:

- Once, when the component appears

### Case 2 — Run when state changes

```
useEffect(() => {
  console.log(count);
}, [count]);
```

Runs:

- Every time count changes

### Case 3 — No dependency array (avoid)

```
useEffect(() => {
console.log("Runs every render");
});
```

This is almost always wrong.

## 4️⃣ Cleanup functions (important)

```
useEffect(() => {
const id = setInterval(() => {
console.log("tick");
}, 1000);

return () => clearInterval(id);
}, []);
```

Cleanup runs:

- Before effect re-runs

- When component unmounts

## 5️⃣ Golden rule (commit this)

> <b>If you can compute it during render, don’t use</b> `useEffect`.

Example ❌:

```
useEffect(() => {
setIsEven(count % 2 === 0);
}, [count]);
```

Correct ✅:

```
const isEven = count % 2 === 0;
```

# Exercises — useEffect the Right Way

Everything in `App.jsx`.

## 🧠 Exercise 1 — Document title

Create state:

```
const [count, setCount] = useState(0);
```

Use `useEffect` to:

- Update the browser tab title to:

```
Count: X
```

- Run whenever count changes

## 🧠 Exercise 2 — Console log on mount

Log:

```
App mounted
```

Only once.

## 🧠 Exercise 3 — localStorage sync (classic use case)

When count changes:

- Save it to localStorage

On initial render:

- Load the count from localStorage (if it exists)

⚠️ Hint:

- One effect to load

- One effect to save

## 🧠 Exercise 4 — Timer with cleanup

Create:

- A timer that increments seconds every second

- Display the seconds

- Clean up properly

## 🧠 Exercise 5 — Identify misuse (mental check)

Look at your code and ask:

- Could any `useEffect` be replaced with a derived value?

If yes — fix it.
