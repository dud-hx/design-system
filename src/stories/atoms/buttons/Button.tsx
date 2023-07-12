/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import { ModeType, SizeType, VariantType } from "../../../types/types";
import { getBtnStyle, getSize } from "../../utils/buttonUtil";

export interface ButtonProps {
  /**
   * The variant  of the button.
   * There are 4 variants: 'contained' | 'outlined' | 'text' | 'link'
   */
  variant?: VariantType;
  /**
   * How large should the button be. The available sizes are: 'sm' | 'md' | 'lg';
   */
  size?: SizeType;
  /**
   * The mode of the  button , this affects the bg color of the button.
   * There are 3 options:'primary' | 'secondary' | 'neutral'
   */
  mode?: ModeType;
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
const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  mode = "primary",
  size = "md",
  label,
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn ${getSize[size]} ${getBtnStyle(variant, mode)}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
