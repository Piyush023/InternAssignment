import React from 'react'
import card1 from '../public/Card 01.svg'
import card2 from '../public/Card 02.svg'
import card3 from '../public/Card 03.svg'
import card4 from '../public/Card 13.svg'
import card5 from '../public/Card 12.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled'

const Button = styled.div`
    width: 134px;
    height: 52px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    background-color: transparent;
    font-weight: 800;
    font-size: 20px;
    line-height: 2.2;
    text-align: center;
`;

const Detail = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 0;
    color: #FFFFFF;
    text-align: center;
    letter-spacing: 1px;
    text-align: center;
    margin: auto;
    width: 60%;
    padding: 5px;
`;

const Cards = () => {
    return (
            <div className={styles.Cards}>
                <div>
                    <Image
                    src={card1}
                    alt="Hat Trick"
                    />
                    <Detail>
                        <h4>Hat Trick</h4>
                        <h5>Rashid Khan, TKR</h5>
                        <h5>   
                            Silver Tier Moment Card
                        </h5>
                        <h6>Serial #21/2000</h6>
                    </Detail>
                    <div className={styles.button}>
                        <Button>View</Button>
                    </div>
                </div>
                <div>
                    <Image
                    src={card2}
                    alt="Super Over"
                    />
                    <Detail>
                        <h4>Super Over</h4>
                        <h5>Carlos Brathwaite, TKR</h5>
                        <h5>   
                            Silver Tier Moment Card
                        </h5>
                        <h6>Serial #25/2000</h6>
                    </Detail>
                    <div className={styles.button}>
                        <Button>View</Button>
                    </div>
                </div>
                <div>
                    <Image
                    src={card3}
                    alt="Catch" 
                    />
                    <Detail>
                        <h4>Catch</h4>
                        <h5>Jonathan Carter, BT</h5>
                        <h5>   
                            Silver Tier Moment Card
                        </h5>
                        <h6>
                            Serial #25/2000
                        </h6>
                    </Detail>
                    <div className={styles.button}>
                        <Button>View</Button>
                    </div>
                </div>
                <div>
                    <Image
                    src={card4}
                    alt="Another Ton"
                    />
                    <Detail>
                        <h4>Another Ton</h4>
                        <h5>Chris Gayle, BT</h5>
                        <h5>   
                            Silver Tier Moment Card
                        </h5>
                        <h6>Serial #25/2000</h6>
                    </Detail>
                    <div className={styles.button}>
                        <Button>View</Button>
                    </div>
                </div>
                <div>
                    <Image
                    src={card5}
                    alt="Nothing"
                    />
                    <p>Revealing...</p>
                </div>
            </div>
    )
}

export default Cards;