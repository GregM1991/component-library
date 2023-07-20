import type { Meta, StoryObj } from "@storybook/react";
import { ArcadeButton } from "./ArcadeButton";
import { AppWrapper } from "../../AppWrapper";

const steps = {
  minus2: '.6rem',
  minus1: '.8rem',
  zero: '1rem',
  one: '1.2rem',
  two: '1.4rem',
  three: '1.6rem',
  four: '1.8rem',
  five: '2rem'
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "./ArcadeButton",
  component: ArcadeButton,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppWrapper>
        <Story />
      </AppWrapper>
    ),
  ],
} satisfies Meta<typeof ArcadeButton>;

export default meta;
type Story = StoryObj<typeof ArcadeButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <ArcadeButton
      label="Hello"
      color={{ background: "#fcba03", text: "#2a2a2a" }}
      onClick={() => console.log('button clicked')}
    />
  ),
};

export const WithProp: Story = {
  render: () => (
    <ArcadeButton
      label="hello darkness my old friend"
      color={{ background: "hsl(345deg 100% 47%)", text: "#fff" }}
      onClick={() => console.log('button clicked')}
    />
  ),
};
