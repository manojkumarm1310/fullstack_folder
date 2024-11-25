function roll()
{
var  randomnumber1=Math.floor(Math.random()*6)+1;
var diceimage="dice"+randomnumber1+".png";
var selectimage="images/"+diceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",selectimage);

var  randomnumber2=Math.floor(Math.random()*6)+1;
var diceimage2="dice"+randomnumber2+".png";
var selectimage2="images/"+diceimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",selectimage2);

if(randomnumber1 > randomnumber2)
{
    document.querySelector("h1").innerHTML="player 1 win";
}
else if(randomnumber1 < randomnumber2)
{
    document.querySelector("h1").innerHTML="player 2 win";
}
else
{
    document.querySelector("h1").innerHTML="draw";
}
}