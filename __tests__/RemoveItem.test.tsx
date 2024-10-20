import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RemoveItem from '../app/components/RemoveItem';
import { CocktailItem } from '../app/models/cocktailModel';

jest.mock('react-icons/hi', () => ({
  HiHeart: () => <div data-testid="heart-icon" />,
}));

describe('RemoveItem Component', () => {
  const mockOnRemoveItemClick = jest.fn();

  const cocktailItem: CocktailItem = {
    id: '323487',
    name: 'Kiwi Lemon',
    category: 'Ordinary Drink',
    image: '/kiwilemon.jpg',
    createdDate: '2024-10-19',
    isFavourite: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the filled favourite icon/button', () => {
    render(<RemoveItem onRemoveItemClick={mockOnRemoveItemClick} cocktailItem={cocktailItem} />);

    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('displays tooltip when hovered over the button', () => {
    render(<RemoveItem onRemoveItemClick={mockOnRemoveItemClick} cocktailItem={cocktailItem} />);

    const button = screen.getByRole('button');
    fireEvent.mouseEnter(button);

    expect(screen.getByText('Remove from favourites')).toBeInTheDocument();

    fireEvent.mouseLeave(button);

    expect(screen.queryByText('Remove from favourites')).not.toBeInTheDocument();
  });

  it('calls onRemoveItemClick when button is clicked', () => {
    render(<RemoveItem onRemoveItemClick={mockOnRemoveItemClick} cocktailItem={cocktailItem} />);

    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);

    expect(mockOnRemoveItemClick).toHaveBeenCalledWith('323487');
    expect(mockOnRemoveItemClick).toHaveBeenCalledTimes(1);
  });
});
