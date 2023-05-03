import { useState } from "react";
import SearchForm from "./searchForm";

function search({ setHasSearched, setList1, setList2 }) {
  const [errors1, setErrors1] = useState(null);
  const [errors2, setErrors2] = useState(null);

  const [location, setLocation] = useState("");

  const [search1, setSearch1] = useState("");
  const [price1, setPrice1] = useState("");

  const [search2, setSearch2] = useState("");
  const [price2, setPrice2] = useState("");

  const handleSearch = async () => {
    // reset state
    setList1([]);
    setList2([]);

    const fetch1 = fetch(`/api/yelp?search=${search1}&price=${price1}&location=${location}`);
    const fetch2 = fetch(`/api/yelp?search=${search2}&price=${price2}&location=${location}`);
    // Await both requests in parallel
    const res = await Promise.all([fetch1, fetch2]);

    const [res1, res2] = res;
    const data1 = res1.json();
    const data2 = res2.json();
    // Await both requests in parallel
    const data = await Promise.all([data1, data2]);

    for (const i in data) {
      const d = data[i];
      i == 0 ? setErrors1(d.error || null) : setErrors2(d.error || null);
    }

    if (!errors1 && !errors2) {
      setList1(data[0].businesses);
      setList2(data[1].businesses);
      setHasSearched(true);
    }
  };
  return (
    <section className="flex flex-col items-center gap-8">
      <div>
        <label htmlFor="location">Location</label>
        <input className="bg-transparent border  border-cyan-500 rounded-md ml-4"
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div className="flex justify-around bg-gray-200 p-4 rounded-md shadow-md gap-20">
        <div>
          <p>Errors1: {errors1 && errors1.description}</p>
          <SearchForm search={search1} setSearch={setSearch1} price={price1} setPrice={setPrice1} />
        </div>
        <div>
          <p>Errors2: {errors2 && errors2.description}</p>
          <SearchForm search={search2} setSearch={setSearch2} price={price2} setPrice={setPrice2} />
        </div>
      </div>
      <button className="bg-red-500 px-3 py-1 rounded-lg uppercase font-bold" onClick={handleSearch}>Yelp Search</button>
    </section>
  );
}

export default search;
