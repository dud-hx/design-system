import React from "react";
interface CheckboxProps {
    /**
     * Label content.
     */
    text?: string;
    /**
     * A boolean variable to show if the checkbox is checked or no
     */
    checked: boolean;
    /**
     * Optional onchange handler
     */
    onChange?: () => void;
    [x: string]: any;
}
/**
 * Primary UI component for user interaction.
 */
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
