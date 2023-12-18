import React from 'react';
import './styles/footer.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <p>Developed by Debdutta Mukherjee</p>
                <p>&copy; 2023 Samarpan. All rights reserved.</p>
                <p>
                    <a href=" https://github.com/Debdutta-10/Samarpan-client" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </p>
            </div>
        </>
    );
}

export default Footer;
