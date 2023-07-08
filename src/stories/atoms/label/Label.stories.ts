import type { Meta, StoryObj } from '@storybook/react';

import { LabelTemplate } from './Label';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/Label',
  component: LabelTemplate,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof LabelTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FontBase: Story = {
  args: {
    items: ['sm', 'base', 'lg' , 'xl', '2xl'],
  },
};
;
