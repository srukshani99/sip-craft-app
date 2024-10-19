import React, { useState } from 'react'
import { CocktailItem } from '../models/cocktailModel';
import { HiHeart } from "react-icons/hi";

type RemoveItemProps = {
  onRemoveItemClick: (cocktailId: string) => void;
  cocktailItem: CocktailItem
}

const RemoveItem = ({ onRemoveItemClick, cocktailItem }: RemoveItemProps) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container py-4">
      <div className="flex justify-end px-4 relative" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
          onClick={() => onRemoveItemClick(cocktailItem.id)}
          className="px-4 py-2 text-3xl text-gray-300 rounded-lg focus:outline-none hover:scale-150 transform transition duration-300 ease-in-out">
          <HiHeart className='text-red-600' />
        </button>
        {isHovered && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-1 py-1 text-xs text-white bg-gray-700 rounded-md shadow-lg">
            Remove from favourites
          </div>
        )}
      </div>
    </div>
  )
}

export default RemoveItem