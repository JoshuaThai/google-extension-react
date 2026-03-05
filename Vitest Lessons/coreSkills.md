# The 3 core skills in Vitest

## A) Basic assertions

```
expect(2 + 2).toBe(4);
expect({ a: 1 }).toEqual({ a: 1 }); // deep equality
expect("hello").toMatch(/ell/);
```

## B) Spies (watch calls)

```
import { vi } from "vitest";

test("spy example", () => {
  const fn = vi.fn();
  fn("a", "b");
  expect(fn).toHaveBeenCalledWith("a", "b");
  expect(fn).toHaveBeenCalledTimes(1);
});
```

## C) Mocking modules

If you have a module like:

```
src/api.js
```

```
export async function fetchUser() {
const res = await fetch("/api/user");
return res.json();
}
```

In a test:

```
import { vi } from "vitest";
import { fetchUser } from "./api";

global.fetch = vi.fn();

test("fetchUser returns json", async () => {
fetch.mockResolvedValue({
json: async () => ({ name: "Josh" }),
});

await expect(fetchUser()).resolves.toEqual({ name: "Josh" });
});
```

# Testing “conditional text” (like your auth example)

Component:

```
export default function Status({ auth }) {
  return <p>Auth ready: {auth ? "yes" : "no"}</p>;
}
```

Test:

```
import { render, screen } from "@testing-library/react";
import Status from "./Status";

test("shows yes when auth is truthy", () => {
  render(<Status auth={{ uid: "123" }} />);
  expect(screen.getByText("Auth ready: yes")).toBeInTheDocument();
});

test("shows no when auth is falsy", () => {
  render(<Status auth={null} />);
  expect(screen.getByText("Auth ready: no")).toBeInTheDocument();
});
```

# Common “gotchas” (so you don’t get stuck)

If you see `document is not defined` → your environment is not jsdom.

If you see `expect is not defined` → set globals: true or import from vitest:

```
import { test, expect } from "vitest";
```

If a test is flaky → use `await user.click(...)` and avoid manually poking the DOM.

# Practice mini-exercises

- Write a test that checks a component renders a heading (“Habit Tracker”).

- Write a test that clicks a button twice and expects “Count: 2”.

- Create a function sum(a,b) and test:
  - normal case

  - negative numbers

  - invalid input throws (up to you)
