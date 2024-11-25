import React,{useState} from "react";
import {FiMenu} from "react-icons/fi"
import {RiCloseFill} from "react-icons/ri"
function Menu()
{
    const [visible,setVisible] = useState(false)

    const shadowVisible=()=>{
      const value = document.documentElement.scrollTop;
  
      if(value >50){
        setVisible(true)
      }
      else{
        setVisible(false)
      }
    }
  
    const [isBurgerOpen,setIsBurgerOpen] = useState(false)
  
  
   window.addEventListener("scroll",shadowVisible)
  
    return (
         <header className="menu"     style={visible ? 
            {boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} 
            : {boxShadow:"none"}}
            >
            {/* className="menu-left" */}
            <div className={isBurgerOpen ? "menu-left":"menu-left active"} >
                <div className="homePage-tag">
                    <h3><a href="#Home">Manoj<span>kumar</span></a></h3>
                </div>
            </div>
            <div className="menu-right">
                <nav className={isBurgerOpen ? "menu-content active":"menu-content"}>
                    <a href="#Home">Home</a>
                    <a href="#About"> About</a>
                    <a href="#Skill">Skill</a>
                    <a href="#Projects">Projects</a>
                    <a href="">Resume</a>
                    <a href="#Contact">Contact</a>
                </nav>
            </div>
            <div className="hamburger" onClick={()=>setIsBurgerOpen(!isBurgerOpen)}>
              {isBurgerOpen ? <RiCloseFill size={25} /> : <FiMenu size={25} />}
            </div>
        </header>)
}

export default Menu;