const  WeatherForecast = ({ day, img, conditions, time }) => (

<div className="weather">
  <h2>{day}</h2>
  <img src={img} alt="" />
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div> 
)

export default WeatherForecast

