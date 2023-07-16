import type { Meta, StoryObj } from "@storybook/react";

import { ArcadeButton } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: ArcadeButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ArcadeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "ArcadeButton",
  },
};

export const Secondary: Story = {
  args: {
    label: "ArcadeButton",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "ArcadeButton",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "ArcadeButton",
  },
};
