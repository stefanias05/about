import React from "react";
import {About} from '../component/sections/about';
import {Education } from '../component/sections/education';
import { Skills } from "../component/sections/skills";
import {Experiences} from '../component/sections/experiences';
import {Projects} from '../component/sections/projects';



function Home () {
    return(
        <>
        <About/>
        <Education/>
        <Skills/>
        <Experiences/>
        <Projects/>
        </>
    )
};

export default Home;