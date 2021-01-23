import React, { useEffect, useState } from 'react'


const Home = () => {
    const [astronomy, setAstronomy] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setAstronomy(true)
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const scrolling = (instance) => {
        let node = document.getElementById(instance);
        if (node) {
            window.scrollTo({
                top: node.offsetTop,
                behavior: "smooth"
            });
        }
    }

    return (
        <header id="home">
            <figure>
                <div className="pictures"></div>
            </figure>
            {astronomy && <div className="astronomy"></div>}
            <figure className="scrolldown" onClick={() => scrolling('about')}>
                <i className="fa fa-angle-down"></i>
            </figure>
            <section className="community">
                <h1>Mateusz Kaproń </h1>
                <h2 data-aos="flip-up"> <span className='color'>Web Developer,</span> <span className="display"> Programmer <span className='color'>&</span> Designer </span></h2>
                <div className="image">
                    <a rel="noreferrer" href="https://www.facebook.com/mateusz.kapron.50">
                        <figure className="image__container" data-aos="fade-right" data-aos-delay="500">
                            <i className="fab fa-facebook-f"></i>
                        </figure>
                    </a>
                    <a rel="noreferrer" href="https://github.com/szkapec">
                        <figure className="image__container" data-aos="flip-left" data-aos-delay="500">
                            <i className="fab fa-github"></i>
                        </figure>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/">
                        <figure className="image__container" data-aos="fade-left" data-aos-delay="500">
                            <i className="fab fa-linkedin-in"></i>
                        </figure>
                    </a>
                </div>
                <div className="imagetwo" data-aos="fade-up" data-aos-delay="500" >
                    <a className="onepicture" href="tel:+48661360889">
                        <i className="fas fa-phone-alt imagetwo-image onepicture"></i>
                    </a>
                    <a className="twopicture" rel="noreferrer" href="mailto:mateusz.kapron24@gmail.com">
                        <i className="far fa-envelope imagetwo-image twopicture"></i>
                    </a>
                </div>
            </section>
        </header>
    )
}

export default Home;