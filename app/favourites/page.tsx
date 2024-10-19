import React from 'react';
import FavouriteItemList from '../components/FavouriteItemList';

const page = async () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">My Favourite SipCraft</h1>
            <p className="mb-8 text-gray-300 text-md mx-10">Explore your collection of favorite images and you can also easily unfavorite any images you no longer wish to keep.</p>
          </div>
          <FavouriteItemList />
        </section>
      </main>
    </div>
  )
}

export default page;