import Image from 'next/image'
import notify from '../public/Group 3193.svg'


const Notification = () => {
    return (
            <Image
                src={notify}
                alt="notification"
                width={150}
                height={150}
            />
    );
}

export default Notification;