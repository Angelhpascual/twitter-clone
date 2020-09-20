import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../Firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>

        {/* TweetBox */}
        <TweetBox />

        {/* Post */}
        {posts.map((post) => (
          <Post
            displayName={posts.displayName}
            username={posts.username}
            verified={posts.verified}
            text={posts.text}
            image={posts.image}
            avatar={posts.avatar}
          />
        ))}

        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
      </div>
      {/* Header */}
    </div>
  );
}

export default Feed;
