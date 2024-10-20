import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Refresh from '../app/components/Refresh';

jest.mock('react-icons/hi', () => ({
  HiOutlineRefresh: () => <div data-testid="refresh-icon" />,
}));

describe('Refresh Component', () => {
  it('renders the refresh icon', () => {
    render(<Refresh onRefreshClick={jest.fn()} />);
    expect(screen.getByTestId('refresh-icon')).toBeInTheDocument();
  });

  it('displays tooltip when hovered over the button', () => {
    render(<Refresh onRefreshClick={jest.fn()} />);
    const button = screen.getByRole('button');

    fireEvent.mouseEnter(button);
    expect(screen.getByText('Refresh items')).toBeInTheDocument();

    fireEvent.mouseLeave(button);
    expect(screen.queryByText('Refresh items')).not.toBeInTheDocument();
  });

  it('calls onRefreshClick when button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<Refresh onRefreshClick={mockOnClick} />);

    const refreshButton = screen.getByRole('button');
    fireEvent.click(refreshButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
