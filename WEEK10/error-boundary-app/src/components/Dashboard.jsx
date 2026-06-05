import { useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import WeatherWidget from './WeatherWidget'

function Dashboard() {
  const [shouldCrash, setShouldCrash] = useState(false)

  return (
    <div className="dashboard">
      <h1>Social Media Dashboard</h1>

      <div className="widgets">
        {/* Normal widgets */}
        <div className="widget">
          <h3>📰 News Feed</h3>
          <p>Latest updates from your network.</p>
        </div>

        <div className="widget">
          <h3>👥 Friends Online</h3>
          <p>12 friends are currently online.</p>
        </div>

        {/* Weather widget wrapped in Error Boundary */}
        <ErrorBoundary key={shouldCrash ? 'crashed' : 'normal'}>
          <WeatherWidget shouldCrash={shouldCrash} />
        </ErrorBoundary>

        <div className="widget">
          <h3>📊 Your Stats</h3>
          <p>Profile views: 142 this week.</p>
        </div>
      </div>

      <button className="crash-btn" onClick={() => setShouldCrash(true)}>
        Simulate Server Crash
      </button>
      <button className="reset-btn" onClick={() => setShouldCrash(false)}>
        Reset
      </button>
    </div>
  )
}

export default Dashboard