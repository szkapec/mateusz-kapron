import React from 'react'
import portfolio from '../../assets/home/portfolio.png';

import html from '../../assets/skills/html-5.svg';
import css from '../../assets/skills/css-3.svg';
import sass from '../../assets/skills/sass.svg';
import bootstrap from '../../assets/skills/bootstrap-4.svg';
import javascript from '../../assets/skills/javascript-4.svg';
import react from '../../assets/skills/react.svg';
import rwd from '../../assets/skills/rwd.png';

import sql from '../../assets/skills/mysql-5.svg';
import git from '../../assets/skills/Git_icon.svg';
import java from '../../assets/skills/java.svg';
import cpp from '../../assets/skills/cpp.svg';
import npm from '../../assets/skills/npmlogo.png';
import vue from '../../assets/skills/vue.png';
import mongo from '../../assets/skills/mongo.png';
import node from '../../assets/skills/nodejs-icon.svg';
import express from '../../assets/skills/express.png';
import ajax from '../../assets/skills/ajax-icon-7.jpg';
import typescript from '../../assets/skills/typescript.svg';
import { useTranslation } from 'react-i18next';
const Skills = () => {
    const tab = [html, css, sass, bootstrap, javascript, react, rwd, ajax, cpp, git, npm, mongo, sql, express, java, node, typescript, vue]
    const { t } = useTranslation();

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
                        if (item.id < 7 || item.id >= 13) return;
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
                        if (item.id < 13) return;
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