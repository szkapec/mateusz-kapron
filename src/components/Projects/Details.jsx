import React, { useState, useEffect } from 'react'

import { course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake, movies, meme, encript, appPost, fullStack, appHotel, cmdStalowa } from '../../assets/export';
import { useTranslation } from 'react-i18next';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DescriptionTechnologies from './Details/DescriptionTechnologies';
import Loaded from './Details/Loaded';

const Details = (props) => {
    const { t } = useTranslation();
    const application = [firebase, course, baflix, fullstack, ecommers, corona, twitters, reactArticle, weatherReact, weather, hotel, generate, todoapp, snake, roboto, bowling, meme, encript, movies, fullStack, appPost, appHotel, cmdStalowa]
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setLoading(), 1500);
        t('project', { returnObjects: true }).map(item => {
            if (item.route === props.match.params.id) {
                return setProject(item)
            }
        }, [])
    }, [t('projectDescription.technologies')])

    const { description, github, live, name, technologies, id, functions, functionality, next, previous, library } = project;


    const Project = (
        <header className="context">
            <Nav show={true} />
            <div className="loaded">
                <div className="loaded__name">{name}</div>
                <div className="loaded__description">{description}</div>
                <figure>
                    <img className="loaded__img" src={application[id]} alt={name} />
                </figure>
                <div className="loaded__button">
                    <a href={github}><button className="loaded__button__left " >GitHub</button></a>
                    <a href={live}><button className="loaded__button__right">Demo</button></a>
                </div>
                <div className="loaded__functionality">
                    <div className="loaded__functions">{functions}</div>
                    <ul>
                        {functionality && functionality.map(item => {
                            return <li key={item.id}>{item.id}</li>
                        })}
                    </ul>
                </div>
                <DescriptionTechnologies technologies={technologies} next={next} previous={previous} library={library}/>
            </div>
                
            <Footer />
        </header>
    )

    const loaded = (
       <Loaded/>
    )
    return (
        <section className="details">
            {loading ? loaded : Project}
        </section>
    )
}

export default Details;


