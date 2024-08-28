import React, { useState } from 'react';

export function TweetForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !content) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
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
}
