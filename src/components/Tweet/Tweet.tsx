interface TweetProps {
  img_slug: string;
  name: string;
  username: string;
  created: string;
  text: string;
  replies: number;
  retweets: number;
  likes: number;
  views: number;
}

export const Tweet = ({
  img_slug,
  name,
  username,
  created,
  text,
  replies,
  retweets,
  likes,
  views,
}: TweetProps) => {
  return (
    <div className="flex gap-4">
      {/* left */}
      <div>
        <img src={img_slug} alt="" className="w-20 h-20 rounded-full" />
      </div>
      {/* right */}
      <div>
        {/* top */}
        <div className="flex gap-2">
          <div>
            <a href={`https://twitter.com/${username}`}>
              <div className="flex gap-1">
                <h3>{name}</h3>
                <img src="" alt="" className="w-5 h-5" />
              </div>
            </a>
          </div>
          <div className="flex gap-1 text-secondary">
            <a href={`https://twitter.com/${username}`}>
              <div className="">{`@${username}`}</div>
            </a>
            <div>.</div>
            <div>{created}</div>
          </div>
        </div>
        {/* middle */}
        <div>{text}</div>
        {/* bottom */}
        <div className="flex gap-5 text-secondary">
          <div>
            <img src="" alt="" />
            <p>{replies}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>{retweets}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>{likes}</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>{views}</p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
