import { useState, useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function PollDashboard() {
  const [votes, setVotes] = useState({
    React: 0,
    Vue: 0,
    Angular: 0,
    Svelte: 0
  })

  const canvasRef = useRef(null)
  const chartInstanceRef = useRef(null)

  // Mount only — create chart instance once
  useEffect(() => {
    chartInstanceRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: Object.keys(votes),
        datasets: [{
          label: 'Votes',
          data: Object.values(votes),
          backgroundColor: [
            '#61dafb',
            '#42b883',
            '#dd1b16',
            '#ff3e00'
          ]
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    })

    // Clean up the chart when this component is removed.
    // If we don't destroy it, Chart.js may keep using the same canvas and cause errors.
    return () => {
      chartInstanceRef.current.destroy()
      chartInstanceRef.current = null
    }
  }, [])

  // Sync votes state to chart on every votes change
  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.datasets[0].data = Object.values(votes)
      chartInstanceRef.current.update()
    }
  }, [votes])

  const handleVote = (framework) => {
    setVotes(prev => ({ ...prev, [framework]: prev[framework] + 1 }))
  }

  const handleReset = () => {
    setVotes({ React: 0, Vue: 0, Angular: 0, Svelte: 0 })
  }

  return (
    <div className="poll-container">
      <h1>Favorite JavaScript Framework</h1>
      <div className="btn-group">
        {Object.keys(votes).map(framework => (
          <button key={framework} onClick={() => handleVote(framework)}>
            Vote {framework}
          </button>
        ))}
      </div>
      <canvas ref={canvasRef} />
      <div className="vote-counts">
        {Object.entries(votes).map(([framework, count]) => (
          <p key={framework}><strong>{framework}:</strong> {count} votes</p>
        ))}
      </div>
      <button className="reset-btn" onClick={handleReset}>Reset Votes</button>
    </div>
  )
}

export default PollDashboard