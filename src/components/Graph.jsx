/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



export default function Graph({sensorData,param}) {
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dataArr = [
  {
   "index":"1",
   "label": 'Temperature(°C)',
   "data":sensorData.map((data) => data.temp).reverse(),
  },
  {
    "index":"2",
    "label": "Humidity(%)",
    "data":sensorData.map((data) => data.humidity).reverse(),
   },
   {
    "index":"3",
    "label": "Pressure(hPa)",
    "data":sensorData.map((data) => data.pressure).reverse(),
   },
   {
    "index":"4",
    "label": "Altitude(m)",
    "data":sensorData.map((data) => data.altitude).reverse(),
   },

]
const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Graphs',
      color: '#fefefe',
      font:{
        size: 30,
      }
    },
    legend: {
      labels: {
          color: '#fefefe',
          font:{
            size: 18,
          },
          boxHeight: 10,
          usePointStyle: true,
          textAlign: 'center',
        }
    },
  },
  scales: {
    x: {
      border:{
        color: '#fefefe',
      },
      grid: {
        color: 'transparent'
      },
      ticks:{
        color: '#eee',
      },
      title:{
        display: true,
        text: 'Time',
        color: '#fefefe',
        align: 'center',
        font:{
          size: 20,
        }
      }
    },
    y: {
      border:{
        color: '#fefefe',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
      ticks:{
        color: '#fefefe',
      },
      title:{
        display: true,
        text: dataArr.filter((data) => data.index === param.toString())[0].label,
        color: '#fefefe',
        align: 'center',
        font:{
          size: 20,
        }
      }
    },
  },
};

const labels = sensorData.map((data) => data.time).reverse();

 const data = {
  labels,
  datasets: [
    {
      label: dataArr.filter((data) => data.index === param.toString())[0].label,
      data: dataArr.filter((data) => data.index === param.toString())[0].data,
      borderColor: '#fefefe',
      pointStyle: 'circle',
      pointBackgroundColor: 'red',

    }
  ],

};
return <Line options={options} data={data} className='bg-navbar rounded-xl w-[60vw] h-[90vh] p-4 '/>;
}
