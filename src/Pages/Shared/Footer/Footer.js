import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>Lazy Developer</h3>
                <p>E-learning Centre is a website where you will find great tutorials on different eye-catching trendy courses. Here
                    each tutorial is beautifully described step by step.</p>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/10minuteschool"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/10ms_insta/?fbclid=IwAR0-kg6VrR-cNhsrUYycp1AHG7gUFaPPRJPDGf44k_B1xuTwzFXD11XlZBo"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://www.youtube.com/c/10MinuteSchoolMain"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/10ms/?fbclid=IwAR3maQ75NlD5oM_Sm8fDzLn9-O3p4QZPNYKHd7IISO0ksrVqwjNH1QrFqkc"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy; <a href="https://www.facebook.com/10minuteschool">Lazy Developer</a> </p>
                <div className="footer-menu">
                    <ul className="f-menu">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/courseCategories">Courses</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;