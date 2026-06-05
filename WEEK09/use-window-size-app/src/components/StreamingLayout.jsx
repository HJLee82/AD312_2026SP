import useWindowSize from '../hooks/useWindowSize'

function StreamingLayout() {
  const { width, height } = useWindowSize()
  const isMobile = width < 768

  if (isMobile) {
    return (
      <>
        <div className="layout mobile-layout">
          <h2>📱 Mobile Layout</h2>
          <p>Compact view for phone users</p>
          <div className="video-card">🎬 Now Playing</div>
          <div className="description">
            <h3>Black Mirror</h3>
            <p>TV Dramas · 2011 · 7 Seasons · TV-MA</p>
          </div>
        </div>
        <p className="size-info">Window: {width} x {height}px</p>
      </>
    )
  }

  return (
    <>
      <div className="layout desktop-layout">
        <h2>🖥️ Desktop Layout</h2>
        <div className="desktop-grid">
          <div className="main-video">🎬 Now Playing</div>
          <div className="sidebar">
            <div className="recommended">📺 Recommended 1</div>
            <div className="recommended">📺 Recommended 2</div>
          </div>
        </div>
        <div className="description">
          <h3>Black Mirror</h3>
          <p>TV Dramas · 2011 · 7 Seasons · TV-MA</p>
          <p>Twisted tales run wild in this mind-bending anthology series that reveals humanity's worst traits, greatest innovations and more.</p>
        </div>
      </div>
      <p className="size-info">Window: {width} x {height}px</p>
    </>
  )

}

export default StreamingLayout