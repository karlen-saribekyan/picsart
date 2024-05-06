import React from "react";
import { Result } from "antd";

import { IErrorBoundaryProps, IErrorBoundaryState } from "./index.models";

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback ?? (
          <Result
            status="500"
            title="App Error"
            subTitle="Sorry, something went wrong."
          />
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
