import React from 'react';
import { HiOutlineFolderOpen } from "react-icons/hi";

const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-sm">
      <p className="text-gray-500 text-lg">
        <HiOutlineFolderOpen className='text-6xl justify-center' />
      </p>
      <p className="text-gray-500 text-lg">No Data Available</p>
    </div>
  )
}

export default NoData