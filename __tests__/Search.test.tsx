import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '../app/components/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock('use-debounce', () => ({
  useDebouncedCallback: (fn: Function) => fn,
}));

describe('Search Component', () => {
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ replace: mockReplace });
    (usePathname as jest.Mock).mockReturnValue('/current-path');
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(() => null),
    });
  });

  // it('updates the URL when typing in the search input', () => {
  //   render(<Search />);

  //   // Get the input
  //   const input = screen.getByPlaceholderText('Search your favourite cocktails here...');

  //   // Simulate typing a search term
  //   fireEvent.change(input, { target: { value: 'lemon' } });

  //   // Verify the replace function was called with the updated URL
  //   expect(mockReplace).toHaveBeenCalledWith('/current-path?query=lemon');
  // });

  // it('removes the query param when the input is cleared', () => {
  //   render(<Search />);

  //   // Get the input
  //   const input = screen.getByPlaceholderText('Search your favourite cocktails here...');

  //   // Simulate typing a search term
  //   fireEvent.change(input, { target: { value: 'lemon' } });

  //   // Simulate clearing the input
  //   fireEvent.change(input, { target: { value: '' } });

  //   // Verify the replace function was called with the updated URL without the query param
  //   expect(mockReplace).toHaveBeenCalledWith('/current-path');
  // });

  it('shows the default value in the input when there is a query param', () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(() => 'old-query'),
    });

    render(<Search />);
    const input = screen.getByPlaceholderText('Search your favourite cocktails here...');
    expect(input).toHaveValue('old-query');
  });
});
