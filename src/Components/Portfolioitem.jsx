import React, { useState } from 'react'
import Close from "../assets/close.svg"

const Portfolioitem = ({img, title, details}) => {
const [modal, setModal]= useState(false);
const toggleModal=()=>{
  setModal(!modal);
}


  // This component renders a portfolio item with an image, title, and details.
  return (
    <div className="Portfolio__item">
      <img src={img} alt="" className="Portfolio__img" />
      <div className="Portfolio__hover" onClick={toggleModal}>
        <h3 className='Portfolio__title'>{title}</h3>
      </div>

     
      {modal &&( <div className="Portfolio__modal">
        <div className="Portfolio__modal-content">
          <img src={Close} alt="" className="modal__close" onClick={toggleModal} />
          <h3 className='modal__title'>{title}</h3>
          <ul className="modal__list grid">
            {details.map(({icon,title,desc},index)=>{
              return(
                <li className="modal__item" key={index}>
                  <span className="item__icon">{icon}</span>
                <div>
                  <span className='item__title'>{title}</span>
                  <span className='item__details'>{desc}</span>
                </div>
                </li>
              );
            })}
          </ul>
          <img src={img} alt="" className='modal__img' />
        </div>
      </div>

      )}
    </div>
  );
}

export default Portfolioitem