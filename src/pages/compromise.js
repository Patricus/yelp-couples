import { useState } from "react";
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
    <main className="flex flex-col items-center">
      <h1 className="text-4xl  text-center bg-fuchsia-300 py-2 uppercase mb-10 w-screen">
        <span className="font-bold text-cyan-500">D</span>uo
        <span className="font-bold text-cyan-500">D</span>ine
      </h1>

      {hasSearched ? (
        <List reset={reset} list1={list1} list2={list2} />
      ) : (
        <Search setHasSearched={setHasSearched} setList1={setList1} setList2={setList2} />
      )}
    </main>
  );
}
