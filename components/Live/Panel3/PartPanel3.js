import React from 'react'
import classes from './PartPanel3.module.css'
const PartPanel3 = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Label}>{props.label}</div>
      <div className={classes.Value}>{props.value}</div>
    </div>
  )
}

export default PartPanel3