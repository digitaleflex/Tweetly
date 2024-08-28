import React, { useState, useCallback } from 'react';

import { TweetList } from "./TweetList";
import { TweetForm } from "./TweetForm";

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "Eurin",
    content: "Bonjour tout le monde!",
    like: 1000,
  },
  {
    id: 1,
    name: "Auriole",
    content: "je vais bien!",
    like: 100,
  },
  {
    id: 2,
    name: "Boris",
    content: "vous êtes lààà!",
    like: 50,
  },
  {
    id: 3,
    name: "Justine",
    content: "quelle fraîcheur!",
    like: 0,
  },
];
export function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);

  const handleDelete = useCallback((id) => {
    setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id));
  }, []);

  const handleLike = useCallback((id) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === id ? { ...tweet, like: tweet.like + 1 } : tweet
      )
    );
  }, []);

  const handleSubmit = useCallback((name, content) => {
    setTweets((prevTweets) => [
      ...prevTweets,
      {
        id: prevTweets.length ? prevTweets[prevTweets.length - 1].id + 1 : 0,
        name,
        content,
        like: 0,
      },
    ]);
  }, []);

  return (
    <div>
      <TweetForm onSubmit={handleSubmit} />
      <TweetList tweets={tweets} onDelete={handleDelete} onLike={handleLike} />
    </div>
  );
}

export default App;