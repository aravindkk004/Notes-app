"use client"
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {useRouter} from "next/navigation";

export default function Note({ id, title, description }) {
    const router = useRouter();
    const deleteNote = async () => {
        const confirmed = confirm("Are you sure want to delete?")
        if (confirmed){
            const res = await fetch(`https://aravindkk-notes-next.vercel.app/api/data?id=${id}`, {
                method:"DELETE",
            }); 
            if (res.ok){
                router.refresh();
            }
        }
    }
  return (
    <div className="relative p-[15px] bg-white shadow-lg rounded-lg md:w-[350px] h-[200px] w-[300px] ">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="my-[10px]">{description}</p>
      <div className="absolute right-[2%] top-[4%] flex gap-[10px]">
        <button className="bg-gray-100 p-[10px] rounded-md">
          <Link href={`/editNote/${id}`}>
            <FaEdit />
          </Link>
        </button>
        <button className="bg-red-500 text-white p-[10px] rounded-md" onClick={deleteNote}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
