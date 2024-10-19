import * as CONSTANTS from '../constants';
import { addFavouriteItem, getFavouriteItems, removeFavouriteItem } from '../data/item.data';
import { CocktailItem } from '../models/cocktailModel';
import { transformCocktailResponse } from '../utils/transformCocktailData';

/**
 * Service methos to get a random cocktail drink details.
 * @returns 
 */
export const getRandomCocktail = async () => {
  try {
    const response = await fetch(`${CONSTANTS.COCKTAILDB_BASE_URL}json/v1/1/random.php`,
      { cache: 'no-store' });

    if (!response.ok)
      throw new Error('Failed in fetching data.');

    let data = await response.json();
    const transformedResponse = data.drinks.map(transformCocktailResponse);

    return transformedResponse[0];
  } catch (error) {
    throw new Error('Failed in fetching data.');
  }

}

/**
 * Service method to get 5 random items.
 * @returns 
 */
export const getRandomCocktailList = async () => {
  const cocktailPromises = Array.from({ length: 5 }, () => getRandomCocktail());
  const cocktails = await Promise.all(cocktailPromises);
  return cocktails;
}

/**
 * Service method to get searched list of items by their name.
 * @param keyword 
 * @returns 
 */
export const searchCocktailsByName = async (keyword: string) => {
  try {
    const response = await fetch(`${CONSTANTS.COCKTAILDB_BASE_URL}json/v1/1/search.php?s=${keyword}`);

    if (!response.ok)
      throw new Error('Failed in searching data.');

    let data = await response.json();
    const transformedResponse = data.drinks.map(transformCocktailResponse);

    return transformedResponse;
  } catch (error) {
    throw new Error('Failed in searching data.');
  }
}

/**
 * Service method to add favourite items.
 * @param cocktailItem 
 * @returns 
 */
export const addToFavouriteCocktails = (cocktailItem: CocktailItem) => {
  return addFavouriteItem(cocktailItem);
}

/**
 * Service method to get all favourite items.
 * @returns 
 */
export const getAllFavouriteCocktails = () => {
  return getFavouriteItems();
}

/**
 * Service method to remove from favourite items.
 * @param cocktailId 
 * @returns 
 */
export const removeFromFavouriteCocktails = (cocktailId: string) => {
  return removeFavouriteItem(cocktailId);
}