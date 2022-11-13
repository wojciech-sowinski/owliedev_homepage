//css
import '../css/ProgressBar.scss'

//dependencies
import { useEffect, useState } from "react";

const ProgressBar = ({ text, progress, order }) => {


    const [progressSize, setProgressSize] = useState(0)


    useEffect(() => {

        setTimeout(() => {
            setProgressSize(progress)
        }, order * 100);

    }, [])

    return (


        <div className="progres-bar-container">
            <div
                className='progress-container'
                style={{ width: `${progressSize > 0 ? 100 : 0}%`, transition: `${2 - (progress) * 0.01}s ` }}>
                <div
                    className="progress"
                    style={{ width: `${progressSize}%`, transition: `${progress * 0.05}s ` }}></div>
            </div>
            {progressSize > 0 && <span className="progress-label">{text}</span>}
        </div >


    );
}

export default ProgressBar;