import Link from "next/link";

import { getAll } from "../actions/api";
import Tabla from "./ui/Tabla";


export default function ApiPage() {

  return (
    <div>
        <div className="bg-black p-5 flex flex-row">
            <Link href={"/"} className="bg-white p-3 w-2xs rounded-2xl cursor-pointer hover:bg-gray-100 text-center" >Volver</Link>
            <h1 className="text-white text-2xl mx-auto">API</h1>
        </div>

       <Tabla getAll={getAll('http://192.168.56.103:3001')}/> 
    </div>
  )
}
