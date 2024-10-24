import React from 'react';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../Assets/Styles/FloatingIcons.css'
import axios from 'axios';

const Movingicon = () => {
    const [socialLinks, setSocialLinks] = useState({});
    // console.log("socialLinks", socialLinks);

    useEffect(() => {
        // Fetching social media links
        axios
            .get("/Social/get")
            .then((response) => {
                setSocialLinks(response.data.responseData[0]);
            })
            .catch((error) => {
                console.error("There was an error fetching the social media links!", error);
            });
    }, []);
    return (
        <div className="floating-icons">

            {socialLinks && (<a href={`https://wa.me/${socialLinks.whatsapp}`} target='_blank' aria-label="Bilz" className="iconz whatsapp">
                <FaWhatsapp className="iconz whatsapp" />
            </a>)}

        </div>
    );
};


export default Movingicon
