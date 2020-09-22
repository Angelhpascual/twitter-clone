import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>

        {/* TweetBox */}
        <TweetBox />
        <FlipMove>
          {/* Post */}
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
              timestamp={post.timestamp}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Feed;
