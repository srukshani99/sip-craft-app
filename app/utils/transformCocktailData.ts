import { CocktailItem } from "../models/cocktailModel";

type CocktailApiResponse = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

export const transformCocktailResponse = (apiResponse: CocktailApiResponse) : CocktailItem => {
  return {
    id: apiResponse.idDrink,
    name: apiResponse.strDrink,
    category: apiResponse.strCategory,
    image: apiResponse.strDrinkThumb
  };
}