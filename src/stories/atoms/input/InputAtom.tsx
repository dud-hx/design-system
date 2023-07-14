import React from "react";

interface InputAtomProps {
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

  /**
   * The mode of the checkbox  'primary' | 'disabled'. By default is primary.
   */

  [x: string]: any; // This allows any additional property
}

/**
 * Primary UI component for user interaction
 */
export const InputAtom = ({
  type = "text",
  value,
  onChange,
  ...props
}: InputAtomProps) => {
  return (
    <input
      value={value}
      type={type}
      className={`border cursor-pointer border-gray-300 px-2 py-1
       rounded-md  focus:outline-indigo-700`}
      onChange={onChange}
      {...props}
    />
  );
};
