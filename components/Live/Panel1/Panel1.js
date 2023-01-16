import React from 'react'
import Card from '../../UI/Card'
const liveData = {
  leftText: '周天',
  leftTag: '1月15日 18:20',
  rightText: 'right',
  rightTag: 'right',
  midTag: ['建议', '变化']
}
const Panel1 = (props) => {
  return (
    <>
      <Card {...props} />
    </>
  )
}



export default Panel1
