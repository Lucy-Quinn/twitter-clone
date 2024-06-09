import Image from 'next/image';
type TweetProps = {
  img_slug: string;
  name: string;
  username: string;
  created: string;
  text: string;
  replies: number;
  retweets: number;
  likes: number;
  views: number;
};

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
    <article className="p-4 max-w-[598px]">
      <div className="flex">
        {/* left */}
        <div className="h-auto mr-2">
          <Image
            src={img_slug}
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full w-10 h-10 min-w-10"
          />
          {/* <img src={img_slug} alt="" className="w-10 h-10 rounded-full" /> */}
        </div>
        {/* right */}
        <div>
          {/* top */}
          <div className="flex justify-between">
            <div className="flex gap-2">
              <a href={`https://twitter.com/${username}`}>
                <div className="flex gap-1 items-center">
                  <h3 className="font-bold">{name}</h3>
                  <img src="icons/verified.webp" alt="" className="w-5 h-5" />
                </div>
              </a>
              <div className="flex gap-1 text-secondary">
                <a href={`https://twitter.com/${username}`}>
                  <div className="">{`@${username}`}</div>
                </a>
                <div>.</div>
                <div>{created}</div>
              </div>
            </div>
            <div>
              <Image src="icons/more.svg" alt="More" width={24} height={24} />
            </div>
          </div>
          {/* middle */}
          <div>{text}</div>
          {/* bottom */}
          <div className="flex justify-between text-secondary mt-3 max-w-[600px] text-xs [&>div]:inline-flex [&>div]:gap-1 [&>div]:items-center">
            {/* <div className="flex justify-between [&>div]:inline-flex [&>div]:gap-1 [&>div]:items-center gap-5 grow"> */}
            <div className="grow">
              <Image src="icons/reply.svg" alt="Reply" width={20} height={24} />
              <p>{replies}</p>
            </div>
            <div className="grow">
              <Image
                src="icons/repost.svg"
                alt="Repost"
                width={20}
                height={24}
              />
              <p>{retweets}</p>
            </div>
            <div className="grow">
              <Image src="icons/like.svg" alt="Like" width={20} height={24} />
              <p>{likes}</p>
            </div>
            <div className="grow">
              <Image src="icons/view.svg" alt="View" width={20} height={24} />
              <p>{views}</p>
            </div>
            {/* </div> */}
            {/* <div className="flex gap-3"> */}
            <div className="mr-2">
              <Image
                src="icons/bookmark.svg"
                alt="Bookmark"
                width={20}
                height={24}
              />
            </div>
            <div>
              <Image src="icons/share.svg" alt="Share" width={20} height={24} />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </article>
  );
};
