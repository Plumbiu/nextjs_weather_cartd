import React, { useEffect } from 'react'
import { initLiveTHChartChart } from '../../../plugins/Charts'
import classes from './Panel4.module.css'
const Panel4 = (props) => {
  useEffect(() => {
    const chart = initLiveTHChartChart(document.getElementById('TH'), props.hourData, props.temData, props.humData)
    return () => {
      chart.destroy()
    }
  }, [])
  return (
    <div className={classes.Container}>
      <canvas id="TH"></canvas>
    </div>
  )
}

export default Panel4
