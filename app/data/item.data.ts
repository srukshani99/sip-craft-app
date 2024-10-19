import { CocktailItem } from "../models/cocktailModel";

let favouriteItems: CocktailItem[] = [];

export const getFavouriteItems = () => {
  return favouriteItems;
}

export const addFavouriteItem = (item: CocktailItem) => {
  try {
    let createdDate = new Date().toISOString().split('T')[0];
    let temp = [...favouriteItems, {...item, createdDate}];
    favouriteItems = temp;
    return 'Successfully added to favourite items.';
  } catch (error) {
    throw new Error('Error occurred in adding favourite item.');
  }
 
}

export const removeFavouriteItem = (itemId: string) => {
  try{
    favouriteItems =  favouriteItems.filter((item : CocktailItem, index: number) => item.id !== itemId);
    return 'Successfully removed from favourite items.';
  }catch(error){
    throw new Error('Error occurred in removing favourite item.');
  }
}