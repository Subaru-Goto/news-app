import "./App.css"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar/index"
import NewsComponents from "./components/News/index"
import ErrorPage from "./components/ErrorPage"
import { fetchNewsData } from './Api'

function App() {
  const [news, setNews] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

useEffect(() => {
  async function getNews () {
    try {
      const newsData = await fetchNewsData()
      setNews(newsData)
      setLoading(false)
    } catch (error) {
      setError("Failed to fetch news data")
      console.error("Failed to fetch news data: ", error)
    }
  }
  getNews()
}, [])
  return (
  <>
    {isLoading ? <h2 className="loading">Loading...</h2>:
      error ? <ErrorPage setError={setError}>{error}</ErrorPage> :
      // TO DO: create a layout component and use useContext and provider to avoid many props
        <>
        <Navbar>
          <Navbar.Form
          setNews={setNews}
          setLoading={setLoading}
          setError={setError}
          fetchNewsData={fetchNewsData}/>
        </Navbar>
        <NewsComponents>
          <NewsComponents.UnorderedList>
            <NewsComponents.Items news={news}/>
          </NewsComponents.UnorderedList>
        </NewsComponents>
        </>
    }
  </>
  )
}

export default App
