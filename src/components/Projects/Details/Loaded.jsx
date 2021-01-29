import React from 'react'
import { useTranslation } from 'react-i18next';
import Nav from '../../Nav/Nav';
import animations from '../../../assets/home/animate.svg';
const Loaded = () => {
    const { t } = useTranslation();
    return (
        <header className="loader">
            <Nav show={true} />
            <figure>
                <img className="animations" src={animations} alt="animations" />
            </figure>
            <div className="cover">
                <div className="cover-line">
                    <div className="line">
                        <div className="progress-line color">
                            <div className="belt" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">{t('stos.build')}</div>
        </header>
    )
}

export default Loaded
