import React from 'react'
import styled from '@emotion/styled'

const Detail = styled.span`
    color: white;
    font-size: 40px;
    flex-flow: row;
    justify-content: space-around;
    align-items: flex-start;
    justify-content: flex-end;
`;

const Position = styled.span`
    padding: 30px;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: flex-start;
    line-height: 0;
`;

const PositionBack = styled.span`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 30px;
`;

const Heading = () => {
    return (
        <div>
            <Detail>
                <Position>
                    <h2 className="trail">CPL Trail Blazers</h2>
                    <h4 className="card">4 Silver cards and chance to win 1 gold card</h4>
                </Position>
                <PositionBack>
                <a href="#" 
                className="vault"><u>Back To Vault</u></a>
                </PositionBack>
            </Detail>
        </div>
    )
}

export default Heading;