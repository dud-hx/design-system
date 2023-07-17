interface InputAtomProps {
    size?: string;
    /**
     *what type the input should be?
     */
    value?: any;
    /**
     *what type the input should be?
     */
    type?: "button" | "checkbox" | "file" | "date" | "email" | "image" | "number" | "password" | "month" | "radio" | "reset" | "search" | "text" | "time" | "week";
    /**
     * Optional onchange handler
     */
    onChange?: () => void;
    [x: string]: any;
    className?: string;
}
/**
 * Primary UI component for user interaction
 */
export declare const InputAtom: ({ type, value, onChange, size, className, ...props }: InputAtomProps) => import("react/jsx-runtime").JSX.Element;
export {};
