import "./App.css"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState()

  function handleInput(e) {
    const inputDelay = setTimeout(() => {
      console.log(e.target.value)
      return () => clearTimeout(inputDelay)
    }, 1000)
  }

  return (
    <div>
      <div className="navbar">Github Repo Search</div>
      <form action="" className="search">
        <input autoFocus onChange={handleInput} name="search" className="user-input" type="text" placeholder="Search Repos" />
      </form>
    </div>
  )
}

export default App
