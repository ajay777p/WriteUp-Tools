import React from "react";

const DropDowns = () => {
  return (
    <div className="main_dropdown">
      <div className="secs_conatainer">
        <div className="into_container">
          <select name="" id="">
            <option value="">Introduction</option>
            <option value="">Ramesh</option>
            <option value="">Nitesh</option>
            <option value="">avinash</option>
          </select>
        </div>
        <div className="Country_container">
          <select name="" id="">
            <option value="">Country</option>
            <option value="">USA</option>
            <option value="">Canada</option>
            <option value="">Uk</option>
          </select>
        </div>
        <div className="Tools_container">
          <select name="" id="">
            <option value="">Tools</option>
            <option value="">tol1</option>
            <option value="">tol2</option>
            <option value="">tol3</option>
          </select>
        </div>
        <div className="Addon_container">
          <select name="" id="">
            <option value="">Addon</option>
            <option value="">A1</option>
            <option value="">A2</option>
            <option value="">A3</option>
          </select>
        </div>
      </div>

      <div>
        <button className="textarea_btn">Submit</button>
      </div>
    </div>
  );
};

export default DropDowns;
