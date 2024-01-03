import NewsComponents from "./index"

// ^ not http(s):// and any characters until next /
const regex = /^(https?:\/\/)([^/]+)/

function getDomain(url) {
  const match = url.match(regex);
  return match ? match[2] : '';
}

const NewsItems = ({ news }) => (
  news.map((newsItem, index) => {
    const domain = getDomain(newsItem.url)
    //const updated_at = new Date(newsItem.updated_at)
    return (
      <NewsComponents.List key={newsItem.objectID}>
          <span className="news--index">{`${index + 1}. `}</span>
          <div className="news--container">
            <div className="news--title">
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                <h3>{newsItem.title}</h3>
              </a>
              <span className="news--domain">{`(${domain})`}</span>
            </div>
            <div className="news--details">
              <span className="news--points">{`${newsItem.points} points`}</span>
              <span className="news--author">{`by ${newsItem.author}`}</span>
              <span className="news--time">{newsItem.updated_at}</span>
              <span className="news--comments">{`${String(newsItem.num_comments)} comments`}</span>
            </div>
          </div>
      </NewsComponents.List>
    )
  })
)

export default NewsItems
