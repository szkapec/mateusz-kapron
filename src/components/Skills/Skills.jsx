import React from 'react'
import portfolio from '../../assets/home/portfolio.png';

import { html, css, sass, bootstrap, javascript, react, rwd, sql, git, java, cpp, npm, vue, mongo, node, express, ajax, typescript, rest, redux, axios, joomla, wordpress } from '../../assets/exportSkills';

// import html from '../../assets/skills/html-5.svg';
// import css from '../../assets/skills/css-3.svg';
// import sass from '../../assets/skills/sass.svg';
// import bootstrap from '../../assets/skills/bootstrap-4.svg';
// import javascript from '../../assets/skills/javascript-4.svg';
// import react from '../../assets/skills/react.svg';
// import rwd from '../../assets/skills/rwd.png';

// import sql from '../../assets/skills/mysql.jpg';
// import git from '../../assets/skills/Git_icon.svg';
// import java from '../../assets/skills/java.png';
// import cpp from '../../assets/skills/cpp.svg';
// import npm from '../../assets/skills/npmlogo.png';
// import vue from '../../assets/skills/vue.png';
// import mongo from '../../assets/skills/mongo.png';
// import node from '../../assets/skills/nodejs-icon.svg';
// import express from '../../assets/skills/express.png';
// import ajax from '../../assets/skills/ajax-icon-7.jpg';
// import typescript from '../../assets/skills/typescript.svg';

// import rest from '../../assets/details/rest.png';
// import redux from '../../assets/details/logo-redux.png';
// import axios from '../../assets/details/axios.jpg';
// import joomlaimg from '../../assets/details/joomla.png';
// import wordpressimg from '../../assets/details/wordpress.png';


import { useTranslation } from 'react-i18next';

const Skills = () => {
    const tab = [html, css, sass, bootstrap, javascript, react, rwd, ajax, axios, cpp, git, joomla, mongo, npm, redux, rest, wordpress, sql, express, java, node, typescript, vue]
    const { t } = useTranslation();
    console.log(html, sass)
    return (
        <section className="skills" id="skills">
            <div className="container">
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