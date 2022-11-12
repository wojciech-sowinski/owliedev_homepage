//css
import '../css/BottomNav.scss'
import '../css/ButonsAndLinks.scss'
//media
import { ReactComponent as Star } from '../media/img/star-sharp.svg'
import { ReactComponent as GitHubLogo } from '../media/img/logo-github.svg'
import CV from '../media/docs/CV_Wojciech_Sowinski.pdf'
//dependencies
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from 'react-simple-i18n';

export const BottomNav = () => {

    const { t, i18n } = useI18n()

    const downloadFile = (file, fileName) => {
        fetch(file)
            .then(response => {
                response.blob().then(blob => {
                    const fileURL = window.URL.createObjectURL(blob);
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = fileName;
                    alink.click();
                })
            })
    }

    return (
        <nav className="bottom-nav">
            <Link
                className={'progres-hover'}
                to={'portfolio'}>
                <span>{t('nav.seePortfolio')}</span>
            </Link>
            <Star />
            <Link
                className={'progres-hover'}
                to={'#'}
                onClick={() => { downloadFile(CV, 'CV_Wojciech_Sowiński.pdf') }}>
                <span> {t('nav.getCv')} </span>
            </Link>
            <Star />
            <Link
                className={'progres-hover'}
                to={'contact'}>
                <span>{t('contactLink')}</span>
            </Link>
            <Star />
            <a
                className={'progres-hover'}
                href='https://github.com/wojciech-sowinski'>
                <span>{t('nav.gitHub')}<GitHubLogo /></span>
            </a>

        </nav>
    )
};
