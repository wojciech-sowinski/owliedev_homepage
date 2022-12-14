import { useRef, useEffect } from 'react';
import '../css/ActivePageIndicator.scss'

const PageNameSpan = ({ name }) => {


    const ref = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
        }, 500);
    }, [])


    return (
        <div className="active-page-indicator" ref={ref}>
            <h1>{name}</h1>
        </div>
    );
}

export default PageNameSpan;