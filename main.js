var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');



var p = document.getElementById("pensize");
p.addEventListener("input", function() {
  ctx.lineWidth = p.value;
}, false);




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

function getMousePos(canvas, evt)
{
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function mouseMove(evt)
{
  var Hsymmetry = document.getElementById("Hsymmetry");
  var Vsymmetry = document.getElementById("Vsymmetry");
  var mousePos = getMousePos(canvas, evt);
  if(Hsymmetry.checked)
  { 
      ctx.moveTo( canvas.width/2 - (mousePos.x - canvas.width/2), mousePos.y);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
  }
  
  else
  {
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
  }
  

}
  

canvas.addEventListener('mousedown', function(evt) {
  var mousePos = getMousePos(canvas, evt);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
  evt.preventDefault();
  canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', mouseMove, false);
}, false);

document.getElementById('reset').addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, false);

var colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink', 'black', 'white', 'ebebeb'];


function listener(i) {
  document.getElementById(colors[i]).addEventListener('click', function() {
    ctx.strokeStyle = colors[i];
  }, false);
}

function rgbcolorchange()
{
  var red = document.getElementById("colorpickerred").value,
      green = document.getElementById("colorpickergreen").value,
      blue = document.getElementById("colorpickerblue").value;
  
  ctx.strokeStyle = "rgb(" + red + ", " + green + ", " + blue +")";
}

function draw_triangle()
{
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
}


for(var i = 0; i < colors.length; i++) {
  listener(i);
}

//checkbox symmetry
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




//

function downloadimg()
{
  var link = document.getElementById("download");
  link.download = "Hello!大藝術家.png";
  link.href = canvas.toDataURL("Hello!大藝術家/png");
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

