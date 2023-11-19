import React from 'react'
import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'

const About = () => {
    return(
        <section id='about'>
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item=>(<Card key={item.id} className='about__card'>
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>))
                        }
                    </div>
                    <p>
                    Seasoned backend Java developer specializing in the banking sector, driving end-to-end development life cycles. Proficient in Java, Spring Boot, and Hibernate, I enhance applications with XML and HTML. Expert in designing robust databases and optimizing SQL queries for efficiency. Utilize Spring Batch for batch processing and deliver insightful reports with Jasper Reports. Collaborate effectively to develop REST APIs, ensuring seamless integration. Precision and innovation define my approach to coding.   
                    </p>
                    <p>
                    <h5>Skills</h5>
                    Java,Spring Boot,Hibernate,JPA,Spring Batch,Spring MVC,REST API,PL/SQL,Postman
                    </p>
                    <p>
                    <h5>Education</h5>
                    <b>B.Tech in Information Technology</b> -  AITH, Kanpur Aug 2017 - Aug 2021
                    <br></br>
                    <b>XII , ISC - 83% in Science & Mathematics</b> - Mother Teresa Mission Higher Secondary School | 2017   
                    </p>
                    <a href={CV} download className='btn primary'>Download CV 
                    <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About;