//css
import './css/App.scss';

//dependencies
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react';
import { useI18n } from 'react-simple-i18n'

//components
import MainNav from './components/MainNav';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import { click } from '@testing-library/user-event/dist/click';

function App() {

  const Location = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('pl')
  const { t, i18n } = useI18n()

  const parseCookie = str =>
    str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});

  const toogleDarkModeHandle = () => {
    document.cookie = `darkMode=${!darkMode}`
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    if (document.cookie) {
      const parsedCookie = parseCookie(document.cookie)
      if (parsedCookie.darkMode === 'true') {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
      if (parsedCookie.lang === 'en') {
        i18n.setLang('en')
      }
    }
  }, [])


  return (
    <div className="App" id={darkMode ? 'dark' : ''}>
      <header className="App-header">
        <MainNav darkMode={darkMode} toogleDarkModeHandle={toogleDarkModeHandle} />
      </header>
      <main>
        <div className='page-container'>
          <AnimatePresence exitBeforeEnter >
            <Routes location={Location} key={Location.pathname}>
              <Route path='/' element={<HomePage />} />
              <Route path='/portfolio' element={<PortfolioPage />} />
              <Route path='*' element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;
