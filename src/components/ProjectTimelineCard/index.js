import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, duration, tagsList, imageUrl} = eachItem
  console.log(duration)
  return (
    <div>
      <div>
        <img src={imageUrl} alt={courseTitle} />
        <h1>{courseTitle}</h1>
        <div>
          <AiFillCalendar />
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
export default ProjectTimelineCard
