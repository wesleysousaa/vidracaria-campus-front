import { Meta, StoryObj } from '@storybook/react';
import AddButton from './';

export default {
  title: 'AddButton',
  component: AddButton,
  tags: ['autodocs'],
  args: {
    link: '/add',
  },
} as Meta<typeof AddButton>;

export const Default: StoryObj<typeof AddButton> = {};
