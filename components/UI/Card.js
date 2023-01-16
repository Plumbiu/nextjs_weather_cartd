import React from 'react'
import { Tag } from 'antd'
import classes from './Card.module.css'
const Card = props => {
  return (
    <div className={classes.Container}>
      <div className={classes.ContentContainer}>
        <div className={classes.Text}>{props.leftText}</div>
        <Tag color="blue">{props.leftTag}</Tag>
      </div>
      <div
        className={`${classes.ContentContainer} ${classes.MidContentContainer}`}
        style={props.center ? { alignItems: 'center', maxWidth: '450rem' } : null}
      >
        <div className={classes.midContent}>
          {props.midTag && props.midTag[0] ? <Tag color="red">{props.midTag ? props.midTag[0] : 'none'}</Tag> : null}
          {(props.center) ? null : <span className={classes.MidText}>{props.midText ? props.midText[0] : 'none'}</span>}
          
        </div>
        <div className={classes.midContent}>
          {props.midTag && props.midTag[1] ? <Tag color="red">{props.midTag ? props.midTag[1] : 'none'}</Tag> : null}
          <span className={classes.MidText}>{props.midText[1]}</span>
        </div>
      </div>
      <div className={classes.ContentContainer}>
        {props.center ? <div className={classes.Text}>{props.rightText}</div> : <div className={classes.Text}>{props.rightText}</div>}

        <Tag color="blue">{props.rightTag}</Tag>
      </div>
    </div>
  )
}

export default Card
