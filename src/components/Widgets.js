import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1293466046821736448"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="angelhernandev"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://angelhpascual.com"
          options={{
            text: "My portfolio made with React and Gatsby",
            via: "angelhernandev",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
