//css
import '../css/MainNav.scss'

//media
// import Logo from '../media/img/logo-vert-1000-2.svg';
import { ReactComponent as Logo } from '../media/img/logo-vert-1000-2.svg'

//dependencies
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageAnThemeSwitch } from './LanguageAnThemeSwitch';
import { useI18n } from 'react-simple-i18n'

const MainNav = ({ darkMode, toogleDarkModeHandle }) => {

    const [showMenu, setShowMenu] = useState(false)
    const { t, i18n } = useI18n()

    const showMenuToggle = () => {
        setShowMenu(prev => !prev)
    }
    const closeMenu = () => {
        setTimeout(() => {
            setShowMenu(false)
        }, 500);
    }

    return (<>
        <div onClick={showMenuToggle} className='menu-button'>
        </div>
        <nav onClick={closeMenu} className={`main-nav ${showMenu && 'show'}`}>
            <NavLink
                end
                to={'/'}>
                <span>01</span>
                <span>{t('nav.home')}</span>
            </NavLink>
            <NavLink
                to={'about'}>
                <span>02</span>
                <span>{t('nav.about')}</span>
            </NavLink>
            <NavLink
                className={'central-logo'}
                to={'/'}>
                <div>
                    <Logo />
                </div>
            </NavLink>
            <NavLink
                to={'/contact'}>
                <span>03</span>
                <span>{t('nav.contact')}</span>
            </NavLink>
            <NavLink
                to={'portfolio'}>
                <span>04</span>
                <span>{t('nav.portfolio')}</span>
            </NavLink>
            < NavLink
                className={'bottom-logo'} to={'/'}>
                <div>
                    <img src={Logo} alt="logo ovliedev" />
                </div>
            </NavLink>
            <LanguageAnThemeSwitch darkMode={darkMode} toogleDarkModeHandle={toogleDarkModeHandle} />
        </nav>
        <div onClick={showMenuToggle} className={`menu-overlay ${showMenu && 'show'}`}></div>
    </>
    );
}

export default MainNav;