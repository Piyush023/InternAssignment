import Image from 'next/image';
import notify from '../public/Group 3193.svg';

const Notification = () => {
    return (
        <div>
            <Image
            className="notify"
            src={notify}
            alt="notification"
            layout="responsive" 
            />
        </div>
    );
}

export default Notification;