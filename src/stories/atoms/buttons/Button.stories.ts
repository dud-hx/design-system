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


export const Default: Story = {
  args: {
    label: "Default Button",
  },
};
export const Contained: Story = {
  args: {
    variant: "contained",
    label: "Contained Button",
  }
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    label: "Outlined Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    label: "Text Button",

  },
};

export const Link: Story = {
  args: {
    variant: "link",
    label: "Link Button",
  },
};

export const SmallSize: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  }
}

export const LargeSize: Story = {
  args: {
    size: "lg",
    label: "Large Button",
  }
}

export const SecondaryMode: Story = {
  args: {
    mode: "secondary",
    label: "Secondary Button",
  }
}

export const NeutralMode: Story = {
  args: {
    mode: "neutral",
    label: "Neutral Button",
  }
}

export const ButtonWithClickHandler: Story = {
  args: {
    label: "Clickable Button",
    onClick: () => console.log("Button clicked"),
  }
}