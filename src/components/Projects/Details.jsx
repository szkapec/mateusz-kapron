import React, { useState, useEffect} from 'react'
import animations from '../../assets/home/animate.svg';
import styled from 'styled-components';
import { course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake, movies, meme, encript, appPost, fullStack } from '../../assets/export';
import { useTranslation } from 'react-i18next';

const Details = (props) => {
    const { t } = useTranslation();
    const application = [firebase, course, baflix, fullstack, ecommers, corona, twitters, reactArticle, weatherReact, weather, hotel, generate, todoapp, snake, roboto, bowling, meme, encript, movies, fullStack, appPost]
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

    const { description, github, live, name, technologies, id, functions, functionality } = project;
    const loaded = (
        <header className="context">
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
                    {functionality&&functionality.map(item => {
                       return <li key={item.id}>{item.id}</li>
                       
                    })}
                </ul>
                </div>
                <div className="description-technologies">
                    <div>{t('projectDescription.technologies')}</div>
                    <div>{technologies && technologies.split(',').map(item => (
                        <Button key={item} item={item}>{item}</Button>
                    ))}</div>
                </div>
            </div>
        </header>
    )
    const details = (
        <header className="loader">
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
    return (
        <section className="details">
            {loading ? details : loaded}
        </section>
    )
}


export default Details;

const Button = styled.button`
    background: ${({ item }) => switchBackground(item)};
    color: rgb(5, 90, 150);;
	border: none;
	margin:10px;
    padding: 5px 16px;
    transition: .4s ease-in-out;
    :hover {
        background-color: ${({ item }) => switchBackground(item, 'hover')}
    }
    @media(min-width: 600px) {
        font-size: 16px;
        padding: 7px 18px;
        letter-spacing: 2px;
    }
`

const switchBackground = (item, hover = null) => {
    switch (item) {
        case "Redux": case "React":
        case "SASS": case "Node":
        case "Stripe": case "Express":
        case "React-Redux": {
            if (hover) return 'rgb(101, 0, 0)'
            else return 'linear-gradient(#d0664c, #d04624 )'
        }
        case "Moment": case "Swiper Slide":
        case "MongoDB": case "Passport":
        case "Storybook": case "Moment": 
        case "Moment": {
            if(hover) return 'rgb(150, 7, 7)'
            else return '#dcca46'
        }
        case "Firebase": case "React Context":
        case "Styled-Components": case "Axios":
        case "Context API": case "JSX": case "API":
        case "JavaScript": case "LocalStorage":
        case "CreateContext": case "PropTypes":  
        case "PageContext": case "React-Hook": case 'React-Tabs':
        case "Contentfull": {
            if(hover) return 'rgb(148, 98, 4)' 
            else return "#77C0EF"
        }
        default: {
            if(hover) return "rgb(1, 84, 1)"
            else return '#53ac5d'
        }

    }
}



