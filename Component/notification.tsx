import Image from 'next/image'
import notify from '../public/Group 3193.svg'
import styled from "@emotion/styled";

const Notify = styled.span`
    flex: 1;
    display: flex;
    flex-direction: flex-end;
    position: absolute;
    right: 10.5%;
    top: 1%;
    flex: 1;
`;


const Notification = () => {
    return (
        <Notify>
            <Image
                src={notify}
                alt="notification"
                width={100}
                height={100}
            />
        </Notify>    
    );
}

export default Notification;