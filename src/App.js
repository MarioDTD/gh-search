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
    // delay to prevent consuming rate limit

    const inputDelay = setTimeout(() => {
      setUserInput(e.target.value)

      return () => clearTimeout(inputDelay)
    }, 3000)
  }

  return (
    <div>
      <div className="navbar">Github Repo Search</div>
      <form action="" className="search">
        <input autoFocus onChange={handleInput} name="search" className="user-input" type="text" placeholder="Enter repository name here..." />
      </form>
      {repos.map(repo => {
        return (
          <div className="card">
            <h2>
              <a href={repo.html_url}>{repo.name}</a>
            </h2>
            <p>{repo.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
