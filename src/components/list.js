import Image from "next/image";

function list({ reset, list1, list2 }) {
  const lst2 = list2.filter(item => !list1.find(i => i.id === item.id));
  const list = (() => {
    const combinedList = [];
    let idx = 0;
    while (list1.length > idx && lst2.length > idx) {
      combinedList.push(list1[idx]);
      combinedList.push(lst2[idx]);
      idx++;
    }
    return [...combinedList, ...list1.slice(idx), ...lst2.slice(idx)];
  })();

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {list.length > 0 &&
          list.map((item, i) => (
            <div className="border border-cyan-200 rounded-md p-1 flex flex-col" key={i}>
              <h2 className="font-semibold">{item.name}</h2>
              <div className="relative w-full h-[200px] bg-slate-400 rounded overflow-hidden">
                <Image src={item.image_url} alt={item.name} fill />
              </div>
              <div className="flex-grow">
                {item.location.display_address.map((line, i) => (
                  <p className="underline" key={i}>
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex justify-between">
                <p>Phone: {item.display_phone || "N/A"}</p>
                <p>Price: {item.price || "???"}</p>
              </div>
              <div className="flex justify-between">
                <a className="text-blue-600 underline" href={item.url}>
                  Find on Yelp
                </a>
                <p>Rating: {item.rating}</p>
              </div>
            </div>
          ))}
      </div>
      <button
        className="transition:color absolute top-3 left-3 font-mono font-extrabold border-2 rounded-full w-6 h-6 text-slate-500 hover:text-white hover:bg-slate-600"
        onClick={reset}>
        <div className="relative bottom-2 left-1 -rotate-90 text-3xl">{"^"}</div>
      </button>
    </section>
  );
}

export default list;
