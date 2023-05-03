import { useState } from "react";

function searchForm({ search, setSearch, price, setPrice }) {
  return (
    <form className="mt-1">
      <fieldset>
        <legend>Search for Restaurants</legend>
        <div className="mt-1">
          <label htmlFor="search">Search</label>
          <input className="bg-transparent border  border-cyan-500 rounded-md ml-4"
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="mt-1">
          <label htmlFor="price">Price</label>
          <select className="bg-transparent border  border-cyan-500 rounded-md ml-4" id="price" name="price" value={price} onChange={e => setPrice(e.target.value)}>
            <option value="" hidden>
              Select a price
            </option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
        </div>
      </fieldset>
    </form>
  );
}

export default searchForm;
