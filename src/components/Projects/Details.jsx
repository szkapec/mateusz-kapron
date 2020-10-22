import React, {useState,useEffect,useContext} from 'react'
import animations from '../../assets/animate.svg';
import styled from 'styled-components';
import {course, firebase, weather, baflix, bowling, fullstack, corona, todoapp, reactArticle, hotel, twitters, weatherReact, ecommers, generate, roboto, snake} from '../../assets/export';
import { CartContext } from "../Context/Context";
const Details = (props) => {

    const context = useContext(CartContext);
    const application = [firebase, course, baflix, fullstack, ecommers, corona, twitters, reactArticle, weatherReact, weather, hotel, generate, todoapp, snake, roboto, bowling]
    console.log(context)
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState('');
    const [technology, setTechnology] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => setLoading(), 1500);
        context.data.project.map(item => {
            if(item.route===props.match.params.id){
                 return setProject(item)
            }
           
        }, [])
    }, [project, context])

    const {description, github, live, name, technologies, id} = project;
    const loaded = (
       <div className="context">
            <div className="loaded">
                <div className="loaded__name">{name}</div>
                <div className="loaded__description">{description}</div>
                <img className="loaded__img" src={application[id]} alt={name}/>
                <div className="loaded__button">
                    <a href={github}><button className="loaded__button__left " >GitHub</button></a>
                    <a href={live}><button className="loaded__button__right">Demo</button></a>
                </div>
                <div className="description-technologies">
                <div>{context.data.stos.technology}</div>
                <div>{technologies&&technologies.split(',').map(item=> (
                    <Button item={item}>{item}</Button>
                ))}</div>
            </div>
        </div>
           {/* <StyledNav>
                <Link to={`/${previous}`}><button> poprzedni</button></Link>
                <Link to={`/${next}`}><button>następny </button></Link>
           </StyledNav> */}
       </div>
    )
   
    const details = (
        <div className="loader">
        <img className="animations" src={animations} alt="animations"/>
		<div className="cover">
			<div className="cover-line">
				<div className="line">
					<div className="progress-line color">
						<div className="belt"/>
					</div>
				</div>
			</div>
		</div>
        <div className="description">{context.data.stos.build}</div>
	</div>
    )


    return (
        <section className="details">
            {loading?details:loaded}
        </section>
    )
}




export default Details;


const Button = styled.button`
    background-color: ${({item}) => item === "Redux" || item==="React" || item === "React-Redux" || item === "SASS" || item === "Node" || item ==="Stripe" || item === "Express"
    ? 'rgb(130, 6, 6)' : item === "Moment" || item === "Swiper Slide" || item === "MongoDB" || item === "Passport" || item==="Storybook"
     ? "red" : item === "Firebase" || item === "React Context" || item === "Styled-Components" || item === "Axios" || item === "Context API" ||
      item ==="JSX" || item === "JavaScript" || item === "CreateContext" || item === "PropTypes" || item === "PageContext" || item === "Contentfull"
     ? "orange" : "green"};
	border: none;
	margin:10px;
    padding: 5px 16px;
    transition: .4s ease-in-out;
    :hover {
        background-color: ${({item}) => item === "Redux" || item==="React" || item === "React-Redux" || item === "SASS" || item === "Node" || item ==="Stripe" || item === "Express"
    ? 'rgb(101, 0, 0)' : item === "Moment" || item === "Swiper Slide" || item === "MongoDB" || item === "Passport" || item==="Storybook"
     ? "rgb(150, 7, 7)" : item === "Firebase" || item === "React Context" || item === "Styled-Components" || item === "Axios" || item === "Context API" ||
      item ==="JSX" || item === "JavaScript" || item === "CreateContext" || item === "PropTypes" || item === "PageContext" || item === "Contentfull"
     ? "rgb(148, 98, 4)" : "rgb(1, 84, 1)"};
    }
    
    @media(min-width: 600px) {
        font-size: 16px;
        padding: 7px 18px;
        letter-spacing: 2px;
    }
`


