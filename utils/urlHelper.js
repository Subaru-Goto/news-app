export function getDomain(url) {
  if (!url) {
    return "No URL available"
  }
  // ^ not http(s):// and any characters until next /
  const regex = /^(https?:\/\/)([^/]+)/ 
  const match = url.match(regex)
  return match ? match[2] : "No URL available"
}