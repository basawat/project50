var oldx,oldy;
var color = "black";
var pen_width = 2;
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");
var Event1 = "";

canvas.addEventListener("mousedown", mydown_mouse);
function mydown_mouse(e){
    color = document.getElementById("color").value;
    pen_width = document.getElementById("pen_width").value;
    Event1 = "Down";
}
canvas.addEventListener("mousemove", move_mouse);
function move_mouse(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientX - canvas.offsetTop;
    if(Event1 == "Down"){
        console.log("in down condition");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = pen_width;
        ctx.moveTo(oldx,oldy);
        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }
    oldx = currentX;
    oldy = currentY;     
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    Event1= "mouseUp";
}

var oldXtouch, oldYtouch;

if(screen.width < 992){
    document.getElementById("Canvas").width=screen.width-70;
    document.getElementById("Canvas").height=screen.height-300;
    document.body.style.overflow="hidden";
    }
canvas.addEventListener("touchstart", move_start);
function move_start(e){
    color = document.getElementById("color").value;
    pen_width = document.getElementById("pen_width").value;

    oldXtouch = e.touches[0].clientX - canvas.offsetLeft;
    oldYtouch = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", move_touch);
function move_touch(e){
    currentXtouch = e.touches[0].clientX - canvas.offsetLeft;
    currentYtouch = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = pen_width;
    ctx.moveTo(oldXtouch,oldYtouch);
    ctx.lineTo(currentXtouch,currentYtouch);
    ctx.stroke();
    oldXtouch = currentXtouch;
    oldYtouch = currentYtouch;
}

function ClearArea(){
    canvas.clearRect(0,0,canvas.width,canvas.height);
}