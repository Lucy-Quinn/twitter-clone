import type { Meta, StoryObj } from '@storybook/react';
import { Tweet as TweetComponent } from '@/components/Tweet';

const meta = {
  title: 'Components/Tweet',
  component: TweetComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TweetComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tweet: Story = {
  args: {
    img_slug: '/icons/user.svg',
    name: 'LucyQ',
    username: 'Lucyqbcn',
    created: 'Jun 8',
    content:
      'For people that code 10+ hours daily, what’s your secret? Genuinely asking, as I wish to get to that level as well.',
    views: 29,
    isReply: false,
  },
};
