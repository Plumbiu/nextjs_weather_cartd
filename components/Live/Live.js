import React from 'react'
import Panel1 from './Panel1/Panel1'
import Panel2 from './Panel2/Panel2'
import Panel3 from './Panel3/Panel3'
import Panel4 from './Panel4/Panel4'
import Panel5 from './Panel5/Panel5'
import Panel6 from './Panel6/Panel6'

const Live = (props) => {
  return (
    <>
      <Panel1 {...props.panel1} />
      <Panel2 {...props.panel2} />
      <Panel3 {...props.panel3} />
      <Panel4 {...props.panel4} />
      <Panel5 {...props.panel5} />
      <Panel6 {...props.panel6} />
    </>
  )
}

export default Live
