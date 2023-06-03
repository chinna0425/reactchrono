import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem
  console.log(tagsList)
  return (
    <div>
      <div className="headingandtimecontaienr">
        <h1 className="heading-title">{courseTitle}</h1>
        <div className="clockcontainer">
          <AiFillClockCircle className="clockcircle" />
          <p className="spanduration">{duration}</p>
        </div>
      </div>
      <p className="description-para">{description}</p>
      <div className="unordered-container">
        {tagsList.map(eachName => (
          <p className="unordered-list-item">{eachName.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimeLineCard
