import type { Meta, StoryObj } from '@storybook/react';

import { InputAtom } from './InputAtom';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/InputAtom',
  component: InputAtom,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof InputAtom>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
     type: 'text',
  },
};

export const Number: Story = {
  args: {
     type: 'number',
  },
};
export const Checkbox: Story = {
  args: {
     type: 'checkbox',
  },
};
export const Search: Story = {
  args: {
     type: 'search',
  },
};
export const Password: Story = {
  args: {
     type: 'password',
  },
};
export const Date: Story = {
  args: {
     type: 'date',
  },
};
export const Time: Story = {
  args: {
     type: 'time',
  },
};

export const Email: Story = {
  args: {
     type: 'email',
  },
};

export const Image: Story = {
  args: {
     type: 'image',
  },
};