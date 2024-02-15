import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => (
    <input
      ref={ref}
      className='rounded-xl border border-border p-3 text-sm placeholder:text-muted-foreground/50'
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
