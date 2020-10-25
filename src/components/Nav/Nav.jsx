import React, {useState, useEffect, useContext} from 'react'
import {CartContext} from '../Context/Context';
import db from '../../db.json';
import dbeng from '../../db-en.json';
import menuImg from '../../assets/menu.png';
import menuImgClick from '../../assets/menuimg.png';
import poland from '../../assets/poland.svg';
import english from '../../assets/english.svg';
import homes from '../../assets/home.png'
import {NavLink} from 'react-router-dom'
export default function Nav() {
    const ctx = useContext(CartContext);
    const [data, setData] = useState(db)
    const {home, about, skills, features, project, contact, info} = data.navigate;
    const [menu,setMenu] = useState(true)

    useEffect(() => {
        ctx.changeMenu(menu)
      
    }, [menu])

    const handleClick = () => {
        setMenu(!menu)
    }
    const handleOff = () => {
        setMenu(true)
        ctx.changeMenu(true)
    }
    return (
        <section className="nav">
            <nav>
                <NavLink to={"/#home"} ><i className="fab fa-resolving homes"></i></NavLink>

                <button onClick={()=> {
                setData(db);
                ctx.changeLeanguage(db)
            }}>
                <img className="nav-img" src={poland} alt="poland"/>
            </button>
            
            <button onClick={()=> {
                setData(dbeng)
                ctx.changeLeanguage(dbeng)
            }}>
            <img className="nav-img" src={english} alt="english"/>
            </button>
                {/* <ul className="navbar" data-aos="fade-left"  data-aos-delay="1000">
                    <li> <a href="#jeden"> {home} </a></li>
                    <li> <a className="polishDwa" href="#dwa"> {about} </a></li>
                    <li> <a className="umiejetnosciA2" href="#trzy"> {skills} </a></li>
                    <li> <a className="cechyA2" href="#cztery"> {features} </a> </li>
                    <li> <a className="projektyA2" href="#piec"> {project} </a></li>
                    <li> <a className="kontaktA2" href="#szesc"> {contact} </a></li>
                </ul> */}
               <span className="menu-s">
               MENU
               </span>
                <img onClick={handleClick} className={`menu`} src={ctx.menu?menuImg:menuImgClick} alt="menu"/>
                
            </nav>
            <div className={`box ${!ctx.menu&&"trans"}`}>
                <ul className="navbar-box">
                        <li onClick={handleOff}> <a href={process.env.PUBLIC_URL+'/#home'}> {home} </a></li>
                        <li onClick={handleOff}> <a className="polishDwa" href={process.env.PUBLIC_URL+'/#about'}> {about} </a></li>
                        <li onClick={handleOff}> <a className="umiejetnosciA2" href={process.env.PUBLIC_URL+'/#skills'}> {skills} </a></li>
                        <li onClick={handleOff}> <a className="projektyA2" href={process.env.PUBLIC_URL+'/#projects'}> {project} </a></li>
                        <li onClick={handleOff}> <a className="kontaktA2" href={process.env.PUBLIC_URL+'/#contact'}> {contact} </a></li>
                    </ul>
                    <div className="box-description">
                        {info}
                    </div>
                    <div className="box-link">
                        <a href="https://github.com/szkapec"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className="box-contact"> 
                        <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmai.com</a>
                        <a href="tel:+48661360889">661-360-889</a>
                    </div>
                </div>
       
        </section>
    )
  }
