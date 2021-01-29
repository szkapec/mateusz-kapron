import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { reduxImg, nodeImg, expressImg, mongodbImg, passportImg, storybookImg, firebaseImg, herokuImg, netlifyImg, restImg, axiosImg, contentfullImg, sassImg, javascriptImg, htmlImg, cssImg, joomlaImg, wordpressImg } from '../../../assets/exportDetails';
import { useTranslation } from 'react-i18next';

const DescriptionTechnologies = ({ technologies, previous, next, library }) => {
    const { t } = useTranslation();

    return (
        <div className="description-technologies">
            <div className="project-desc">{t('projectDescription.technologies')}</div>
            <StyledContainerImage>{technologies && technologies.split(',').map(item => (
                <SwitchImage>{switchIcon(item)}</SwitchImage>
            ))}</StyledContainerImage>
            <div className="link">
                <Link target="_blank" to={`/project/${previous}`}>Poprzedni</Link>
                <Link target="_blank" to={`/project/${next}`}>Następny</Link>
            </div>
        </div>
    )
}

export default DescriptionTechnologies;



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



