import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://192.168.0.131:8005/intro");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="h-full p-1 border border-gray-300 m-1 rounded-3xl">
      {/* Navbar */}
      <nav className="p-2 lg:p-5 flex justify-between">
        <img
          src="/Assets/meru123.webp"
          alt=""
          width={80}
          className="w-[90px] lg:w-[120px]"
        />
        <h2 className="hidden lg:block font-medium text-xl">WordsUp Tool</h2>
        <Link to="/">
          <button className="bg-btn-primary hover:bg-green-700 px-4 h-8 text-white font-medium rounded-md">
            Home
          </button>
        </Link>
      </nav>
      {/* Category selection */}
      <div className="lg:ml-3 p-2 flex flex-col lg:flex lg:flex-row gap-2 lg:gap-[100px] justify-center py-10 lg:text-[20px]">
        <div className="bg-sky-100 lg:w-[95%] border border-gray-300 rounded-lg flex flex-col justify-center gap-4 p-4 py-14 font-medium">
          <div>
            <label htmlFor="" className="text-gray-600 font-medium">
              Select tag:
            </label>
            <input
              type="text"
              className="bg-white border border-gray-300 rounded-md px-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-gray-600 font-medium">
              Tag Name:
            </label>
            <input
              type="text"
              className="bg-white border border-gray-300 rounded-md px-1"
            />
          </div>
        </div>
        <div className="bg-sky-100 border w-[100%] border-gray-300 rounded-lg p-7 lg:px-14 flex flex-col gap-3 mr-10">
          <h2 className="font-normal text-2xl text-gray-700">Tag description</h2>
          <textarea
            name=""
            className="lg:w-[400px] h-[300px] p-2 bg-white border border-gray-200 rounded-md"
          ></textarea>
          <button className="bg-btn-primary hover:bg-green-700 w-24 rounded-md p-1 text-white font-medium">
            Submit
          </button>
        </div>
      </div>
      {/* Table  */}
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="bg-gray-200">
            <tr className="text-sm lg:text-lg" style={{ fontWeight: "lighter", fontSize: "13px" }}>
              <th scope="col" className="p-2">
                Section
              </th>
              <th scope="col">Tag Name</th>
              <th scope="col">Tag Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm p-1">
            {data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="font-normal">{item.section}</td>
                <td className="font-normal">{item.tag}</td>
                
<td className="font-normal overflow-y-auto p-1 max-w-72 text-[12px]">{item.description}</td>

                <td className="flex flex-wrap p-5 font-normal text-sm justify-center lg:font-medium">
                  <button className="bg-blue-500 rounded-lg text-white py-1 w-14 lg:px-3 m-1">Edit</button>
                  <button className="bg-red-500 rounded-lg text-white w-14 py-1 m-1">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Create;
