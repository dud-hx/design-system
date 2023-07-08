import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-cyan-600' : 'bg-orange-600';
  const space = size === "small" ? "px-4 text-sm" :
    size === "medium" ? "px-6" : "px-8"
  return (
    <button
      type="button"
      className={['text-white py-2',
        space, mode].join(' ')}

      {...props}
    >
      {label}
    </button>
  );
};
