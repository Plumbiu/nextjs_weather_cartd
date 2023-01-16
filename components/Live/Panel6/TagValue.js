import React from 'react'
import { Tag } from 'antd'
import classes from './TagValue.module.css'
const TagValue = (props) => {
  return (
    <div className={classes.Container}>
      <Tag color="blue">{props.label}</Tag> 
      <span className={classes.Text}>{props.value}</span>
    </div>
  )
}

export default TagValue