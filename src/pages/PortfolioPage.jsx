//css
import '../css/PortfolioPage.scss'

//media
import portfolioImgBookin from '../media/img/bookin.png'
import portfolioImgLeda from '../media/img/komornikledzinska.png'
import portfolioImgGral from '../media/img/komornik3.png'
import portfolioImgSowa from '../media/img/muzykalnasowa.png'
import portfolioImgLenik from '../media/img/komorniklenik.png'
import portfolioImgPolk from '../media/img/komornkpolkowska.png'
import portfolioImgMachy from '../media/img/machymachy.png'
import portfolioImgSzym from '../media/img/komotrnikszymczak.png'

//deendencies
import { motion } from "framer-motion"
import { useI18n } from 'react-simple-i18n'

//components
import PageNameSpan from "../components/PageNameSpan";

const PortfolioPage = () => {

    const { t, i18n } = useI18n()
    const buttonClickHandle = (e) => {
        e.target.classList.toggle('open')
    }

    return (
        <motion.div
            className="portfolio-page"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageNameSpan name={t('nav.portfolio')} />
            <div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgBookin} alt="bookin thumbnail" />
                        <div>
                            <p> {t('designPattern')} Booksy.pl.</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>REACT</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDb</span>
                                <span>Sass</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgLeda} alt="komornik ledzinska thumbnail" />
                        <div>
                            <p> {t('homepage')} Komornika Katarzyny Ledzińskiej</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Wordpress</span>
                                <span>JavaScript</span>
                                <span>JQuery</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgGral} alt="komornik thumbnail" />
                        <div>
                            <p> {t('homepage')} Komornika Marka Gralińskiego</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Wordpress</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgSowa} alt="muzykalnasowa thumbnail" />
                        <div>
                            <p> {t('homePageAndStore')}</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Wordpress</span>
                                <span>Woocommerce</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgLenik} alt="muzykalnasowa thumbnail" />
                        <div>
                            <p> {t('homepage')} Komornka Michała Lenika</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Drupal</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgPolk} alt="muzykalnasowa thumbnail" />
                        <div>
                            <p> {t('homepage')} Komornika Eweliny Polkowskiej</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Wordpress</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgMachy} alt="muzykalnasowa thumbnail" />
                        <div>
                            <p> {t('designPattern')} Tinder</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>REACT</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDb</span>
                                <span>Sass</span>
                            </p>
                        </div>
                    </a>
                </div>
                <div>
                    <button className='info-btn' onClick={buttonClickHandle}>i</button>
                    <a href="#">
                        <img src={portfolioImgSzym} alt="muzykalnasowa thumbnail" />
                        <div>
                            <p> {t('homepage')} Komornika Huberta Szymczaka</p>
                            <p> {t('tehnologiesUsed')}</p>
                            <p>
                                <span>Wordpress</span>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioPage;


