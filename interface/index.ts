// interface/index.ts

import { ReactNode } from "react";

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green' | 'purple' | 'slate';
  action?: () => void;
  fullWidth?: boolean;
  className?: string;
  icon?: ReactNode;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}
