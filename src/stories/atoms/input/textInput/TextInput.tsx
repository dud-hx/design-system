import React from "react";
import { InputAtom } from "../InputAtom";
import { inputSize } from "../../../utils/inputUtils";
import { SizeType } from "../../../../types/types";
import Label from "../../label/Label";

export interface TextInputProps {
  [x: string]: any; // This allows any additional property

  /**
   * The size of the input.
   * We have three options "sm" | "md" | "lg". The default value is "sm"
   */
  size?: SizeType;
  /**
   * The id for the input
   */
  id: string;
  /**
   * The label for the input field
   */
  label?: string;
  /**
   *what type the input should be?
   */
  value?: any;
  /**
   * Optional onchange handler
   */
  onChange?: () => void;

  /**
   * This variable should be set to true for error style. By default is false
   */
  hasError?: boolean;

  /**
   * This the variable where you can set the error/warning/success message.
   */
  message?: string;

  /**
   * This variable should be set to true to disable the input field. Default is false   */
  isDisabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  size = "sm",
  value,
  onChange = () => {},
  hasError,
  isDisabled = false,
  message,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <InputAtom
        value={value}
        id={id}
        className={`${isDisabled && "bg-neutral-100 text-neutral-400"}  ${
          hasError &&
          "bg-red-50 text-neutral-800 focus:outline-red-600 border-red-600"
        } ${value ? "text-neutral-800" : "text-neutral-400"}`}
        type="text"
        size={inputSize[size]}
        onChange={onChange}
        disabled={isDisabled}
        {...props}
      />

      <Label text={message} className="text-red-600 dark:text-red-500" />
    </div>
  );
};

export default TextInput;
