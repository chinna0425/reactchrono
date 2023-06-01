import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList} = eachItem
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <span>{duration}</span>
        </div>
      </div>
      <p>{description}</p>
      <div>
        {tagsList.map(eachName => (
          <p>{eachName.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimeLineCard
