//css
import '../css/ContactPage.scss'
import '../css/ButonsAndLinks.scss'

//media


//deendencies
import { motion } from "framer-motion"
import { useI18n } from 'react-simple-i18n'
import SimpleReactValidator from 'simple-react-validator';
import { useState, useEffect, useRef, ReactComponent } from 'react';



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


    const forceUpdate = () => {
        rerender(render => !render)
    }

    const simpleReactValidator = useRef(new SimpleReactValidator(
        {
            messages: {
                email: t('invalidEmailMessage'),
                required: t('requredFieldMessage')
            },
        }
    ))

    const submitHandle = (e) => {
        e.preventDefault()

        if (simpleReactValidator.current.allValid()) {

            console.log('valid sending');
            setInfo('wysłano wiadomość')
            // setTimeout(() => {
            //     setInfo('')
            // }, 5000);

        } else {

            simpleReactValidator.current.showMessages()
            forceUpdate()
            console.log('not valid');
        }
    }

    useEffect(() => {
        simpleReactValidator.current.hideMessages()
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
                    onSubmit={submitHandle} >
                    <div>
                        <input
                            id='name-input'
                            type="text"
                            name='name'
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                            onBlur={() => simpleReactValidator.current.showMessageFor('name')}
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
                            rows="10"
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                            onBlur={() => simpleReactValidator.current.showMessageFor('message')}
                        ></textarea>
                        <label htmlFor="message-input">{t('messageContent')}</label>
                        {simpleReactValidator.current.message('message', message, 'required')}
                    </div>
                    <div>
                        <button
                            type="submit"
                        >{t('send')}</button>
                    </div>
                </form>

            </div>
            <AnimatedInfoPortal>
                {info && <InfoBar text={info} closeHandle={setInfo} />}
            </AnimatedInfoPortal>
        </motion.div>
    );
}

export default ContactPage;