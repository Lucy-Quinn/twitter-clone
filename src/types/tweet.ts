export type TweetData = {
  id?: number;
  profile_image_slug: string;
  name: string;
  username: string;
  created: string;
  content: string;
  views?: number;
};

export type UnsentPostData = {
  unsentPostId?: number;
  authorId?: number;
  content: string;
  originalTweetName: string;
  originalTweetUsername: string;
  originalTweetId: string;
};

export type ScheduledPostData = {
  scheduledPostId?: number;
  authorId?: number;
  scheduledDate?: string;
  content: string;
  originalTweetUsername: string;
  originalTweetId: string;
};

export enum DraftType {
  UNSENT = 'UNSENT',
  SCHEDULED = 'SCHEDULED',
}
