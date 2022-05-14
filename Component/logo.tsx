import React from 'react';
import Image from 'next/image'
import log from '../public/Logo_Dark.svg'
import styled from '@emotion/styled';

const Size = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;

const Logo = () => {
    return (
        <Size>
            <Image
                src={log}
                alt="Picture of the Logo"
                width={150}
                height={150}
            />
        </Size>
    )
}
export default Logo;
