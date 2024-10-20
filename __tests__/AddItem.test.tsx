import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddItem from '../app/components/AddItem';
import { CocktailItem } from '../app/models/cocktailModel';

jest.mock('react-icons/hi', () => ({
  HiOutlineHeart: () => <div data-testid="outline-heart-icon" />,
  HiHeart: () => <div data-testid="filled-heart-icon" />,
}));

describe('AddItem Component', () => {
  const mockOnAddItemClick = jest.fn();

  const cocktailItem: CocktailItem = {
    id: '323487',
    name: 'Kiwi Lemon',
    category: 'Ordinary Drink',
    image: '/kiwilemon.jpg',
    createdDate: '',
    isFavourite: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the empty favourite icon when item is not a favorite', () => {
    render(<AddItem onAddItemClick={mockOnAddItemClick} cocktailItem={cocktailItem} />);

    expect(screen.getByTestId('outline-heart-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('filled-heart-icon')).not.toBeInTheDocument();
  });

  it('renders the filled favourite icon when item is a favorite', () => {
    const favoriteCocktailItem = { ...cocktailItem, isFavourite: true };

    render(<AddItem onAddItemClick={mockOnAddItemClick} cocktailItem={favoriteCocktailItem} />);

    expect(screen.getByTestId('filled-heart-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('outline-heart-icon')).not.toBeInTheDocument();
  });

  it('displays tooltip when hovered over the button', () => {
    render(<AddItem onAddItemClick={mockOnAddItemClick} cocktailItem={cocktailItem} />);

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);

    expect(screen.getByText('Add to favourites')).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    expect(screen.queryByText('Add to favourites')).not.toBeInTheDocument();
  });

  it('calls onAddItemClick when button is clicked', () => {
    render(<AddItem onAddItemClick={mockOnAddItemClick} cocktailItem={cocktailItem} />);

    const addButton = screen.getByRole('button');
    fireEvent.click(addButton);

    expect(mockOnAddItemClick).toHaveBeenCalledWith(cocktailItem);
    expect(mockOnAddItemClick).toHaveBeenCalledTimes(1);
  });
});
