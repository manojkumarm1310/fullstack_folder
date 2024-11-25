

function myFunction(event) {
    if (
      event.key == "0" ||
      event.key == "1" ||
      event.key == "2" ||
      event.key == "3" ||
      event.key == "4" ||
      event.key == "5" ||
      event.key == "6" ||
      event.key == "7" ||
      event.key == "8" ||
      event.key == "9" ||
      event.key == "+" ||
      event.key == "-" ||
      event.key == "*" ||
      event.key == "/" ||
      event.key == "%" ||
      event.key == "."
    ) {
      document.querySelector("input").value += event.key;
    } else if (event.key == "Backspace" || event.key == "Delete") {
      back();
    } else if (event.key == "Enter") {
     solve();
    }else if (event.key == "c") {
      clr();
     }
     else if (event.key == "d") {
      dark();
     }
  
  }
  
  function solve() {
    let x = document.querySelector("input").value;
    
    let y = eval(x);
    
    // document.querySelector("input").value = y;
    if (y === undefined) {
      y = "Invalid Expression";
    }
    document.querySelector("input").value = y;
  }
  
  
  function clr() {
    document.querySelector("input").value = "";
  
  }
  
  function back() {
    let x = document.querySelector("input").value;
    let y = x.slice(0, -1);
    document.querySelector("input").value = y;
  }
  
  function dis(val) {
    document.querySelector("input").value += val;
  }
  
  
  function backspace(event) {
    if (event.key == "Backspace" || event.key == "Delete") {
      let x = document.querySelector("input").value;
      let y = x.slice(0, -1);
      document.querySelector("input").value = y;
  
  
    }
  }
  
  // let buttons = document.querySelectorAll(".button");
  // Array.from(buttons).forEach((button) => {
  //   button.addEventListener("click", (e) => {
  //     if (e.target.innerHTML == "=") {
  //       string = eval(string);
  //       if (string === undefined) {
  //         string = "Invalid";
  //       }
  //       document.querySelector("input").value = string;
  //     } else if (e.target.innerHTML == "AC") {
  //       string = "";
  //       document.querySelector("input").value = string;
  //     } else if (e.target.innerHTML == "⬅️") {
  //       string = string.slice(0, -1);
  //       document.querySelector("input").value = string;
  //     } else if (e.target.innerHTML == "X") {
  //       string = string + "*";
  //       document.querySelector("input").value = string;
  //     } else if (e.target.innerHTML == "÷") {
  //       string = string + "/";
  //       document.querySelector("input").value = string;
  //     } else {
  //       console.log(e.target);
  //       string = string + e.target.innerHTML;
  //       document.querySelector("input").value = string;
  //     }
  //   });
  // });
  
  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("dark").classList.toggle("dark_icon");
  
    switch (document.getElementById("dark").className) {
      case "dark_mode":
        document.getElementById("dark").innerText = "Light Mode";
        document.getElementById("dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 24 24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
        document.getElementById("dark").classList.toggle("light_mode");
        document.getElementById("dark").style.background = "white";
        document.getElementById("dark").style.backgroundImage ='url("/sun.svg")' ;
  
        break;
      case "light_mode":
        document.getElementById("dark").innerText = "Dark Mode";
        document.getElementById("dark").style.background = "Black";
        document.getElementById("dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        document.getElementById("dark").classList.toggle("dark_mode");
        document.getElementById("dark").style.color = "White";
        document.getElementById("dark").style.backgroundImage ='url("/moon.svg")' ;
        break;
  
      default:
        document.getElementById("dark").innerText = "Dark Mode";
        // document.getElementById("dark").style.background = "Black";
        document.getElementById("dark").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="grey" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  
        break;
    }
  }
  
  function darkicon() {
    document.getElementById("dark").classList.remove("light_icon");
    document.getElementById("dark").classList.add("dark_icon");
  
  }
  
  function color_change(){
    let x = document.getElementById("color").value
    document.getElementsByClassName("container").style.background = x
  
  }
  