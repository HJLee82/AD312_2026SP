function WeatherWidget({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error('Corrupted weather data received from server!')
  }

  return (
    <div className="widget">
      <h3>🌤️ Weather Widget</h3>
      <p>Today: Sunny, 72°F</p>
    </div>
  )
}

export default WeatherWidget