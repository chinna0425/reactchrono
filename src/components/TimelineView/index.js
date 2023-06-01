import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  constructor(props) {
    super(props)
    const {timelineItemsList} = this.props
    this.state = {items: timelineItemsList}
  }

  eachCardItem = eachEle => {
    if (eachEle.categoryId === 'COURSE') {
      return <CourseTimeLineCard eachItem={eachEle} key={eachEle.id} />
    }
    return <ProjectTimeLineCard eachItem={eachEle} key={eachEle.id} />
  }

  render() {
    const {items} = this.state
    console.log(items)
    return (
      <div className="main-container">
        <div className="main-inner-container">
          <h1>MY JOURNEY OF</h1>
          <h1>CCBP 4.O</h1>
          <div>
            <Chrono items={items} mode="VERTICAL_ALTERNATING">
              {items.map(eachItemData => this.eachCardItem(eachItemData))}
            </Chrono>
          </div>
        </div>
      </div>
    )
  }
}
export default TimelineView
