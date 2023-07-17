import React from "react";
import Label from "../../label/Label";
import { InputAtom } from "../InputAtom";
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
  [x: string]: any; // This allows any additional property
}

/**
 * Primary UI component for user interaction.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  text,
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <div className="justify-center items-center gap-2 inline-flex">
      <InputAtom
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {text && <Label text={text} />}
    </div>
  );
};

export default Checkbox;
