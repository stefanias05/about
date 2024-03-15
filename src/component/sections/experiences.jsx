import React from 'react'
import office from '../../../build/static/media/office.80d5c191b1da17d4a964.png';
import  {GiSandsOfTime } from "react-icons/gi";
import { BiSolidSchool } from "react-icons/bi";

export const Experiences = () => {
  return (
    <div className="experiences"id="Experiences">
      <h1>Experiences</h1>
      <div className='jobs'>
      <div>
      <section>
               <img src={office} alt="jobsimg" className='img-job'></img>
      </section>
      </div>
      <div>
      <h2>Financial Analyst </h2><br/>
      <span>
            <GiSandsOfTime/>Oct. 2022 - Present<br/>
            <p><BiSolidSchool/> Orange Romania Comunication</p><br/>
            </span>
            <section>
                <ul>
                    <li>
                        Customer Profile Analysis and Risk Identification
                    </li>
                    <li>
                        Download Reports by SQL Queries
                    </li>
                </ul>
            </section>
      </div>
      <div>
      <h2>Relationship Manager</h2><br/>
      <span>
            <GiSandsOfTime/>Apr. 2018 - Sept. 2022<br/>
            <p><BiSolidSchool/> ING Bank N.V Amsterdam </p><br/>
            </span>
            <section>
               <ul>
               <li>
                    Understanding and promoting banking products to the entire customer base
                    </li>
                    <li>
                        Analysis financial documents of legal entities.
                    </li>
               </ul>
            </section>
      </div>
      </div>
    </div>
  )
};

