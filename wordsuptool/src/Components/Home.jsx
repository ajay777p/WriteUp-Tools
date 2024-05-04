import React from "react";
import Textarea from "./Textarea";
import DropDowns from "./DropDowns";
import Intro from "./Sections/Intro";
import Country from "./Sections/Country";
import Addon from "./Sections/Addon";
import Tools from "./Sections/Tools";
import Content from "./Sections/Content";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main_container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
         
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="Assets/meru123.webp" alt="" className="w-20 lg:w-32" />
        </div>
        <p className="main-heading">Write Up Tool</p>
        <div className="createBtn">
          <Link to="/create">Create </Link>
        </div>
      </div>
      <div className="main_boxes " >
        <div className="dropdown_container">
          <Textarea />
        </div>
      </div>
      <div className="main_boxes">
        <div className="dropdown_container">
          <DropDowns />
        </div>
      </div>
      <div className="main_boxes">
        <div className="sections_container">
          <Intro />
          <Country />
          <Tools />
          <Addon />
        </div>
        <div className="createContent_btn">
          <button className="textarea_btn">Create Content</button>
        </div>
      </div>
      <div className="main_boxes">
        <Content />
      </div>
      <div>
        <Link to="/test" className="textarea_btn">Test</Link>
      </div>
    </div>
  );
};

export default Home;
