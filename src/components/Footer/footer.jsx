import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <h3>Victor Oluwamakin</h3>
                        <p>Software Developer</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#stack">Stack</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <p><FaEnvelope className="icon" /> victorb.oluwamakin@gmail.com</p>
                        <div className="social-icons">
                            <a href="https://github.com/VicProjects12/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/victor-oluwamakin-892646160/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; {currentYear} Victor Oluwamakin. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;