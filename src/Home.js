
import './Home.css'
import React, { useState } from "react";
import  './stetimg2.jpg';
import testimg1 from './testimg1.jpg';
import testimg2 from'./testimg2.jpg';
// import './testimg3.jpg';
import {BiInjection} from 'react-icons/bi';
import {TbPhysotherapist} from 'react-icons/tb';
import {MdOutlineHandshake} from 'react-icons/md';
import {TbYoga} from 'react-icons/tb';
import {GiMedicalPack} from 'react-icons/gi';
import {GiNurseMale} from 'react-icons/gi';
import {TbStethoscope} from 'react-icons/tb';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
// import {SelfImprovementIcon} from '@mui/icons-material';

export default function Home() {

    const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

    return (
        <>
        <nav className="nav">
      <a href="#" className="nav__brand">
      <h3 className='h'> 
        <span className='spa'>M</span>
        <span className='spa'>E</span>
        <span className='spa'>D</span>
        <span className='spa'>I</span>
        <span className='spa'>C</span>
        <span className='spa'>O</span>
        <span className="ser">SERVICES</span>
        </h3>
        </a>
        
        
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Our Doctors
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
    <div>
    <section className='home'>
    <h1> Your Most Trusted</h1>
    <h1>Health Partner</h1><br></br>
    <h6>
    “Hold the hand of trust” and avail the trusted and health care</h6>
    <h6> services for your loved ones with Medico Services</h6>
    <br></br>
    <Link to="/booking"><button className='btn'>Book Appointment Now</button></Link>
    
    </section>
    </div>
<h2 className="doctor">OUR DOCTORS</h2>

<div className="container">
<div className="box">
<img src="https://t4.ftcdn.net/jpg/00/69/48/11/360_F_69481147_vNyLF2u20piFO2DzaNbd0Fb5oz0i9egv.jpg" alt="doctor image" height="200px" width="300px"/>
</div>
        <div className="box">
            <img src="https://media.istockphoto.com/id/1327024466/photo/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-clinic-hall.jpg?s=612x612&w=0&k=20&c=49wqOwwuonk9f8NACL7M_5RosqQPFwJ8-dpmeo9AvQw=" alt="doctor image" height="200px"/>
            
            </div>
        <div className="box">
            <img src="https://wallpapers.com/images/featured/kwucobzhm0etbcwy.jpg" alt="doctor image" height="200px"/>

        </div>
        <div className="box">
            <img src="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8=" alt="doctor image" height="200px"/>
            
        </div>
        <div className="box">
        <img src="https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg" alt="doctor image" height="200px"/>
        
        </div>
        <div className="box">
        <img src="https://t3.ftcdn.net/jpg/03/05/69/00/360_F_305690038_kio1DI7qtf1kMPT4z6keI3GwB0zP6Sch.jpg" alt="doctor image" height="200px"/>

        </div>
        <div className="box">
        <img src="https://thumbs.dreamstime.com/b/outdoor-portrait-female-doctor-looking-to-camera-smiling-35801878.jpg" alt="doctor image" height="200px"/>
        
        </div>
        </div>
        <div>
        
        <section className='sect'>
        <div>
            <h1 className='service'>SERVICES</h1>
        </div>

        <div className='integration-list'>
        <ul>
            <li>
            <div className='serv-box1'>
            <GiNurseMale id="icon-nursemale"/>
            <h4>
            DOCTOR CONSULTATION</h4>
            <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            <div className='serv-box2'>
            <TbStethoscope id="icon-stet"/>
            <h4>MEDICAL CARE</h4>
            <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            <div className='serv-box3'>
               <BiInjection id="icon-vaccine"></BiInjection>
                <h4>VACCINATION</h4>
                <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            <div className='serv-box3'>
                <TbPhysotherapist id="icon-therapist"/>
                <h4>PHYSIOTHERAPY</h4>
                <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            </ul>
            </div>
            
            <div className='integration-lists'>
            <ul>
            <li>
            <div className='serv-box2'>
                <MdOutlineHandshake id="icon-hand"/>
                <h4>MOTHER & BABY CARE</h4>
                <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            <div className='serv-box2'>
                <TbYoga id="icon-yoga"/>
                <h4>YOGA & WELLNESS</h4>
                <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            <div className='serv-box2'>
                <GiMedicalPack id="icon-medical"/>
                <h4>MEDICAL DRESSING</h4>
                <Link to="/booking"><h4 className='btn2'>BOOK NOW</h4></Link>
            </div>
            </li>
            <li>
            
            </li>
        </ul>
        </div>
        
        </section>
        </div>
        <div>
        {/*<section className='section'>
        
    </section>*/}
    <section id='testimonials' className='dark-gray'> 
    <div className='wrapper'>
      <h2 id='testid'>What Our Patients Says?</h2>
      <div className='content-container'>
      <div className='testimonial'>
      <img src={testimg1}></img>
      <div className='reviewer-details'>
      <div className='name'>Peter Adams</div>
      <div className='company-name'>Coimbatore</div>
      <div className='review'>
      "I love the Services"
      </div>
      </div>
      </div>
      
      </div>
      <div className='content-container'>
      <div className='testimonial'>
      <img src={testimg2}></img>
      <div className='reviewer-details'>
      <div className='name'>Julia Merlin</div>
      <div className='company-name'>Chennai</div>
      <div className='review'>
      "Very Caring"
      </div>
      </div>
      </div>
      
      </div>
      <div className='content-container'>
      <div className='testimonial'>
      <img src={testimg1}></img>
      <div className='reviewer-details'>
      <div className='name'>Jhon Alison</div>
      <div className='company-name'>Namakkal</div>
      <div className='review'>
      "Great services."
      </div>
      </div>
      </div>
      
      </div>
    </div>
    </section>
        </div>
        <div>
        <footer className='foot'>
        
        <div className='foot-flex'>
        <ul>
        <li>
        <div className='foot-appointment'>
        <h1>MEDICO</h1>
        <h3>SERVICES</h3><br></br>
        <h3 className='heal'>Healthcare Especially</h3>
        <h3 className='heal'> For You.</h3><br></br>
        <TbStethoscope className='stet2'/>
        </div>
        </li>
        <li>
        <div className='vertical'></div>
        </li>
        <li>
        <div className='foot1'>
          <h3>CONTACT US</h3><br></br>
          <h5>Medico Services</h5>
          <h5>A 1/37 Sector-G, Ghandhipuram</h5>
          <h5>COIMBATORE, 641012</h5><br></br>
          <h3>+91 9597712723</h3>
          <h5>contact@medico.com</h5><br></br><br></br>
          
          </div>
          </li>
        <li>
        <div className='foot2'>
          <h3>LEGAL</h3><br></br>
          <h5>Privacy Policy</h5>
          <h5>Terms of Use</h5>
          <h5>Legal Notice</h5>
        </div>
        </li>
        <li>
        <div className='foot3'>
          <h3>SOCIAL</h3><br></br>
          <h5><InstagramIcon className='insta'></InstagramIcon>  Instagram</h5>
          <h5><LinkedInIcon className='lin'></LinkedInIcon>  LinkedIn</h5>
          <h5><YouTubeIcon className='insta'></YouTubeIcon>  YouTube</h5>
        </div>
        </li>
        <li>
          <div className='foot4'>
            <h3>TAGS</h3><br></br>
            <h5>medical care&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;therapy</h5>
            <h5>surgery &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emergency</h5>
            <h5>medication</h5>
          </div>
        </li>
        </ul>
        </div>
        <h6 className='cpyri'><CopyrightIcon></CopyrightIcon> Medico Services 2023. All rights reserved</h6>
        </footer>
        </div>
        </>
        )
}

