import Search from "./components/Search";
import ItemList from "./components/ItemList";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">Welcome to SipCraft</h1>
            <p className="mb-8 text-gray-300 text-md mx-10">Explore a curated collection of high-quality images featuring a variety of cocktails, from classic favorites to modern creations.</p>
          </div>
          <Search />
          <ItemList searchParams={searchParams} />
        </section>
      </main>
    </div>
  );
}
