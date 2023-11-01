import Graph from '../components/Graph'
import { useState} from 'react';

// eslint-disable-next-line react/prop-types
const GraphArea = ({sensorData}) => {
    let [param,setParam] = useState(1);

    return (
    <div className='bg-bgCard mt-4 p-10 pt-6 rounded-xl flex flex-col gap-4 h-[80vh]'>
      <div className='flex justify-center rounded-xl text-lg'>
          <button
            className='bg-navbar hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-xl'
            onClick={() => setParam(1)}
          >
            Temp
          </button>
          <button
            className='bg-navbar hover:bg-blue-700 text-white font-bold py-2 px-4 border-slate-400 border-x-2'
            onClick={() => setParam(2)}
          >
            Humidity
          </button>
          <button
            className='bg-navbar hover:bg-blue-700 text-white font-bold py-2 px-4 border-slate-400 border-r-2'
            onClick={() => setParam(3)}
          >
            Pressure
          </button>
          <button
            className='bg-navbar hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl'
            onClick={() => setParam(4)}
          >
            Altitude
          </button>
        </div>
        <Graph sensorData={sensorData} param={param} />
    </div>
  )
}

export default GraphArea