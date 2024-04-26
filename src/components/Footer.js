import { PiCopyrightLight } from "react-icons/pi";
import { NavLink } from "react-router-dom"

const Footer = () => {

    return(
        <footer className='footer-font'>
            <div className="p-2 d-flex justify-content-center gap-2 footer-section-second">
                <span>
                    <span><PiCopyrightLight/></span>
                    <span className="text-uppercase"> copyright 2024</span>
                </span>
                <span>|</span>
                <span className="text-uppercase"><NavLink to="/">dicet tu distribuidora</NavLink></span>
                <span>|</span>
                <span className="text-uppercase"><NavLink to="https://www.yetiadvisers.com/" rel="noopener noreferrer nofollow" target="_blank">powered by yeti advisers</NavLink></span>
            </div>
            
        </footer>
    )
}

export default Footer