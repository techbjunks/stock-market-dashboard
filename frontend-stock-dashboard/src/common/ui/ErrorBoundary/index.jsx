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

/**
 *
  As of my knowledge cutoff in September 2021, Vite's built-in development server does not 
  handle error boundaries as expected. This is due to the usage of a development server that 
  doesn't run the same optimizations as the production build, which can affect error boundary 
  behavior.
  
  However, error boundaries should still work as expected in the production build of your 
  Vite application. When you build your Vite app using vite build, the application will be 
  optimized and bundled for production, and error boundaries should function correctly.
 */