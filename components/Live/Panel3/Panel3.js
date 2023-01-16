import React, { useEffect, useRef } from 'react'
import { initLiveAirChartChart } from '../../../plugins/Charts'
import classes from './Panel3.module.css'
import PartPanel3 from './PartPanel3'
const Panel3 = (props) => {
  const chartRef = useRef()
  useEffect(() => {
    const chart = initLiveAirChartChart(document.getElementById('liveChart'), props.panel3Data)
    return () => {
      chart.destroy()
    }
  }, [])
  return (
    <div className={classes.Continaer}>
      <div className={classes.LiveChartContainer}>
        <canvas id="liveChart" ref={chartRef}></canvas>
      </div>
      <div className={classes.Content}>
        {props.airData.map(item => {
          return <PartPanel3 key={item.label} {...item} />
        })}
      </div>
    </div>
  )
}

export default Panel3
