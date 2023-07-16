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
    label: "ArcadeButton",
    onClick: () => console.log('Button clicked')
  },
};

