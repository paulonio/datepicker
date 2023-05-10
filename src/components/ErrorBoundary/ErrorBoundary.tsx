import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  isError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children, fallback } = this.props;
    if (isError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
