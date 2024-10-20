// import { render, screen, fireEvent } from '@testing-library/react';
// import FavouriteItemList from '@/app/components/FavouriteItemList';
// import { getAllFavouriteCocktails, removeFromFavouriteCocktails } from '../app/services/item.service';
// import { toast } from 'react-hot-toast';
// import FavouriteItem from '../app/components/FavouriteItem';
// import NoData from '../app/components/NoData';

// jest.mock('../app/services/item.service');
// jest.mock('react-hot-toast', () => ({
//   toast: {
//     success: jest.fn(),
//     error: jest.fn(),
//   },
// }));
// jest.mock('../app/components/FavouriteItem', () => ({ cocktailItem, handleRemoveItemClick }: any) => (
//   <div data-testid="favourite-item">
//     <p>{cocktailItem.name}</p>
//     <button onClick={() => handleRemoveItemClick(cocktailItem.id)}>Remove</button>
//   </div>
// ));
// jest.mock('../app/components/NoData', () => () => <div data-testid="no-data">No data available</div>);

// describe('FavouriteItemList Component', () => {
//   const mockCocktailList = [
//     {
//       id: '323487',
//       name: 'Kiwi Lemon',
//       category: 'Ordinary Drink',
//       image: '/kiwilemon.jpg',
//       createdDate: '2024-10-19'
//     }
//   ];

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('renders a list of favourite cocktails when data is available', () => {
//     (getAllFavouriteCocktails as jest.Mock).mockReturnValue(mockCocktailList);

//     render(<FavouriteItemList />);

//     expect(screen.getAllByTestId('favourite-item')).toHaveLength(mockCocktailList.length);
//     expect(screen.getByText('Kiwi Lemon')).toBeInTheDocument();
//     expect(screen.getByText('Ordinary Drink')).toBeInTheDocument();
//   });

//   it('renders NoData component when no favourite cocktails are available', () => {
//     (getAllFavouriteCocktails as jest.Mock).mockReturnValue([]);

//     render(<FavouriteItemList />);

//     expect(screen.getByTestId('no-data')).toBeInTheDocument();
//   });

//   it('removes an item from the list when remove button is clicked', () => {
//     (getAllFavouriteCocktails as jest.Mock).mockReturnValue(mockCocktailList);
//     (removeFromFavouriteCocktails as jest.Mock).mockReturnValue('Cocktail removed successfully');

//     render(<FavouriteItemList />);

//     const removeButtons = screen.getAllByText('Remove');

//     fireEvent.click(removeButtons[0]);

//     expect(removeFromFavouriteCocktails).toHaveBeenCalledWith('1');
//     expect(toast.success).toHaveBeenCalledWith('Cocktail removed successfully');

//     expect(getAllFavouriteCocktails).toHaveBeenCalledTimes(2);
//   });

//   it('shows an error toast if removal fails', () => {
//     (getAllFavouriteCocktails as jest.Mock).mockReturnValue(mockCocktailList);
//     (removeFromFavouriteCocktails as jest.Mock).mockImplementation(() => {
//       throw new Error('Error removing cocktail');
//     });

//     render(<FavouriteItemList />);

//     const removeButtons = screen.getAllByText('Remove');
//     fireEvent.click(removeButtons[0]);

//     expect(toast.error).toHaveBeenCalledWith('');
//   });
// });
