import Image from 'next/image'
import notify from '../public/Group 3193.svg'
import styled from "@emotion/styled";
import styles from '../styles/Home.module.css';

const Notify = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
`;


const Notification = () => {
    return (
        <Notify>
            <div>
                <Image
                    src={notify}
                    alt="notification"
                    width={100}
                    height={100}
                />
            </div>
        </Notify>    
    );
}

export default Notification;