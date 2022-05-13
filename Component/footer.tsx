import React from 'react'
import Rlogo from '../public/Group 3222.svg'
import graphic from '../public/Footer Graphics.svg'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';

const Footer_link = styled.div`
    height: 50%
    width: 70%
`;

const Links = styled.div`
    gap: 1em;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
    font-weight: 400;
    line-height: 3;
    word-spacing: 30px;
    border-right: 1px solid rgb(206, 200, 200);
`;

const Footer = () => {
    return (
        <div className={styles.footer}>
                <div>
                    <h6>
                        @ 2021 Rario Inc.
                    </h6>
                    <h6>
                        @ 2021 ICC Properties Inc. All Right Reserved.
                    </h6>
                    <h6>
                        Officially licensed product of International Cricket Council Player.
                    </h6>
                    <h6>
                        The site is protected by reCAPTCHA and the Google <u><a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a></u> and <u><a href="https://policies.google.com/terms?hl=en-US">Term Of Service</a></u> apply.
                    </h6>
                </div>
                <Footer_link>
                        <Links>
                            <div>
                                <a href="https://medium.com/rario">Blog</a>
                                <a href="https://rario.com/terms-of-use">Term</a>
                                <a href="https://rario.com/privacy-policy">Privacy</a>
                                <a href="https://rario.freshdesk.com/support/home">Help</a>
                                <a href="https://rario.com/custom/press/p2KygpsMUAvoXLBqnsoxX">Press</a>
                                <a href="https://rario.com/contact-us">Newsletters</a>
                            </div>
                        </Links>
                        <Links>
                            <div>
                                <a href="https://twitter.com/rariohq">Twitter</a>
                                <a href="https://www.instagram.com/accounts/login/?next=/rariohq/">Instagram</a>
                                <a href="https://www.youtube.com/channel/UCqo65RCtVWBvICDMF6COhLA/featured">Youtube</a>
                                <a href="https://www.facebook.com/rarioglobal">Facebook</a>
                                <a href="https://www.twitch.tv/rariocomms">Twitch</a>
                            </div>
                        </Links>
                    </Footer_link>
                <div>
                    <Image 
                    src={Rlogo}
                    alt="Graphical logo"
                    />
                </div>
                <div>
                    <Image 
                    src={graphic}
                    alt="This is Graphical Logo"
                    />
                </div>
            </div>
    )
} 
export default Footer;
