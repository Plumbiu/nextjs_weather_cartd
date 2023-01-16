const formatDate = () => {
  const ds = [
    '周天', '周一', '周二', '周三',
    '周四', '周五', '周六'
  ]
  const date = new Date()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const mm = ('' + date.getMinutes()).padStart(2, 0)
  const ss = ('' + date.getSeconds()).padStart(2, 0)
  return {
    leftTag: `${m}月${d}日 ${mm}:${ss}`,
    leftText: ds[date.getDay()] 
  }
}
export default formatDate