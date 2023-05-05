import { useState } from "react";
import Head from "next/head";
import Search from "../components/search";
import List from "../components/list";



export default function Compromise() {
  const [hasSearched, setHasSearched] = useState(false);
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);

  const reset = () => {
    setHasSearched(false);
    setList1([]);
    setList2([]);
  };

  return (
    <>
      <Head>
        <title>DuoDine</title>
        <meta name="description" content="DuoDine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col items-center  bg-gradient-to-br from-pink-500 to-purple-500 min-h-screen">
     
        <h1 className="text-4xl  text-center bg-fuchsia-300 py-2 uppercase mb-10 w-full">
          <span className="font-bold text-cyan-500">D</span>uo
          <span className="font-bold text-cyan-500">D</span>ine
        </h1>
      
       
      

        <h1 className="text-5xl font-bold text-white my-2">
          Find the Perfect Compromise
        </h1>
        {hasSearched ? (
          <List reset={reset} list1={list1} list2={list2} />
        ) : (
          <Search setHasSearched={setHasSearched} setList1={setList1} setList2={setList2} />
        )}
       
      </main>
    
    </>
  );
}
