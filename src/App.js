import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [userInput, setUserInput] = useState()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    if (!userInput) {
      return
    }

    // api call here
    // https://api.github.com/search/repositories?q=react
    fetch("https://api.github.com/search/repositories?q=" + userInput)
      .then(res => res.json())
      .then(data => {
        setRepos(data.items)
      })
  }, [userInput])

  function handleInput(e) {
    const inputDelay = setTimeout(() => {
      setUserInput(e.target.value)
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
