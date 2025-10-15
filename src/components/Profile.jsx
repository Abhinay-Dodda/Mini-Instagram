// src/components/Profile.jsx (Corrected)
import { useParams, Link } from "react-router-dom";
import Feed from "./Feed";

export default function Profile({ posts, setPosts }) {
  const { handle } = useParams(); // Reads the ':handle' from the URL (e.g., "alice")
  
  // Filter the full list of posts to get only those by the current author
  const filteredPosts = posts.filter(
    p => p.author.toLowerCase() === String(handle).toLowerCase()
  );

  return (
    <section aria-label="profile feed">
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "8px 0" }}>
        <h2>@{handle}</h2>
        <Link to="/" aria-label="Back to home">← Back to Home</Link>
      </header>
      {filteredPosts.length > 0 ? (
        <Feed posts={filteredPosts} setPosts={setPosts} />
      ) : (
        <p style={{ opacity: 0.7 }}>No posts yet for @{handle}.</p>
      )}
    </section>
  );
}