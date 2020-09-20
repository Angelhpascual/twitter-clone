import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars3.githubusercontent.com/u/15203307?s=460&u=bded44228f24cdbb112a59bfbadad08e02002c6f&v=4" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter a img URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
