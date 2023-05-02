import Image from "next/image";

function list({ reset, list1, list2 }) {
  console.log("list1", list1);
  console.log("list2", list2);
  return (
    <section>
      <div className="flex flex-col gap-5">
        {list1 &&
          list2 &&
          [...list1, ...list2].map((item, i) => (
            <div key={i}>
              <h2>{item.name}</h2>
              <Image src={item.image_url} alt={item.name} width={200} height={200} />
              <div>
                <p>Address:</p>
                {item.location.display_address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
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
