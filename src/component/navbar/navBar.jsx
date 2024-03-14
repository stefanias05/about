import React from "react";
import {sectionID} from './sectionIDnavbar';
import { Link } from "react-router-dom";
// import { act } from "react-dom/test-utils";

export  const Navbar =() =>{
    
    //func to smoothly scroll by id
    const scrollToSection = (sectionID) =>{
        const element = document.getElementById(sectionID)
        if (element){
            const marginTop =0;
            const scrollToY = element.getBoundingClientRect().top + window.scrollY -marginTop;
            window.scrollTo({top: scrollToY, behavior: "smooth"});
        }
    };
    return(
        <>
        <nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="logo">SoftDev</div>
                    <ul className="nav-menu">
                        {
                            sectionID.map(
                                (elementsection, index)=>(
                                    <li key={index} onClick={()=>{scrollToSection(elementsection)}}>
                                        <Link to="/" className="active">{elementsection}</Link>
                                    </li>
                                )      )
                        }
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
};