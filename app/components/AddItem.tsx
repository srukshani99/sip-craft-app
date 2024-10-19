import React, { useState } from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { CocktailItem } from '../models/cocktailModel';

type AddItemProps = {
  onAddItemClick: (item: CocktailItem) => void;
  cocktailItem: CocktailItem;
}

const AddItem = ({ onAddItemClick, cocktailItem }: AddItemProps) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='relative' onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <button className=" px-4 py-2 text-3xl text-gray-300 rounded-lg focus:outline-none hover:scale-150 transform transition duration-300 ease-in-out" onClick={() => onAddItemClick(cocktailItem)}>
        {cocktailItem.isFavourite ? <HiHeart className='text-red-600' /> : <HiOutlineHeart className='' />}
      </button>
      {isHovered && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-1 py-1 text-xs text-white bg-gray-700 rounded-md shadow-lg">
          Add to favourites
        </div>
      )}
    </div>
  )
}

export default AddItem;