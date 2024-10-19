'use client'

import React, { useEffect, useState } from 'react';
import FavouriteItem from './FavouriteItem';
import { CocktailItem } from '../models/cocktailModel';
import { getAllFavouriteCocktails, removeFromFavouriteCocktails } from '../services/item.service';
import { toast, Toaster } from 'react-hot-toast';
import NoData from './NoData';

const FavouriteItemList = () => {

  const [favouriteCocktailList, setFavouriteCocktailList] = useState<CocktailItem[]>([]);

  useEffect(() => {
    setFavouriteCocktailList(getAllFavouriteCocktails());
  }, [])

  const handleRemoveItemClick = (cocktailId: string) => {
    let response: string = '';
    try {
      response = removeFromFavouriteCocktails(cocktailId);
      toast.success(response);
      setFavouriteCocktailList(getAllFavouriteCocktails());
    } catch (error) {
      toast.error(response);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      {Array.isArray(favouriteCocktailList) && favouriteCocktailList.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favouriteCocktailList.map((item, index) => (
            <FavouriteItem key={index} cocktailItem={item} handleRemoveItemClick={handleRemoveItemClick} />
          ))
          }
        </div>
        :
        <NoData />
      }
    </div>
  )
}

export default FavouriteItemList;