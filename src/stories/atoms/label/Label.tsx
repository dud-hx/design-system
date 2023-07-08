interface LabelProps {
  /**
   * How large should the label be?
   */
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  /**
   * Label content. 
   */
  text: string;

}

/**
 * Primary UI component for user interaction.
 */
export const Label = ({
  size = 'sm',
  text,
  ...props
}: LabelProps) => {

  return (
    <p
      className={`text-${size}`}

      {...props}
    >
      {text}
    </p>
  );

};

/**
 * Primary UI component for user interaction. Here is a list with the variants supported
 */

export const LabelTemplate: any = (args: any) => {
  const { items } = args;
  if (!Array.isArray(items)) {
    return null;
  }
  return (
    <div>
      {items.map((item: any) => (
        <Label key={`size-${item}`} size={item} text={`text with size ${item}`} />
      ))}
    </div>
  );
}
