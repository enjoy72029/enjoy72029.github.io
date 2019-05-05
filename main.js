firstx = 100,firsty = 100;
lastx = 200 , lasty = 200;
var cvs 
var mouse_down = 0;

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
	cvs = canvas1
	ctx = ctx1
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
		  var coords = "X coords: " + mousePos.x + ", Y coords: " +mousePos.y;
		  document.getElementById("demo").innerHTML = coords;
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
	ctx.strokeStyle = "	#0000FF";
	ctx.stroke();
}

function green(event)
{
	ctx.beginPath();
	ctx.strokeStyle = "	#008000";
	ctx.stroke();
}

function purple(event)
{
	ctx.beginPath();
	ctx.strokeStyle = "	#8B00FF";
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
	ctx.strokeStyle = "	#FFC0CB";
	ctx.stroke();
}

function black(event)
{
	ctx.beginPath();
	ctx.strokeStyle = "	#000000";
	ctx.stroke();
}

function white(event)
{
	ctx.beginPath();
	ctx.strokeStyle = "	#FFFFFF";
	ctx.stroke();
}