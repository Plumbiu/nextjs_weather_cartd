import formatDate from '../utils/formatDate'
import { judgeCloud, judgeRain, judgeWind } from '../utils/phenomenon'
export const useFetchpanel1Data = result => {
  // 实时数据
  const { realtime } = result
  // live 面板1 左边数据
  const { leftTag, leftText } = formatDate()
  // live 面板1 中间的数据
  const { description: hourlyDesc } = result.hourly
  const { forecast_keypoint } = result
  const midText = [forecast_keypoint, hourlyDesc]
  // live 面板1 右边的数据
  const rightText = (realtime.humidity * 100).toFixed(0) + '%'
  const rightTag = '湿度'
  const midTag = ['建议', '变化']
  return {
    midText,
    leftTag,
    leftText,
    rightText,
    rightTag,
    midTag,
    result
  }
}
export const useFetchpanel2Data = result => {
  const { realtime } = result
  const { life_index } = realtime
  const leftText = realtime.temperature.toFixed(1) + '°C'
  const leftTag = '温度'
  const midText1 = judgeCloud(realtime.cloudrate)
  const midText2 = `${judgeRain(realtime.skycon)} ${judgeWind(realtime.wind.speed, realtime.wind.direction)} 可见度${realtime.visibility}米`
  const midText = [midText1, midText2]
  const midTag = [life_index.comfort.desc, null]
  const rightText = realtime.apparent_temperature + '°C'
  const rightTag = '体感'
  return {
    leftText,
    leftTag,
    midText,
    rightText,
    rightTag,
    midTag
  }
}
export const useFetchpanel3Data = air => {
  const { co, no2, o3, pm10, pm25, so2, aqi: { chn, usa } } = air
  const panel3Data = [[usa, chn], ['usa', 'chn']]
  return {
    panel3Data,
    airData: [{
      label: 'CO',
      value: co
    }, {
      label: 'NO2',
      value: no2
    }, {
      label: 'O3',
      value: o3
    }, {
      label: 'PM10',
      value: pm10
    }, {
      label: 'PM2.5',
      value: pm25
    }, {
      label: 'SO2',
      value: so2
    },]
  }
}
export const useFetchpanel4Data = result => {
  const { temperature, humidity } = result
  let hourData = []
  let temData = []
  let humData = []
  humidity.forEach(item => {
    humData.push(item.value)
  })
  temperature.forEach(item => {
    let date = new Date(item.datetime)
    let h = date.getHours()
    hourData.push(h + ':00')
    temData.push(item.value)
  })
  return {
    hourData,
    temData,
    humData
  }
}
export const useFetchpanel5Data = precipitation => {
  const columnSource = [
    { title: '时间', dataIndex: 'hour', key: 'hour' },
    { title: '降水量', dataIndex: 'value', key: 'value' },
    { title: '降雨概率', dataIndex: 'probability', key: 'probability' },
  ]
  const dataSource = precipitation.map((item, index) => {
    let date = new Date(item.datetime)
    const h = (date.getHours() + '').padStart(2, 0)
    return {
      key: index,
      hour: h + ':00',
      value: item.value + 'ml',
      probability: item.probability + '%'
    }
  })
  const filteredSource = dataSource.filter(item => item.probability !== '0%')
  return {
    filteredSource,
    columnSource
  }
}
export const useFetchpanel6Data = realtime => {
  const { cloudrate, life_index, precipitation, pressure  } = realtime
  const ultraviolet = life_index.ultraviolet.desc
  const nearest = (precipitation.nearest.distance / 1000).toFixed(3) + 'km'
  let otherData = [
    { label: '云量', value: (cloudrate * 100).toFixed(1) + '%'},
    { label: '紫外线强度', value: ultraviolet},
    { label: '气压', value: (pressure / 1000).toFixed(3) + 'kpa'},
    { label: '最近降水带距离', value: nearest},

  ]
  
  return {
    otherData
  }
}