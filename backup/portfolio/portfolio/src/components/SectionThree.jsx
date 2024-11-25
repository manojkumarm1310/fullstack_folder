import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
export default function SectionThree()
{

  window.addEventListener("scroll",reveal1);
  function reveal1()
  {
        let reveals=document.querySelector(".edu_section");
        let reveal=document.querySelector(".edu_container");
        let windowheight=window.innerHeight;
        let revealtop=reveals.getBoundingClientRect().top;
        let revealpoint=150;

        if(revealtop < windowheight - revealpoint)
        {
           reveal.classList.add("active");
        }
        else{
           reveal.classList.remove("active");
        }
     }

  window.addEventListener("scroll",reveal2);
  function reveal2()
  {
        let reveals=document.querySelector(".edu_section");
        let revealRight=document.querySelectorAll(".edu_detailRight");
        for(let i=0;i<revealRight.length;i++)
        {
        let windowheight=window.innerHeight;
        let revealtop=reveals.getBoundingClientRect().top;
        let revealpoint=150;

        if(revealtop < windowheight - revealpoint)
        {
           revealRight[i].classList.add("active");
        }
        else{
           revealRight[i].classList.remove("active");
        }
      }
      let revealLeft=document.querySelectorAll(".edu_detailLeft");
      for(let i=0;i<revealLeft.length;i++)
        {
        let windowheight=window.innerHeight;
        let revealtop=reveals.getBoundingClientRect().top;
        let revealpoint=150;

        if(revealtop < windowheight - revealpoint)
        {
           revealLeft[i].classList.add("active");
        }
        else{
           revealLeft[i].classList.remove("active");
        }
     }
    }
    return (
    <section class="edu_section section-3 reveal" id="Education" >
    <h2 class="eduMain_title sub_title">Journey</h2>
    <div class="edu_container width " >

      <div class="edu_section">
        <div class="edu_content">
        <div class="edu_data" >
            <div className="edu_detailLeft">
              <h4 class="edu_title">Software Development</h4>
              <div class="edu_calendar">
                <span class="icon"></span><FontAwesomeIcon icon={faCalendarDays} />  2023 - Present
              </div>
            </div>
            <div>
              <span class="edu_rounder"></span>
              <span class="edu_line"></span>
            </div>
          </div>
          <div class="edu_data" >
            <div></div>
            <div>
              <span class="edu_rounder"></span>
              <span class="edu_line"></span>
            </div>
            <div className="edu_detailRight">
              <h4 class="edu_title">Thiagarajar College of Engineering, Madurai</h4>
              <div class="edu_subtitle">Bachelor of Engineering - Mechatronics </div>
              <h4 className="grade">CGPA - 8.78</h4>
              <div class="edu_calendar">
                <span class="icon"></span><FontAwesomeIcon icon={faCalendarDays} />  2019 - 2023
              </div>
            </div>
          </div>

          <div class="edu_data">

            <div className="edu_detailLeft">
              <h4 class="edu_title">NSMVPS Higher Secondary School, Devakottai</h4>
              <div class="edu_subtitle">Higher Secondary School Certificate</div>
              <h4 className="grade">Percentage - 71%</h4>
              <div class="edu_calendar">
                <span class="icon"></span><FontAwesomeIcon icon={faCalendarDays} />  2019
              </div>
            </div>
            <div>
              <span class="edu_rounder"></span>
              <span class="edu_line"></span>
            </div>
          </div>

          <div class="edu_data">
            <div></div>
            <div>
              <span class="edu_rounder"></span>
              <span className="edu_line"></span>
            </div>
            <div className="edu_detailRight">
              <h4 class="edu_title">NSMVPS Higher Secondary School, Devakottai</h4>
              <div class="edu_subtitle">Secondary School Leaving Certificate</div>
              <h4 className="grade">Percentage - 94%</h4>
              <div class="edu_calendar">
                <span class="icon"></span><FontAwesomeIcon icon={faCalendarDays} /> 2017
              </div>
            </div>

          </div>
          <div class="edu_data">

            <div className="edu_detailLeft">
              <h3 class="edu_title">Date of Birth</h3>
              <div class="edu_calendar">
                <span class="icon"></span><FontAwesomeIcon icon={faCalendarDays} />  Oct 13, 2001
              </div>
            </div>
            
            <div>
              <span class="edu_rounder"></span>
            </div>
      </div>
    </div>
  </div></div>

  

  </section>)
}