//css
import '../css/InfoBar.scss'

//media

import { ReactComponent as Close } from '../media/img/close-circle-outline.svg'

//dependencies
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion"

const InfoBar = ({ text, closeHandle }) => {


    useEffect(() => {

        const closeTimer = setTimeout(() => {
            closeHandle('')
        }, 10000);

        return () => {
            clearInterval(closeTimer)

        }

    }, [])

    return (

        <motion.div
            className="info-bar"
            initial={{ x: 3000, }}
            animate={{ x: 0 }}
            exit={{ x: 3000 }}
            transition={{ duration: .5 }
            }
            onClick={() => { closeHandle('') }}
        >
            <span>
                {text}
            </span>
            <Close />

        </motion.div>


    );
}

export default InfoBar;