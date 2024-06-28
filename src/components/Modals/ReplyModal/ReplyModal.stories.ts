import type { Meta, StoryObj } from '@storybook/react';
import { ReplyModal as ReplyModalComponent } from '@/components/Modals';

const meta = {
  title: 'Components/ReplyModal',
  component: ReplyModalComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReplyModalComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ReplyModal: Story = {};
