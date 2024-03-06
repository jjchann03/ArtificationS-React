import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-container">
                <div id="intro" className="footer-intro">
                    <h3>BlueMoon</h3>
                    <p>2024. All Rights Reserved.
                        <br/>
                        All the legal domains and names are owned by the legal owner
                        of the restaurant. Any violation of the legal code can be used 
                        in court of evidence.
                    </p>
                    <div className="icon-container">
                        {/* <img src={insta}/>
                        <img src={fb}/>
                        <img src={twitter}/>
                        <img src={whtsapp}/> */}
                    </div>
                </div>
                <div id="about" className="footer-info">
                    <h3>About</h3>
                    <p><Link to='/story' className='footer-link'>History</Link></p>
                    <p><Link to='/story' className='footer-link'>Our Team</Link></p>
                    <p><Link to='/story' className='footer-link'>Brand Guidelines</Link></p>
                    <p><Link to='/story' className='footer-link'>Terms & Conditions</Link></p>
                </div>
                <div id="services" className="footer-info">
                    <h3>Services</h3>
                    <p><Link to='/story' className='footer-link'>How to order</Link></p>
                    <p><Link to='/story' className='footer-link'>Our Product</Link></p>
                    <p><Link to='/PROFILE/bookingHistory' className='footer-link'>Booking Status</Link></p>
                    <p><Link to='/PROFILE/promo' className='footer-link'>Promo</Link></p>
                </div>
                <div id="other" className="footer-info">
                    <h3>Other</h3>
                    <p><Link to='/contact' className='footer-link'>Contact Us</Link></p>
                    <p><Link to='/contact' className='footer-link'>Help</Link></p>
                    <p><Link to='/PROFILE' className='footer-link'>Privacy</Link></p>
                </div>
            </div>
        </div>
    )
}