import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

//images
import UFlogo_small from '../images/UF-logo-small.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2 className="text-lg">Contact Us</h2>
            <a>University of Florida</a>
            <a>Gainesville, FL 32611</a>
            <a>352-392-3261</a>
          </div>
          <div class='footer-link-items'>
            <h2 className="text-lg">Tools</h2>
            <a href='https://one.ufl.edu/' target="_blank">ONE.UF</a>
            <a href='https://my.ufl.edu/ps/signon.html' target="_blank">MyUFL</a>
            <a href='https://elearning.ufl.edu/' target="_blank">eLearning</a>
            <a href='https://ufalert.ufl.edu/' target="_blank">UF Alerts</a>
          </div>
          <div class='footer-link-items'>
            <h2 className="text-lg">Social Media</h2>
            <a href='https://www.facebook.com/uflorida/' target="_blank">Facebook</a>
            <a href='https://www.instagram.com/uflorida/' target="_blank">Instagram</a>
            <a href='https://twitter.com/UF/' target="_blank">Twitter</a>
            <a href='https://www.youtube.com/user/universityofflorida/' target="_blank">Youtube</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={UFlogo_small} />
            </Link>
          </div>
          <small class='website-rights'>UF © 2024</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
