"use client";
import { useState } from "react";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  const addnote = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch("https://aravindkk-notes-next.vercel.app/api/data",{
        method: "POST",
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({title, description})
      })

      if(res.ok){
        router.push("/")
      }
    }catch(err){
      console.log(err);
    }
  }
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="bg-white p-[20px] shadow-lg rounded-lg lg:w-[50%] w-[80%]">
        <form className="flex flex-col" onSubmit={addnote}>
          <label htmlFor="title" className="font-bold text-xl mb-[10px]">Title</label>
          <input
            type="text"
            required
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title} className="h-[50px] border border-gray-300 px-[10px] rounded-md mb-[20px]"
          />
          <label htmlFor="description" className="font-bold text-xl mb-[10px]">Description</label>
          <textarea
            type="text"
            required
            placeholder="Enter Description"
            onChange={(e) => setDesc(e.target.value)}
            value={description}
            className="h-[100px] border border-gray-300 rounded-md resize-none p-[10px] mb-[20px]"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white rounded-lg h-[40px]">Add</button>
        </form>
      </div>
    </div>
  );
}
