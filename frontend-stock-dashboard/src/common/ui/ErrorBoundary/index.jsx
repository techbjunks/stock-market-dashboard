import React, { Component } from 'react';
import ErrorContainer from '../ErrorContainer';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error tracking service (e.g., Sentry, Bugsnag, etc.)
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { FallbackComponent, children } = this.props;

    if (hasError) {
      return FallbackComponent ? (
        FallbackComponent
      ) : (
        <ErrorContainer />
      );
    }

    return children;
  }
}

export default ErrorBoundary;