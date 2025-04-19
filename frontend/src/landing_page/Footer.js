import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(250,250,250)' }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src='/logo (2).svg' style={{ width: '50%' }} alt="logo" />
            <p>
              &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          <div className='col'>
            <p>Company</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>About</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Products</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Pricing</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Referral programme</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Careers</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Zerodha.tech</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Open source</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Press & media</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Zerodha Cares (CSR)</a><br />
          </div>

          <div className='col'>
            <p>Support</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Contact</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Support portal</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Z-Connect blog</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>List of charges</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Downloads & resources</a><br />
          </div>

          <div className='col'>
            <p>Account</p>
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Open an account</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>Fund transfer</a><br />
            <a className='text-muted' href="#" style={{ textDecoration: 'none' }}>60 days challenge</a><br />
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-5 gap-4">
          <a
            href="https://www.instagram.com/zerodhaonline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            className="text-dark fs-4 me-3"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/zerodha.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            className="text-dark fs-4 me-3"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/zerodhaonline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
            className="text-dark fs-4"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        <div className='mt-5 text-muted' style={{ fontSize: '14px' }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...
          </p>
          <p>
            Investments in securities market are subject to market risks...
          </p>
          <p>
            "Prevent unauthorised transactions in your account...
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
