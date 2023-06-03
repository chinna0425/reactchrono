import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {
    categoryId,
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = eachItem

  return (
    <div>
      <div>
        <img src={imageUrl} alt={categoryId} className="projectImage" />
      </div>
      <div className="project-contianer">
        <h1 className="heading-title">{projectTitle}</h1>
        <div className="calendercontainer">
          <AiFillCalendar className="calendersquare" />
          <p className="spanduration">{duration}</p>
        </div>
      </div>
      <p className="description-para">{description}</p>
      <a href={projectUrl} className="anchorelement">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
