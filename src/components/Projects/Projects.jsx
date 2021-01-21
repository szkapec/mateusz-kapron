import React, {useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake, movies,meme, encript, appPost, fullStack, appHotel, cmdStalowa} from '../../assets/export';
import Main from './Main';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../Context/Context';
export default function Projects() {
    const { t } = useTranslation();
    const ctx = useContext(CartContext);
    const application = [firebase, course, baflix, fullstack, ecommers, corona, twitters, reactArticle, weatherReact,
        weather, hotel, generate, todoapp, snake, roboto, bowling, meme, encript, movies, fullStack, appPost, appHotel, cmdStalowa ]
    const [categorie, setCategories] = useState('')
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([]);
        t('project', { returnObjects: true }).map(item => {
            if (categorie === "Games") {
                if (item.id ===17 || item.id === 15) {
                   return setProjects(prevState => [...prevState, item])
                }
            }
            if (item.technologies.indexOf(categorie) >= 0) {
                return setProjects(prevState => [...prevState, item])
            }
        })
    }, [categorie, ctx.language])
    return (
        <>
            <Main/>
            <section className="projects" id="projects">
            
                <header className="categories">
                    <button onClick={() => setCategories('')}>{t('projectDescription.all')}</button>
                    <button onClick={() => setCategories('React')}>React</button>
                    <button onClick={() => setCategories('Redux')}>Redux</button>
                    <button onClick={() => setCategories('Node')}>Node</button>
                    <button onClick={() => setCategories('SASS')}>SASS</button>
                    <button onClick={() => setCategories('Context')}>Context</button>
                    <button className="opacity" onClick={() => setCategories('JavaScript')}>JavaScript</button>
                    <button className="opacity" onClick={() => setCategories('Styled-Components')}>Styled</button>
                    <button className="opacity" onClick={() => setCategories('Games')}>{t('projectDescription.game')}</button>
                </header>
                <article className="container">
                    <div className="description-categorie">{categorie === "" ? t('projectDescription.allproject') : categorie ? (<div>{t('projectDescription.category')} <b>{categorie}</b></div>) : 'Error'}</div>
                    <div className="grid">
                        {projects.map(item => {
                            return (
                                <div className="grid__application" key={item.name}>
                                    <h2 className="description-aplication">{item.name}</h2>
                                    <div className="single-project">
                                        <img className="project-img" src={application[item.id]} alt={`${item.name}`} />
                                        <div className="project-info">
                                            <div className="slide">
                                                <div className="info-text">{item.desc}</div>
                                                <div className="info-button">
                                                    <NavLink to={`/project/${item.route}`}> <button className="button-left" type="button">{t('projectDescription.details')}</button></NavLink>
                                                    <a href={item.live}> <button className="button-right" type="button">{t('projectDescription.live')}</button></a>
                                                </div>
                                            </div>
                                            <div className="anime-image-top"></div>
                                            <div className="anime-image2-top"></div>
                                            <div className="anime-image-bottom"></div>
                                            <div className="anime-image2-bottom"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </article>
            </section>
        </>
    )
}
