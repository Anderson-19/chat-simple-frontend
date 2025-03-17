'use client';

import { use, useState } from "react";
import Image from "next/image";
interface Props {
    getAll: Promise<any[]>;
}

export default function Tabla({ getAll }: Props) {
    const api = use(getAll);
    const [data, _] = useState(api);
    const [ numberStart, setNumberStart ] = useState(0);
    const [ numberFinal, setNumberFinal ] = useState(10);

    const handleShowUsers = (condicionante: string) => {
      if ( condicionante === "Siguientes" ) {
        setNumberStart(numberFinal);
        setNumberFinal(numberFinal + 10);

        if (numberFinal === 100) {
            setNumberStart(0);
            setNumberFinal(10);
        }

      } else {     
        
        setNumberStart(numberStart - 10);
        setNumberFinal(numberFinal - 10);  
        
        if (numberStart <= 0) {
          setNumberStart(0);
          setNumberFinal(10);
        }

      }
        
    } 
    return (
        <div className="w-full">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                #ID
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Foto
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Nombre
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Apellido
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Email
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Telefono
              </th>
            </tr>
          </thead>
          <tbody>

          {
            data?.slice(numberStart, numberFinal).map( ({ id, name, picture, email, cell, phone, login }: any, i) => (
                <tr key={login?.uuid} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="text-black font-light px-6 py-4 whitespace-nowrap text-center">
                        {numberStart + i + 1}
                    </td>
                    <td className="px-6 py-4">
                        <Image src={picture.thumbnail} alt={""} width={70} height={70} className="mx-auto"/>
                    </td>
                    <td className="text-black font-light px-6 py-4 whitespace-nowrap text-center">
                        {name.first}
                    </td>
                    <td className="text-black font-light px-6 py-4 whitespace-nowrap text-center">
                        {name.last}
                    </td>
                    <td className="text-black font-light px-6 py-4 whitespace-nowrap text-center">
                        {email}
                    </td>
                    <td className="text-black font-light px-6 py-4 whitespace-nowrap text-center">
                        {phone}
                    </td>                  
                </tr>
            ))
          }

          </tbody>
        </table>

        <div className="flex">

        <input 
            type="button" 
            value="Anteriores" 
            className="text-white p-4 bg-slate-400 rounded-2xl mx-auto block mt-5 mb-5 cursor-pointer" 
            onClick={() => handleShowUsers("Anteriores")}
        />

        <input 
            type="button" 
            value="Siguientes" 
            className="text-white p-4 bg-slate-400 rounded-2xl mx-auto block mt-5 mb-5 cursor-pointer" 
            onClick={() => handleShowUsers("Siguientes")}
        />
        </div>
      </div>
    );
}