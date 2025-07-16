import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<object>, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<object>) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: unknown, _info: unknown) {
    // Log error if needed
  }
  render() {
    if (this.state.hasError) {
      return <div className="p-6 text-red-600 bg-red-50 rounded">Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
