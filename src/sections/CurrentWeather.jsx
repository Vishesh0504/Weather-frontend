/* eslint-disable react/prop-types */
import Card from "../components/Card"
import {temp,dew,humidity,pressure,altitude} from "../Assets"

const CurrentWeather = ({mostRecentData,search}) => {
    let Content = `${!search?"Current Weather in Chennai,Tamil Nadu":"Weather on "+search}`
    return (
        <div className="flex flex-col items-center  bg-bgCard p-6 m-4 mb-0 rounded-xl gap-5">
            <div className="text-xl font-bold ">
                <p className="text-white font-poppins text-2xl text-center">{Content}</p>
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