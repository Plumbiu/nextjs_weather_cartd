import React, { useState } from 'react'
import { Table } from 'antd'
import classes from './Panel5.module.css'
const Panel5 = (props) => {
  return (
    <div className={classes.Container}>
      <Table locale={{emptyText: '今天没有降水喔'}} size="small" columns={props.columnSource} dataSource={props.filteredSource} />
    </div>
  )
}

export default Panel5