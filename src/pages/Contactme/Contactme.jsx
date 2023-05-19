import React from 'react'
import './Contactme.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble
} from 'react-icons/fa';

import { FiSend } from "react-icons/fi";

const Contactme = () => {
  return (
    <section className="contact section">
      <h2 className='section__title'>Get In <span>Touch</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Don't be Shy !
          </h3>
          <p className='contact__description'>
            Feel free to get in touch with me . I am awlays open to disscusing new projects, creative or Oppurtunties to be part of your visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className='info__desc'> Omar.ayman.fekry@outlook.coom</h4>


              </div>
            </div>


            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call me</span>
                <h4 className='info__desc'>+201097943406</h4>


              </div>
            </div>





          </div>
          <div className="contact__socials">
            <a href="https://www.facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>


            <a href="https://www.twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>



            <a href="https://www.youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>


            <a href="https://www.dribbble.com" className="contact__social-link">
              <FaDribbble />
            </a>

          </div>



        </div>

        <form className='contact__form'>

          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type="text" className="form__control" placeholder='Your name' />
            </div>

            <div className='form__input-div'>
              <input type="email" className="form__control" placeholder='Your Email' />
            </div>

            <div className='form__input-div'>
              <input type="text" className="form__control" placeholder='Your Subject' />
            </div>
            <div className='form__input-div'>
              <textarea placeholder='Your Message' className='form__control textarea'></textarea>
            </div>
            <button className='button text-white'>Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>

          </div>
        </form>

      </div>

    </section>

  )
}

export default Contactme