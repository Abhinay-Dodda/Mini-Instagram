// src/components/Composer.jsx
import { useState } from 'react';

export default function Composer({ setPosts }) {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the browser from refreshing the page
    const url = imageUrl.trim();
    if (!url) { // Basic validation to ensure URL is not empty
      alert("Please provide an image URL.");
      return;
    }

    // Construct a new post object with a unique ID
    const newPost = {
      id: crypto.randomUUID(),
      author: 'you', // As per the lab guide
      avatar: 'https://i.pravatar.cc/100?u=you',
      imageUrl: url,
      caption: caption.trim(),
      likedByMe: false,
      likeCount: 0,
      comments: []
    };

    // Update the state by prepending the new post to the existing array
    setPosts(prevPosts => [newPost, ...prevPosts]);

    // Reset the form fields for the next post
    setImageUrl('');
    setCaption('');
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: 8, 
        padding: 16, 
        margin: '12px 0', 
        background: 'white' 
      }}
    >
      <h3 style={{ marginTop: 0 }}>Create Post</h3>
      <input
        aria-label="Image URL"
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        style={{ width: '100%', marginBottom: 8, padding: 8, boxSizing: 'border-box' }}
        required
      />
      <input
        aria-label="Caption"
        placeholder="Caption (optional)"
        value={caption}
        onChange={e => setCaption(e.target.value)}
        style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
      />
      <div style={{ marginTop: 12, textAlign: 'right' }}>
        <button type="submit">Share</button>
      </div>
    </form>
  );
}