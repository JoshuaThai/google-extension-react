# Lesson 2 — Conditional Rendering (The React Way)

React does not show/hide things imperatively.

You don’t say:

> “hide this element”

You say:

> “If this condition is true, render it”

That mental shift matters.

## 1️⃣ The core rule

In React:

> If an expression evaluates to `false`, `null`, or `undefined`, nothing renders.

That’s it. That’s the rule.

## 2️⃣ The three patterns you MUST know

### Pattern 1 — Ternary (most common)

```
{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}
```

Use this when you have either/or UI.

---

### Pattern 2 — Logical AND (clean + powerful)

```
{isAdmin && <p>Admin Panel</p>}
```

- If `isAdmin` is `true` → renders

- If `false` → renders nothing

Use this when you only render something sometimes.

---

### Pattern 3 — Derived variables (best readability)

```
const message = count === 0 ? "Empty" : "Has items";

return <p>{message}</p>;
```

This keeps JSX clean and readable.

## 3️⃣ What NOT to do

❌ This does NOT work:

```
if (count > 0) {
  return <p>Positive</p>;
}
```

Why?

- JSX only allows expressions, not statements

# Exercises (Exercises Only From Here)

All work in `App.jsx`.

## 🧠 Exercise 1 — Login toggle

Task

1. Create state:

```
const [isLoggedIn, setIsLoggedIn] = useState(false);
```

2. Render:

- "Welcome back!" if logged in

- "Please log in" otherwise

3. Add a button:

- Label switches between Login / Logout

- Clicking toggles the state

## 🧠 Exercise 2 — Conditional button rendering

When the user is logged in:

- Show a button labeled <b>View Profile</b>

When logged out:

- The button should <b>not exist at all</b>

(No disabled buttons. It must not render.)

## 🧠 Exercise 3 — Warning message (AND operator)

Add:

```
const [count, setCount] = useState(0);
```

Render:

- A button that increments `count`

- A warning message:

```
⚠️ High count!
```

only when `count >= 5`

Use `&&`, not a ternary.

## 🧠 Exercise 4 — Refactor for clarity (important)

Create variables:

```
const loginMessage = ...
const buttonText = ...
```

Use them in JSX instead of inline logic.

This is a <b>real-world React habit.</b>
