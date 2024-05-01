import React from "react";

const Content = () => {
  return (
    <div className="main_contentBox">
      <div className="contentBox_heading">
        <p>Content</p>
      </div>
      <div className="contentBox_textarea_container">
        <textarea id="story" name="story">
          It was a dark and stormy night...
        </textarea>
      </div>
    </div>
  );
};

export default Content;
