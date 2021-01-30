import React from 'react'
import portfolio from '../../assets/home/portfolio2.png';
import { html, css, sass, bootstrap, javascript, react, rwd, sql, git, java, cpp, npm, vue, mongo, node, express, ajax, typescript, rest, redux, axios, joomla, wordpress } from '../../assets/exportSkills';
import { useTranslation } from 'react-i18next';

const Skills = () => {
    const tab = [html, css, sass, bootstrap, javascript, react, rwd, ajax, axios, cpp, git, joomla, mongo, npm, redux, rest, wordpress, sql, express, java, node, typescript, vue]
    const { t } = useTranslation();
    return (
        <section className="skills" id="skills">
            <div className="container">
                <div className="invitation-github">{t('about.ignite')} <i className="far fa-smile-wink smile"></i> <br/>
                    <a className="about__link"  href="https://github.com/"> <i className="fab fa-github"  data-aos="flip-up" ></i></a>
                </div>
                <h2>{t('stos.skills')}</h2>
                <img src={portfolio} className="skills-portfolio" alt="portfolio" />
                <div className="technologies">{t('stos.stos')}</div>
                <h3 className="advanced-skills">{t('stos.advanced')}</h3>
                <article className="article-advanced-skills">
                    {t('skills', { returnObjects: true }) && t('skills', { returnObjects: true }).map((item) => {
                        if (item.id > 6) return;
                        return (
                            <div key={item.id} data-aos="fade-right">
                                <span><img src={tab[item.id]} alt={item.src} /></span>
                                <span>{item.description}</span>
                                <p>{item.experience}</p>
                            </div>
                        )
                    })}
                </article>

                <h3 className="good-skills">{t('stos.good')}</h3>
                <article className="article-good-skills">
                    {t('skills', { returnObjects: true }) && t('skills', { returnObjects: true }).map((item) => {
                        if (item.id < 7 || item.id >= 17) return;
                        return (
                            <div key={item.id} data-aos="fade-right">
                                <span><img src={tab[item.id]} alt={item.src} /></span>
                                <span>{item.description}</span>
                                <p>{item.experience}</p>
                            </div>
                        )
                    })}
                </article>
                <h3 className="basic-skills">{t('stos.basic')}</h3>
                <article className="acticle-basic-skills">
                    {t('skills', { returnObjects: true }) && t('skills', { returnObjects: true }).map((item) => {
                        if (item.id < 17) return;
                        return (
                            <div key={item.id} data-aos="fade-right">
                                <span><img src={tab[item.id]} alt={item.src} /></span>
                                <span>{item.description}</span>
                                <p>{item.experience}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    )
}

export default Skills;