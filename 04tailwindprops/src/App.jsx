import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
const [count, setCount] = useState(0)
let myObj = {
  username: "hitesh",
  age: 21
}
let newArr = [1, 2, 3, 4, 5, 6, 7]
let name = "hitesh"
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test  </h1>
      <Card username = "Piyush" btnText = "Click Me"/>
      <Card username = "Hitesh" />   //added card without btnText so default value will be taken.
    </>
  )
}

export default App
