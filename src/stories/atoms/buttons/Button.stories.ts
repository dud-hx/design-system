import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const Contained: Story = {
  args: {
    variant: 'contained',
    size: "sm",
    mode: 'primary',
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: 'outlined'
  },
};

export const Text: Story = {
  args: {
    ...Contained.args,
    variant: 'text',

  },
};

export const Link: Story = {
  args: {
    ...Contained.args,
    variant: 'link',

  },
};