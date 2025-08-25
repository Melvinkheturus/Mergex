/**
 * Utility functions for safely integrating external components
 * These functions help maintain style isolation when installing UI components via CLI
 */

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Wraps external components with necessary attributes for style isolation
 * @param Component - The external component to wrap
 * @param props - Props to pass to the component
 * @returns The wrapped component with style isolation
 */
export function withStyleIsolation(Component: React.ComponentType<any>, props: any) {
  return (
    <div data-external-component className="external-component-wrapper">
      <Component {...props} />
    </div>
  );
}

/**
 * Applies safe class names that won't conflict with external components
 * @param classNames - Class names to apply
 * @returns Merged class names with proper isolation
 */
export function safeClassNames(...classNames: string[]) {
  return cn('mergex-safe', ...classNames);
}

/**
 * Creates a style-isolated container for external components
 * @param children - The children to render inside the container
 * @param className - Additional class names for the container
 * @returns A div with proper style isolation
 */
export function ExternalComponentContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div 
      data-external-component 
      className={cn('external-component-container', className)}
    >
      {children}
    </div>
  );
}