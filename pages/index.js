import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-gray-200 dark:bg-gray-700">
          <div className="p-6 my-12">
            <div className="flex items-center justify-center">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
