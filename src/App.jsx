import "./App.css"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import News from "./components/News/index"
import NewsList from "./components/News/NewsItems"
import { fetchNewsData } from './Api'
function App() {
  const [news, setNews] = useState([])

useEffect(() => {
  async function getNews () {
    try {
      const newsData = await fetchNewsData()
      setNews(newsData)
    } catch (error) {
      console.error("Failed to fetch news data: ", error)
    }
  }
  getNews()
}, [])

  return (
  <>
    <Navbar>Hello World</Navbar>
    <News.UnorderedList>
      <NewsList news={news}/>
    </News.UnorderedList>
    
  </>
  )
}

export default App
