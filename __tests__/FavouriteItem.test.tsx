import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavouriteItem from '../app/components/FavouriteItem';
import { CocktailItem } from '../app/models/cocktailModel';

jest.mock('../app/components/RemoveItem', () => ({ onRemoveItemClick }: { onRemoveItemClick: (id: string) => void }) => (
  <button data-testid="remove-item-btn" onClick={() => onRemoveItemClick('765234')}>Remove Item</button>
));
jest.mock('next/image', () => (props: any) => <img {...props} />);

describe('FavouriteItem Component', () => {
  const mockCocktailItem: CocktailItem = {
    id: '765234',
    name: 'Lemon Drop',
    image: '/lemondrop.jpg',
    category: 'Cocktail',
    createdDate: '2024-10-19',
  };

  const mockHandleRemoveItemClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the favourite item image correctly', () => {
    render(<FavouriteItem cocktailItem={mockCocktailItem} handleRemoveItemClick={mockHandleRemoveItemClick} />);

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', '/lemondrop.jpg');
    expect(image).toHaveAttribute('alt', 'Lemon Drop');
  });

  it('displays the favourite item name and category', () => {
    render(<FavouriteItem cocktailItem={mockCocktailItem} handleRemoveItemClick={mockHandleRemoveItemClick} />);

    expect(screen.getByText('Lemon Drop')).toBeInTheDocument();
    expect(screen.getByText('Cocktail')).toBeInTheDocument();
    expect(screen.getByText('2024-10-19')).toBeInTheDocument();
  });

  it('calls handleRemoveItemClick when remove item button is clicked', () => {
    render(<FavouriteItem cocktailItem={mockCocktailItem} handleRemoveItemClick={mockHandleRemoveItemClick} />);

    const removeButton = screen.getByTestId('remove-item-btn');
    fireEvent.click(removeButton);

    expect(mockHandleRemoveItemClick).toHaveBeenCalledTimes(1);
    expect(mockHandleRemoveItemClick).toHaveBeenCalledWith('765234');
  });

  it('renders correctly without createdDate', () => {
    const noDateCocktailItem: CocktailItem = {
      ...mockCocktailItem,
      createdDate: undefined,
    };

    render(<FavouriteItem cocktailItem={noDateCocktailItem} handleRemoveItemClick={mockHandleRemoveItemClick} />);

    expect(screen.queryByText('2024-10-19')).not.toBeInTheDocument();
  });
});
