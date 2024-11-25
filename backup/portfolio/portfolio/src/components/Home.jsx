import React, { useEffect } from "react";
import Menu from "./Menu";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import AOS from "aos";
import "aos/dist/aos.css";

function Home()
{
    useEffect(()=>
    {
        AOS.init({duration:1500})
    },[]);

    return (<div id="Home">
        <Menu />
        <main className="Whole_section">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
        </main>
    </div>)
}

export default Home;