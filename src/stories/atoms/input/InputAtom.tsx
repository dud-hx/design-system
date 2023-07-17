import React from "react";
import { SizeType } from "../../../types/types";

interface InputAtomProps {
  size?: string;
  /**
   *what type the input should be?
   */
  value?: any;
  /**
   *what type the input should be?
   */
  type?:
    | "button"
    | "checkbox"
    | "file"
    | "date"
    | "email"
    | "image"
    | "number"
    | "password"
    | "month"
    | "radio"
    | "reset"
    | "search"
    | "text"
    | "time"
    | "week";
  /**
   * Optional onchange handler
   */
  onChange?: () => void;
  [x: string]: any; // This allows any additional property
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputAtom = ({
  type = "text",
  value,
  onChange,
  size,
  className,
  ...props
}: InputAtomProps) => {
  return (
    <input
      value={value}
      type={type}
      className={`bg-white border-stone-300  ${className} border cursor-pointer
       rounded-md  focus:outline-indigo-700 ${size}`}
      onChange={onChange}
      {...props}
    />
  );
};
