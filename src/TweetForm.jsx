import React, { forwardRef } from 'react';

export const TweetForm = forwardRef(({ onSubmit }, ref) => {
  const [name, setName] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, content);
    setName('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="tweet-form">
      <h4>New Tweet</h4>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        placeholder="Content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
});
