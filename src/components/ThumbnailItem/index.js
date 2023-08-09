// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetail, isActive, setActiveThumbnail} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetail
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    setActiveThumbnail(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnail-list-item"
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
