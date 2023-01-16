import React from 'react'
import { useSelector } from 'react-redux'

const Location = () => {
  const city = useSelector(state => state.city.city)
  return (
    <div style={{color: '#888',fontSize: '30rem'}}>{city}</div>
  )
}

export default Location