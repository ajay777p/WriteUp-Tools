import React from "react";

const Textarea = () => {
  return (
    <div className="textarea_container">
      <textarea id="story" name="story">
        It was a dark and stormy night...
      </textarea>
      <div>
        <button className="textarea_btn">Submit</button>
      </div>
    </div>
  );
};

export default Textarea;
