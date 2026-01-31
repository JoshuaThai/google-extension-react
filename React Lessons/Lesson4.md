# Lesson 5 — Forms & Controlled Inputs

This lesson is `critical`.<br>
If forms don’t click, React feels painful. When they do click, everything makes sense.

## 1️⃣ The core idea (burn this into memory)

In React:

> The input does NOT own its value — state does.

This is called a controlled component.

## 2️⃣ The basic pattern (there is only one)

```
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

Breakdown:

- `value={name}` → React controls what’s in the input

- `onChange` → updates state as the user types

- `e.target.value` → current text in the input

No shortcuts. No magic.

## 3️⃣ Why React does this (important)

Controlled inputs let React:

- Validate input

- Reset fields

- Disable submission

- Sync UI with data

- Prevent weird DOM bugs

Yes, it’s more typing — but it’s predictable.

## 4️⃣ Forms and submit events

```
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}
```

Why `preventDefault()`?

- Prevents page refresh

- Keeps React in control

## 5️⃣ Multiple inputs (pattern scales cleanly)

```
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

Each input:

- One piece of state

- One setter

Later we’ll optimize — not yet.

# Exercises (Controlled Inputs Only)

All work in `App.jsx`.

## 🧠 Exercise 1 — Single controlled input

<b>1. </b>Create state:

```
const [name, setName] = useState("");
```

<b>2. </b>Render:

- A text input

- A `<p>` that displays:

```
Name: <typed value>
```

Typing must update the text live.

## 🧠 Exercise 2 — Form submit

Wrap the input in a `<form>`.

On submit:

- Prevent page refresh

- Log the name to the console

Button text:

```
Submit
```

## 🧠 Exercise 3 — Clear input after submit (important)

After submitting:

- Reset the input back to an empty string

⚠️ This only works if the input is controlled.

## 🧠 Exercise 4 — Two inputs

Add:

```
const [email, setEmail] = useState("");
```

Render:

- Email input

- Display both name and email below the form

## 🧠 Exercise 5 — Conditional submit button

Disable the submit button unless:

- Name is not empty

- Email is not empty

Use:

```
<button disabled={...}>
```
