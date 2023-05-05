import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DuoDine</title>
        <meta name="description" content="DuoDine" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/android-chrome-512x512.png" />
      </Head>
      <main className="flex flex-col items-center mb-2">
        <h1 className="text-4xl font-bold text-center bg-orange-200 py-2 uppercase w-screen mb-10">
          <span className="font-bold text-cyan-500">D</span>uo
          <span className="font-bold text-cyan-500">D</span>ine
        </h1>
        <section className=" w-11/12 max-w-5xl grid grid-cols-2 ">
          <div className="border-2 border-sky-200 rounded-md text-lg py-3 px-5 bg-cyan-200">
            <p>
              <span className="font-semibold">I</span>
              t&apos;s a Friday evening. You&apos;ve had a long week and you just want to go out and
              have a nice dinner. It&apos;s 5:30 pm and it&apos;s time to decide where to have
              dinner. And here begins the age-old challenge of deciding where to eat with your
              partner/roommate/friend… You have been in the mood for some Thai food, but the other
              person is feeling more like Italian. What to do?
            </p>
            <br />
            <p>
              <span className="font-semibold">C</span>
              ompromise with <span className="font-bold">DuoDine!</span> It takes both parties
              suggestions and gives you a mixed list of the two.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-lg px-8 py-5 rounded-md">
            <img src="/Images/dining-couple.png" alt="Couple dining" className="rounded-lg shadow-lg mb-4" />
            <Link href={"/compromise"}>
              <button className="rounded-md bg-slate-500 hover:bg-slate-400 p-4 font-bold text-slate-900">
                COMPROMISE
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
