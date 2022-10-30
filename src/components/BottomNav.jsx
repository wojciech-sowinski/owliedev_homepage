//css
import '../css/BottomNav.scss'
import '../css/ButonsAndLinks.scss'
//media
import { ReactComponent as Star } from '../media/img/star-sharp.svg'
//dependencies
import star from '../media/img/star-sharp.svg';
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from 'react-simple-i18n';

export const BottomNav = () => {

    const { t, i18n } = useI18n()

    return (
        <nav className="bottom-nav">
            <NavLink className={'progres-hover'} to={'portfolio'}> <span>{t('nav.seePortfolio')}</span> </NavLink>
            <Star />
            <Link className={'progres-hover'} to={star}> <span> {t('nav.getCv')} </span> </Link>
            <Star />
            <a className={'progres-hover'} href="mailto:wojciech.sowinski@owliedev.pl">
                <span>{t('contactLink')}</span>
            </a>
        </nav>
    )
};
