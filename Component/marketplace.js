import React from 'react'
import Image from 'next/image';
import market from '../public/Group.svg';

const Marketplace = () => {
    return (
            <Image
                src={market}
                alt="marketplace"
                width={50}
                height={50}
            />
  )
}

export default Marketplace;