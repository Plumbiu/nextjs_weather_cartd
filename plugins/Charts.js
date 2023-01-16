import {
  Chart,
  DoughnutController,
  ArcElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend
} from 'chart.js'
Chart.register(
  Legend,
  Title,
  DoughnutController,
  ArcElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)
import ChartDataLabels from 'chartjs-plugin-datalabels'
// panel3
export const initLiveAirChartChart = (ctx, value) => {
  const data = {
    datasets: [
      {
        data: value[0],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ]
      }
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: value[1]
  }
  const options = {
    barPercentage: 0.3,
    plugins: {
      title: {
        display: true,
        text: '空气污染指标'
      }
    },
    scales: {
      xAxis: {}
    }
  }
  const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options,
    plugins: [ChartDataLabels]
  })
  return myDoughnutChart
}
// paenl4
export const initLiveTHChartChart = (ctx, hour, tem, hum) => {
  const temData = {
    labels: hour,
    datasets: [
      {
        label: '温度',
        data: tem,
        fill: false,
        borderColor: '#ae8845',
        backgroundColor: '#ae8845',
        tension: 0.1
      },
      {
        label: '湿度',
        data: hum,
        fill: false,
        borderColor: '#5454ff',
        backgroundColor: '#5454ff',
        tension: 0.1
      }
    ]
  }
  const stackedLine = new Chart(ctx, {
    type: 'line',
    data: temData,
    plugins: [ChartDataLabels]
  })
  return stackedLine
}
