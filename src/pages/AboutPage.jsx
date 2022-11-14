//css
import '../css/AboutPage.scss'

//media

import Face from '../media/img/cv_face_sq_500.jpeg'

//deendencies
import { motion } from "framer-motion"
import { useI18n } from 'react-simple-i18n'
import { NavLink, Link } from 'react-router-dom';

//components
import PageNameSpan from "../components/PageNameSpan";
import ProgressBar from '../components/ProgressBar'



const AboutPage = () => {



    const { t, i18n } = useI18n()

    return (

        <motion.div
            className="about-page"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageNameSpan name={t('nav.about')} />

            <div className='about-info'>
                <div className='personal-info'>
                    <img src={Face} alt="" />
                    <p>
                        <span className='pink'>Witaj! </span>
                        Mam na imię Wojtek.
                        Jestem początkującym Front-End Developerem.
                        Pasjonuję się efektami interfejsu użytkownika, animacjami oraz tworzeniem intuicyjnych, dynamicznych stron i sklepów dla osób takich jak Ty. W wolnych chwilach aranżacja muzyczna oraz turystyka motocyklowa.

                    </p>
                    <p>
                        <Link
                            className={'pink'}
                            to={'/contact'}>
                            <span> Skontaktuj się ze mną i stwórzmy coś razem!</span>
                        </Link>
                    </p>

                </div>
                <div className='skill-info'>
                    <ProgressBar text={'HTML'} progress={90} order={1} />
                    <ProgressBar text={'Css'} progress={90} order={2} />
                    <ProgressBar text={'JavaScript'} progress={70} order={3} />
                    <ProgressBar text={'REACT'} progress={65} order={4} />
                    <ProgressBar text={'Node.JS'} progress={50} order={5} />
                    <ProgressBar text={'MongoDB'} progress={50} order={6} />
                    <ProgressBar text={'SQL'} progress={30} order={7} />
                    <ProgressBar text={'WordPress'} progress={60} order={8} />
                    <ProgressBar text={'GIMP'} progress={70} order={9} />
                    <ProgressBar text={'InkScape'} progress={40} order={10} />
                    <ProgressBar text={'DaVinci Resolve'} progress={30} order={10} />
                </div>
            </div>


        </motion.div>


    );
}

export default AboutPage;