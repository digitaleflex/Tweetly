import React from 'react';
import { Tweet } from './Tweet';

export function TweetList({ tweets, onDelete, onLike }) {
  if (!tweets || tweets.length === 0) {
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
}
