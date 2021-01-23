import React, { useState, useEffect } from 'react'
import animations from '../../assets/home/animate.svg';
import styled from 'styled-components';
import { course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake, movies, meme, encript, appPost, fullStack, appHotel, cmdStalowa } from '../../assets/export';
import { reduxImg, nodeImg, expressImg, mongodbImg, passportImg, storybookImg, firebaseImg, herokuImg, netlifyImg, restImg, axiosImg, contentfullImg, sassImg, javascriptImg, htmlImg, cssImg, joomlaImg, wordpressImg } from '../../assets/exportDetails';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


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

    const { description, github, live, name, technologies, id, functions, functionality, next, previous } = project;


    const loaded = (
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
                <div className="description-technologies">
                    <div className="project-desc">{t('projectDescription.technologies')}</div>
                    <StyledContainerImage>{technologies && technologies.split(',').map(item => (
                        // <Button key={item} item={item}>{item}</Button>
                        <SwitchImage>{switchIcon(item)}</SwitchImage>
                    ))}</StyledContainerImage>
                    <div className="link">
                        <Link target="_blank" to={`/project/${previous}`}>Poprzedni</Link>
                        <Link target="_blank" to={`/project/${next}`}>Następny</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </header>
    )
    const details = (
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
    return (
        <section className="details">
            {loading ? details : loaded}
        </section>
    )
}

export default Details;



const StyledContainerImage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    section {
        width: 100%;
        margin-top: 20px;
    }
    @media(min-width:700px){
        grid-template-columns: repeat(4,1fr);
        section {
            margin-top: 30px;
        }
    }

`

const SwitchImage = styled.div`
    i {
        font-size: 40px;
        width: 40px;
        height: 40px;
    }
    img {
        font-size: 40px;
        width: 40px;
        height: 40px;
    }
    @media(min-width:1100px){
    i {
        font-size: 50px;
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
    img {
        font-size: 50px;
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
    }
    }
`



const switchIcon = (item) => {

    switch (item) {
        case "React": return <section>
            <i style={{ color: '#61dbfb' }} className="fab fa-react"></i><div>React</div>
        </section>

        case "JavaScript": return <section>
            <img src={javascriptImg} alt="JavaScript" /> <div>JavaScript</div>
        </section>

        case "Redux": return <section>
            <img src={reduxImg} alt="redux" /><div>Redux</div>
        </section>

        case "SASS": return <section>
            <img src={sassImg} alt="sass" /> <div>SASS</div>
        </section>

        case "Node": return <section>
            <img src={nodeImg} /><div>Node.js</div>
        </section>

        case "Stripe": return <section>
            <i style={{ color: '#646ede' }} className="fab fa-stripe-s"></i><div>Stripe</div>
        </section>

        case "Express": return <section>
            <img src={expressImg} alt="express" /><div>Express</div>
        </section>

        case "MongoDB": return <section>
            <img src={mongodbImg} alt="mongodb" /><div>MongoDB</div>
        </section>

        case "Passport": return <section>
            <img src={passportImg} alt="passport" /><div>Passport</div>
        </section>

        case "Storybook": return <section>
            <img src={storybookImg} alt="storybook" /><div>Storybook</div>
        </section>

        case "React Context": return <section>
            <i style={{ color: '#61dbfb' }} className="fab fa-react"></i><div>React Context</div>
        </section>
        case "Axios": return <section>
            <img src={axiosImg} alt="axios" /><div>Axios</div>
        </section>

        case "Firebase": return <section>
            <img src={firebaseImg} alt="firebase" /><div>Firebase</div>
        </section>

        case "Netlify": return <section>
            <img src={netlifyImg} alt="netlify" /><div>Netlify</div>
        </section>

        case "Heroku": return <section>
            <img src={herokuImg} alt="heroku" /><div>Heroku</div>
        </section>

        case "API": return <section>
            <img src={restImg} alt="Rest API" /><div>Rest API</div>
        </section>

        case "Contentfull": return <section>
            <img src={contentfullImg} alt="ContentFull" /><div>ContentFull</div>
        </section>

        case "HTML": return <section>
            <img src={htmlImg} alt="HTML" /><div>HTML</div>
        </section>

        case "CSS": return <section>
            <img src={cssImg} alt="CSS" /><div>CSS</div>
        </section>

        case "Joomla": return <section>
            <img src={joomlaImg} alt="Joomla" /><div>Joomla</div>
        </section>

        case "Wordpress": return <section><img src={wordpressImg} alt="wordpress" /><div>Wordpress</div></section>
    }
}


// const Button = styled.button`
//     background: ${({ item }) => switchBackground(item)};
//     color: rgb(5, 90, 150);;
// 	border: none;
// 	margin:10px;
//     padding: 5px 16px;
//     transition: .4s ease-in-out;
//     :hover {
//         background-color: ${({ item }) => switchBackground(item, 'hover')}
//     }
//     @media(min-width: 600px) {
//         font-size: 16px;
//         padding: 7px 18px;
//         letter-spacing: 2px;
//     }
// `

// const switchBackground = (item, hover = null) => {
//     switch (item) {
//         case "Redux": case "React":
//         case "SASS": case "Node":
//         case "Stripe": case "Express":
//         case "React-Redux": {
//             if (hover) return 'rgb(101, 0, 0)'
//             else return 'linear-gradient(#d0664c, #d04624 )'
//         }
//         case "Moment": case "Swiper Slide":
//         case "MongoDB": case "Passport":
//         case "Storybook": case "Moment":
//         case "Moment": {
//             if (hover) return 'rgb(150, 7, 7)'
//             else return '#dcca46'
//         }
//         case "Firebase": case "React Context":
//         case "Styled-Components": case "Axios":
//         case "Context API": case "JSX": case "API":
//         case "JavaScript": case "LocalStorage":
//         case "CreateContext": case "PropTypes":
//         case "PageContext": case "React-Hook": case 'React-Tabs':
//         case "Contentfull": {
//             if (hover) return 'rgb(148, 98, 4)'
//             else return "#77C0EF"
//         }
//         default: {
//             if (hover) return "rgb(1, 84, 1)"
//             else return '#53ac5d'
//         }

//     }
// }



