import React from 'react'
import { Switch } from 'antd'
import classes from './Theme.module.css'
const Theme = () => {
  const onChange = checked => {
    console.log(`switch to ${checked}`)
  }
  return (
    <div>
      <Switch className={classes.Switch} defaultChecked onChange={onChange} />
    </div>
  )
}

export default Theme
