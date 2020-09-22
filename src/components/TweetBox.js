import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "../Firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar:
        "https://avatars3.githubusercontent.com/u/15203307?s=460&u=bded44228f24cdbb112a59bfbadad08e02002c6f&v=4",
      displayName: "angelpascual",
      image: tweetImage,
      text: tweetMessage,
      username: "angelhernandev",
      verified: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars3.githubusercontent.com/u/15203307?s=460&u=bded44228f24cdbb112a59bfbadad08e02002c6f&v=4" />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Optional: Enter a img URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
