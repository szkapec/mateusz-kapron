import React from "react";
import styled from "styled-components";
// import fb from "../../image/facebook.PNG";
// import ln from "../../image/linkedin.PNG";
// import gh from "../../image/github.svg";
// import mail from "../../image/nav/mail.svg";
// import phone from "../../image/nav/phone.svg";
export default function Footer({db}) {


    const {ignite,find} = db.contact

    const scrollToTop = (duration) => {
        // cancel if already on top
        console.log(document.scrollingElement)
    if (document.scrollingElement.scrollTop === 0) return;

    const cosParameter = document.scrollingElement.scrollTop / 2;
    let scrollCount = 0;
    let oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            // if duration is 0 scrollCount will be Infinity
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
            <div>{ignite}</div>
            <div>{find}</div>
        </div>
        <div className="footer-container">
            <a href="mailto:mateusz.kapron24@gmail.com">mateusz.kapron24@gmai.com</a>
            <a href="tel:+48661360889">661-360-889</a>
        </div>
        <div className="footer-link">
            <div><a href="https://github.com/szkapec"><i  className="fab fa-github"></i></a></div>
            <div><a href="https://www.linkedin.com/in/mateusz-kapro%C5%84-664b92197/"><i className="fab fa-linkedin"></i></a></div>
            <div><a href="https://www.facebook.com/mateusz.kapron.50/"><i className="fab fa-facebook"></i></a></div>
            <div><a href="https://www.youtube.com/channel/UCfDIy_8Ig3F_B1-CsNi2lQw?view_as=subscriber"><i className="fab fa-youtube"></i></a></div>
         
        </div>      
      <div className="copy"><p className="counter"></p>© 2020 Mateusz Kaproń. All Rights Reserved.</div>

      <div onClick={()=>scrollToTop(1000)} className="arrow"><i className="fa fa-angle-down"></i></div>
    </footer>
  );
}
