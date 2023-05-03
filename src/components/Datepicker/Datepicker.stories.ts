import type { Meta, StoryObj } from '@storybook/react';
import Datepicker from './Datepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Datepicker',
  component: Datepicker,
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const Primary: Story = {
  args: {
    from: new Date(2022, 5, 12),
    to: new Date(2023, 7, 14),
    start: 'su',
    view: 'monthly',
  },
};
