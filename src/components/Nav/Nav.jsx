import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../Context/Context';
import db from '../../db.json';
import dbeng from '../../db-en.json';
import menuImg from '../../assets/home/menu.png';
import menuImgClick from '../../assets/home/menuimg.png';
import poland from '../../assets/home/poland.svg';
import english from '../../assets/home/english.svg';
import { NavLink, useHistory } from 'react-router-dom'
import styled from 'styled-components'
export default function Nav(props) {
    const ctx = useContext(CartContext);
    const [data, setData] = useState(db)
    const { home, about, skills, project, contact, info } = data.navigate;
    const [menu, setMenu] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const [box, setBox] = useState(false)
    const history = useHistory();

    const scrolling = (instance) => {
        let node = document.getElementById(instance);
        let details = document.querySelector('.details')
        if (node) {
            window.scrollTo({
                top: node.offsetTop,
                behavior: "smooth"
            });
        }
        if (details) {
            history.goBack();
        }
    }

    useEffect(() => {
        ctx.changeMenu(menu)
    }, [menu])

    const handleClick = () => {
        setMenu(!menu)

    }
    const handleOff = () => {
        setMenu(true)
        setBox(!box)
        ctx.changeMenu(true)
    }

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={`${!navbar ? "nav active" : "nav"}`}>
            <>
                <NavLink to={"/#home"} ><i className="fab fa-resolving homes"></i></NavLink>
                <button onClick={() => {
                    setData(db);
                    ctx.changeLeanguage(db)
                }}>
                    <figure>
                        <img className="nav-img" src={poland} alt="język Polski" />
                    </figure>
                    
                </button>

                <button onClick={() => {
                    setData(dbeng)
                    ctx.changeLeanguage(dbeng)
                }}>
                <figure>
                    <img className="nav-img" src={english} alt="język Angielski" />
                </figure>
                
                </button>
                <h3 className="menu-s">
                    MENU
               </h3>
                <div className={`menu`} src={ctx.menu ? menuImg : menuImgClick} alt="główne menu">
                    <StyledBox box={box} onClick={() => {
                        setBox(!box)
                        handleClick()
                    }}>
                        <div className="clickafbef"></div>
                    </StyledBox>
                </div>
            </>
            <section className={`box ${!ctx.menu && "trans"} ${!navbar && " active"}`}>
                <ul className="navbar-box">
                    <li onClick={() => {
                        handleOff()
                        scrolling('home');
                    }}>
                        {home}
                    </li>
                    <li onClick={() => {
                        handleOff()
                        scrolling('about');
                    }}>{about}</li>

                    <li onClick={() => {
                        handleOff()
                        scrolling('skills');
                    }}> {skills} </li>

                    <li onClick={() => {
                        handleOff()
                        scrolling('projects');
                    }}>  {project} </li>

                    <li onClick={() => {
                        handleOff()
                        scrolling('contact');
                    }}> {contact}</li>
                </ul>
                <div className="box-description">
                    {info}
                </div>
                <div className="box-link">
                    <a rel="noreferrer" href="https://github.com/szkapec"><i className="fab fa-github"></i></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a>
                    <a rel="noreferrer" href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a>
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="box-contact">
                    <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmai.com</a>
                    <a href="tel:+48661360889">661-360-889</a>
                </div>
            </section>
        </nav>
    )
}


const StyledBox = styled.span`
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    outline: none;
    @media(min-width: 1500px) {
        margin-top: 5px;
    }
  .clickafbef::after {
    content: '';
    position: absolute;
    display: block;
    top: ${({ box }) => box ? '0px' : '-10px'};
    background-color: white;
    width: 30px;
    height: 2px;
    transform: ${({ box }) => box ? 'rotate(45deg)' : 'rotate(0)'};
    transition: .7s ease-in-out;
}
.clickafbef {
    position: absolute;
    content: '';
    top: 10px;
    display: block;
    width: 30px;
    height: 2px;
    margin-bottom: 5px;
    background-color: ${({ box }) => box ? 'transparent' : 'white'};
    transition: .7s ease-in-out;
}
.clickafbef::before {
    position: absolute;
    content: '';
    top: ${({ box }) => box ? '0px' : '10px'};
    display: block;
    width: 30px;
    height: 2px;
    margin-bottom: 5px;
    background-color: white;
    transform: ${({ box }) => box ? 'rotate(-45deg)' : 'rotate(0)'};
    transition: .7s ease-in-out;
}

  `

