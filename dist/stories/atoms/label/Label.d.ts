interface LabelProps {
    /**
     * How large should the label be?
     */
    size?: "sm" | "base" | "lg" | "xl" | "2xl";
    /**
     * Label content.
     */
    text?: string;
    /**
     * To add style
     */
    className?: string;
    [x: string]: any;
}
/**
 * Primary UI component for user interaction.
 */
declare const Label: ({ size, text, className, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
/**
 * Primary UI component for user interaction. Here is a list with the variants supported
 */
export declare const LabelTemplate: any;
