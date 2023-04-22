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
    from: '2013-01-08',
    to: '2013-01-10',
  },
};
