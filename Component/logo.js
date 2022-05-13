import React from 'react';
import Image from 'next/image'
import log from '../public/Logo_Dark.svg'
import styled from '@emotion/styled';

// const Size = styled.div`
//     padding: 4rem 0;
//     flex: 1;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: flex-start;
// `;

const Logo = () => {
    return (
            <Image
                src={log}
                alt="Picture of the Logo"
                width={150}
                height={150}
            />
    )
}
export default Logo;
