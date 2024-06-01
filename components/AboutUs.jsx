import React from 'react'
import "../styles/utils.css";
import "../styles/about.css";


const AboutUs = () => {
  return (
    <section id="about" className="container about section">
        <div className="about__img__container">
      <img
        className="about__img  "
        src="/images/hero-image.png"
        data-src="img/aside.JPG"
        alt="An image of a client:)"
      />
    </div>
    <div className="about__content">
      <h2 className="about__title">About</h2>
      <p className="about__description">
        I’m a software engineer who loves creating websites and apps. I
        believe that you have to be able to see the big picture when you’re
        building something, and that’s why I like to work with a team. It’s
        also why I love working in groups where everyone has a voice, but we
        all work together toward the same goal—to make your site better than
        you could ever do on your own.
      </p>
      <hr className="about__hr" />
    </div>
    
  </section>
  )
}

export default AboutUs;

