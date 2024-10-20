// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import ItemList from '../app/components/ItemList';
// import { getRandomCocktailList, searchCocktailsByName } from '../app/services/item.service';
// import { CocktailItem } from '../app/models/cocktailModel';

// jest.mock('../app/services/item.service', () => ({
//   getRandomCocktailList: jest.fn(),
//   searchCocktailsByName: jest.fn(),
//   addToFavouriteCocktails: jest.fn(),
// }));

// jest.mock('react-hot-toast', () => ({
//   toast: {
//     success: jest.fn(),
//     error: jest.fn(),
//   },
// }));

// jest.mock('../app/components/Item', () => (props: any) => (
//   <div data-testid="item">{props.item.name}</div>
// ));

// jest.mock('../app/components/Refresh', () => (props: any) => (
//   <button data-testid="refresh-button" onClick={props.onRefreshClick}>Refresh</button>
// ));

// jest.mock('../app/components/NoData', () => () => (
//   <div data-testid="no-data">No data available</div>
// ));

// describe('ItemList Component', () => {
//   const mockCocktails: CocktailItem[] = [
//     { id: '135790', name: 'Kiwi Lemon', category: 'Cocktail', image: '/kiwilemon.jpg', isFavourite: false },
//     { id: '076843', name: 'Strawberry Shivers', category: 'Cocktail', image: '/strawberryshivers.jpg', isFavourite: false },
//   ];

//   const mockSearchParams = { query: 'straw' };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('fetches and displays random cocktails on mount', async () => {
//     (getRandomCocktailList as jest.Mock).mockResolvedValue(mockCocktails);

//     render(<ItemList searchParams={mockSearchParams} />);

//     await waitFor(() => {
//       expect(getRandomCocktailList).toHaveBeenCalledTimes(1);
//       expect(screen.getAllByTestId('item')).toHaveLength(2);
//     });
//   });

//   it('displays search results when searchParams.query is provided', async () => {
//     const searchQuery = 'Straw';
//     (searchCocktailsByName as jest.Mock).mockResolvedValue([mockCocktails[0]]);

//     render(<ItemList searchParams={{ query: searchQuery }} />);

//     await waitFor(() => {
//       expect(searchCocktailsByName).toHaveBeenCalledWith(searchQuery);
//       expect(screen.getAllByTestId('item')).toHaveLength(1);
//       expect(screen.getByText('Straw')).toBeInTheDocument();
//     });
//   });

//   it('calls handleRefresh and fetches new random cocktails', async () => {
//     const newCocktails: CocktailItem[] = [
//       { id: '357445', name: 'Blue Bird', category: 'Cocktail', image: '/bluebird.jpg', isFavourite: false },
//     ];
//     (getRandomCocktailList as jest.Mock).mockResolvedValueOnce(newCocktails);

//     render(<ItemList searchParams={mockSearchParams} />);

//     const refreshButton = screen.getByTestId('refresh-button');
//     fireEvent.click(refreshButton);

//     await waitFor(() => {
//       expect(getRandomCocktailList).toHaveBeenCalledTimes(2);
//       expect(screen.getAllByTestId('item')).toHaveLength(1);
//       expect(screen.getByText('Blue Bird')).toBeInTheDocument();
//     });
//   });

//   it('displays "No Data" message when no cocktails are available', async () => {
//     (getRandomCocktailList as jest.Mock).mockResolvedValue([]);

//     render(<ItemList searchParams={mockSearchParams} />);

//     await waitFor(() => {
//       expect(screen.getByTestId('no-data')).toBeInTheDocument();
//     });
//   });
// });
