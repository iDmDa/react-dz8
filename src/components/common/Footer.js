import React from 'react';
import FooterContacts from './FooterContacts';
import FooterSubscrube from './FooterSubscrube';
import Underground from './Underground';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <FooterSubscrube />
                <FooterContacts />
                <Underground />
            </footer>
        </>
    );
};

export default Footer;
