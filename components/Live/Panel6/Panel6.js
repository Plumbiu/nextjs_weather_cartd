import React from 'react'
import TagValue from './TagValue'
import classes from './Panel6.module.css'

const Panel6 = (props) => {
  return (
    <div className={classes.Container}>
      {props.otherData.map(item => {
        return <TagValue key={item.label} label={item.label} value={item.value} />
      })}
    </div>
  )
}

export default Panel6
