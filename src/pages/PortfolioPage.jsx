//css
import '../css/PortfolioPage.scss'
import '../css/ButonsAndLinks.scss'

//media
import portfolioImgBookin from '../media/img/bookin.webp'
import portfolioImgLeda from '../media/img/komornikledzinska.webp'
import portfolioImgGral from '../media/img/komornik3.webp'
import portfolioImgSowa from '../media/img/muzykalnasowa.webp'
import portfolioImgLenik from '../media/img/komorniklenik.webp'
import portfolioImgPolk from '../media/img/komornkpolkowska.webp'
import portfolioImgMachy from '../media/img/machymachy.webp'
import portfolioImgSzym from '../media/img/komotrnikszymczak.webp'
import portfolioImgPytel from '../media/img/komornikpytel.webp'


//dependencies
import { motion } from "framer-motion"
import { useI18n } from 'react-simple-i18n'
import { Helmet } from 'react-helmet-async'

//components
import PageNameSpan from "../components/PageNameSpan";

const PortfolioPage = () => {

    const { t, i18n } = useI18n()
    const buttonClickHandle = (e) => {
        e.target.classList.toggle('open')
    }

    return (
        <>
            <Helmet htmlAttributes={{ lang: i18n.getLang() }}>
                <link rel="canonical" href="/portfolio" />
                <title>{t("nav.portfolio")}</title>
                <meta
                    name="description"
                    content={t("metaDesc.portfolio")}
                />
            </Helmet>
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
                        <a
                            href="https://komornik-sochaczew.pl/"
                            target='_blank'
                            rel="noreferrer">
                            <img src={portfolioImgPytel} alt="komornik Damian Pytel thumbnail" />
                            <div>
                                <p> {t('homepage')} Komornika Damiana Pytel</p>
                                <p> {t('tehnologiesUsed')}</p>
                                <p>
                                    <span>Wordpress</span>
                                    <span>JavaScript</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div>
                        <button className='info-btn' onClick={buttonClickHandle}>i</button>
                        <a
                            href="http://bookin.owliedev.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="https://komornik-ledzinska.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="https://www.komornik3.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="https://muzykalnasowa.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="http://pragapoludniekomornik.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="http://komornik-polkowska.pl/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="https://tinder-clone-v-dep-client.vercel.app/"
                            target='_blank'
                            rel="noreferrer">
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
                        <a
                            href="http://wolominkomornik.pl/"
                            target='_blank'
                            rel="noreferrer">
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

        </>
    );
}

export default PortfolioPage;


