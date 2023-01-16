import React from 'react'
import Cascader from './Cascader/Cascader'
import classes from './Header.module.css'
import Location from './Location/Location'
import Tabs from './Tabs/Tabs'
import Theme from './Theme/Theme'
const Header = () => {
  return (
    <div className={classes.Header}>
      <Cascader />
      <Tabs />
      <Location />
      <Theme />
    </div>
  )
}

export default Header