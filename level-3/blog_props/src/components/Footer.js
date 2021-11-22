import '../css/Footer.css'
import React from 'react'

function Footer({ twitterClick }) {
    return (
        <div className='footer-wrap'>
            <ul className='icon-list'>
                <li className='twitter-icon'></li>
                <li className='facebook-icon'></li>
                <li className='github-icon'></li>
            </ul>
            <div className="copyright">Copyright © Your Website 2021</div>
        </div>
    )
}

export default Footer
