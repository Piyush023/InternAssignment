import React from 'react';
import Image from 'next/image'
import log from '../public/Logo_Dark.svg'

const Logo = () => {
    return (
        <div>
            <Image 
            className="Logo"
            src={log}
            alt="Picture of the Logo"
            layout="responsive" 
            />
            {/* 
            <input type="search" placeholder="&#xF002; Search" id=search>
            <img src="/images/Group.svg" alt="" id="marketplace">
            <img src="/images/Group 3193.svg" alt="" id="notification"> */}
        </div>
    )
}
export default Logo;