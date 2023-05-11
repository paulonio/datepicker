import type { Meta, StoryObj } from '@storybook/react';
import Datepicker from '@components/Datepicker/Datepicker';
import { init } from '@constants/constants';

const meta: Meta<typeof Datepicker> = {
  title: 'Datepicker',
  component: Datepicker,
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const Primary: Story = {
  args: {
    ...init,
  },
};
