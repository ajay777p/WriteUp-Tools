import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const [data, setData] = useState([]);
  const [isExpanded, setIsExpanded] = useState({});
  const handleExpand = (index) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const [newTag, setNewTag] = useState({
    section: "",
    tag: "",
    description: ""
  });
  const [editTag, setEditTag] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (!newTag.section || !newTag.tag || !newTag.description) {
      
      return;
    }

    try {
      const response = await fetch("http://192.168.0.131:8005/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTag)
      });
      if (response.ok) {
        fetchData();
        setNewTag({ section: "", tag: "", description: "" });
        toast.success('Tag created successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      } else {
        console.error("Error creating tag", response.status);
      }
    } catch (error) {
      console.error("Not able to create ", error);
    }
  };

  const handleInputChange = (e) => {
    setNewTag({ ...newTag, [e.target.name]: e.target.value });
  };

  const handleEdit = (section, tag, description) => {
    setEditTag({ section, tag, description });
    setNewTag({ section, tag, description });
  };
  
  const handleUpdate = async (tag) => {
    console.log("Updated newTag state:", newTag);
    try {
      const updatedTag = { ...newTag };
      console.log("Updated description:", updatedTag.description);
      const response = await fetch(`http://192.168.0.131:8005/update/${tag}`, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ update: updatedTag.description })
      });
  
      if (response.ok) {
        const updatedData = data.map(item => {
          if (item.tag === tag) {
            return {
              ...item,
              ...updatedData,
              description:updatedData.description 
              
            };
          }
          return item;
        });
        
  
        setData(updatedData); 
        console.log("Updated data state:", updatedData);
        setEditTag(null);
        setNewTag({ section: "", tag: "", description: "" });
        toast.success('Tag updated successfully', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce
        });
      } else {
        console.error('Error updating tag:', response.status);
      }
    } catch (error) {
      console.error('Error updating tag:', error);
    }
  };
  const handleCancelEdit = () => {
    setEditTag(null);
    setNewTag({ section: "", tag: "", description: "" });
  };

  const handleDelete = async (tagName) => {
    try {
      const response = await fetch(`http://192.168.0.131:8005/delete?tag=${tagName}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        
        setData(data.filter(item => item.tag !== tagName));
      } else {
        console.error('Error deleting tag:', response.status);
      }
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

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
        <h2 className="hidden lg:block font-medium text-xl">WriteUp Tool</h2>
        <Link to="/">
          <button className="bg-btn-primary hover:bg-green-700 px-4 h-8 text-white font-medium rounded-md">
            Home
          </button>
        </Link>
      </nav>
      {/* Category selection */}
      <div className="lg:ml-3 p-2 flex flex-col lg:flex lg:flex-row gap-2 lg:gap-[100px] justify-center py-10 lg:text-[20px]">
        <div className="bg-sky-100 lg:w-[95%] border border-gray-300 rounded-lg flex flex-col justify-center gap-4 p-4 py-14">
          <div>
            <label htmlFor="" className="text-gray-600 font-medium">
              Select tag:
            </label>
            <input
              type="text"
              name="section"
              className="bg-white border border-gray-300 rounded-md px-1 "
              value={newTag.section}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="" className="text-gray-600 font-medium">
              Tag Name:
            </label>
            <input
              type="text"
              name="tag"
              className="bg-white border border-gray-300 rounded-md px-1 "
              value={newTag.tag}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="bg-sky-100 border w-[100%] border-gray-300 rounded-lg p-7 lg:px-14 flex flex-col gap-3 mr-10">
          <h2 className="font-normal text-2xl text-gray-700">Tag description</h2>
          <textarea
            name="description"
            className="lg:w-[400px] h-[300px] p-2 bg-white border border-gray-200 rounded-md"
            value={newTag.description}
            onChange={handleInputChange}
          ></textarea>
          <button className="bg-btn-primary hover:bg-green-700 w-24 rounded-md p-1 text-white font-medium" onClick={editTag ? handleUpdate : handleSubmit}>
            {editTag ? "Update" : "Submit"}
          </button>
          {editTag && <button className="bg-red-500 hover:bg-red-600 w-24 rounded-md p-1 text-white font-medium" onClick={handleCancelEdit}>Cancel</button>}
          <ToastContainer/>
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
          <tbody className="text-sm  ">
            {data.map((item, index) => (
              <tr key={index} className="border-b ">
                <td className="font-normal p-1">{item.section}</td>
                <td className="font-normal p-1">{item.tag}</td>
                <td className="font-normal p-1 max-w-72 text-[12px]">
        {item.description.length > 60 ? (
          <>
            {isExpanded[index] ? (
              <>
                {item.description}
                <span
                  className="text-red-600 cursor-pointer p-3 font-medium"
                  onClick={() => handleExpand(index)}
                >
                   ...Less
                </span>
              </>
            ) : (
              <>
                {item.description.slice(0, 60)}
                <span
                  className="text-blue-600 cursor-pointer p-3 font-medium"
                  onClick={() => handleExpand(index)}
                >
                  More...
                </span>
              </>
            )}
          </>
        ) : (
          item.description
        )}
      </td>
                <td className="flex flex-wrap p-5 font-normal text-sm justify-center lg:font-medium">
                <button
  className="bg-blue-500 rounded-lg text-white py-1 w-14 lg:px-3 m-1"
  onClick={() => handleEdit(item.section, item.tag, item.description)}
>
  Edit
</button>
                  <button className="bg-red-500 rounded-lg text-white w-14 py-1 m-1" onClick={() => handleDelete(item.tag)}>Delete</button>
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
