import { useState } from "react"

export default function NavForm({ setNews, setLoading, setError, fetchNewsData}) {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = async(event) => {
    event.preventDefault()
    try{
      setLoading(true)
      const data = await fetchNewsData(`query=${searchText}`)
      setNews(data)
    } catch (error)
    {
      setError("No search matches found.")
      console.error("Failed to fetch news data: ", error)
    } finally {
      setSearchText("")
      setLoading(false)
    }
  }

 return(
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      onChange={(event) => setSearchText(event.target.value)}
      value={searchText}
      placeholder="search keyword"
      aria-label="key word search to filter news"/>
      <button>Search</button>
    </form>
  )

}