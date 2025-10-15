// src/components/Feed.jsx
import PostCard from './PostCard';

export default function Feed({ posts, setPosts }) { // [cite: 184]
  return (
    <section aria-label="feed"> // [cite: 185]
      {posts.map(p => ( // [cite: 186]
        <PostCard key={p.id} post={p} setPosts={setPosts} /> // [cite: 187]
      ))}
    </section>
  );
}