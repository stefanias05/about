import React from 'react';
import{FaGithub, FaLinkedin} from 'react-icons/fa';
import undraw from '../../assets/undraw.png';
import { IoMailOutline } from "react-icons/io5";

// const myImage = require();

export const About = () => {
  const emailAddress = 'stefaniasoare9@gmail.com';

  const sendEmail = () =>{{
    window.location.href = 'mailto:${emailAddress}';
  }};
  return (
    <>
    <div className="about" id='About'>
      <div>
            <h1>I'm Stefania Soare</h1>
            <p>Junior Software Developer</p> 
            <p>Turning ideas into reality</p>
            <article>
            <p>I am an organized person with a remarkable ability to adapt to new things.
                I want to learn and apply my knowledge in software development,
                contribute to existing projects and understand the product development.</p>
             <span className='icons'>
             <a href="https://github.com/stefanias05" rel="noopener noreferrer" className= "p-3 link-socialmedia" target="_blank"><FaGithub/></a> 
             <a href="https://www.linkedin.com/in/stefania-soare-1ba267132/" rel="noopener noreferrer" className="p-3 link-socialmedia" target="_blank"><FaLinkedin/></a>
             <IoMailOutline onClick={sendEmail} className='email'/> 
             </span>
            </article>
            </div>
            <div>
                <span>
                    <img src={undraw} className="photo"></img>
                </span>
            </div>
    </div>
    </>
  )
}

