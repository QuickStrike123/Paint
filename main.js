var Canvas = document.getElementById("myCanvas");

var ctx = Canvas.getContext("2d");

var mouseEvent = "empty";

var LastPositionOfX , LastPositionOfY;

var colour = document.getElementById("TextColour").value;

var Line_Width = document.getElementById("TextWidth").value

Canvas.addEventListener("mousedown" , mymousedown);

function mymousedown(e){

    mouseEvent = "mousedown";

}

Canvas.addEventListener("mousemove" , mymousemove);

function mymousemove(e){

    console.log(e);

    CurrentPositionOfMouseX = e.clientX - Canvas.offsetLeft;

    CurrentPositionOfMouseY = e.clientY - Canvas.offsetTop;

    if (mouseEvent == "mousedown"){

        ctx.beginPath();

        ctx.strokeStyle = colour;

        ctx.lineWidth = Line_Width;

        console.log("Last Position of X and Y Coordinates = ");

        console.log("X = " + LastPositionOfX + " Y = " + LastPositionOfY);

        ctx.moveTo(LastPositionOfX,LastPositionOfY);

        console.log("Current Position of X and Y Coordinates = ");

        console.log("X = " + CurrentPositionOfMouseX + " Y = " + CurrentPositionOfMouseY);

        ctx.lineTo(CurrentPositionOfMouseX,CurrentPositionOfMouseY);

        ctx.stroke();

    }

    LastPositionOfX = CurrentPositionOfMouseX;

    LastPositionOfY = CurrentPositionOfMouseY;

}

Canvas.addEventListener("mouseup" , Mymouseup);

function Mymouseup(e){

    mouseEvent = "mouseup";

}

Canvas.addEventListener("mouseleave" , Mymouseleave);

function Mymouseleave(e){

    mouseEvent = "mouseleave"


}

function Clear(){

    ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);

}

function saveColour(){

    colour = document.getElementById("TextColour").value;

}

function saveWidth(){

    Line_Width = document.getElementById("TextWidth").value;

}