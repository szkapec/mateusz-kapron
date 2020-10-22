import React from 'react'
import fb from '../../assets/facebook.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg';
import gmail from '../../assets/gmail.svg';
import telephone from '../../assets/phone-call.svg';

const NavBar = () => {

    return (
        <section id="home">
            <nav>
                <div className="pictures"></div>
            </nav>
            <div className="astronomy"></div>
            <section className="community">
                <h1>Mateusz Kaproń</h1>
                <h2 data-aos="flip-up">Front-end developer</h2>
                <div className="image">
                    <a rel="noreferrer" href="https://www.facebook.com/mateusz.kapron.50"> 
                        <div className="image__container" data-aos="fade-right" data-aos-delay="500">
                            <img  className="image__one"  src={fb} alt="facebook"/>
                        </div>
                    </a>
                    <a rel="noreferrer" href="https://github.com/szkapec">
                         <div className="image__container" data-aos="flip-left" data-aos-delay="500">
                            <img className="image__one" src={github} alt="github"/>
                         </div>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/">
                         <div className="image__container" data-aos="fade-left" data-aos-delay="500">
                            <img className="image__one" src={linkedin} alt="linkedin"/>
                         </div>
                    </a>
                </div>
                 <div className="imagetwo" data-aos="fade-right" data-aos="fade-up" data-aos-delay="500" >
                    <a className="onepicture"  href="tel:+48661360889"><img  className="imagetwo-image onepicture" src={telephone} alt="phone"/></a>
                    <a className="twopicture" href="mailto:mateusz.kapron24@gmail.com"><img className="imagetwo-image twopicture"  src={gmail} alt="gmail"/> </a> 
                <div className="response"></div>
                
              
            </div>
            
            </section>
           
        </section>
    )
}

export default NavBar;