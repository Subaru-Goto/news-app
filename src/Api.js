export async function fetchNewsData(endPoint="tags=story") {
  const url = "https://hn.algolia.com/api/v1/search?"
  try{
    const response = await fetch(url + endPoint)
    const data = await response.json()
    return data.hits
  } catch(error) {
    console.error("Failed to fetch news data: ", error)
  }
}