import React from "react";

const Addon = () => {
  return (
    <div className="main_sec_compo">
      <div className="sec_heading">
        <p>Addon</p>
      </div>

      <div className="sec_textarea_container">
        <textarea id="story" name="story">
          It was a dark and stormy night...
        </textarea>
      </div>

      {/* <div className="sec_btns">
        <button className="textarea_btn">Submit</button>
      </div> */}
    </div>
  );
};

export default Addon;
