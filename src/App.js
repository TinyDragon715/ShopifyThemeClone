import { useEffect, useState } from 'react';
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './App.scss';
import CustomDetails from './components/CustomDetails/CustomDetails';

import beoplay4 from './assets/images/beoplay-h95-4.png';
import beoplay5 from './assets/images/beoplay-h95-5.png';
import beoplay6 from './assets/images/beoplay-h95-6.png';
import beoplay7 from './assets/images/beoplay-h95-7.png';
import beoplay9 from './assets/images/beoplay-h95-9.png';
import beoplay10 from './assets/images/beoplay-h95-10.png';

import beoplay8 from './assets/images/beoplay-h95-8.png';
import beoplay11 from './assets/images/beoplay-h95-11.png';
import beoplay12 from './assets/images/beoplay-h95-12.png';

import greymist1 from './assets/images/beoplay-h95-greymist-1.png';
import greymist2 from './assets/images/beoplay-h95-greymist-2.png';
import greymist3 from './assets/images/beoplay-h95-greymist-3.png';
import greymist4 from './assets/images/beoplay-h95-greymist-4.png';
import greymist5 from './assets/images/beoplay-h95-greymist-5.png';
import greymist6 from './assets/images/beoplay-h95-greymist-6.png';
import greymist7 from './assets/images/beoplay-h95-greymist-7.png';

import payments from './assets/images/payments.png';
import logo_white from './assets/images/logo-white.png';

import video_comp from './assets/videos/Comp.mp4';

function App() {
  const mouseHover = (index =1) => {
    $('.hover-hide').hide();
    $('.list-hide').removeClass('active');
    $('.list-hide' + index).addClass('active');
    $('.hover-hide' + index).show();
  }
  const videoPlay = () => {
    if (!videoFlag) {
      $('#comp').get(0).play();
    } else {
      $('#comp').get(0).pause();
    }
    setVideoFlag(!videoFlag);
  }
  
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [videoFlag, setVideoFlag] = useState(false);

  var settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    asNavFor: slider2,
  };
  var settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: slider1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div className="App">
      <div className="popup-floating popup-floating--left small-hide">
        <ul className="list-unstyled list-social" role="list">
          <li className="list-social__item">
            <a target="_blank" rel="noopener" href="https://facebook.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 18 18">
                <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z">
              </path></svg>
            </a>
          </li>
          <li className="list-social__item">
            <a target="_blank" rel="noopener" href="https://twitter.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 18 15">
                <path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z">
              </path></svg>
            </a>
          </li>
          <li className="list-social__item">
            <a target="_blank" rel="noopener" href="https://pinterest.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-pinterest" viewBox="0 0 17 18">
                <path fill="currentColor" d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z">
              </path></svg>
            </a>
          </li>
          <li className="list-social__item">
            <a target="_blank" rel="noopener" href="http://instagram.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 18 18">
                <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
              </path></svg>
            </a>
          </li>
          <li className="list-social__item">
            <a target="_blank" rel="noopener" href="https://www.youtube.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
              <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-youtube" viewBox="0 0 100 70">
                <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
        </ul>
        <div className="popup-open">
          <h3 className="h5">Newsletter</h3>
        </div>
      </div>

      <div className='page-width'>
        <section className='section1'>
          <div className='left'>
            <Slider ref={slider => setSlider1(slider)} {...settings1} asNavFor={slider2}>
              <div><img className='media-image' src={greymist1}></img></div>
              <div><img className='media-image' src={greymist2}></img></div>
              <div><img className='media-image' src={greymist3}></img></div>
              <div><img className='media-image' src={greymist4}></img></div>
              <div><img className='media-image' src={greymist5}></img></div>
              <div><img className='media-image' src={greymist6}></img></div>
              <div><img className='media-image' src={greymist7}></img></div>
              <div><img className='media-image' src={greymist1}></img></div>
              <div><img className='media-image' src={greymist2}></img></div>
              <div><img className='media-image' src={greymist3}></img></div>
              <div><img className='media-image' src={greymist4}></img></div>
              <div><img className='media-image' src={greymist5}></img></div>
              <div><img className='media-image' src={greymist6}></img></div>
              <div><img className='media-image' src={greymist7}></img></div>
            </Slider>
            <Slider ref={slider => setSlider2(slider)} {...settings2} asNavFor={slider1}>
              <div><img className='media-image' src={greymist1}></img></div>
              <div><img className='media-image' src={greymist2}></img></div>
              <div><img className='media-image' src={greymist3}></img></div>
              <div><img className='media-image' src={greymist4}></img></div>
              <div><img className='media-image' src={greymist5}></img></div>
              <div><img className='media-image' src={greymist6}></img></div>
              <div><img className='media-image' src={greymist7}></img></div>
              <div><img className='media-image' src={greymist1}></img></div>
              <div><img className='media-image' src={greymist2}></img></div>
              <div><img className='media-image' src={greymist3}></img></div>
              <div><img className='media-image' src={greymist4}></img></div>
              <div><img className='media-image' src={greymist5}></img></div>
              <div><img className='media-image' src={greymist6}></img></div>
              <div><img className='media-image' src={greymist7}></img></div>
            </Slider>
          </div>
          <div className='right'>
            <p>BE YOURS</p>
            <p>Dynasty Headphone</p>
            <p>Ultimate over-ear headphones</p>
            <div className='price'>
              <bdi>
                <span className="price__prefix">€</span>
                899
                <sup className="price__suffix">,00</sup>
              </bdi>
            </div>
            <button className='buy-btn'>
              BUY IT NOW
            </button>
            <ul className="social-sharing list-social list-unstyled">
              <li className="list-social__item">
                <a className="social-sharing__link link link--text link-with-icon" href="//www.facebook.com/sharer.php?u=https://beyours-theme-tech.myshopify.com/products/beoplay-h95" target="_blank" rel="noopener">
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 18 18">
                    <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z"></path>
                  </svg>
                  <span className="social-sharing__title label" aria-hidden="true">Share</span>
                </a>
              </li>
              <li className="list-social__item">
                <a className="social-sharing__link link link--text link-with-icon" href="//twitter.com/share?text=Dynasty%20Headphone&amp;url=https://beyours-theme-tech.myshopify.com/products/beoplay-h95" target="_blank" rel="noopener">
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 18 15">
                    <path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z"></path>
                  </svg>
                  <span className="social-sharing__title label" aria-hidden="true">Tweet</span>
                </a>
              </li>
              <li className="list-social__item">
                <a className="social-sharing__link link link--text link-with-icon" href="//pinterest.com/pin/create/button/?url=https://beyours-theme-tech.myshopify.com/products/beoplay-h95&amp;media=//cdn.shopify.com/s/files/1/0554/5276/2172/products/beoplay-h95-1.jpg?v=1644805847&amp;description=Dynasty%20Headphone" target="_blank" rel="noopener">
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-pinterest" viewBox="0 0 17 18">
                    <path fill="currentColor" d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z"></path>
                  </svg>
                  <span className="social-sharing__title label" aria-hidden="true">Pin it</span>
                </a>
              </li>
              <li className="list-social__item">
                <a className="social-sharing__link link link--text link-with-icon" href="mailto:?&amp;subject=Dynasty%20Headphone&amp;body=https://beyours-theme-tech.myshopify.com/products/beoplay-h95">
                  <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-email-send" viewBox="0 0 24 24"><path d="M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z" fill="currentColor"></path></svg>
                  <span className="social-sharing__title label" aria-hidden="true">Email</span>
                </a>
              </li>
            </ul>
            <div className="product-link__image">
              <img src={payments}></img>
            </div>
          </div>
        </section>

        <section className='section2'>
          <p className='rte'>Moving, masterful, mesmerising. Get lost in your music with adjustable noise-cancelling headphones that redefine grab-and-go listening.</p>
          <CustomDetails title="Included in the box" open={true}>
            <p>Dynasty Headphone</p>
            <p>Aluminium carrying case</p>
            <p>USB-A to USB-C cable</p>
            <p>3.5 mm audio cable</p>
            <p>Flight adaptor</p>
            <p>Microfibre cleaning cloth</p>
            <p>Quick start guide</p>
            <p>Greeting card</p>
            <p>Instruction and care card</p>
          </CustomDetails>
          
          <CustomDetails title="Sound">
            <p>
              <strong>Noise Isolation</strong><br />
              Passive Noise Cancelling<br /><br />
              <strong>Driver Type</strong><br />
              Electrodynamic, 5.7 mm diameter<br /><br />
              <strong>Driver Sensitivity</strong><br />
              107dB ± 3dB, 1kHz @-3 dBFS (max volume) with Bluetooth playback<br /><br />
              <strong>Frequency Range</strong><br />
              20 - 20,000 Hz<br /><br />
              <strong>Customizable Sound EQ</strong><br />
              Presets available and fully customisable through the app
            </p>
          </CustomDetails>
          
          <CustomDetails title="Design">
            <p>
              <strong>Fit</strong><br />
              True wireless In-ear<br />
              Fit for sport<br /><br />
              <strong>EarGels</strong><br />
              4 pairs of silicone tips (XS, S,M,L)<br />
              3 pairs of silicone earfins (S, M, L)<br />
              Comply™ Foam tips (M size)<br /><br />
              <strong>Materials</strong><br />
              Aluminium<br />
              Polymer<br />
              Silicon<br /><br />
              <strong>Dust and Waterproof Rating</strong><br />
              IP57 rating: fully dust protected and can withstand immersion in water up to 1 meter for up to 30 minutes.<br /><br />
              <strong>Dimensions (mm)</strong><br />
              Earphones: 23 W x 25 H x 21 D<br />
              Charging case: 70.6 W x 33.5 H x 35.6 D<br /><br />
              <strong>Weight</strong><br />
              Earphones:<br />
              Right (Primary): 6.4 g<br />
              Left (Secondary): 6.4 g<br /><br />
              Charging case:<br />
              55 g (without earbuds)
            </p>
          </CustomDetails>

          <CustomDetails title="Battery">
            <p>
              <strong>Battery Life</strong><br />
              Up to 7 hours<br />
              Up to 30 hours with charging case at moderate volume<br /><br />
              <strong>Charging Time</strong><br />
              Earphones: approx. 2 ½ h<br />
              Charging Case (USB-C): 2 h<br />
              Charging Case (Qi Wireless): 2 ½ h<br /><br />
              Charging for 20 minutes gives approximately 1½ hour playback.<br /><br />
              <strong>Battery Size</strong><br />
              Earphones:<br />
              Right (Primary) 60 mAh<br />
              Left (Secondary) 60 mAh<br /><br />
              Charging Case: 450 mAh
            </p>
          </CustomDetails>

          <CustomDetails title="Connectivity">
            <p>
              <strong>Bluetooth</strong><br />
              Bluetooth 5.1<br /><br />
              <strong>Sound Codecs</strong><br />
              SBC, AAC codec, Aptx classic<br /><br />
              <strong>Microphone</strong><br />
              4 - With beamforming signal processing<br /><br />
              <strong>Inputs and Outputs</strong><br />
              1.25 m USB-A to USB-C cable for Charging<br />
              Qi Wireless Charging
            </p>
          </CustomDetails>
        </section>

        <section className='section3'>
        <div className='title'>
          <h1>Like nothing you've heard before.</h1>
          <p>
            Depth, detail and delight. Dialed up beyond expectation. This is, quite<br className='mb-hide' />
            simply, our finest headphone experience
          </p>
        </div>
        <div className='content'>
          <div className='grid-item left'>
            <ul className='page-width'>
              <li className='list-hide list-hide1 active' onMouseEnter={() => mouseHover(1)}>Crafted for the senses</li>
              <li className='list-hide list-hide2' onMouseEnter={() => mouseHover(2)}>Less effort. More emotion.</li>
              <li className='list-hide list-hide3' onMouseEnter={() => mouseHover(3)}>Almost-unreal comfort</li>
              <li className='list-hide list-hide4' onMouseEnter={() => mouseHover(4)}>Standout accessories, made to fit in</li>
              <li className='list-hide list-hide5' onMouseEnter={() => mouseHover(5)}>Fidelity that flexes</li>
              <li className='list-hide list-hide6' onMouseEnter={() => mouseHover(6)}>Music at your fingertips</li>
            </ul>

            <div className='page-width'>
              <div className="hover-hide hover-hide1">
                You can see it in the soft lambskin leather, picked and stitched with exacting attention to detail. You can feel it in the precision-cut aluminium frame that's robust yet beautiful. Even the carry case tells the story. Timeless design, made to last for generations.
              </div>
              <div className='hover-hide hover-hide2' style={{ display: 'none' }}>
                Quick set up, intuitive user controls and Bluetooth 5.1 allow you to connect easily to the devices you already love. And if you want to make a few sounds of your own, four microphones keep your voice crystal clear on calls.
              </div>
              <div className='hover-hide hover-hide3' style={{ display: 'none' }}>
                So comfortable, it's like you're not wearing them at all. Oval memory foam cushions, soft top grain lambskin and a superior fit invite you to play all day.
              </div>
              <div className='hover-hide hover-hide4' style={{ display: 'none' }}>
                Dynasty Headphone’s finishing touches are made to be touched, with matching aluminium details and woven fabric encasing the audio cable, charging cable and flight adapter.
              </div>
              <div className='hover-hide hover-hide5' style={{ display: 'none' }}>
                For the rare moments you'll take them off, Dynasty Headphone can be folded and placed into the custom hardcase, which is lined with a super soft textile finish. No matter how much you move, they'll be safe and sound.
              </div>
              <div className='hover-hide hover-hide6' style={{ display: 'none' }}>
                More bass, more warmth, more you. Personalise your listening experience with the app. The equalizer and noise cancellation adjusters give you complete control over how you listen, with just a tap.
              </div>
            </div>
          </div>
          <div className='grid-item right'>
            <div className='tab-collage__card hover-hide hover-hide1'>
              <img className='media-image' src={beoplay6}></img>
            </div>
            <div className='tab-collage__card hover-hide hover-hide2' style={{ display: 'none' }}>
              <img className='media-image' src={beoplay4}></img>
            </div>
            <div className='tab-collage__card hover-hide hover-hide3' style={{ display: 'none' }}>
              <img className='media-image' src={beoplay5}></img>
            </div>
            <div className='tab-collage__card hover-hide hover-hide4' style={{ display: 'none' }}>
              <img className='media-image' src={beoplay7}></img>
            </div>
            <div className='tab-collage__card hover-hide hover-hide5' style={{ display: 'none' }}>
              <img className='media-image' src={beoplay9}></img>
            </div>
            <div className='tab-collage__card hover-hide hover-hide6' style={{ display: 'none' }}>
              <img className='media-image' src={beoplay10}></img>
            </div>
          </div>
        </div>
        </section>
      </div>
      
      <div className='page-width'>
        <section className='section4'>
          <div className='collage-item-left'>
            <div className='collage-card'>
              <button id="Deferred-Poster-_9VUPq3SxOc" className="card deferred-media__poster" type="button" onClick={videoPlay}>
                {!videoFlag && <span className="deferred-media__poster-button motion-reduce">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" role="presentation" className="icon icon-play" fill="none" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.277 12.927V7.07l4.649 2.927-4.649 2.93zm-.134-7.235a.595.595 0 00-.32-.092c-.344 0-.623.292-.623.653v7.492c0 .119.03.235.089.337.177.309.56.41.855.224l5.954-3.747a.638.638 0 00.214-.224.673.673 0 00-.214-.897L8.144 5.691z" fill="currentColor"></path>
                  </svg>
                </span>}
                {videoFlag && <span className="deferred-media__poster-button motion-reduce">
                  |&nbsp;|
                </span>}
                <video muted id="comp" loop className='media-image'>
                  <source src={video_comp} type='video/mp4' />
                </video>
              </button>
            </div>
          </div>
          <div className='collage-item-left'>
            <div className='collage-card'>
              <img className='media-image scale-image' src={beoplay11}></img>
            </div>
          </div>
          <div className='collage-item-left'>
            <div className='collage-card'>
              <img className='media-image scale-image' src={beoplay8}></img>
            </div>
          </div>
        </section>
      </div>

      <section className='section5'>
        <div>
          <div className="footer__content-top page-width">
            <div className="grid-flex">
              <div className="footer__content-left">
                <div className="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet">
                  <footer-accordion className="accordion footer-block grid__item">
                    <div className='footer-details'>
                      <summary tabIndex="-1">
                        <h2 className="h4 accordion__title"></h2>
                      </summary>
                      <div className="footer-block__details-content footer-block-image left">
                        <a href="/">
                          <img src={logo_white} />
                        </a>
                        <p className="caption-large"></p>
                      </div>
                    </div>
                  </footer-accordion>
                  <footer-accordion className="accordion footer-block grid__item footer-block--menu">
                    <div className='footer-details'>
                      <summary tabIndex="-1">
                        <h2 className="h4 accordion__title">Our Company</h2>
                      </summary>
                      <ul className="footer-block__details-content list-unstyled">
                        <li>
                          <a href="/pages/about" className="link list-menu__item list-menu__item--link">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="/pages/careers" className="link list-menu__item list-menu__item--link">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="/pages/visit" className="link list-menu__item list-menu__item--link">
                            Visit Us
                          </a>
                        </li>
                        <li>
                          <a href="/pages/contact" className="link list-menu__item list-menu__item--link">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer-accordion>
                  <footer-accordion className="accordion footer-block grid__item footer-block--menu">
                    <div className='footer-details'>
                      <summary tabIndex="-1">
                        <h2 className="h4 accordion__title">Our Policies</h2>
                      </summary>
                      <ul className="footer-block__details-content list-unstyled">
                        <li>
                          <a href="/pages/terms" className="link list-menu__item list-menu__item--link">
                            Terms of Service
                          </a>
                        </li>
                        <li>
                          <a href="/pages/privacy" className="link list-menu__item list-menu__item--link">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/pages/shipping" className="link list-menu__item list-menu__item--link">
                            Shipping &amp; Returns
                          </a>
                        </li>
                        <li>
                          <a href="/pages/faq" className="link list-menu__item list-menu__item--link">
                            FAQs
                          </a>
                        </li>
                      </ul>
                    </div>
                  </footer-accordion>
                </div>
              </div>
              <div className="footer__content-right">
                <div className="grid">
                  <div className="grid__item small-hide">
                    <div></div>
                  </div>
                  <div className="grid__item">
                    <footer-accordion className="accordion footer-block--social">
                      <div className='footer-details'>
                        <summary tabIndex="-1">
                          <h2 className="h4 accordion__title">Follow Us</h2>
                        </summary>
                        <div className="footer-block__details-content">
                          <ul className="footer__list-social list-unstyled list-social" role="list">
                            <li className="list-social__item">
                              <a target="_blank" rel="noopener" href="https://facebook.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 18 18">
                                  <path fill="currentColor" d="M16.42.61c.27 0 .5.1.69.28.19.2.28.42.28.7v15.44c0 .27-.1.5-.28.69a.94.94 0 01-.7.28h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2.01-.1-1.01 0-1.83.3-2.45.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98c-.28 0-.5-.1-.7-.28a.94.94 0 01-.28-.7V1.59c0-.27.1-.5.28-.69a.94.94 0 01.7-.28h15.44z">
                                </path></svg>
                              </a>
                            </li>
                            <li className="list-social__item">
                              <a target="_blank" rel="noopener" href="https://twitter.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-twitter" viewBox="0 0 18 15">
                                  <path fill="currentColor" d="M17.64 2.6a7.33 7.33 0 01-1.75 1.82c0 .05 0 .13.02.23l.02.23a9.97 9.97 0 01-1.69 5.54c-.57.85-1.24 1.62-2.02 2.28a9.09 9.09 0 01-2.82 1.6 10.23 10.23 0 01-8.9-.98c.34.02.61.04.83.04 1.64 0 3.1-.5 4.38-1.5a3.6 3.6 0 01-3.3-2.45A2.91 2.91 0 004 9.35a3.47 3.47 0 01-2.02-1.21 3.37 3.37 0 01-.8-2.22v-.03c.46.24.98.37 1.58.4a3.45 3.45 0 01-1.54-2.9c0-.61.14-1.2.45-1.79a9.68 9.68 0 003.2 2.6 10 10 0 004.08 1.07 3 3 0 01-.13-.8c0-.97.34-1.8 1.03-2.48A3.45 3.45 0 0112.4.96a3.49 3.49 0 012.54 1.1c.8-.15 1.54-.44 2.23-.85a3.4 3.4 0 01-1.54 1.94c.74-.1 1.4-.28 2.01-.54z">
                                </path></svg>
                              </a>
                            </li>
                            <li className="list-social__item">
                              <a target="_blank" rel="noopener" href="https://pinterest.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-pinterest" viewBox="0 0 17 18">
                                  <path fill="currentColor" d="M8.48.58a8.42 8.42 0 015.9 2.45 8.42 8.42 0 011.33 10.08 8.28 8.28 0 01-7.23 4.16 8.5 8.5 0 01-2.37-.32c.42-.68.7-1.29.85-1.8l.59-2.29c.14.28.41.52.8.73.4.2.8.31 1.24.31.87 0 1.65-.25 2.34-.75a4.87 4.87 0 001.6-2.05 7.3 7.3 0 00.56-2.93c0-1.3-.5-2.41-1.49-3.36a5.27 5.27 0 00-3.8-1.43c-.93 0-1.8.16-2.58.48A5.23 5.23 0 002.85 8.6c0 .75.14 1.41.43 1.98.28.56.7.96 1.27 1.2.1.04.19.04.26 0 .07-.03.12-.1.15-.2l.18-.68c.05-.15.02-.3-.11-.45a2.35 2.35 0 01-.57-1.63A3.96 3.96 0 018.6 4.8c1.09 0 1.94.3 2.54.89.61.6.92 1.37.92 2.32 0 .8-.11 1.54-.33 2.21a3.97 3.97 0 01-.93 1.62c-.4.4-.87.6-1.4.6-.43 0-.78-.15-1.06-.47-.27-.32-.36-.7-.26-1.13a111.14 111.14 0 01.47-1.6l.18-.73c.06-.26.09-.47.09-.65 0-.36-.1-.66-.28-.89-.2-.23-.47-.35-.83-.35-.45 0-.83.2-1.13.62-.3.41-.46.93-.46 1.56a4.1 4.1 0 00.18 1.15l.06.15c-.6 2.58-.95 4.1-1.08 4.54-.12.55-.16 1.2-.13 1.94a8.4 8.4 0 01-5-7.65c0-2.3.81-4.28 2.44-5.9A8.04 8.04 0 018.48.57z">
                                </path></svg>
                              </a>
                            </li>
                            <li className="list-social__item">
                              <a target="_blank" rel="noopener" href="http://instagram.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 18 18">
                                  <path fill="currentColor" d="M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3.41.17.7.35 1.01.66.3.3.5.6.65 1 .12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54a4.79 4.79 0 01-.3 1.63c-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05a4.79 4.79 0 01-1.62-.3c-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1a4.87 4.87 0 01-.3-1.64c-.04-.92-.05-1.2-.05-3.54s0-2.62.05-3.54c.04-.86.18-1.32.3-1.63.16-.41.35-.7.66-1.01.3-.3.6-.5 1-.65.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06zm0-1.58C6.39 0 6.09.01 5.15.05c-.93.04-1.57.2-2.13.4-.57.23-1.06.54-1.55 1.02C1 1.96.7 2.45.46 3.02c-.22.56-.37 1.2-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13.23.58.54 1.07 1.02 1.56.49.48.98.78 1.55 1.01.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68-.01 3.62-.05.93-.04 1.57-.2 2.13-.41a4.27 4.27 0 001.55-1.01c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.61 0-2.39 0-2.68-.05-3.62a6.47 6.47 0 00-.4-2.13 4.27 4.27 0 00-1.02-1.55A4.35 4.35 0 0014.52.46a6.43 6.43 0 00-2.13-.41A69 69 0 008.77 0z"></path>
                                  <path fill="currentColor" d="M8.8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.43a2.92 2.92 0 110-5.85 2.92 2.92 0 010 5.85zM13.43 5a1.05 1.05 0 100-2.1 1.05 1.05 0 000 2.1z">
                                </path></svg>
                              </a>
                            </li>
                            <li className="list-social__item">
                              <a target="_blank" rel="noopener" href="https://www.youtube.com/shopify" className="list-social__link link link--text link-with-icon" aria-describedby="a11y-external-message">
                                <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-youtube" viewBox="0 0 100 70">
                                  <path d="M98 11c2 7.7 2 24 2 24s0 16.3-2 24a12.5 12.5 0 01-9 9c-7.7 2-39 2-39 2s-31.3 0-39-2a12.5 12.5 0 01-9-9c-2-7.7-2-24-2-24s0-16.3 2-24c1.2-4.4 4.6-7.8 9-9 7.7-2 39-2 39-2s31.3 0 39 2c4.4 1.2 7.8 4.6 9 9zM40 50l26-15-26-15v30z" fill="currentColor"></path>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </footer-accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__content-bottom">
            <div className='page-width'>
              © 2022, Be Yours. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
