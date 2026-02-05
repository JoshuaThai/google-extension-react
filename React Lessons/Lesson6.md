# Lesson 6 - Events and Handlers

## What counts as “events & handlers” in React

An event is something the user does:

- click

- type

- submit

- change

A handler is the function React calls in response.

## Everything you’ve already used (this is event handling)

You’ve already written all of these:

```
<button onClick={handleClick}>Click</button>
```

```
<input onChange={(e) => setName(e.target.value)} />
```

```
<form onSubmit={handleSubmit}></form>
```

These are <b>React event handlers</b>.

## The canonical event-handler pattern

```
function handleClick() {
  setCount(count + 1);
}

<button onClick={handleClick}>Increment</button>
```

Key rules:

1. Pass a function reference, not a function call

2. React invokes it later

3. Handlers usually update state

## Arrow functions vs named handlers

Both are valid:

```
<button onClick={() => setCount(count + 1)} />

function increment() {
  setCount(count + 1);
}

<button onClick={increment} />
```

Use:

- Inline for simple logic

- Named for readability or reuse

## Event objects (you’ve used these too)

```
function handleChange(e) {
  setValue(e.target.value);
}
```

- e is a synthetic event

- Works consistently across browsers

- Automatically pooled (don’t store it)
