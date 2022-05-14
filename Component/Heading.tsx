import styled from '@emotion/styled'
import styles from '../styles/Home.module.css';

type TextProps={
    spacing:string
    size:string
    weight:string
}

const Text= styled.h2<TextProps>`
    font-family: 'Montserrat', sans-serif;
    font-size:${props=>props.size};
    line-height: 15%;
    letter-spacing: ${props=>props.spacing};
    color: white;
    font-weight:${props=>props.weight};
    display:flex;
    flex: 1;
    flex: row;
`;

const Detail = styled.span`
    color: white;
    font-size: 40px;
    display:flex;
    flex: 1;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 0;
    padding: 0 90px 90px 90px;
    @media (max-width:450px) {
        width: 200%;
        flex-direction: column;
    }
`;

const Heading = () => {
    return (
        <div className={styles.heading}>
            <Detail>
                <div>
                    <Text spacing="0.8" size="60px" weight="0px">
                        CPL Trail Blazers
                    </Text>
                    <Text spacing="0.2" size="25px" weight="200">
                        4 Silver cards and chance to win 1 gold card
                    </Text>
                </div>
                <div className={styles.vault}>
                    <a href="#" 
                    className="vault">
                        <u>
                            Back To Vault
                        </u>
                    </a>
                </div>
            </Detail>
        </div>
    )
}

export default Heading;
