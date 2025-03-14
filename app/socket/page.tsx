import Link from "next/link";
import SocketCliente from './client';


export default function SocketPage() {
  return (
    <div>
        <div className="bg-slate-600 p-5 flex flex-row">
            <Link href={"/"} className="bg-white p-3 w-2xs rounded-2xl cursor-pointer hover:bg-gray-100 text-center" >Volver</Link>
            <h1 className="text-white text-2xl mx-auto">Sockets</h1>
        </div>

        <SocketCliente />
    </div>
  )
}
