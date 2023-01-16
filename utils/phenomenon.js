export const judgeCloud = (rate) => {
  let weatherPh = ''
  if(rate < 0.2) {
    weatherPh = '晴天'
  } else if(rate <= 0.8) {
    weatherPh = '多云'
  } else {
    weatherPh = '阴'
  }
  return weatherPh
}

export const judgeWind = (speed, direction) => {
  let level = ''
  let dire = ''
  let wind = ''
  let desc = ''
  if(direction <= 11.25 || direction >= 348.76) {
    dire = '北'
  } else if(direction >= 11.26 && direction <= 78.75) {
    dire = '东北'
  } else if(direction >= 78.76 && direction <= 101.25) {
    dire = '东'
  } else if(direction >= 101.26 && direction <= 168.75) {
    dire = '东南'
  } else if(direction >= 168.76 && direction <= 191.25) {
    dire = '南'
  } else if(direction >= 191.26 && direction <= 258.75) {
    dire = '西南'
  } else if(direction >= 258.76 && direction <= 281.25) {
    dire = '西'
  } else if(direction >= 281.26 && direction <= 348.75) {
    dire = '西北'
  }
  if(speed <= 1) {
    level = '0级'
    desc = '无风'
  } else if(speed <= 5) {
    level = '1级'
    desc = '微风徐徐'
  } else if(speed <= 11) {
    level = '2级'
    desc = '清风'
  } else if(speed <= 19) {
    level = '3级'
    desc = '树叶摇摆'
  } else if(speed <= 28) {
    level = '树叶摇摆'
    desc = '无风'
  } else if(speed <= 38) {
    level = '5级'
    desc = '风力强劲'
  } else if(speed <= 49) {
    level = '6级'
    desc = '风力强劲'
  } else if(speed <= 61) {
    level = '7级'
    desc = '风力超强'
  } else if(speed <= 74) {
    level = '8级'
    desc = '狂风大作'
  } else if(speed <= 88) {
    level = '9级'
    desc = '狂风呼啸'
  } else if(speed <= 102) {
    level = '10级'
    desc = '狂风毁树'
  } else if(speed <= 117) {
    level = '11级'
    desc = '狂风毁树'
  } else if(speed <= 133) {
    level = '12级'
    desc = '飓风'
  } else if(speed <= 149) {
    level = '13级'
    desc = '台风'
  } else if(speed <= 166) {
    level = '14级'
    desc = '强台风'
  } else if(speed < 183) {
    level = '15级'
    desc = '强台风'
  } else if(speed < 201) {
    level = '16级'
    desc = '超强台风'
  } else if(speed < 220) {
    level = '超强台风'
  }
  wind = dire + level
  return wind
}

export const judgeRain = (t) => {
  let weatherPh = ''
  if(t === 'CLEAR_DAY' || t === 'CLEAR_NIGHT') {
    weatherPh = '晴天'
  } else if(t === 'PARTLY_CLOUDY_DAY' || t === 'PARTLY_CLOUDY_NIGHT') {
    weatherPh = '多云'
  } else if(t === 'CLOUDY') {
    weatherPh = '阴'
  } else if(t === 'LIGHT_HAZE') {
    weatherPh = '轻度雾霾'
  } else if(t === 'MODERATE_HAZE') {
    weatherPh = '中度雾霾'
  } else if(t === 'HEAVY_HAZE') {
    weatherPh = '重度雾霾'
  } else if(t === 'LIGHT_RAIN') {
    weatherPh = '小雨'
  } else if(t === 'MODERATE_RAIN') {
    weatherPh = '中雨'
  } else if(t === 'HEAVY_RAIN	') {
    weatherPh = '大雨'
  } else if(t === 'STORM_RAIN') {
    weatherPh = '暴雨'
  } else if(t === 'FOG') {
    weatherPh = '雾'
  } else if(t === 'LIGHT_SNOW') {
    weatherPh = '小雪'
  } else if(t === 'MODERATE_SNOW') {
    weatherPh = '中雪'
  } else if(t === 'HEAVY_SNOW') {
    weatherPh = '大雪'
  } else if(t === 'STORM_SNOW') {
    weatherPh = '暴雪'
  } else if(t === 'DUST') {
    weatherPh = '浮沉'
  } else if(t === 'SAND') {
    weatherPh = '沙尘'
  } else if(t === 'WIND') {
    weatherPh = '大风'
  }
  return weatherPh
}
