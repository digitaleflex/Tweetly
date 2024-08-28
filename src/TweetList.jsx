import React from 'react';
import { Tweet } from './Tweet';

export const TweetList = React.memo(({ tweets, onDelete, onLike }) => {
  if (!tweets.length) {
    return <p>No tweets</p>;
  }

  return (
    <div className="tweet-container">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          id={tweet.id}
          name={tweet.name}
          content={tweet.content}
          like={tweet.like}
          onDelete={() => onDelete(tweet.id)}
          onLike={() => onLike(tweet.id)}
        />
      ))}
    </div>
  );
});
