import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DuoDine</title>
        <meta name="description" content="DuoDine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl font-bold text-center bg-orange-200 py-2 uppercase">
          <span className="font-bold text-cyan-500">D</span>uo
          <span className="font-bold text-cyan-500">D</span>ine
        </h1>
        <Link href={"/compromise"}>
          <button className="rounded bg-slate-500 hover:bg-slate-400 m-4">COMPROMISE</button>
        </Link>
      </main>
    </>
  );
}
