var c=document.querySelectorAll(".drum").length;
alert(c);
for(var i=0;i<c;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonclass=this.innerHTML;
    console.log(this.innerHTML);
    makesound(buttonclass);
})
}
document.addEventListener("keydown",function(event)
{
    makesound(event.key);
})


function makesound(key)
{
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;            
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            alert("warning,you are entered miss natched letter,so check your comment");
            break;
    }
}