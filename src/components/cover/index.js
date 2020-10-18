import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './cover.css';



const Cover = () => {
  return (
    <section class="site-wrapper">
       {/* <div className='backimg'>
          <img src='https://i.pinimg.com/564x/e7/3d/c0/e73dc035e2dcf812fc0f4b580a306ef3.jpg' alt='cover-img'/>
        </div> */}
      <div class="site-wrapper-inner">
        <div class="container">

          <div class="inner cover">
            <h1 class="animate__animated animate__backInLeft welc">Hi and Welcome !!!!</h1>

        <h1 className='animate__animated animate__bounceInDown animate__delay-1s'> My name is<span className='animate__animated animate__bounceIn animate__delay-3 s name'> Orla</span></h1>
         
            <p class="animate__animated animate__fadeIn animate__delay-2s">A junior Developer passionate about learning and hungry for collaborations.</p>
            <p class="animate__animated animate__fadeIn animate__delay-3s">
              <Link to='/portifolio'><a className=" btn btn-default">Take a Peek at my Portifolio</a></Link>
            </p>
          </div>

        </div>

      </div>


    </section>

  )
}

export default Cover;
