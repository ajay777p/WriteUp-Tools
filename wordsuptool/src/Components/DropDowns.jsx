import React, { useEffect, useState } from "react";


const DropDowns = () => {
  const [intro, setIntro] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.0.131:8005/intro");
        
        const data = await response.json();
        setIntro(data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(intro);
  }, [intro]);

  return (
    <div className="main_dropdown">
      <div className="secs_conatainer">
        <div className="into_container">
          <select name="intro" id="introSelect" >
            <option value="">Introduction</option>
            {intro.map((item) => (
              <option key={item.id} value={item.tag}>
                {item.tag}
              </option>
            ))}
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
