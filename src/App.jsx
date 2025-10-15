// src/App.jsx (Final Version for Graduates)
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { seedPosts } from './data/posts';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Composer from './components/Composer';
import Profile from "./components/Profile";

const LOCAL_STORAGE_KEY = 'mini-insta-posts';

export default function App() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedPosts) {
      return JSON.parse(savedPosts);
    } else {
      return seedPosts;
    }
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <>
      <Navbar />
      <main className="container" style={{ maxWidth: 680, margin: "0 auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Composer setPosts={setPosts} />
                <Feed posts={posts} setPosts={setPosts} />
              </>
            }
          />
          <Route
            path="/u/:handle"
            element={<Profile posts={posts} setPosts={setPosts} />}
          />
          <Route path="*" element={<p>404: Page Not Found</p>} />
        </Routes>
      </main>
    </>
  );
}