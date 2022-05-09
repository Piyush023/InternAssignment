import React from 'react'
import Image from 'next/image';
import market from '../public/Group.svg';

const Marketplace = () => {
    return (
        <div>
        <Image
            className="market"
            src={market}
            alt="marketplace"
            layout="responsive" 
            />
    </div>
  )
}

export default Marketplace;