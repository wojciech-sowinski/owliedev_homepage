//dependencies
import { AnimatePresence } from "framer-motion"
import React from "react";
import ReactDOM from "react-dom";


const AnimatedInfoPortal = ({ children }) => {
    return ReactDOM.createPortal(
        <AnimatePresence exitBeforeEnter>
            {children}
        </AnimatePresence>,
        document.body
    );
}

export default AnimatedInfoPortal;
