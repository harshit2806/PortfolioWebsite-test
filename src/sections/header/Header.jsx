import React from 'react'
import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
        <div className="container header__container">
          <div className="header__profile">
            <img src={HeaderImage} alt="HeaderImage" />
          </div>
          <h4>Hi :) I am Harshit Soni || Java Alchemist at TCS || Weaving Code into Innovation</h4>
          <p>Embarking on a journey defined by innovation and precision, I bring over 2  years of hands-on experience as a Java Developer. Specializing in the dynamic realms of Java and J2EE technologies, I intricately weave the threads of Spring Boot and JPA to create cutting-edge applications that transcend conventional boundaries. Let's craft a digital future together, where every line of code speaks the language of innovation and excellence.
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn'>My Work</a>
          </div>
          <div className="header__socials">
            {data.map(item=><a key={item.id} href={item.link} target='_blank'>{item.icon}</a>)}
          </div>
        </div>
    </header>
    )
}

export default Header;
