import React from 'react'
import Image from 'next/image';
import market from '../public/Group.svg';
import styled from "@emotion/styled";

const Market = styled.span`
    position: absolute;
    right: 20.5%;
    top: 6%;
    flex: 1;
`;

const Marketplace = () => {
    return (
      <Market>
            <Image
                src={market}
                alt="marketplace"
                width={30}
                height={30}
            />
      </Market>
  )
}

export default Marketplace;