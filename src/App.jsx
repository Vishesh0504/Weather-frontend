import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './sections/Navbar.jsx';
import CurrentWeather from './sections/CurrentWeather.jsx';
import GraphArea from './sections/GraphArea.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  const [sensorData, setSensorData] = useState([]);
  const [mostRecentData, setMostRecentData] = useState({});
  const [input, setInput] = useState();
  const [search,setSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sensorResponse = await axios.get('https://weather-backend-olj7.onrender.com/api/get_data');
        const recentDataResponse = await axios.get('https://weather-backend-olj7.onrender.com/api/mostRecentSensorData');
        // console.log(sensorResponse.data);
        // console.log(recentDataResponse.data);
        setSensorData(sensorResponse.data);
        setMostRecentData(recentDataResponse.data[0]);
        if(search){
          const filteredData = await axios.post('https://weather-backend-olj7.onrender.com/getDate',{"date":input});
          console.log(filteredData.data);
          setMostRecentData(filteredData.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data initially

    // Set up intervals for fetching data every minute
    const intervalId = setInterval(fetchData, 60000);

    // Clean up the interval when the component is unmounted

    console.log();
    return () => clearInterval(intervalId);
  }, [search]); // Empty dependency array means this effect runs once on mount

  return (
    <div className='min-h-screen bg-bg font-montserrat flex flex-col justify-center align-middle '>
      <Navbar setInput={setInput} input={input} search={search} setSearch={setSearch}/>
      <div className='flex px-10 max-w-full gap-5 mt-2'>
        <CurrentWeather mostRecentData={mostRecentData} search={search} input={input}/>
        <GraphArea sensorData={sensorData} />
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
