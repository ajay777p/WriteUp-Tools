import React from "react";
import { Link } from "react-router-dom";


const Create = () => {
  return (
    <div className=" p-1 border border-gray-300 m-1 rounded-3xl">
      {/* Navbar */}
      <nav className=" p-2 lg:p-5 flex  justify-between">
        <img src="/Assets/meru123.webp" alt="" width={80} className=" w-[120px]" />
        <h2 className=" hidden lg:block font-medium text-xl">WordsUp Tool</h2>
        <Link to="/"><button className=" bg-btn-primary hover:bg-green-700 px-4 h-8 text-white font-medium rounded-md">Home</button></Link>
      </nav>
      {/* Category selection */}
      <div className=" p-3 lg:flex  gap-[300px] py-10 text-xl ">
        <div className=" flex flex-col gap-4 p-2  py-14 font-medium">
          <div><label htmlFor="" className=" text-gray-600 font-medium">Select tag: </label>
          <input type="text" className="  bg-gray-200 border border-gray-300 rounded-md px-1" /></div>
          <div><label htmlFor="" className="text-gray-600 font-medium" >Tag Name: </label>
          <input type="text" className=" bg-gray-200 border border-gray-300 rounded-md px-1" /></div>
        </div>
        <div className=" flex flex-col gap-3">
          <h2 className=" font-normal text-2xl text-gray-700">Tag description</h2>
          <textarea name="" className="lg:w-[400px] h-[300px] p-2 bg-zinc-200 border border-gray-200 rounded-md"></textarea>
          <button className=" bg-btn-primary hover:bg-green-700 w-24 rounded-md p-1 text-white font-medium">Submit</button>
        </div>
        
      </div>
    {/* Table  */}
    <div className="overflow-x-auto">
  <table className="w-full">
    <thead className="bg-gray-200 text-sm">
      <tr>
        <th scope="col">Section</th>
        <th scope="col">Tag Name</th>
        <th scope="col">Tag Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Intro</th>
        <td scope="row">Gourav</td>
        <td scope=" row">Lorem ipsum</td>
        <td scope="" className="flex gap-1">
          <button className="bg-blue-500 rounded-md text-white font-medium px-1 lg:px-3">Edit</button>
          <button className="bg-red-500 px-3 rounded-md text-white font-medium">Delete</button>
        </td>
      </tr>
      {/* Add more rows here if needed */}
    </tbody>
  </table>
</div>


    </div>
  );
};

export default Create;
