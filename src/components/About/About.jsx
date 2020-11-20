import React from 'react'
import cvs from '../../assets/icon/resume.svg'
import analitics from '../../assets/icon/analytics.png';
import poeplecoding from '../../assets/icon/poeplecoding.png';
import people from '../../assets/icon/people.svg';
import cvp from '../../assets/pdf/Mateusz Kaproń-CV.pdf';
const About = ({ db }) => {
    const { hello, description, home, experience, programing, cv, ignite, info } = db.sectionOne;
    return (
        <main className="about-my" id="about">
            <figure className="portfolio-container">
                <img className="portfolio" src={poeplecoding} alt="analitic" />
            </figure>
            <section className="about" >
                <h2 className="about-my__hello">{hello}</h2>
                <div className="about__description">
                    <div className="about__description__portfolio">
                        <figure>
                            <img data-aos="fade-left" src={people} alt="people" />
                        </figure>
                        <h2>{home}</h2>
                        <figure>
                            <img data-aos="fade-right" src={analitics} alt="analitics" />
                        </figure>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {experience}
                    </div>
                    <figure>
                        <img className="search" src={cvs} alt="cvs" />
                    </figure>
                    <div>
                        {programing}
                    </div>
                    <div >
                        {info}<a className="cv" href={cvp}><button>{cv}</button></a>
                    </div>
                    <div>{ignite}</div>
                    <a className="about__link" href="https://github.com/">
                        <figure>
                            <i data-aos="flip-up" style={{ fontSize: "40px", color: 'black', padding: '20px 0 30px' }} className="fab fa-github"></i>
                        </figure>
                    </a>
                </div>
            </section>
        </main>
    )
}

export default About;