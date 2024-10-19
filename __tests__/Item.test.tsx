import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Item from '../app/components/Item';
import { CocktailItem } from '../app/models/cocktailModel';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('../app/components/AddItem', () => (props: any) => (
  <button data-testid="add-item-button" onClick={() => props.onAddItemClick(props.cocktailItem)}>
    Add to favourites
  </button>
));

describe('Item Component', () => {
  const mockHandleAddItem = jest.fn();

  const item: CocktailItem = {
    id: '1',
    name: 'Blue Bird',
    category: 'Cocktail',
    image: '/bluebird.jpg',
    isFavourite: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the item image correctly', () => {
    render(<Item item={item} handleAddItem={mockHandleAddItem} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/bluebird.jpg');
    expect(image).toHaveAttribute('alt', 'Blue Bird');
  });

  it('displays the item name and category', () => {
    render(<Item item={item} handleAddItem={mockHandleAddItem} />);

    expect(screen.getByText('Blue Bird')).toBeInTheDocument();
    expect(screen.getByText('Cocktail')).toBeInTheDocument();
  });

  it('calls handleAddItem when AddItem button is clicked', () => {
    render(<Item item={item} handleAddItem={mockHandleAddItem} />);

    const button = screen.getByTestId('add-item-button');
    fireEvent.click(button);

    expect(mockHandleAddItem).toHaveBeenCalledWith(item);
    expect(mockHandleAddItem).toHaveBeenCalledTimes(1);
  });
});
