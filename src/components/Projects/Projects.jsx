import React, { useState, useEffect } from 'react'

// import course from '../../assets/projects/course.PNG';
// import firebase from '../../assets/projects/firebase.png';
// import weather from '../../assets/projects/weather-aplication.PNG';
// import baflix from '../../assets/projects/baflix.png'
// import bowling from '../../assets/projects/bowling.PNG'
// import fullstack from '../../assets/projects/React-node-express2.PNG';
// import corona from '../../assets/projects/react-corona.PNG';
// import todoapp from '../../assets/projects/to-do-app.PNG';
// import reactArticle from '../../assets/projects/react-articles.PNG';
// import hotel from '../../assets/projects/react-hotel.PNG';
// import twitters from '../../assets/projects/twitters.PNG';
// import weatherReact from '../../assets/projects/weather-aplication-react.PNG';
// import ecommers from '../../assets/projects/ecommers2.PNG';
// import generate from '../../assets/projects/generate.PNG';
// import roboto from '../../assets/projects/Roboto.png';
// import snake from '../../assets/projects/snake2.PNG';
// import movies from '../../assets/projects/movies.png';
// import meme from '../../assets/projects/memegenerator.PNG';
// import encript from '../../assets/projects/encrypt-decrypt.PNG';
// import fullStack2 from '../../assets/projects/fullstack2.png';
// import appPost from '../../assets/projects/appposts.png';
import { NavLink } from 'react-router-dom';
import {course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake, movies
    ,meme, encript, appPost, fullStack} from '../../assets/export';
import Main from './Main';

export default function Projects({ db }) {

    const application = [firebase, course, baflix, fullstack, ecommers, corona, twitters, reactArticle, weatherReact,
        weather, hotel, generate, todoapp, snake, roboto, bowling, meme, encript, movies, fullStack, appPost ]


    const [categorie, setCategories] = useState('')
    const [projects, setProjects] = useState([]);

    const { ignite, github, all, allproject, game, details, live, category } = db.projectDesc;

    useEffect(() => {
        setProjects([]);
        db.project.map(item => {
            if (categorie === "Games") {
                if (item.id ===17 || item.id === 15) {
                    setProjects(prevState => [...prevState, item])
                }
            }
            if (item.technologies.indexOf(categorie) >= 0) {
                setProjects(prevState => [...prevState, item])
            }
        })
    }, [categorie, db])
    return (
        <>
            <Main ignite={ignite} git={github} />
            <section className="projects" id="projects">
                <div className="categories">
                    <button onClick={() => setCategories('')}>{all}</button>
                    <button onClick={() => setCategories('React')}>React</button>
                    <button onClick={() => setCategories('Redux')}>Redux</button>
                    <button onClick={() => setCategories('Node')}>Node</button>
                    <button onClick={() => setCategories('SASS')}>SASS</button>
                    <button onClick={() => setCategories('Context')}>Context</button>
                    <button className="opacity" onClick={() => setCategories('JavaScript')}>JavaScript</button>
                    <button className="opacity" onClick={() => setCategories('Styled-Components')}>Styled</button>
                    <button className="opacity" onClick={() => setCategories('Games')}>{game}</button>
                </div>
                <div className="container">

                    <div className="description-categorie">{categorie === "" ? allproject : categorie ? (<div>{category} <b>{categorie}</b></div>) : 'Error'}</div>
                    <div className="grid">
                        {projects.map(item => {
                            return (
                                <div className="grid__application" key={item.name}>
                                    <h2 className="description-aplication">{item.name}</h2>
                                    <div className="single-project">
                                        {console.log(item.id)}
                                        {console.log(application[item.id])}
                                        <img className="project-img" src={application[item.id]} alt={`${item.name}`} />
                                        <div className="project-info">
                                            <div className="slide">
                                                <div className="info-text">{item.desc}</div>
                                                <div className="info-button">
                                                    <NavLink to={`/project/${item.route}`}> <button className="button-left" type="button">{details}</button></NavLink>
                                                    <a href={item.live}> <button className="button-right" type="button">{live}</button></a>
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
                </div>
            </section>
        </>
    )
}
