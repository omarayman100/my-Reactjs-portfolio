import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa';
import "./Home.css";
const Home = () => {
  return (
<section className='home section grid'>
  <img src={Profile} alt="" className="home__img" />
  <div className="home__content">
  <div className="home__data">
    <h1 className="home__title"><span>I'm Omar Ayman.</span>Web Designer </h1>
 <p className="home__description">
 I am a motivated and enthusiastic front-end developer with a passion for learning and seeking new opportunities. My expertise includes HTML, CSS, JavaScript, and other front-end technologies. I have experience working on various projects, including responsive web design, web applications, and mobile-first development. I am comfortable working independently or as part of a team and am always looking for new challenges to expand my knowledge and skills. My goal is to create user-friendly and visually appealing websites that exceed client expectations.
 </p>
 <Link to='/about' className='button'>More About me<span className='button__icon'><FaArrowRight/></span></Link>
  </div>
  </div>

  <div className="color__block">
    
  </div>
</section>
    )
}

export default Home