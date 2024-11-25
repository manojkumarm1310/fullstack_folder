import React from "react";
import Home from "./components/Home";

function App() {
  window.addEventListener("scroll",reveal);
   function reveal()
   {
      var reveals=document.querySelectorAll(".reveal");
      for(var i=0;i<reveals.length;i++)
      {
         var windowheight=window.innerHeight;
         var revealtop=reveals[i].getBoundingClientRect().top;
         var revealpoint=150;

         if(revealtop < windowheight - revealpoint)
         {
            reveals[i].classList.add("active");
         }
         else{
            reveals[i].classList.remove("active");
         }
      }
    }
  return (
    <div>
        <Home />
    </div>
  );
}

export default App;
