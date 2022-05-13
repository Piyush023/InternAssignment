import React from 'react'
import card1 from '../public/Card 01.svg'
import card2 from '../public/Card 02.svg'
import card3 from '../public/Card 03.svg'
import card4 from '../public/Card 13.svg'
import card5 from '../public/Card 12.svg'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled'

const Card = styled.div`
    padding: 4rem 0;
    flex: 1;
    display: 'flex';
    flexDirection: 'row';
    justify-content: 'space-between';
    align-items: flex-start;
    background-color: red;
    }
`;

const Cards = () => {
    return (
        // <Card>
            <div className={styles.Cards}>
                <div className="Card1">
                    <Image
                    className="hattrick"
                    src={card1}
                    alt="Hat Trick"
                    layout="responsive"
                    />
                    <div className="Detail1">
                        <h4>Hat Trick</h4>
                        <h5>Rashid Khan, TKR</h5>
                        <h6>   
                            Silver Tier Moment Card
                            Serial #21/2000
                        </h6>
                    </div>
                    <button>View</button>
                </div>
                <div className="Card2">
                    <Image
                    className="super"
                    src={card2}
                    alt="Super Over"
                    layout="responsive" 
                    />
                    <div className="Detail2">
                        <h4>Super Over</h4>
                        <h5>Carlos Brathwaite, TKR</h5>
                        <h6>   
                            Silver Tier Moment Card
                            Serial #25/2000
                        </h6>
                    </div>
                    <button>View</button>
                </div>
                <div className="Card3">
                    <Image
                    className="catch"
                    src={card3}
                    alt="Catch"
                    layout="responsive" 
                    />
                    <div className="Detail3">
                        <h4>Catch</h4>
                        <h5>Jonathan Carter, BT</h5>
                        <h6>   
                            Silver Tier Moment Card
                            Serial #25/2000
                        </h6>
                    </div>
                    <button>View</button>
                </div>
                <div className="Card4">
                    <Image
                    className="ton"
                    src={card4}
                    alt="Another Ton"
                    layout="responsive" 
                    />
                    <div className="Detail4">
                        <h4>Another Ton</h4>
                        <h5>Chris Gayle, BT</h5>
                        <h6>   
                            Silver Tier Moment Card
                            Serial #25/2000
                        </h6>
                    </div>
                    <button>View</button>
                </div>
                <div className="Card5">
                    <Image
                    className="nothing"
                    src={card5}
                    alt="Nothing"
                    layout="responsive" 
                    />
                    <div className="Detail5">
                        <p>Revealing...</p>
                    </div>
                </div>
            </div>
        // </Card>
    )
}

export default Cards;
