import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-section'>
                <div className='footer-section course'>
                    <h4>COURSE</h4>
                    <p>Business</p>
                    <p>Technology</p>
                    <p>Graphic Design</p>
                    <p>Self Development</p>
                </div>
                <div className='footer-section teach'>
                    <h4>TEACH</h4>
                    <p>Teach at Lektur</p>
                    <p>For school</p>
                    <p>FAQ</p>
                </div>
                <div className='footer-section resource'>
                    <h4>RESOURCE</h4>
                    <p>Contact Us</p>
                    <p>About</p>
                    <p>Careers</p>
                </div>
                <div className='footer-section copyright'>
                    <h4><span>LEKTUR</span></h4><br/>
                    <p>Lektur &copy; 2020 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
