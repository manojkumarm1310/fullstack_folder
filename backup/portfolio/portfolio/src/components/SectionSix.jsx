import React from "react";
import linkedin from "../images/icon1.png";
import Instagram from "../images/icon2.png";
import twitterX from "../images/icon3.png";
import whatsapp from "../images/icon4.png";
import github from "../images/github.png";
import heart from "../images/heart.png";
export default function SectionSix()
{
    return( <footer className="section-6" id="Contact">
            <div>
                <div>
                    <h1>GET IN TOUCH</h1>
                </div>
                <div>
                    <h1>CONTACT ME</h1>
                </div>
                <div className="socialMedia">
                    <a href="http://www.linkedin.com/in/manojkumarm1310" target="_blank"><img src={linkedin}/></a>
                    <a href="https://github.com/manojkumarm1310" target="_blank"><img src={github}/></a>
                    <a href="https://api.whatsapp.com/send/?phone=919597924004" target="_blank"><img src={whatsapp} /></a>
                    <a href="https://instagram.com/_.mano._13?igshid=MzNlNGNkZWQ4Mg==" target="_blank"><img src={Instagram}/></a>
                </div>
                <div>
                    <h5>Made with <span> <img src={heart}/></span> Manojkumar</h5>
                </div>
            </div>
    </footer>)
}