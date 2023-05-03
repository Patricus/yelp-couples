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
    <main>
      <h1 className="text-4xl  text-center bg-fuchsia-300 py-2 uppercase">
        <span className="font-bold text-cyan-500">Y</span>elp{" "}
        <span className="font-bold text-cyan-500">f</span>or{" "}
        <span className="font-bold text-cyan-500">c</span>ouples
      </h1>
      <p>Compromise Page</p>

      {hasSearched ? (
        <List reset={reset} list1={list1} list2={list2} />
      ) : (
        <Search
          setHasSearched={setHasSearched}
          setList1={setList1}
          setList2={setList2}
        />
      )}
    </main>
  );
}
