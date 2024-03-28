import { cn } from '@/lib';
import { ButtonHTMLAttributes, FC } from 'react';
import { Spinner } from '.';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'default',
  isLoading,
  children,
  className,
  isDisabled,
  ...props
}) => {
  const variants = {
    default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    destructive:
      'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
    outline:
      'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
    secondary:
      'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const commonClasses =
    'inline-flex disabled:opacity-75 items-center justify-center rounded-3xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
  const classes = cn(commonClasses, variants[variant], className);

  return (
    <button disabled={isDisabled} className={classes} {...props}>
      {isLoading ? <Spinner customClass='w-5 h-5' /> : children}
    </button>
  );
};

export default Button;
