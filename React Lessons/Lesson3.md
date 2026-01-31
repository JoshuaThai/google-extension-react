# Lesson 4 — Rendering Lists with `map`

In React, you never manually repeat JSX.

If you catch yourself doing this:

```
<p>Item 1</p>
<p>Item 2</p>
<p>Item 3</p>
```

You’re doing it wrong.

## 1️⃣ The core idea

React renders lists by:

<b>1.</b> Storing data in an array

<b>2.</b> Using .map() to turn each item into JSX

Example:

```
const items = ["Apple", "Banana", "Orange"];

return (
  <ul>
    {items.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);
```

Mental model:

- .map() → transforms data → UI

- Each array item becomes one rendered element

## 2️⃣ Why React needs `key`

You’ll see this warning if you forget:

> Each child in a list should have a unique "key" prop

Correct version:

```
{items.map(item => (

  <li key={item}>{item}</li>
))}
```

### Why keys exist (important, not optional)

Keys help React:

- Track items between re-renders

- Update only what changed

- Avoid bugs when lists change

⚠️ Never use array index as a key unless the list is static.

## 3️⃣ Mapping objects (real-world case)

```
const students = [
  { id: 1, name: "Josh", major: "CS" },
  { id: 2, name: "Alex", major: "Math" }
];

return (
  <>
    {students.map(student => (
      <p key={student.id}>
        {student.name} — {student.major}
      </p>
    ))}
  </>
);
```

## 4️⃣ Conditional logic inside map

You can filter before mapping:

```
students
  .filter(s => s.major === "CS")
  .map(s => <p key={s.id}>{s.name}</p>);
```

This is clean React.

# Exercises (Lists + map)

Everything goes in App.jsx.

## 🧠 Exercise 1 — Simple list

Create an array:

```
const courses = ["Algorithms", "Databases", "Operating Systems"];
```

Render them as:

```
• Algorithms
• Databases
• Operating Systems
```

Use `<ul>` and `<li>`.

## 🧠 Exercise 2 — Object list (important)

Create:

```
const projects = [
{ id: 1, name: "Enrollment System", tech: "Django" },
{ id: 2, name: "Survey App", tech: "Express" },
{ id: 3, name: "React Practice", tech: "React" }
];
```

Render each as:

```
Project: Enrollment System (Django)
```

One `<p>` per project.

## 🧠 Exercise 3 — Conditional rendering in a list

From the same projects array:

- Only render projects where `tech === "React"`

Do not modify the original array.

## 🧠 Exercise 4 — Derived list (real-world pattern)

Create:

```
const reactProjects = projects.filter(p => p.tech === "React");
```

Render from `reactProjects`, not inline filtering.

This is a best practice.

## 🧠 Exercise 5 — Bonus (state + list)

Create state:

```
const [tasks, setTasks] = useState(["Study", "Apply to internships"]);
```

Render the tasks as a list.

No add/remove yet — just rendering state arrays.
