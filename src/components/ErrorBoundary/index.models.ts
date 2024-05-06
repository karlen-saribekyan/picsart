import { ReactNode } from "react";

export interface IErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}
