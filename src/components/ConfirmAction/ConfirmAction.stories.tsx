import { Meta, StoryObj } from '@storybook/react';
import ConfirmAction from '.';

export default {
  title: 'ConfirmAction',
  tags: ['autodocs'],
  component: ConfirmAction,
  args: {
    confirmDispach: () => {},
    denyDispach: () => {},
    open: false,
  },
} as Meta<typeof ConfirmAction>;

export const Default: StoryObj<typeof ConfirmAction> = {};
