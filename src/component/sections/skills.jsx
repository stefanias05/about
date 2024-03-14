import React from 'react';
import {FaPython, FaCss3Alt, FaBootstrap, FaCheck, FaRecycle} from 'react-icons/fa'
import { SiDjango } from "react-icons/si";
import { IoMdTimer } from "react-icons/io";
import { BsTicketDetailed } from "react-icons/bs";

export const Skills = () => {
  return (
    <>
    <div className="skills" id='Skills'>
      <h1>Skills</h1>
      <hr/>
        <div className='skill-list'>
        <div>
                <section>
                    <span className="skill-icons"><FaPython/></span>
                    <p>Python</p>
                </section>
            </div>
            <div>
                <section>
                    <span className="skill-icons"><SiDjango/> </span>
                   <p> Django Framework</p>
                </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><FaCss3Alt/></span>
                    <p>Html, Css, Javascript</p> 
                </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><FaBootstrap /></span>
                    <p>Bootstrap</p>
                    </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><IoMdTimer/></span>
                    <p>Creative Thinking</p>
                </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><FaRecycle /></span>
                <p>Curiosity and lifelong learning</p>
                </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><BsTicketDetailed/></span>
                    <p>Attention to details</p>
                </section>
            </div>
            <div>
                <section>
                <span className="skill-icons"><FaCheck /></span>
                    <p>Problem Solving</p>
                </section>
            </div>

        </div>
    </div>
    </>
  )
}


