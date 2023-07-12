import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';
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
export const SmallInitialAvatar: Story = {
  args: {
    content: 'AI',
    type: 'initial',
    size: 'sm',
    mode: 'round',
  }
}

export const MediumInitialAvatar: Story = {
  args: {
    content: 'AI',
    type: 'initial',
    size: 'md',
    mode: 'round',
  }
}

export const LargeInitialAvatar: Story = {
  args: {
    content: 'AI',
    type: 'initial',
    size: 'lg',
    mode: 'round',
  }
}

export const SmallImageAvatar: Story = {
  args: {
    content: avatar_svg,
    type: 'image',
    size: 'sm',
    mode: 'round',
  }
}

export const MediumImageAvatar: Story = {
  args: {
    content: avatar_svg,
    type: 'image',
    size: 'md',
    mode: 'round',
  }
}

export const LargeImageAvatar: Story = {
  args: {
    content: avatar_svg,
    type: 'image',
    size: 'lg',
    mode: 'round',
  }
}

