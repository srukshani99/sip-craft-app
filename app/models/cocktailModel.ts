export interface CocktailItem {
  id: string;
  name: string;
  category: string;
  image: string;
  createdDate?: string;
  isFavourite?: boolean;
}