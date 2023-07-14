/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ReactNode } from "react";
import { ModeType, SizeType, VariantType } from "../../../types/types";
import { getBtnStyle, getIconSize, getSize } from "../../utils/buttonUtil";
import { HomeIcon } from "@heroicons/react/24/solid";

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
  label?: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * To use the button as an icon button set this to true
   */
  isIcon?: boolean;
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
  isIcon = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`btn ${
        isIcon ? getIconSize[size] : getSize[size]
      } ${getBtnStyle(variant, mode)}`}
      onClick={onClick}
      {...props}
    >
      {isIcon && !label ? <HomeIcon className="w-4 h-4" /> : label}
    </button>
  );
};

export default Button;
