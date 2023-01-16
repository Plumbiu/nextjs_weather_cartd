import React from 'react'
import { Cascader as AntdCascader } from 'antd'
import options from '../../../assets/province.json'
import classes from './Cascader.module.css'
import { useRouter } from 'next/router'
const Cascader = () => {
  const router = useRouter()
  const changeHandler = (value, payload) => {
    if(!value || value.length !== 2) {
      return
    }
    const location = `${value[0]},${value[1]}`
    router.replace(`/live/${location}`)
  }
  return (
    <div>
      <AntdCascader
        className={classes.Cascader}
        placeholder=""
        options={options}
        onChange={changeHandler}
      />
    </div>
  )
}

export default Cascader
