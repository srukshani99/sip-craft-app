import React from 'react'
import { CocktailItem } from '../models/cocktailModel'
import Image from 'next/image'
import AddItem from './AddItem'

type ItemProps = {
  item: CocktailItem;
  handleAddItem: (item: CocktailItem) => void
}

const Item = ({ item, handleAddItem }: ItemProps) => {
  return (
    <div className="max-w-sm mx-auto bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-4 transform transition duration-700 ease-in-out p-6">
      <div className="relative ">
        <Image
          src={item.image}
          alt={item.name}
          className="rounded-t-lg"
          width={500}
          height={500}
        />
      </div>
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
          <p className="mt-2 text-lg text-gray-500">{item.category}</p>
        </div>
        <AddItem onAddItemClick={handleAddItem} cocktailItem={item} />
      </div>
    </div>
  )
}

export default Item;