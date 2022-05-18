var mouseEvent="empty";
var lastposOfX,lastposOfY;
var lasttou_ofX,lasttou_ofY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="orange";

width_of_line=1;

var width=screen.width;
nwwi=screen.width-70;
nwhe=screen.height-300;

if(width < 992){
    document.getElementById("myCanvas").width=nwwi;
    document.getElementById("myCanvas").height=nwhe;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",ts);

function ts(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    lasttou_ofX=e.touches[0].clientX - canvas.offsetLeft;
    lasttou_ofY=e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("mousedown",cm);

function cm(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",mm);

function mm(e){
    currentmouse_x=e.clientX - canvas.offsetLeft;
    currentmouse_y=e.clientY - canvas.offsetTop;

    if(mouseEvent =="mouseDown"){
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(lastposOfX,lastposOfY);
ctx.lineTo(currentmouse_x,currentmouse_y);
ctx.stroke();   
}
lastposOfX=currentmouse_x;
lastposOfY=currentmouse_y;
}

canvas.addEventListener("touchmove",tm);

function tm(e){
    currenttouch_x=e.touches[0].clientX - canvas.offsetLeft;
    currenttouch_y=e.touches[0].clientY - canvas.offsetTop;

   
        ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(lasttou_ofX,lasttou_ofY);
ctx.lineTo(currenttouch_x,currenttouch_y);
ctx.stroke();   

lasttou_ofX=currenttouch_x;
lasttou_ofY=currenttouch_y;
}

canvas.addEventListener("mouseup",ag);
function ag(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouseEvent="mouseleave";
}

function Erase(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    }