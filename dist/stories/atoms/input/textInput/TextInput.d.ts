import React from "react";
import { SizeType } from "../../../../types/types";
export interface TextInputProps {
    [x: string]: any;
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
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
