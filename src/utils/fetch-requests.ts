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
  typeOfButton: string,
  tweetId: string,
  replyMessage: string,
  userId: number,
) => {
  const endpoint =
    typeOfButton === 'reply'
      ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/tweets/${tweetId}/replies`
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/drafts/unsent`;

  const body = JSON.stringify({
    tweetMessage: replyMessage,
    userId,
    ...(typeOfButton === 'drafts' && { tweetId }),
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
      throw new Error(`Failed to submit ${typeOfButton}`);
    }
    return true;
  } catch (error) {
    console.error(`Error submitting ${typeOfButton}:`, error);
    return false;
  }
};
