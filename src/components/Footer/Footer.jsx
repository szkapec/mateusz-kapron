import React from "react";
import { useTranslation } from 'react-i18next';
export default function Footer() {

  const { t } = useTranslation();
  const scrollToTop = (duration) => {
    if (document.scrollingElement.scrollTop === 0) return;
    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0;
    let oldTimestamp = null;

    function step(newTimestamp) {
      if (oldTimestamp !== null) {
        scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
        if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = 0;
        document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  return (
    <footer id="contact">
      <div className="footer-contact">
        <div>{t('contact.ignite')}</div>
        <div>{t('contact.find')}</div>
      </div>
      <div className="footer-container">
        <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmai.com</a>
        <a href="tel:+48661360889">661-360-889</a>
      </div>
      <div className="footer-link">
        <div><a href="https://github.com/szkapec"><i className="fab fa-github"></i></a></div>
        <div><a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a></div>
        <div><a href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a></div>
        <div><a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a></div>
      </div>
      <div className="copy"><p className="counter"></p>© 2020 Mateusz Kaproń. All Rights Reserved.</div>

      <div onClick={() => scrollToTop(1000)} className="arrow"><i className="fa fa-angle-down"></i></div>
    </footer>
  );
}
