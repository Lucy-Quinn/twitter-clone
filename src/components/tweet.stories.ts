import type { Meta, StoryObj } from '@storybook/react';
import { Tweet } from './tweet';

const meta = {
  title: 'Components/Tweet',
  component: Tweet,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Tweet>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    img_slug: 'assets/twitter-verified-badge.svg',
    name: 'LucyQ',
    username: 'Lucyqbcn',
    created: '10h',
    text: 'For people that code 10+ hours daily, what’s your secret? Genuinely asking, as I wish to get to that level as well.',
    replies: 2,
    retweets: 20,
    likes: 4,
    views: 54,
  },
};
