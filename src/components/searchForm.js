function searchForm({ search, setSearch, price, setPrice }) {
  return (
    <form className="mt-1">
      <fieldset className="border border-cyan-200 rounded-md p-4">
        <legend className="font-semibold text-blue-300">Search for Restaurants</legend>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="search">Search</label>
              </td>
              <td>
                <input
                  className="bg-transparent border border-cyan-500 rounded-md ml-4"
                  type="text"
                  id="search"
                  name="search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="price">Price</label>
              </td>
              <td>
                <select
                  className="bg-transparent border border-cyan-500 rounded-md ml-4"
                  id="price"
                  name="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}>
                  <option value="" hidden>
                    Select a price
                  </option>
                  <option value="$">$</option>
                  <option value="$$">$$</option>
                  <option value="$$$">$$$</option>
                  <option value="$$$$">$$$$</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </form>
  );
}

export default searchForm;
