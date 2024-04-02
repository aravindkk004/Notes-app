import Link from "next/link"
import { FaPlus } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="flex z-[1] justify-between items-center px-[20px] py-[15px] bg-white shadow-lg fixed top-0 left-0 w-full">
        <h2 className="font-bold text-xl">Notes App</h2>
        <button className="bg-blue-600 text-white rounded-lg px-[10px] py-[5px]"><Link href="/addNote" className="flex items-center"><FaPlus />Add Notes</Link></button>
    </nav>
  )
}

export default NavBar