import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h3>⚠️ This widget is temporarily out of order.</h3>
          <p>We're working on fixing it. The rest of the app is still functional.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary