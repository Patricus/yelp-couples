import { useState } from "react";
import SearchForm from "./searchForm";

function search({ setHasSearched, setList1, setList2 }) {
  const [isSearching, setIsSearching] = useState(false);

  const [errors1, setErrors1] = useState(null);
  const [errors2, setErrors2] = useState(null);

  const [location, setLocation] = useState("");

  const [search1, setSearch1] = useState("");
  const [price1, setPrice1] = useState("");

  const [search2, setSearch2] = useState("");
  const [price2, setPrice2] = useState("");

  const handleSearch = async () => {
    // Reset state
    setHasSearched(false);
    setList1([]);
    setList2([]);

    // Handle input errors
    let err1 = null;
    let err2 = null;

    if (price2 === "") {
      err2 = { description: "Please select a price range." };
    }
    if (price1 === "") {
      err1 = { description: "Please select a price range." };
    }
    if (!search2) {
      err2 = { description: "Please enter a search term." };
    }
    if (!search1) {
      err1 = { description: "Please enter a search term." };
    }
    if (!location) {
      err1 = { description: "Please enter a location." };
      err2 = { description: "Please enter a location." };
    }

    setErrors1(err1);
    setErrors2(err2);
    if (err1 || err2) return;

    // Start search
    setIsSearching(true);

    const fetch1 = fetch(`/api/yelp?search=${search1}&price=${price1}&location=${location}`);
    const fetch2 = fetch(`/api/yelp?search=${search2}&price=${price2}&location=${location}`);
    // Await both requests in parallel
    const res = await Promise.all([fetch1, fetch2]);

    const [res1, res2] = res;
    const data1 = res1.json();
    const data2 = res2.json();
    // Await both requests in parallel
    const data = await Promise.all([data1, data2]);

    // Fetch errors
    for (const i in data) {
      const d = data[i];
      i == 0 ? setErrors1(d.error || null) : setErrors2(d.error || null);
    }

    if (!errors1 && !errors2) {
      setList1(data[0].businesses);
      setList2(data[1].businesses);
      setHasSearched(true);
    }

    // End search
    setIsSearching(false);
  };

  return (
    <section className="flex flex-col items-center bg-gray-200 p-4 rounded-md shadow-md gap-8 w-11/12 md:w-3/4 max-w-5xl">
      <div>
        <label htmlFor="location">Location</label>
        <input
          className="bg-transparent border  border-cyan-500 rounded-md ml-4"
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-around gap-20">
        <div className="relative">
          {errors1 && (
            <div className="absolute -top-5 text-red-800 font-semibold">{errors1.description}</div>
          )}
          <SearchForm search={search1} setSearch={setSearch1} price={price1} setPrice={setPrice1} />
        </div>
        <div className="relative">
          {errors2 && (
            <div className="absolute -top-5 text-red-800 font-semibold">{errors2.description}</div>
          )}
          <SearchForm search={search2} setSearch={setSearch2} price={price2} setPrice={setPrice2} />
        </div>
      </div>
      <button
        className={`bg-red-400 w-28 h-10 px-3 rounded-lg uppercase font-bold flex justify-center items-center ${
          isSearching && "cursor-not-allowed"
        }`}
        disabled={isSearching}
        onClick={handleSearch}>
        {isSearching ? (
          <div className="w-5 h-5 border-4 border-blue-400 border-t-teal-100 rounded-full animate-spin"></div>
        ) : (
          "Search"
        )}
      </button>
    </section>
  );
}

export default search;
