import Note from "./Note";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
const Notes = ({data}) => {
  return (
    <>
        <div className="md:px-[30px] px-[15px] mt-[90px] mb-[20px]">
        {data.length>0 ? (
          <div className="flex flex-wrap justify-evenly gap-[40px]">
            {data.map((d) => (
              <Note
                key={d._id}
                id={d._id}
                title={d.title}
                description={d.description}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[300px] bg-white rounded-lg shadow-lg border border-black">
          <div className="p-[10px] bg-gray-300 rounded-full my-[10px]">
            <Link href="/addNote"><FaPlus /></Link>
            </div>
            <button className="px-[10px] py-[5px] bg-blue-600 rounded-lg text-white">
              <Link href="/addNote">Add Notes</Link>
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Notes