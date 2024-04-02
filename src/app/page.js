"use client"
import NavBar from "../components/NavBar";
import Notes from "../components/Notes";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/data", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const { data } = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <NavBar />
      <Notes data={data}/>
    </>
  );
}
