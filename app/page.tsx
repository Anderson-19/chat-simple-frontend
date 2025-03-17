import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-wrap mt-64">
      <Link href={"/api-page"} className="bg-slate-500 p-4 text-white rounded-2xl w-1/2 text-center mb-8 mx-auto">API</Link>
      <Link href={"/socket"} className="bg-slate-500 p-4 text-white rounded-2xl w-1/2 text-center mx-auto">Socket</Link>
    </div>
  );
}
