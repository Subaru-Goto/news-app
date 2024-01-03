export async function fetchNewsData() {
  try{
    const response = await fetch("http://hn.algolia.com/api/v1/search?query=react")
    const data = await response.json()
    return data.hits
  } catch(error) {
    console.error("Failed to fetch news data: ", error)
  }
}
