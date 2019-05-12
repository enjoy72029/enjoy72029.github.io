firstx = 100,firsty = 100;
lastx = 200 , lasty = 200;
var cvs 
var mouse_down = 0;

var p = document.getElementById("pensize");
p.addEventListener("input", function() {
  ctx.lineWidth = p.value;
}, false);


function reset(event)
{
  ctx.beginPath();
  ctx.clearRect(0,0,cvs.width,cvs.height);  
  ctx.stroke();
}

function setting()
{
  var canvas1 = document.getElementById("cvs");
  var ctx1 = canvas1.getContext("2d");
  cvs = canvas1;
  ctx = ctx1;
}

function getMousePos(cvs, event) {
  var rect = cvs.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
  
function mouseMove(event) {
  if(mouse_down == 1)
  {
    var mousePos = getMousePos(cvs, event);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
  }
}
      
function down(event)
{
  mouse_down = 1;
  var mousePos = getMousePos(cvs, event);
  ctx.moveTo(mousePos.x,mousePos.y);
}

function up(event)
{
  mouse_down = 0;
}

function setpensize_one()
{
  ctx.lineWidth = 1;  
}
function setpensize_two()
{
  ctx.lineWidth = 2;
}
function setpensize_three()
{
  ctx.lineWidth = 3;
}
function setpensize_five()
{
  ctx.lineWidth = 5;
}

function setpensize_ten()
{
  ctx.lineWidth = 10;
}

function setpensize_fifteen()
{
  ctx.lineWidth = 15;
}

function setpensize_twenty()
{
  ctx.lineWidth = 20;
}

function red(event)
{ 
  ctx.beginPath();
  ctx.strokeStyle = "#FF0000";
  ctx.stroke();
  // canvas.freeDrawingBrush.color
}

function blue(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #0000FF";
  ctx.stroke();
}

function green(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #008000";
  ctx.stroke();
}

function purple(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #8B00FF";
  ctx.stroke();
}

function yellow(event)
{
  ctx.beginPath();
  ctx.strokeStyle = "#FFFF00";
  ctx.stroke();
}

function orange(event)
{
  ctx.beginPath();
  ctx.strokeStyle = "#FFA500";
  ctx.stroke();
}

function pink(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #FFC0CB";
  ctx.stroke();
}

function black(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #000000";
  ctx.stroke();
}

function white(event)
{
  ctx.beginPath();
  ctx.strokeStyle = " #FFFFFF";
  ctx.stroke();
}

function showcolorpicker()
{
   var redtext = document.getElementById("redtext");
   var pickerred = document.getElementById("colorpickerred");
   var greentext = document.getElementById("greentext");
   var pickergreen = document.getElementById("colorpickergreen");
   var bluetext = document.getElementById("bluetext");

   var pickerblue = document.getElementById("colorpickerblue");
   if (pickerred.style.display === "none") {
     pickerred.style.display = "block";
     redtext.style.display = 'block';
   } 
   else {
     pickerred.style.display = "none";
     redtext.style.display = 'none';
   }
   if (pickergreen.style.display === "none") {
     pickergreen.style.display = "block";
     greentext.style.display = "block";
   } 
   else {
     pickergreen.style.display = "none";
     greentext.style.display = "none";

   }
   if (pickerblue.style.display === "none") {
     pickerblue.style.display = "block";
     bluetext.style.display = "block";
   } 
   else {
     pickerblue.style.display = "none";
     bluetext.style.display = "none";

   }
  
}
function rgbcolorchange(event)
{
  ctx.beginPath();
  
  var red = document.getElementById("colorpickerred").value,
      green = document.getElementById("colorpickergreen").value,
      blue = document.getElementById("colorpickerblue").value;
  
  ctx.strokeStyle = "rgb(" + red + ", " + green + ", " + blue +")";
    ctx.stroke();
}

function displaychange(event)
{
   var input = document.querySelectorAll("input");
      
      for(var i = 0 ; i < input.length; i++)
      {
          input[i].addEventListener("input", function(){
            var red = document.getElementById("colorpickerred").value,
                green = document.getElementById("colorpickergreen").value,
                blue = document.getElementById("colorpickerblue").value;
            
            var display = document.getElementById("display");
            display.style.background = "rgb(" + red + ", " + green + ", " + blue +")";
            
          })
      }
}


function symmetry() {
  
  var checkBox = document.getElementById("symmetry");
  var text = document.getElementById("testword");
  if (checkBox.checked == true){
    for(var i = 0 ; i < 2 ; i++)
      {
          ctx.save();
          ctx.translate(canvas.width()/2, canvas.height()/2);
          ctx.rotate((Math.PI/180)*(360/2*i));
          ctx.scale(-1, 1);
          var img = new Image();
          img.src = canvas.toDataURL("image/png");
          ctx.drawImage(img, -canvas.width()/2, -canvas.height()/2);
          ctx.restore();
     }
  } else {
     text.style.display = "none";
  }
}

function downloadimg()
{
  var link = document.getElementById("download");
  link.download = "image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function setsize()
{
  var can = document.getElementById("cvs");
  var width = document.getElementById("setwidth");
  var height = document.getElementById("setheight");
  can.width = width.value;
  can.height = height.value;
}
