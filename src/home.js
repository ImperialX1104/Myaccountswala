import React from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { chevronUpOutline } from 'ionicons/icons';
import myimg from './image.png';
import { Link } from 'react-router-dom';
// import './index.css';
// import './bootstrap.min.css';

function Home() {
  return (
    <div>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Welcome to My Accounts Wala, your one-stop-shop for all your financial needs! No more struggling to balance your books or stressing over tax season - our website has got you covered. We offer a range of services that cater to all your accounting needs, from bookkeeping to tax preparation. Our team of experts is always available to answer your questions and provide you with personalized support whenever you need it." />
      <meta name="keywords" content="Accounting services, Bookkeeping, Tax preparation, Financial planning, Business consulting, Payroll services, Audit services, Small business accounting, Tax compliance, Tax filing, QuickBooks, Accountants, CPA, Financial reporting, Budgeting, Cash flow management, Tax advice, Estate planning, Risk management, IRS representation" />
      <meta name="author" content="Offensive Technology" />
      <meta property="og:title" content="My Accounts wala" />
      <meta property="og:description" content="Welcome to My Accounts Wala, your one-stop-shop for all your financial needs! No more struggling to balance your books or stressing over tax season - our website has got you covered. We offer a range of services that cater to all your accounting needs, from bookkeeping to tax preparation. Our team of experts is always available to answer your questions and provide you with personalized support whenever you need it." />
      <meta property="og:image" content="https://vq.pe/creator/frontend/img/2557/1676328124-WhatsApp_Image_2023-02-14_at_04.10.43-removebg-preview.png" />
      <meta property="og:url" content="https://www.myaccountswala.com/" />
      <meta property="og:type" content="website" />
      <link rel="stylesheet" href="https://vq.pe/creator/frontend/theme_10/css/style.css" />
      {/* 
    - google font link
  */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />    <title>My Accounts Wala</title>
      <meta name="description" content="Don’t make accounting a stressful one. Be patient and let our accounting firm do it for you." />
      {/* Google tag (gtag.js) */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css" />
      <link href="https://vq.pe/creator/frontend/global/css/main.css?v=1676015509" rel="stylesheet" />
      <header>
        <div className="container">
          <a href="/" className="logo">
            <img src="https://vq.pe/creator/frontend/img/2557/1676328124-WhatsApp_Image_2023-02-14_at_04.10.43-removebg-preview.png" alt="logo" id="c_1" className="dynamic c_logo" />
          </a>
          <div className="navbar-wrapper">
            <button className="navbar-menu-btn" data-navbar-toggle-btn>
              <IonIcon icon={menuOutline} />
            </button>
            <nav className="navbar" data-navbar>
              <ul className="navbar-list">
                <li className="nav-item">
                  <a href="/" className="nav-link" style={{ fontSize: 40 }}><b>My Accounts Wala</b></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <article>
          <section className="hero cdis  " id="s_1">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 hero-title dynamic" id="c_2">Your ultimate accounting agency</h1>
                <p className="hero-text dynamic" id="c_3">Don’t make accounting a stressful one. Be patient and let our accounting firm do it for you.</p>
                <a style={{ display: 'inline' }} href="#s_3" className="btn btn-primary dynamic" id="c_4">Get started</a>
              </div>
              <div id="c_5" className="dynamic hero-banner" style={{ background: 'url(https://vq.pe/creator/frontend/theme_10/images/hero-banner.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />
            </div>
            <img src="https://vq.pe/creator/frontend/theme_10/images/bg.png" alt="shape" className="shape-content" />
          </section>
          <section className="about cdis  " id="s_2">
            <div className="container">
              <div className="about-top">
                <h2 className="h2 section-title dynamic" id="c_6">Services We Provide</h2>
                <p className="section-text dynamic" id="c_7">We provide a range of services that are designed to help individuals, businesses, and organizations manage their financial affairs. Some of the services provided by <b>My Accounts Wala</b> include:</p>
                <ul className="about-list">
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <span id="c_14" icon="bi-briefcase" className="dynamic bi-briefcase" />
                      </div>
                      <h3 className="h3 card-title dynamic" id="c_8">Travell Accounting</h3>
                      <p className="card-text dynamic" id="c_9"> Specialised in all Travel Accounting Services including Cash Flow Management, General Ledger, Income Statement, and many more</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <span id="c_15" icon="bi-chat" className="dynamic bi-chat" />                </div>
                      <h3 className="h3 card-title dynamic" id="c_10">GST Related Accounting</h3>
                      <p className="card-text dynamic" id="c_11">All GST related services including GST Return, GST Registration, GST Audit, GST Annual Return, and many more</p>
                    </div>
                  </li>
                  <li>
                    <div className="about-card">
                      <div className="card-icon">
                        <span id="c_16" icon="bi-send" className="dynamic bi-send" />                </div>
                      <h3 className="h3 card-title dynamic" id="c_12">Other Accounting Services</h3>
                      <p className="card-text dynamic" id="c_13">Other services include Income Tax Return, TCS Returns, TDS Returns, Data Entry Accounting, and many more</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-bottom">
                <figure className="about-bottom-banner">
                  <img src="https://vq.pe/creator/frontend/theme_10/images/about-banner.png" alt="about banner" className="about-banner dynamic" id="c_17" />
                </figure>
                <div className="about-bottom-content">
                  <h2 className="h2 section-title dynamic" id="c_18">We’re obsessed with growth</h2>
                  <p className="section-text dynamic" id="c_19"><b>My Accounts Wala</b> has experienced significant growth since its inception, driven by our commitment to providing exceptional service to our clients. Over the years, we have expanded our service offerings, strengthened our team of professionals, and leveraged the latest technology to enhance our capabilities.</p>
                  <Link style={{ display: 'inline' }} to="/services" className="btn btn-secondary dynamic" id="c_20">All Services</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="features cdis  " id="s_3">
            <div className="container">
              <h2 className="h2 section-title dynamic" id="c_21">Our team is made up of all different backgrounds from all over the world.</h2>
              <p className="section-text dynamic" id="c_22">Our team is a diverse group of professionals, with members hailing from a wide range of cultural and geographic backgrounds. Our collective expertise and experience enable us to approach challenges with a global perspective and a deep understanding of the unique needs of our clients. </p>
              <ul className="features-list">
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src="https://vq.pe/creator/frontend/theme_10/images/feature-1.png" alt="feature banner" id="c_23" className="dynamic" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title dynamic" id="c_24">Our Mission is Clear</h3>
                    <p className="item-text dynamic" id="c_25">At <b>My Accounts Wala</b>, our mission is to deliver exceptional financial services to our clients, leveraging our expertise, experience, and cutting-edge technology to help them achieve their goals. We are committed to providing customized solutions that are tailored to the unique needs of each client, and we take pride in our ability to exceed their expectations.</p>
                  </div>
                </li>
                <li className="features-item">
                  <figure className="features-item-banner">
                    <img src="https://vq.pe/creator/frontend/theme_10/images/feature-2.png" alt="feature banner" id="c_26" className="dynamic" />
                  </figure>
                  <div className="feature-item-content">
                    <h3 className="h2 item-title dynamic" id="c_27">We offer low fees that are transparent</h3>
                    <p className="item-text dynamic" id="c_28">At <b>My Accounts Wala</b>, our commitment is to provide honest and transparent pricing, coupled with high-quality services at a fair price. Our focus is on delivering exceptional value to our clients while maintaining the highest standards of professional integrity.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* <section class="cta cdis  " id="s_4">
  <div class="container">

    <!-- <div class="cta-card">

    
    <div class="about-top" style=" max-width: 100%; ">

    <h2 class="h2 section-title dynamic" id="c_51">Latest Works</h2>
      <div style="text-align:right">
          <a href="/works/" style="margin:20px 0;display: inline-block;" class="btn btn-secondary"> View All</a>
      </div> 

      <ul class="about-list" >
      
      </ul>

    </div>

    </div> */}
          <section className="contact cdis  " id="s_5">
            <div className="container">
              <div className="contact-content">
                <h2 className="h2 contact-title dynamic" id="c_31">Fighting to reduce your TAX....</h2>
                <figure className="contact-banner">
                  <img src="https://vq.pe/creator/frontend/theme_10/images/contact.png" alt="contact banner" id="c_32" className="dynamic" />
                </figure>
              </div>
              <div className='container'>
                <form action="" method="post" className='center'>
                  <input type="hidden" name="website_id" defaultValue={2541} />
                  <div className="input-wrapper">
                    <label htmlFor="name" className="input-label">Name *</label>
                    <input type="text" name="name" id="name" required placeholder="Type Name" className="input-field" />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="phone" className="input-label">Phone</label>
                    <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" className="input-field" />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="email" className="input-label">Email Address *</label>
                    <input type="email" name="email" id="email" required placeholder="Type Email Address" className="input-field" />
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="message" className="input-label">Your Message *</label>
                    <textarea name="message" id="message" placeholder="Message" required className="input-field" defaultValue={""} />
                  </div>
                  {/* <div id="notice"></div> */}
                  <button type="submit" className="btn btn-primary" name="submit">Send Message</button>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
      <section className="cdis  " id="s_6">
        <footer>
          <div className="footer-top">
            <div className="container">
              <div className="footer-brand">
                <a href="/" className="logo">
                  <img src="https://vq.pe/creator/frontend/img/2557/1676328124-WhatsApp_Image_2023-02-14_at_04.10.43-removebg-preview.png" alt="logo" id="c_33" className="dynamic c_logo" />
                </a>
                <p className="footer-text dynamic" id="c_34">Don’t make accounting a stressful one. Be patient and let our accounting firm do it for you.</p>
              </div>
              <div className="footer-link-box">
                <ul className="footer-link-list">
                  <li>
                    <h3 className="h4 link-title dynamic" id="c_35">Address</h3>
                  </li>
                  <p className="footer-text dynamic" id="c_34">Office No. 80-D, 3rd Floor, Block-ED, Madhuban Chowk, Pitam Pura, New Delhi-110034</p>
                  <div className='image-fluid'><a href='https://www.google.com/maps/dir//Block+ED,+Dakshini+Pitampura,+Pitam+Pura,+Delhi/@28.7045536,77.0499348,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d03d8deb577d5:0x1da6bd5b01a4b49c!2m2!1d77.1323373!2d28.704428'><img src={myimg} alt="" style={{ height: '200px' }}></img></a>
                  <p className='footer-text dynamic'>Click the map to navigate</p>
                  </div>
                </ul>
                <ul className="footer-link-list">
                  <li>
                    <h3 className="h4 link-title dynamic" id="c_36">Contact Us</h3>
                  </li>
                  <p className="footer-text dynamic" id="c_34"> <b>Contact No:</b><br /> <a href="https://wa.me/+917827873400" style={{ color: 'inherit' }} target="_blank">+91 7827873400,</a> <a href="tel:+918595779775" target="_blank" style={{ color: 'inherit' }}>+91 8595779775</a> <br /><b>Email:</b><a href="mailto:gst@myaccountswala.com" target="_blank" style={{ color: 'inherit' }}>gst@myaccountswala.com,</a> <a href="mailto:madanlalgupta02@yahoo.com" target="_blank" style={{ color: 'inherit' }}>madanlalgupta02@yahoo.com</a></p>
                </ul>
                <ul className="footer-link-list">
                  <li>
                    <h3 className="h4 link-title dynamic" id="c_37">Follow Us</h3>
                  </li>
                  <li>
                    <ul className="social-list">
                      <li>
                        <a style={{ fontSize: 30, color: '#f54278' }} id="c_47" icon="bi-facebook" className="dynamic bi-facebook" href="https://www.facebook.com/profile.php?id=100003274498825" />
                      </li>
                      <li>
                        <a style={{ fontSize: 30, color: '#f54278' }} id="c_48" icon="bi-twitter" className="dynamic bi-twitter" href="#" />
                      </li>
                      <li>
                        <a style={{ fontSize: 30, color: '#f54278' }} id="c_49" icon="bi-instagram" className="dynamic bi-instagram" href="https://www.instagram.com/myaccountswala_official/" />
                      </li>
                      <li>
                        <a style={{ fontSize: 30, color: '#f54278' }} id="c_50" icon="bi-youtube" className="dynamic bi-youtube" href="#" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <a href="#top" className="go-top active" data-go-top>
          <IonIcon icon={chevronUpOutline} />
        </a>
      </section>
      <div className="editor_notice_div" id="editor_notice" />
      <div id="modal_io" />
    </div>
  );
}

export default Home;