import '../css/ActivePageIndicator.scss'

const PageNameSpan = ({ name }) => {
    return (
        <div className="active-page-indicator"  >
            <span>{name}</span>
        </div>
    );
}

export default PageNameSpan;