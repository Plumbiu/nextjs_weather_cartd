import React from 'react'
import Header from '../Header/Header'

const Layout = (props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default Layout
