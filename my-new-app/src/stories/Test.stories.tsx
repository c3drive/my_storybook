// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Test } from './Test';

const meta = {
  component: Test,
} satisfies Meta<typeof Test>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Variant1: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 1 },
};

export const Variant2: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 2 },
};

export const Combo: Story = {
  // 👇 This story should not be tested, but will appear in the sidebar and docs page
  tags: ['!test'],
  render: () => (
    <>
      <Test variant={1} />
      <Test variant={2} />
    </>
  ),
};