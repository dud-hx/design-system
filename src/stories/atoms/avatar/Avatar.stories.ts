import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import avatar_svg from "../../assets/avatar.jpg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const AvatarSmall: Story = {
  args: {
    content: avatar_svg,
    type: "image",
    size: 'sm',
    mode: 'square'
  },
};


export const AvatarMedium: Story = {
  args: {
    content: "DH",
    type: "initial",
    size: 'md'
  },
};

export const AvatarLarge: Story = {
  args: {
    content: "DH",
    type: "initial",
    size: 'lg'
  },
};
