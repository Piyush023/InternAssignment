import React from 'react'
import Image from 'next/image';
import market from '../public/Group.svg';
import styled from "@emotion/styled";
import notify from '../public/Group 3193.svg'
import styles from '../styles/Home.module.css';

const Group = styled.div`
    display:flex;
    flex: 1.5;
    flex-flow: row;
    justify-content: space-evenly;
`;

const Market = styled.span`
    display:flex;
    flex: 1;
    flex-flow: row;
    justify-content: flex-end;
    padding-right: 40px;
`;

const Notify = styled.span`
    display:flex;
    flex: 1;
    flex-flow: row;
    justify-content: flex-start;
`;

const Marketplace = () => {
    return (
        <Group>
            <Market>
                    <Image
                        src={market}
                        alt="marketplace"
                        width={40}
                        height={40}
                    />
            </Market>
            <Notify>
                <Image
                    className={styles.adjust}
                    src={notify}
                    alt="notification"
                    width={100}
                    height={100}
                />
            </Notify>
        </Group>
  )
}

export default Marketplace;
