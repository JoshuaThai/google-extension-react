# What Vitest is (and why you’d use it)

Vitest is a test runner made to feel like Jest, but it’s built for Vite projects: fast startup, fast watch mode, and it understands modern ESM tooling out of the box.

You’ll typically combine:

- Vitest = runs tests + provides `test`, `expect`, mocks, spies

- @testing-library/react = renders components + queries the DOM like a user

- jsdom = fake browser environment so React DOM works

## 1) Install the basics (Vite + React)

From your project root:

```
npm i -D vitest jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

Notes:

- `@testing-library/jest-dom` gives matchers like toBeInTheDocument()

- `jsdom` is needed for DOM tests

- `@types/jest` is optional but helps editor autocomplete in some setups

## 2) Configure Vitest in vite.config.js

Add a test section:

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js",
  },
});
```

Now create the setup file:
`src/tests/setup.js`

```
import "@testing-library/jest-dom";
```

## 3) Add scripts to package.json

```
{
  "scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:run": "vitest run",
  "test:watch": "vitest --watch"
  }
}
```

Run:

```
npm test
```

## 4) Your first React component test

Example component:
`src/Counter.jsx`

```
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
```

Test:
`src/Counter.test.jsx`

```
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("increments the counter", async () => {
render(<Counter />);
expect(screen.getByText("Count: 0")).toBeInTheDocument();

const user = userEvent.setup();
await user.click(screen.getByRole("button", { name: /increment/i }));

expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

Install `user-event` if you don’t have it:

```
npm i -D @testing-library/user-event
```

Why userEvent? It simulates interactions more realistically than firing raw events.
