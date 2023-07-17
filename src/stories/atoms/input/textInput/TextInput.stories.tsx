// TextInput.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TextInput, { TextInputProps } from "./TextInput";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
    id: "smallInput",
    label: "Small Input",
    placeholder: "small input",
    onChange: action("onChange"),
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    id: "mediumInput",
    label: "Medium Input",
    placeholder: "medium input",
    onChange: action("onChange"),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    id: "largeInput",
    label: "Large Input",
    placeholder: "large input",
    onChange: action("onChange"),
  },
};

export const Error: Story = {
  args: {
    id: "error_Input",
    label: "Error Input",
    placeholder: "Error input",
    hasError: true,
    message: "This is an error message",
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled_Input",
    label: "Disabled Input",
    placeholder: "Disabled input",
    isDisabled: true,
  },
};
