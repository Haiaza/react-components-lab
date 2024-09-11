import WeatherIcon from "../WeatherIcon/WeatherIcon"
import WeatherData from "../WeatherData/WeatherData"

const  WeatherForecast = ({ day, img, conditions, time }) => (

<div className="weather">
  <WeatherIcon img={img}/>
  <WeatherData day={day} conditions={conditions} time={time} />
</div> 
)

export default WeatherForecast

