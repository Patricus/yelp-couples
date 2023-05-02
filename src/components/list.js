import Image from "next/image";

function list({ reset, list1, list2 }) {
  const list = (() => {
    const combinedList = [];
    let idx = 0;
    while (list1.length > idx && list2.length > idx) {
      combinedList.push(list1[idx]);
      combinedList.push(list2[idx]);
      idx++;
    }
    return [...combinedList, ...list1.slice(idx), ...list2.slice(idx)];
  })();

  return (
    <section>
      <div className="flex flex-col gap-5">
        {list.length > 0 &&
          list.map((item, i) => (
            <div key={i}>
              <h2>{item.name}</h2>
              <Image src={item.image_url} alt={item.name} width={200} height={200} />
              <div>
                <p>Address:</p>
                {item.location.display_address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <p>Phone: {item.display_phone}</p>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>
              <a href={item.url}>Find on Yelp</a>
            </div>
          ))}
      </div>
      <button onClick={reset}>New Search</button>
    </section>
  );
}

export default list;
