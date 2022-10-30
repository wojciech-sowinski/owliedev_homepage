//css
import '../css/LanguageAnThemeSwitcher.scss'
//lang
import LandData from '../languages/languages'
//dependencies
import React from 'react';
import Switch from "react-switch";
import { useI18n } from 'react-simple-i18n'
//media
import { ReactComponent as Moon } from '../media/img/moon-outline.svg'
import { ReactComponent as Sun } from '../media/img/sunny-outline.svg'
import { ReactComponent as FlagPl } from '../media/img/pl-flag.svg'
import { ReactComponent as FlagEn } from '../media/img/en-flag.svg'

export const LanguageAnThemeSwitch = (props) => {

    const { t, i18n } = useI18n()
    const languageChange = () => {
        if (i18n.getLang() === 'pl') {
            i18n.setLang('en')
            document.cookie = `lang=en`
        } else {
            i18n.setLang('pl')
            document.cookie = `lang=pl`
        }
    }
    const languageFlagRender = () => {
        switch (i18n.getLang()) {
            case 'pl':
                return <FlagEn />
            case 'en':
                return <FlagPl />
            default:
                return <FlagEn />
        }
    }

    return (
        <div className='language-theme-mode'>
            <Switch
                className="theme-mode-switch"
                onChange={() => {
                    props.toogleDarkModeHandle()
                }}
                checked={props.darkMode}
                offColor="#666"
                onColor="#666"
                offHandleColor="#fff"
                onHandleColor="#fff"
                uncheckedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 4
                        }}
                    >
                        <Moon />

                    </div>
                }
                checkedIcon={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 4
                        }}
                    >
                        <Sun />
                    </div>
                }
            />
            <div onClick={languageChange} className='language-picker'>{languageFlagRender()}</div>
        </div >
    )
};
