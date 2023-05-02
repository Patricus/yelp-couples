import { useState } from "react";

function searchForm({ search, setSearch, price, setPrice }) {
  return (
    <form>
      <fieldset>
        <legend>Search for Restaurants</legend>
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <select id="price" name="price" value={price} onChange={e => setPrice(e.target.value)}>
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
