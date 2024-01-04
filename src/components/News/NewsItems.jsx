import NewsComponents from "./index"
import { getDomain } from "../../../utils/urlHelper"
import { calculateTimeDifference } from "../../../utils/timeHelper"

const NewsItems = ({ news }) => (
  news.map((newsItem, index) => {
    const domain = getDomain(newsItem.url)
    const updated_at = calculateTimeDifference(newsItem.updated_at)
    return (
      <NewsComponents.List key={newsItem.objectID}>
          <span className="news--index">{`${index + 1}. `}</span>
          <div className="news--container">
              <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                <h3 className="news--title">{newsItem.title}</h3>
              </a>
              <span className="news--domain">{`(${domain})`}</span>
            <div className="news--details">
              <span className="news--points">{`${newsItem.points} points`}</span>
              <span className="news--author">{`by ${newsItem.author}`}</span>
              <span className="news--time">{updated_at}</span>
              <span className="news--comments">{`${String(newsItem.num_comments)} comments`}</span>
            </div>
          </div>
      </NewsComponents.List>
    )
  })
)

export default NewsItems
