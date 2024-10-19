'use client'

import React, { useState } from 'react';
import { HiOutlineRefresh } from "react-icons/hi";

type RefreshProps = {
  onRefreshClick: () => void
}

const Refresh = ({ onRefreshClick }: RefreshProps) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pb-6" onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="flex realtive justify-end px-4 text-white">
        <button className=" px-4 py-2 text-4xl text-gray-300 rounded-lg focus:outline-none hover:scale-150 transform transition duration-300 ease-in-out"
          onClick={onRefreshClick}>
          <HiOutlineRefresh className='' />
        </button>
        {isHovered && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-1 py-1 text-xs text-white bg-gray-700 rounded-md shadow-lg">
            Refresh items
          </div>
        )}
      </div>
    </div>
  )
}

export default Refresh