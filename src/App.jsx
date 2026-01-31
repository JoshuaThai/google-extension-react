import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { auth } from "./firebase";
import './App.css'

function Header(props){
  return <h1>{props.title}</h1>
}
// Example of a simple counter component
// that uses React state
function Counter(){
  // useState returns an array with two elements:
  const [count, setCount] = useState(0) // → [currentStateValue, stateUpdaterFunction]
  // stateArray[0] → current value
  // stateArray[1] → function to update it
  const courses = ["Algorithms", "Databases", "Operating Systems"];
  return (
    <div>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <hr />
      <p>Count: {count}</p>
      <p>Counter is {count % 2 == 0 ? "even" : "odd"}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// An basic example of event handling.
function Display(){
  function handleClick(){
    let text = "Hello, I am under the water. Please send help!"
    // Show an alert box when the button is clicked
    // For text variables in alert, use template literals
    alert(`${text}`)
  }
  return (
    <button onClick ={handleClick}>Click me!</button>
  )
}

// Example of conditional rendering
// that changes the displayed text based on user state
// and a button to toggle between states
// Default state is 'Developer'
function User(){
  const [user, setUser] = useState(null);
  return (
    <button onClick ={() => setUser(!user)}>
      You are {user ? "Student" : "Developer"}</button>
  )
}

function App() {
  return (
    <div>
      <Header title="Google Extension:" />
      <hr />
      <User />
      <hr />
      <h1>Firebase connected</h1>
      <p>Auth ready: {auth ? "yes" : "no"}</p>
      <Counter />
      <hr />
      <Display />
    </div>
  );
}

export default App;
