import React from 'react';
import NftSkeleton from './NftSkeleton';

const ListNftSkeleton = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px]'>
      <>
        {[...new Array(8)].map((_, index) => (
          <NftSkeleton key={index} />
        ))}
      </>
    </div>
  );
};

export default ListNftSkeleton;
