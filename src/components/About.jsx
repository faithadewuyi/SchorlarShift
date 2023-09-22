import React from 'react'
import './About.css'
const About = () => {
  return (
    <>
    <div className='about'>
        <div className='container'>
            
        <h2>About Us</h2>
      <p>
        Welcome to <span>SchorlarShift,</span> a platform dedicated to empowering high school students on their journey to higher education.
      </p>
<div className='mission'>
      <h3>Our Mission</h3>
      <p>
        At <span>SchorlarShift,</span> we believe that access to quality educational resources is the foundation of a successful academic journey. Our mission is to provide high school students with the tools and knowledge they need to excel in their studies and confidently navigate their path to higher education.
      </p>
      </div>
      <div className='set_apart'>
      <h3>What Sets Us Apart</h3>
      <ul>
        <li>Curated Selection: We meticulously curate a diverse range of books and study materials tailored to high school curriculum and college preparation.</li>
        <li>Expert Recommendations: Our team of educators and academic experts handpick each item to ensure they align with the latest educational standards.</li>
        <li>Affordable Prices: We understand the financial constraints of students and their families. That's why we strive to offer competitive prices without compromising on quality.</li>
        <li>User-Friendly Experience: Our user-friendly website makes it easy for students to find the resources they need quickly and efficiently.</li>
      </ul>
      </div>
      
     
      <div className="founder">
        
        <div className="founder-info">
            
        <img src="images/me.jpg" alt="Founder" />
          <h4>Faith Adewuyi</h4>
          <h6>Founder & CEO</h6>
          <p>My passion for education and reading led me to create a platform dedicated to providing high school students with the resources they need to excel and thrive in their academic journey. I believe that access to quality educational materials is the cornerstone of success, and I am committed to ensuring that every student has the opportunity to navigate seamlessly into higher education. Our curated collection of books is carefully selected to empower students with the knowledge and skills they need to reach their full potential. Together, let's embark on a journey towards a brighter, more promising future for the leaders of tomorrow."</p>
        </div>
      </div>
               
        </div>
        </div>  
    </>
  )
}

export default About
