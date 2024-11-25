import React from "react";
import mysql_icon from "../images/mysql.ico";
import html_icon from "../images/html5.ico";
import css_icon from "../images/css3.ico"
import javascript_icon from "../images/javascript.ico";
import mongodb_icon from "../images/mongodb.ico";
import react_icon from "../images/react.ico";
import nodejs_icon from "../images/node-js.ico";
import java_icon from "../images/java.ico";

export default function SectionFour()
{
    window.addEventListener("scroll",reveal3);
    function reveal3()
    {
        var Containerreveals=document.querySelectorAll(".container");
        for(var i=0;i<Containerreveals.length;i++)
        {
           let windowheight=window.innerHeight;
           let revealtop=Containerreveals[i].getBoundingClientRect().top;
           let revealpoint=10;
  
           if(revealtop < windowheight - revealpoint)
           {
              Containerreveals[i].classList.add("active");
           }
           else{
              Containerreveals[i].classList.remove("active");
           }
        }

        let revealsBars=document.querySelectorAll(".bar");
        for(var i=0;i<revealsBars.length;i++)
        {
        let windowheight=window.innerHeight;
        let revealtop=revealsBars[i].getBoundingClientRect().top;
        let revealpoint=10;

        if(revealtop < windowheight - revealpoint)
        {
           revealsBars[i].classList.add("active");
        }
        else{
           revealsBars[i].classList.remove("active");
        }
      }

         var TechBarreveals=document.querySelectorAll(".TechBar");
        var skillsIconreveals=document.querySelectorAll(".skills_icon");
        var heading1reveals=document.querySelector(".heading1");
        for(var i=0;i<TechBarreveals.length;i++)
        {
           let windowheight=window.innerHeight;
           let revealtop=heading1reveals.getBoundingClientRect().top;
           let revealpoint=150;
        // console.log(revealtop +" __ "+( windowheight-revealpoint));
           if(revealtop < windowheight - revealpoint)
           {
              TechBarreveals[i].classList.add("progress-line");
           }
           else{
              TechBarreveals[i].classList.remove("progress-line");
           }
        }
      }
    return(
        <section className="section-4 reveal" id="Skill">
            <div className="Skills "><h1 className="sub_title">Skills</h1></div>
                <div className="section_skill width" >
                    <div className="container">
                        <h1 className="heading1" style={{color:"rgba(222, 18, 18, 0.929)"}}>What I know</h1>
                        <div className="Technical-bars">
                            <div className="bar">
                                <img className="skills_icon" src={html_icon} alt="HTML_icon" />
                                <div className="info">
                                 <span>HTML</span>
                                </div>
                                <div className="TechBar html">
                                     <span></span>
                               </div>
                            </div>
                        <div className="bar"><img className="skills_icon" src={css_icon} alt="CSS_icon" />
                    <div className="info">
                        <span>CSS</span>
                    </div>
                    <div className="TechBar css">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><img className="skills_icon" src={javascript_icon} alt="Javascript_icon" />
                    <div className="info">
                        <span>JavaScript</span>
                    </div>
                    <div className="TechBar javascript">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><img className="skills_icon" src={react_icon} alt="Reactjs_icon" />
                    <div className="info">
                        <span>React js</span>
                    </div>
                    <div className="TechBar react">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><img className="skills_icon" src={mysql_icon} alt="MySQL_icon" />
                    <div className="info">
                        <span> MySQL</span>
                    </div>
                    <div className="TechBar mysql">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><img className="skills_icon" src={mongodb_icon} alt="MongoDB_icon" />
                    <div className="info">
                        <span>MongoDB</span>
                    </div>
                    <div className="TechBar mongodb">
                        <span></span>
                    </div>
                </div>

                <div className="bar"><img className="skills_icon" src={nodejs_icon} alt="mysql_icon" />
                    <div className="info">
                        <span>Node js</span>
                    </div>
                    <div className="TechBar node">
                        <span></span>
                    </div>
                </div>
                <div className="bar"><i><img className="skills_icon" src={java_icon} alt="mysql_icon" /></i>
                    <div className="info">
                        <span>Core Java</span>
                    </div>
                    <div className="TechBar java">
                        <span></span>
                    </div>
                </div>


                        </div>
                    </div>
                    {/* <div className="container">
                        <h1 className="heading1">PROFESSIONAL SKILLS</h1>
                        <div className="radial-bars" >
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80" ></circle>
                    <circle className="path path-1" cx="100" cy="100" r="80" ></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text">Creativity</div>
              </div>
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80" ></circle>
                    <circle className="path path-2" cx="100" cy="100" r="80" ></circle>
                </svg>
                <div className="percentage">65%</div>
                <div className="text">Communication</div>
              </div>
              <div className="radial-bar">
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80" ></circle>
                    <circle className="path path-3" cx="100" cy="100" r="80" ></circle>
                </svg>
                <div className="percentage">80%</div>
                <div className="text">ProblemSolving</div>
              </div>
              <div className="radial-bar">
              <div>
                <svg x="0px" y="0px" viewBox="0 0 200 200">
                    <circle className="progress-bar" cx="100" cy="100" r="80" ></circle>
                    <circle className="path path-4" cx="100" cy="100" r="80" ></circle>
                </svg>
                <div className="percentage">90%</div>
                </div>
                <div className="text">TeamWork</div>
              </div> }

                        </div>
                    </div> */}
                </div>
        </section>

    );
}