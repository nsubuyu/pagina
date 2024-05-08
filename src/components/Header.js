import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { FaBars } from 'react-icons/fa';
import logo from '../img/logo.png';

const Header = ({ varOther, setOther }) => {
    const [displayProd, setDisplayProd] = useState(false);
    const [displayLoc, setDisplayLoc] = useState(false);
    const [mobileHead, setMobileHead] = useState(false);
    const [head, setHead] = useState(false);

    const heandleHead = () => {
        setHead(!head)
    }
    const handleShowSubMenu = () => {
        setDisplayProd(true)
    }
    const handleHideSubMenu = () => {
        setDisplayProd(false)
    }
    const handleMenuMobile = () => {
        setMobileHead(!mobileHead)
    }

    const handleScroll = () => {
        let locationY = window.scrollY

        if (locationY === 0) {
            setDisplayLoc(false)
        } else {
            setDisplayLoc(true)
        }
    }

    useEffect(() => {
        setOther(false)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [setOther])

    return (
        <header className={`top-0 start-0 end-0 text-light position-fixed z-2 ${(displayLoc || varOther) ? 'background-header' : ''}`}>
            <div className="container">
                <div className="header-elementor w-100 d-flex justify-content-between align-items-center position-relative">
                    <NavLink to='/'>
                        <figure>
                            <img className='img-logo' src={logo} alt="DICET LOGO" />
                        </figure>
                    </NavLink>
                    <ul className="d-flex header-pc">
                        <li className="fw-bold">
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li className="fw-bold">
                            <NavLink to="/about">Nosotros</NavLink>
                        </li>
                        <li onMouseEnter={handleShowSubMenu} onMouseLeave={handleHideSubMenu} className={`fw-bold ${displayProd ? "animation-show" : ""}`}>
                            <span role='button'>Productos</span>
                            <div className='d-none z-3 position-absolute subheader-elementor'>
                                <ul className='d-flex flex-column px-4 ps-0 py-2'>
                                    <li className="fw-bold">
                                        <NavLink to="/cortinas">Cortinas Metálicas</NavLink>
                                    </li>
                                    <li className="fw-bold">
                                        <NavLink to="/motores">Motores</NavLink>
                                    </li>
                                    <li className="fw-bold">
                                        <NavLink to="/elevadores">Elevadores de Parqueo</NavLink>
                                    </li>
                                    <li className="fw-bold">
                                        <NavLink to="/">Toldos y Sombras</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="fw-bold">
                            <NavLink to="/contact">Contáctanos</NavLink>
                        </li>
                    </ul>
                    {/****************** Icono hamburguesa *************************/}
                    <div onClick={heandleHead} role='button' className='d-none icon-hamburguer z-3'>
                        <FaBars size={20} />
                    </div>
                    <div className={`${head ? 'header-open ' : 'header-close'} elementor-mobile-header`}>
                        <ul className='h-100 w-100 text-center ps-0'>
                            <li onClick={heandleHead} className='fw-bold py-2'>
                                <NavLink to='/'>inicio</NavLink>
                            </li>
                            <li onClick={heandleHead} className='fw-bold py-2'>
                                <NavLink to='/about'>Nosotros</NavLink>
                            </li>
                            <li role='button' onClick={handleMenuMobile} className={`fw-bold ${mobileHead ? 'animation-show' : ''}`}>
                                <span>Productos</span>
                                <div className='d-none header-service-mobile'>
                                    <ul className='d-flex flex-column px-3'>
                                        <li onClick={heandleHead} className='fw-bold py-2'>
                                            <NavLink to="/cortinas">Cortinas Metálicas</NavLink>
                                        </li>
                                        <li onClick={heandleHead} className='fw-bold py-2'>
                                            <NavLink to="/motores">Motores</NavLink>
                                        </li>
                                        <li onClick={heandleHead} className='fw-bold py-2'>
                                            <NavLink to="/elevadores">Elevadores de Parqueo</NavLink>
                                        </li>
                                        <li onClick={heandleHead} className='fw-bold py-2'>
                                            <NavLink to="/">Toldos y Sombras</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li onClick={heandleHead} className='fw-bold py-2'>
                                <NavLink to="/contact">Contáctanos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header