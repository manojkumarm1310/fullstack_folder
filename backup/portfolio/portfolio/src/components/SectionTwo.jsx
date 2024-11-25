import React from "react";
export default function SectionTwo()
{
    window.addEventListener("scroll",reveal1);
   function reveal1()
   {
      
         let reveal=document.querySelector(".content_about");
         let reveals=document.querySelector(".profile_about");
         let windowheight=window.innerHeight;
         let revealtop=reveal.getBoundingClientRect().top;
         let revealpoint=150;
         if(revealtop < windowheight - revealpoint)
         {
            reveals.classList.add("active");
         }
         else{
            reveals.classList.remove("active");
         }
      }
      window.addEventListener("scroll",reveal2);
      function reveal2()
      {
         let reveals=document.querySelector(".about");

         let windowheight=window.innerHeight;
         let revealtop=reveals.getBoundingClientRect().top;
         let revealpoint=150;
         if(revealtop < windowheight - revealpoint)
         {
            reveals.classList.add("active");
         }
         else{
            reveals.classList.remove("active");
         }

   }
    return(
    <section className="section-2 reveal" id="About" >
        <div><h1 className="title_about sub_title">About Me</h1></div>
        <div className="content_about width" >
            <div className="profile_about" > </div>
            <div className="about" >
            <h1>I'm <span style={{color:"red",fontSize: "30px",
    fontWeight: 500,
    letterSpacing: "1px"}}>Manojkumar</span>,</h1>
            <p>As a passionate Full-Stack Developer, I am dedicated to crafting robust applications that seamlessly interact with the Backend of web systems. My expertise spans website architecture, design, and the development of web APIs. With a problem-solving mindset, my goal is to optimize applications for enhanced stability and speed. I thrive in collaborative team environments, where my skills in building interactive and responsive websites shine. Proficient in HTML, CSS, JavaScript, React, Angular, NodeJS, ExpressJS, and MongoDB, I bring a comprehensive skill set to create innovative and efficient digital solutions.</p>
               {/* <p  >I'm Manojkumar M, a graduate from Thiagarajar College of Engineering in Madurai, where I earned my Bachelor's degree in Mechatronics.I am a passionate web developer, dedicated to crafting exceptional web experiences. My expertise spans both the front-end and back-end realms of web development, with proficiency in a range of technologies, </p>
               <p >While pursuing my degree, I developed a strong foundation in programming and a deep interest in web development. I'm enthusiastic about learning and constantly exploring new technologies to stay ahead in the ever-evolving field of software development.I enjoy to create interactive and user-friendly web applications.</p>*/}
            </div>
        </div>

    </section>)
}
