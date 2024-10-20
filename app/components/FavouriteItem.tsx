import React from 'react';
import { CocktailItem } from '../models/cocktailModel';
import RemoveItem from './RemoveItem';
import Image from 'next/image';

type FavouriteItemProps = {
  cocktailItem: CocktailItem;
  handleRemoveItemClick: (cocktailId: string) => void
}

const FavouriteItem = ({ cocktailItem, handleRemoveItemClick }: FavouriteItemProps) => {

  const handleRemoveItemClickk = (id: string) => {
    handleRemoveItemClick(id);
  }

  return (
    <div className="flex flex-row bg-neutral-800 shadow-md rounded-lg overflow-hidden p-4">
      <div className="w-1/2">
        <Image src={cocktailItem.image} alt={cocktailItem.name} className="w-full h-64 object-cover" width={500} height={500} />
      </div>
      <div className="p-4 w-1/2 flex flex-col justify-between">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-2 text-white">{cocktailItem.name}</h2>
          <p className="text-gray-300">{cocktailItem.category}</p>
          <p className="text-gray-400 text-sm italic">{cocktailItem.createdDate ? cocktailItem.createdDate : ''}</p>
        </div>
        <div className="mt-4 ml-10 flex justify-end">
          <RemoveItem onRemoveItemClick={handleRemoveItemClickk} cocktailItem={cocktailItem} />
        </div>
      </div>
    </div>
  )
}

export default FavouriteItem;