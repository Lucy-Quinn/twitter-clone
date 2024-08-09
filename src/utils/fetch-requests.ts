export const fetchTweetById = async (tweetId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${tweetId}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch tweet by id');
    }
    const tweet = await response.json();
    return tweet[0];
  } catch (error) {
    console.error('Error fetching tweet by id:', error);
    return [];
  }
};

export const submitMessage = async (
  buttonType: string,
  tweetId: string,
  replyMessage: string,
  userId: number,
) => {
  const endpoint =
    buttonType === 'reply'
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${tweetId}/replies`
      : buttonType === 'scheduled'
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/scheduled`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/unsent`;

  const body = JSON.stringify({
    tweetMessage: replyMessage,
    userId,
    ...(buttonType === 'unsent' && { tweetId }),
    ...(buttonType === 'scheduled' && { tweetId }),
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`Failed to submit ${buttonType}`);
    }
    return true;
  } catch (error) {
    console.error(`Error submitting ${buttonType}:`, error);
    return false;
  }
};

export const fetchUnsentPosts = async (userId: string) => {
  //TODO will eventually get userID from cookie and put in
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/unsent?userId=${userId}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch unsent posts');
    }
    const unsentPosts = await response.json();
    return unsentPosts;
  } catch (error) {
    console.error('Error fetching all unsent posts:', error);
    return [];
  }
};

export const fetchScheduledPosts = async (userId: string) => {
  //TODO will eventually get userID from cookie and put in
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/scheduled?userId=${userId}`,
    );
    if (!response.ok) {
      throw new Error('Failed to fetch scheduled posts');
    }
    const unsentPosts = await response.json();
    return unsentPosts;
  } catch (error) {
    console.error('Error fetching all scheduled posts:', error);
    return [];
  }
};
