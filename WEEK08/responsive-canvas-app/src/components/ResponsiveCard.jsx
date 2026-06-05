import { useState, useEffect } from 'react'

function ResponsiveCard() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    // Clean up the event listener when leaving the page
    return () => {
      window.removeEventListener('resize', handleResize)
    }
    // Using [] so this effect only runs once when the component loads.
    // Otherwise the resize listener would keep getting added on every render.
  }, [])

  const isMobile = windowSize.width < 768

  return (
    <div className={`card ${isMobile ? 'mobile' : 'desktop'}`}>
      <h2>{isMobile ? '📱 Mobile View' : '🖥️ Desktop View'}</h2>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
      <p>Breakpoint: {isMobile ? 'Mobile (< 768px)' : 'Desktop (≥ 768px)'}</p>
    </div>
  )
}

export default ResponsiveCard