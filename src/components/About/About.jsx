import React from 'react'
import cvs from '../../assets/icon/resume.svg'
import analitics from '../../assets/icon/analytics.png';
import poeplecoding from '../../assets/icon/poeplecoding.png';
import people from '../../assets/icon/people.svg';

const About = ({db}) => {
    const {hello, description, home, experience, programing, cv, ignite, info} = db.sectionOne;
    return (
        <section className="about-my" id="about">
            
             <div className="portfolio-container">
                <img className="portfolio" src={poeplecoding} alt="analitic"/>
             </div>
            <div className="about" >
            <div className="about-my__hello">{hello}</div>

                <div className="about__description">
                    <div className="about__description__portfolio">
                        <img  data-aos="fade-left" src={people} alt="people"/>
                        <h2>{home}</h2>
                        <img  data-aos="fade-right"  src={analitics} alt="analitics"/>
                    </div>
                    <div> 
                        {description}
                    </div>
                    <div> 
                        {experience}
                    </div>
                    <img  className="search" src={cvs} alt="cvs"/>
                    <div>
                        {programing}
                    </div>
                    <div >
                    {info}<a className="cv" href={cv}><button>{cv}</button></a>
                    </div>
                    <div>{ignite}</div>
                    <a className="about__link" href="https://github.com/"> 
                        <i data-aos="flip-up" style={{fontSize:"40px", color: 'black', padding: '20px 0 30px'}} className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;