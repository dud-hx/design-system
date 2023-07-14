import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// Define your stories
export const Primary: Story = {
  args: {
    text: 'Primary Checkbox',
    checked: false,
  }
}

export const Checked: Story = {
  args: {
    text: 'Checked Checkbox',
    checked: true,
  }
}

export const Disabled: Story = {
  args: {
    text: 'Disabled Checkbox',
    checked: false,
  }
}