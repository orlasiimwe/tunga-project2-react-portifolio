import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './album.css';
import Profile from './profile';
import Skills from './skills';
import Projects from './projects'




function Portifolio() {


  return (
    <>
      <div className='hero-image'>
        <img src='https://i.pinimg.com/564x/bb/70/72/bb70722b736f00cd79657817147807cd.jpg' alt='img' />
      </div>
      <section className="portifolio">
        <div className='getintouch'>
          <p style={{fontWeight:"bold"}}>Want to get in touch with me? {''}<Link to ='/contact'><a className='contact-index'>Leave me a message</a></Link></p>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-6'>
            <Profile/>
          </div>
          <div className='col-12 col-md-6 col-lg-6'>
            <Skills/>
          </div>
        </div>
        <div className='row' style={{paddingTop:'5%'}}>
          <div className='col-12 col-md-12 col-lg-12'>
            <Projects/>
          </div>
        </div>

        <div className='getintouch text-center' style={{paddingTop:'5%' ,paddingBottom: '10%'}}>
          <p style={{fontSize:'18px', fontWeight:'bold'}}>Lets work together {''}<Link to ='/contact'><a className='contact-index'>Leave me a message</a></Link></p>
        </div>

      </section>
    </>
  )
}

export default Portifolio
