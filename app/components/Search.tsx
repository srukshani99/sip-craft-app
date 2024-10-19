'use client'

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { HiOutlineSearch } from "react-icons/hi";

const Search = () => {

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set('query', searchValue);
    } else {
      params.delete('query');
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300)

  return (
    <div className="max-w-lg mx-auto p-4 relative text-xl">
      <input
        className="peer block w-full rounded-md border border-gray-600 hover:border-gray-600 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 bg-neutral-900 text-white"
        placeholder={'Search your favourite cocktails here...'}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <HiOutlineSearch className="absolute left-8 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-white" />
    </div>
  )
}

export default Search;