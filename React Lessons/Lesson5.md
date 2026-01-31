# Lesson 5 — Component Boundaries & Lifting State

This lesson answers:

> “What goes in its own component?”

> “Where should state live?”

If you get this wrong, React feels messy forever.

If you get it right, React feels clean.

## 1️⃣ The single most important React rule

> State should live in the lowest common ancestor that needs it.

Not higher.
Not duplicated.
Not scattered.

## 2️⃣ What a component boundary actually is

A component should exist when:

- A piece of UI can be described independently

- It has clear inputs (props)

- It may be reused or reasoned about on its own

Bad instinct:

- “Everything in App.jsx”

Good instinct:

- “What does this conceptually represent?”

## 3️⃣ Data flows DOWN, events flow UP

This is React’s spine.

```
State
 ↓
Props
 ↓
Child UI
 ↑
Events
 ↑
State updates
```

Children:

- Do not own shared state

- Request changes via callbacks

## 4️⃣ Example (read, don’t copy yet)

```
function Counter({ count, onIncrement }) {
  return (
    <>
      <p>{count}</p>
      <button onClick={onIncrement}>+</button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Counter
      count={count}
      onIncrement={() => setCount(count + 1)}
    />
  );
}
```

Key insight:

- `Counter` is stateless

- `App` owns the state

- Behavior is passed down

This scales.

## 5️⃣ When NOT to lift state

Do not lift state if:

- Only one component needs it

- It’s truly local (e.g. input typing state)

Local state is good. Over-lifting is bad design.

# Exercises — Component Thinking

You will create multiple components now.

## 🧠 Exercise 1 — Extract a component

Create a component:

```
function Display({ value }) {
  return <p>Value: {value}</p>;
}
```

In App:

- Create state `value`

- Pass it to `Display`

## 🧠 Exercise 2 — Button component with callback

Create:

```
function IncrementButton({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}
```

In App:

- Own the state

- Pass the handler down

## 🧠 Exercise 3 — Multiple children, shared state

Create:

- `Display`

- `IncrementButton`

- `DecrementButton`

All operate on the same state in `App`.

The buttons must not have their own state.

## 🧠 Exercise 4 — Controlled input component

Create:

```
function NameInput({ name, onNameChange }) {
return (
<input
value={name}
onChange={(e) => onNameChange(e.target.value)}
/>
);
}
```

In `App`:

- Store `name`

- Pass value + setter

## 🧠 Exercise 5 — Mental model check (important)

Answer in code, not words:

`App` owns:

- value

- name

Child components:

- receive props

- request changes

If you accidentally duplicate state, stop and fix it.
