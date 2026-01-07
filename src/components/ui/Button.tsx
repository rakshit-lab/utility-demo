import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility to merge Tailwind classes safely
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'lg';
}

export const Button = ({
  variant = 'primary',
  size = 'lg',
  className,
  children, 
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-primary',
    variant === 'primary' && 'border-2 border-slate-300 text-slate-700 bg-white hover:border-brand-primary hover:text-brand-primary hover:bg-blue-50/50 transition-all duration-200',
    variant === 'outline' && 'border-2 border-slate-300 text-slate-700 bg-white hover:border-brand-primary hover:text-brand-primary hover:bg-blue-50/50 transition-all duration-200',
        size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-6 py-3 text-base',
        className
      )}
      {...props}
    >
      {children} 
    </button>
  );
};
