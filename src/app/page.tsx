import { Tweet } from '@/components/Tweet';

export default function Home() {
  return (
    <Tweet
      img_slug="icons/user.jpg"
      name="LucyQ"
      username="Lucyqbcn"
      created="10h"
      text="For people that code 10+ hours daily, what’s your secret? Genuinely asking, as I wish to get to that level as well."
      replies={2}
      retweets={20}
      likes={4}
      views={54}
    />
  );
}
