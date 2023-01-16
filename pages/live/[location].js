import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Live from '../../components/Live/Live'
import { useFetchpanel1Data, useFetchpanel2Data, useFetchpanel3Data, useFetchpanel4Data, useFetchpanel5Data, useFetchpanel6Data } from '../../hooks/useFetchLivePanel'
import { setCity } from '../../store/Slice/citySlice'
const LivePage = props => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCity(props.city))
  }, [props.city])
  return <Live {...props} />
}
export async function getStaticProps(ctx) {
  const response = await fetch(`http://plumbiu.club:8001/${ctx.params.location}`)
  const { result } = await response.json()
  const city = result.alert.adcodes[result.alert.adcodes.length - 1].name
  const panel1 = useFetchpanel1Data(result)
  const panel2 = useFetchpanel2Data(result)
  const panel3 = useFetchpanel3Data(result.realtime.air_quality)
  const panel4 = useFetchpanel4Data(result.hourly)
  const panel5 = useFetchpanel5Data(result.hourly.precipitation)
  const panel6 = useFetchpanel6Data(result.realtime)
  return {
    props: {
      panel1,
      panel2,
      panel3,
      panel4,
      panel6,
      panel5,
      city,
      result
    },
    revalidate: 60 * 1000
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default LivePage
