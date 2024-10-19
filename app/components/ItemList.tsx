'use client'

import React, { useEffect, useState } from 'react'
import Item from './Item'
import { addToFavouriteCocktails, getAllFavouriteCocktails, getRandomCocktailList, searchCocktailsByName } from '../services/item.service'
import { CocktailItem } from '../models/cocktailModel';
import Refresh from './Refresh';
import { toast, Toaster } from 'react-hot-toast';
import NoData from './NoData';

const ItemList = async ({ searchParams }: any) => {

  const [randomCocktailRes, setRandomCocktailRes] = useState<CocktailItem[] | null>([]);

  const getData = async () => {
    const data = await getRandomCocktailList();
    setRandomCocktailRes(data);
  }

  const getSearchedData = async (value: string) => {
    if (value) {
      const data = await searchCocktailsByName(value);
      if (data)
        setRandomCocktailRes(data);
    } else {
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    getSearchedData(searchParams.query);
  }, [searchParams])

  const handleRefresh = async () => {
    getData();
  }

  const markFavourites = (cocktailItem: CocktailItem) => {
    try {
      if (randomCocktailRes) {
        let updatedCocktailList = randomCocktailRes.map((item, index) => {
          if (item.id == cocktailItem.id) {
            return { ...item, isFavourite: true };
          }
          return item;
        })
        setRandomCocktailRes(updatedCocktailList);
      }
    } catch (error) {
      console.error('Error occurred in markFavourites');
    }
  }

  const handleAddItem = (cocktailItem: CocktailItem) => {
    let resposne: string = '';
    try {
      resposne = addToFavouriteCocktails(cocktailItem);
      toast.success(resposne);
      markFavourites(cocktailItem);
    } catch (error) {
      toast.error(resposne);
    }
  }

  return (
    <div className="container mx-auto px-10 py-8">
      <Toaster />
      {searchParams.query &&
        <div className="flex justify-start px-4 text-white ">
          <p className='text-lg text-neutral-400'>Search results for: <span className='text-neutral-300 italic text-xl'>{searchParams.query}</span></p>
        </div>
      }
      <Refresh onRefreshClick={handleRefresh} />
      {Array.isArray(randomCocktailRes) && randomCocktailRes.length > 4 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {randomCocktailRes.map((item) => (
            <Item item={item} handleAddItem={handleAddItem} />
          ))}
        </div>
        :
        <NoData />
      }
    </div>
  )
}

export default ItemList;