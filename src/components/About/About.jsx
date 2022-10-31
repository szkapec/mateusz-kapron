import React from "react";
import cvs from "../../assets/icon/resume.svg";
import analitics from "../../assets/icon/analytics.png";
import poeplecoding from "../../assets/icon/poeplecoding.png";
import people from "../../assets/icon/people.svg";
import cvp from "../../assets/pdf/Mateusz Kaproń-1.pdf";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <main className="about-my" id="about">
      {/* <figure className="portfolio-container"> */}
      {/* <img className="portfolio" src={poeplecoding} alt="analitic" /> */}
      {/* </figure> */}
      <section className="about">
        <h2 className="about-my__hello">{t("about.hello")}</h2>
        <div className="about__description">
          {/* <div className="about__description__portfolio"> */}
          {/* <figure> */}
          {/* <img data-aos="fade-left" src={people} alt="people" /> */}
          {/* </figure> */}
          {/* <h2>{t('about.home')}</h2> */}
          {/* <figure> */}
          {/* <img data-aos="fade-right" src={analitics} alt="analitics" /> */}
          {/* </figure> */}
          {/* </div> */}
          <div className="about__description-left" data-aos="fade-right">
            {t("about.description")} {t("about.experience")}
          </div>
          {/* <figure> */}
          {/* <img className="search" src={cvs} alt="cvs" /> */}
          {/* </figure> */}
          <div className="about__description-right" data-aos="fade-left">
            <div>{t("about.programing")}</div>
            <div>
              {t("about.info")}
              <a className="cv" href={cvp}>
                <button>{t("about.cv")}</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
