import type { Meta, StoryObj } from "@storybook/react";
import { ArcadeButton } from "./ArcadeButton";
import { AppWrapper } from "../../AppWrapper";

const steps = {
  Minus2: '.6rem',
  Minus1: '.8rem',
  Zero: '1rem',
  One: '1.2rem',
  Two: '1.4rem',
  Three: '1.6rem',
  Four: '1.8rem',
  Five: '2rem'
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "./ArcadeButton",
  component: ArcadeButton,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <AppWrapper steps={steps}>
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
