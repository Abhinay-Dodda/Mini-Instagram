// src/components/CommentForm.jsx
import { useState } from 'react';

export default function CommentForm({ postId, setPosts }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Prevent page refresh on form submission
    const trimmedText = text.trim();
    if (!trimmedText) return; // Don't submit empty comments

    // Create a new comment object
    const newComment = { 
      id: crypto.randomUUID(), // Generate a unique ID
      author: 'you', // Hardcoded as per the lab guide
      text: trimmedText 
    };

    // Update the main posts state
    setPosts(prevPosts => prevPosts.map(p => {
      if (p.id !== postId) return p; // Not the right post, do nothing

      // This is the correct post, return a new object with the new comment added
      return {
        ...p,
        comments: [...p.comments, newComment]
      };
    }));

    setText(''); // Clear the input field after posting
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 6, marginTop: 8 }}>
      <input
        aria-label="Add a comment"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a comment..."
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit">Post</button>
    </form>
  );
}