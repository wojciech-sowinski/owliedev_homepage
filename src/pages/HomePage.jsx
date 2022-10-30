//css
import '../css/HomePage.scss'

//media
import face from '../media/img/face-polygon-bw-1000.png'

//dependencies
import { motion } from "framer-motion"
import PageNameSpan from '../components/PageNameSpan'
import { BottomNav } from '../components/BottomNav'
import { useI18n } from 'react-simple-i18n'

const HomePage = () => {

    const { t, i18n } = useI18n()

    return (
        <motion.div
            className="home-page"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageNameSpan name={t('nav.home')} />
            <span className="hello">Hello World</span>
            <div className="home-info">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="pink">{t('hello')} </span>
                    <span>{t('homeInfo.text1')}</span>
                </motion.div>
                <div><img src={face} alt="author face" /></div>
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span>
                        {t('homeInfo.text2')} </span>
                    <a href="mailto:wojciech.sowinski@owliedev.pl"><span className="pink">{t('contactLink')}.</span></a>
                </motion.div>
            </div>
            <BottomNav />
        </motion.div >
    )
}

export default HomePage;