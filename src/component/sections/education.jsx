import React from 'react';
import { GiGraduateCap, GiSandsOfTime } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";

export const Education = () => {
  return (
    <>
    <div className="education" id='Education'>
      <h1>Education</h1>
      <div className='education-school'>
        <div>
            <h2><GiGraduateCap/> Software Developer </h2>
            <GiSandsOfTime/>Feb. 2023 - Dec. 2023<br/>
            <p><BiSolidSchool/> Software Developement Academy</p><br/>
            <section>
                <ul>
                <li>Python</li>
                <li>Databases: MySQL</li>
                <li>Design Pattern and Good Practices</li>
                <li>Algorithm and Data Structures</li>
                <li>Django Framework</li>
                </ul>
            </section>
           </div>
            <div>
                <h2><GiGraduateCap/> Master's degree in Accounting and Information Systems</h2>
                <GiSandsOfTime/>Oct. 2019 - Jun. 2021<br/>
                <p><BiSolidSchool/> Academy of Economic Studies, Bucharest</p><br/>
                <section>
                    <ul>
                    <li>Accounting</li>
                    <li>Financial Markets</li>
                    <li>Web Design</li>
                    <li>Cyber security</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
    </>
  )
}


