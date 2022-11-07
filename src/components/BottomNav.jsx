//css
import '../css/BottomNav.scss'
import '../css/ButonsAndLinks.scss'
//media
import { ReactComponent as Star } from '../media/img/star-sharp.svg'
//dependencies
import { NavLink, Link } from 'react-router-dom';
import { useI18n } from 'react-simple-i18n';

export const BottomNav = () => {

    const { t, i18n } = useI18n()

    return (
        <nav className="bottom-nav">
            <NavLink className={'progres-hover'} to={'portfolio'}> <span>{t('nav.seePortfolio')}</span> </NavLink>
            <Star />
            <Link className={'progres-hover'} to={'#'}> <span> {t('nav.getCv')} </span> </Link>
            <Star />
            <Link className={'progres-hover'} to={'contact'}> <span>{t('contactLink')}</span> </Link>

        </nav>
    )
};
