import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yelp for Couples</title>
        <meta name="description" content="Yelp for Couples" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center bg-orange-200 py-2 uppercase">Yelp for Couples</h1>
        <Link href={"/compromise"}>
          <button className="rounded bg-slate-500 hover:bg-slate-400 m-4">COMPROMISE</button>
        </Link>
      </main>
    </>
  );
}
