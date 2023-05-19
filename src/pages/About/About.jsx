import React from 'react'
import './About.css'
import Skills from '../../Components/skills'
import Info from '../../Components/Info'
import Stats from '../../Components/Stats'
import CV from "../../assets/OmarCV.pdf";
import { resume } from '../../data'
import ResumeItem from '../../Components/ResumeItem'
import { FaDownload } from 'react-icons/fa'
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className='section__title'>
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle ">Personal Infos</h3>
            <ul className="info__list grid">
              <Info/>

            </ul>

            <a href={CV} download='' className="button">Download CV <span className="button__icon"><FaDownload/></span></a>
          </div>

          <div className="Stats grid"><Stats/></div>
        </div>
      </section>
      <div className="separator">
      </div>
        <h3 className="section__subtitle subtitle__center text-center">
          My Skills
        </h3>
<div className="skills__container grid">
<Skills/>
</div>
<div className="separator">
      </div>
    <section className="resume">
<h3 className="section__subtitle subtitle__center text-center">Experien<span>ce</span>& Edu<span>ca</span>tion</h3>

<div className="resume__container grid">
<div className="resume__data">
{resume.map((val)=>{
  if(val.category ==='experience'){
    return<ResumeItem key={val.id} {...val}/>
  }
})}
</div>
<div className="resume__data">
{resume.map((val)=>{
  if(val.category ==='education'){
    return<ResumeItem key={val.id} {...val}/>
  }
})}
</div>
</div>
      
    </section>
    
    </main>
  )
}

export default About