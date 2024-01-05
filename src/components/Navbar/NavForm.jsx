import { useState } from "react"

export default function NavForm({ setNews, setLoading, setError, fetchNewsData}) {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = async(event) => {
    event.preventDefault()
    try{
      setLoading(true)
      const data = await fetchNewsData(`query=${searchText}&tags=story`)
      console.log(data[0]._highlightResult)
      if(data.length === 0 || !data[0]._highlightResult
         || data[0]._highlightResult.author.matchLevel === "none"
       && data[0]._highlightResult.title.matchLevel === "none"){
        throw new Error("No search matches found.")
      }
      setNews(data)
    } catch (error)
    {
      setError(error.message)
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