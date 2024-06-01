import React from "react";

import "../styles/utils.css";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero container">
        <div className="desc">

      <p>Our Expertise</p>
      <p>Your Expression</p>

      <button className="btn">BOOK NOW</button>

        </div>
    </section>
  );
};

export default Hero;


/**
 *  <section class="hero container">
        <img class="hero__img" src="/img/profile.JPG" alt="An image of me" />
        <h2 class="hero__subtitle typing">Hi, I'm Dilan</h2>
        <h1 class="hero__title">
          FULL-STACK WEB <br />
          DEVELOPER.
        </h1>
        <p class="hero__description">
          I'm passionate about bringing idea to live through the power of code,
          I strive to create web applications that not only meet client goals
          but also delight users. With a strong attention to detail and a drive
          for staying updated with the latest trends, I aim to bring my client's
          vision to life and make a lasting impact in the digital realm.
        </p>

        <a class="hero__btn btn" href="">Reach out</a>
      </section>
 */