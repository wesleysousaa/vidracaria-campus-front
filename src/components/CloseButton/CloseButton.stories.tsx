import { Meta, StoryObj } from '@storybook/react';
import CloseButton from '.';

export default {
  title: 'CloseButton',
  tags: ['autodocs'],
  component: CloseButton,
  args: {
    onClose: () => {},
  },
} as Meta<typeof CloseButton>;

export const Default: StoryObj<typeof CloseButton> = {};
