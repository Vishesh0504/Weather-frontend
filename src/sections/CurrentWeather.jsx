/* eslint-disable react/prop-types */
import Card from "../components/Card"
import {temp,dew,humidity,pressure,altitude} from "../Assets"
import { useEffect,useState } from 'react';
const CurrentWeather = ({mostRecentData,input,search}) => {

    const [content, setContent] = useState(`${!search ? "Current Weather in Chennai, Tamil Nadu" : "Weather on " + input}`);

  useEffect(() => {
    setContent(`${!search ? "Current Weather in Chennai, Tamil Nadu" : "Weather on " + input}`);
  }, [search, input]);

    return (
        <div className="flex flex-col items-center  bg-bgCard p-6 m-4 mb-0 rounded-xl gap-5">
            <div className="text-xl font-bold ">
                <p className="text-white font-poppins text-2xl text-center">{content}</p>
            </div>

            <div className="grid grid-rows-3 grid-cols-2 gap-5">
                <Card title={"Temperature"} data={mostRecentData.temp +"°C"} src={temp}/>
                <Card title={"Feels Like"} data={mostRecentData.fl +"°C"} src={temp}/>
                <Card title={"Humidity"} data={mostRecentData.humidity +"%"} src={humidity}/>
                <Card title={"Altitude"} data={mostRecentData.altitude +"m"} src={altitude}/>
                <Card title={"Dew Point"} data={mostRecentData.dp+"°C" } src={dew}/>
                <Card title={"Pressure"} data={mostRecentData.pressure +"hPa"} src={pressure}/>
             </div>
        </div>
  )
}

export default CurrentWeather