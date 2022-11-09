//css
import '../css/ContactPage.scss'
import '../css/ButonsAndLinks.scss'

//media


//deendencies
import { motion } from "framer-motion"
import { useI18n } from 'react-simple-i18n'
import SimpleReactValidator from 'simple-react-validator';
import { useState, useEffect, useRef, ReactComponent } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import BounceLoader from "react-spinners/BounceLoader";



//components
import PageNameSpan from "../components/PageNameSpan";
import InfoBar from '../components/InfoBar';
import AnimatedInfoPortal from '../components/AnimatedInfoPortal';


const ContactPage = () => {

    const { t, i18n } = useI18n()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [render, rerender] = useState(false);
    const [info, setInfo] = useState('')
    const [sendingMsg, setSendingMsg] = useState(false)
    const [showRecaptcha, setShowRecaptcha] = useState(false)



    const forceUpdate = () => {
        rerender(render => !render)
    }

    const formRef = useRef(null)

    const simpleReactValidator = useRef(new SimpleReactValidator(
        {

            messages: {
                email: t('invalidEmailMessage'),
                required: t('requredFieldMessage')
            },

        }
    ))

    const clearFormFields = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const submitHandle = (e) => {
        e.preventDefault()
        if (!showRecaptcha && simpleReactValidator.current.allValid()) {
            setShowRecaptcha(true)
        } else {
            forceUpdate()
            simpleReactValidator.current.showMessages()
        }

    }

    const sendMessageHandle = () => {

        if (simpleReactValidator.current.allValid()) {

            setSendingMsg(true)

            axios.post('https://booksy-clone.vercel.app/contactsendmsg', {
                name,
                email,
                message
            })
                .then(response => {
                    if (response.status === 200 && response.data.result === 'message sent') {
                        setInfo(t('messageSent'))
                        setSendingMsg(false)
                        setShowRecaptcha(false)
                        clearFormFields()
                    } else {
                        setInfo(t('messageNotSent'))
                        setSendingMsg(false)
                        setShowRecaptcha(false)
                    }
                })

        } else {
            simpleReactValidator.current.showMessages()
            setShowRecaptcha(false)
            forceUpdate()
        }
    }

    useEffect(() => {
        simpleReactValidator.current.hideMessages()
        // simpleReactValidator.current.showMessages = false

    }, [render])


    return (
        <motion.div
            className="contact-page"
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -1000, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <PageNameSpan name={t('nav.contact')} />
            <div>
                <div className="contact-info">
                    <span>{t('contactInfo.haveQuestions')} </span>
                    <span>{t('contactInfo.moreAbout')}</span>
                    <span>{t('contactInfo.writeToMe')}</span>
                    <span className='pink'><a href="mailto:wojciech.sowinski@owliedev.pl">wojciech.sowinski@owliedev.pl</a></span>
                    <span>{t('contactInfo.contactForm')}</span>
                </div>
                <form
                    className='contact-form'
                    onSubmit={submitHandle}
                    ref={formRef}>
                    <div>
                        <input
                            id='name-input'
                            type="text"
                            name='name'
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                            onFocus={() => simpleReactValidator.current.showMessageFor('name')}
                        />
                        <label htmlFor='name-input'>{`${t('firstName')}, ${t('lastName')}`}</label>
                        {simpleReactValidator.current.message('name', name, 'required')}

                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            id="email-input"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            onBlur={() => simpleReactValidator.current.showMessageFor('email')}
                        />
                        <label htmlFor="email-input">Email</label>
                        {simpleReactValidator.current.message('email', email, 'email|required')}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message-input"
                            cols="30"
                            rows="5"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                            onBlur={() => simpleReactValidator.current.showMessageFor('message')}
                        ></textarea>
                        <label htmlFor="message-input">{t('messageContent')}</label>
                        {simpleReactValidator.current.message('message', message, 'required')}
                    </div>
                    <div>
                        {showRecaptcha && <ReCAPTCHA
                            sitekey="6LcI6u0iAAAAAFqD6EydQOH4tONEZiVb6tPU9kKi"
                            onChange={sendMessageHandle}
                            onExpired={() => { setShowRecaptcha(false) }}
                        />}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={(sendingMsg ? true : false) || (showRecaptcha ? true : false)}
                        >{sendingMsg ? t('sending') : t('send')}
                            {sendingMsg && <BounceLoader
                                color={'#37ccae'}
                                size={20}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />}
                        </button>
                    </div>
                </form>

            </div >
            <AnimatedInfoPortal>
                {info && <InfoBar text={info} closeHandle={setInfo} />}
            </AnimatedInfoPortal>
        </motion.div >
    );
}

export default ContactPage;