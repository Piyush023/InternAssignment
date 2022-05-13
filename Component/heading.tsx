import styled from '@emotion/styled'
import styles from '../styles/Home.module.css';


const Detail = styled.span`
    color: white;
    font-size: 40px;
    display:flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 0;
    padding: 90px;
`;

const Heading = () => {
    return (
        <div className={styles.heading}>
            <Detail>
                <div>
                    <h2 className="trail">CPL Trail Blazers</h2>
                    <h4 className="card">4 Silver cards and chance to win 1 gold card</h4>
                </div>
                <div>
                <a href="#" 
                className="vault"><u>Back To Vault</u></a>
                </div>
            </Detail>
        </div>
    )
}

export default Heading;