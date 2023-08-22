import { useEffect, useState } from 'react'
// import './App.css'


function App() {
  const [data, setData] = useState(null)


  // when the page loads
  useEffect(() => {

    // fetch some data
    fetch('https://api.github.com/users/mowglixx/repos')
      .then(data => data.json())
      // set the state of the variable "data" with the json from the request using the useState hook
      .then(json => setData(json))
  })

  return (
    <>
      <ul>

        {data && data.map((repo) => <li key={repo.id}>{repo.full_name}</li>)}
      </ul>    </>
  )
}

export default App
