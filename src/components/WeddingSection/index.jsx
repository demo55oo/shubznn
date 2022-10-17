import React, { useEffect } from 'react'
// import Video from '../Videos&audios/IMG_0256.MP4'
// import Video2 from '../Videos&audios/Sweet bridal.mp4'
// import Image from '../images/6.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import './WeddingSection.css'

const WeddingSection = ({ id }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='wedding__section' id={id}>
      <div className="container" data-aos="fade-up">
        <h2 className="section__title tv">Are You <span>Engaged</span>? Delight Your <br/><span>Wedding</span></h2>
        <div className="weddings__media">
          <div>
            {/* <video src={Video} controls autoPlay muted alt="" /> */}
          </div>
          <div className='weddings__text'>
            <h4>HOW TO GET AWESOME CINEMATIC WEDDING?</h4>
            <p>
              It is a know phenomenon that a wedding ceremony is usually done once and the memories are needed to linger forever. A life time event cannot be well detailed through mere pictures or low quality video. A low quality video makes the event boring and absolutely ruins the long lasing memory.

              SHUBZ Visuals creates high-end photography + cinematography for brides and grooms. We capture your WEDDING, also your social EVENTS and turn it into a forever event in form of cinematic pictures.
            </p>
          </div>
        </div>
        <div className="weddings__media">
          <div>
            {/* <video src={Video2} controls autoPlay muted alt="" /> */}
          </div>
          <div className='weddings__text'>
            <h4>6 Guaranteed Benefits You Get.</h4>
            <p><span>1)</span> Free creative Pre-Wedding Video + Photo Shoot</p>
            <p><span>2)</span> Free Wedding trailer in full HD</p>
            <p><span>3)</span> DVD Delivery in full HD</p>
            <p><span>4)</span> Two Frames</p>
            <p><span>5)</span> One Photobook</p>
            <p><span>6)</span> Soft copies of all pictures treated in high resolution</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingSection