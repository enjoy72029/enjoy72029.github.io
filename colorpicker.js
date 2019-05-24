var tempr;
var tempg;
var tempb;


class Picker {
  constructor(target, width, height) {
    this.target = target;
    this.width = width;
    this.height = height;
    this.target.width = width;
    this.target.height = height;
    this.context = this.target.getContext("2d");
    this.pickerCircle = { x: 10, y: 10, width: 7, height: 7 };
    
    this.listenForEvents();
  }
  
  draw() {
    this.build();
  }
  
  build() {
    let gradient = this.context.createLinearGradient(0, 0, this.width, 0);

    //Color Stops
    gradient.addColorStop(0, "rgb(255, 0, 0)");
    gradient.addColorStop(0.15, "rgb(255, 0, 255)");
    gradient.addColorStop(0.33, "rgb(0, 0, 255)");
    gradient.addColorStop(0.49, "rgb(0, 255, 255)");
    gradient.addColorStop(0.67, "rgb(0, 255, 0)");
    gradient.addColorStop(0.84, "rgb(255, 255, 0)");
    gradient.addColorStop(1, "rgb(255, 0, 0)");
    //Fill it
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.width, this.height);
    
    //Apply black and white 
        gradient = this.context.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
    gradient.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
    this.context.fillStyle = gradient;
    this.context.fillRect(0, 0, this.width, this.height);
    
    //Circle 
    this.context.beginPath();
    this.context.arc(this.pickerCircle.x, this.pickerCircle.y, this.pickerCircle.width, 0, Math.PI * 2);
    this.context.strokeStyle = "black";
    this.context.stroke();
    this.context.closePath();
    
  }
  
  listenForEvents() {
    let isMouseDown = false;
    const onMouseDown = (e) => {
      let currentX = e.clientX - this.target.offsetLeft;
      let currentY = e.clientY - this.target.offsetTop;
      if(currentY > this.pickerCircle.y && currentY < this.pickerCircle.y + this.pickerCircle.width && currentX > this.pickerCircle.x && currentX < this.pickerCircle.x + this.pickerCircle.width) {
        isMouseDown = true;
      } else {
        this.pickerCircle.x = currentX;
        this.pickerCircle.y = currentY;
      }
    }
    
    const onMouseMove = (e) => {
      if(isMouseDown) {
       let currentX = e.clientX - this.target.offsetLeft;
       let currentY = e.clientY - this.target.offsetTop;
        this.pickerCircle.x = currentX;
        this.pickerCircle.y = currentY;
      }
    }
    
    const onMouseUp = () => {
      isMouseDown = false;
    }
    
    //Register 
    this.target.addEventListener("mousedown", onMouseDown);
    this.target.addEventListener("mousemove", onMouseMove);
    this.target.addEventListener("mousemove", () => this.onChangeCallback(this.getPickedColor()));

    
    document.addEventListener("mouseup", onMouseUp);
  }
  
  getPickedColor() {
    let imageData = this.context.getImageData(this.pickerCircle.x, this.pickerCircle.y, 1, 1);
    return { r: imageData.data[0], g: imageData.data[1], b: imageData.data[2] };
  }
  
  onChange(callback) {
    this.onChangeCallback = callback;
  }
  
  
}

let picker = new Picker(document.getElementById("color-picker"), 250, 220);

//Draw 
setInterval(() => picker.draw(), 1);

picker.onChange((color) => {
    //let selected = document.getElementsByClassName("selected")[0];

    var canvas = document.getElementById("cvs");
    var ctx = canvas.getContext("2d");

    //selected.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
            
    var display = document.getElementById("display");
    tempr = color.r;
    tempg = color.g;
    tempb = color.b;
    display.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`;

    ctx.beginPath();
    ctx.strokeStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    ctx.stroke();

});


var canvas = document.getElementById("cvs");
    canvas.addEventListener('keydown', doKeyDown, true);
    ctx = canvas.getContext("2d");
    var whatshape;
    //rectangle
    var originalwidth = 100;
    var originalheight = 300;
    var newwidth = 100;
    var newheight = 300;
    //circle
    var original_semiminor = 75; //半長軸
    var original_semiminor_axes =75; //半短軸
    var new_semiminor = 75;
    var new_semiminor_axes = 75;
    //squre
    var original_squrewidth = 100;
    var original_squreheight = 100;
    var new_squrewidth = 100;
    var new_squreheight = 100;


    var widthnum = document.getElementById("widthnum");
    var heightnum = document.getElementById("heightnum");
    widthnum.innerHTML = 100;
    heightnum.innerHTML = 300;
    var longnum = document.getElementById("longnum");
    var shortnum = document.getElementById("shortnum");
    longnum.innerHTML = 75;
    shortnum.innerHTML = 75;
    var sidenum = document.getElementById("sidenum");
    sidenum.innerHTML = 100;


    /*function draw_triangle()
    {
        whatshape = 1;
        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(20,200);
        ctx.lineTo(130,200);
        ctx.fill();
    }*/
    function draw_rectangle()
    {
        x = 100;
        y = 100;
        originalwidth = 100;
        originalheight = 300;
        newwidth = 100;
        newheight = 300;
        whatshape = 2;
        var red = document.getElementById("colorpickerred").value,
        green = document.getElementById("colorpickergreen").value,
        blue = document.getElementById("colorpickerblue").value;
        ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
        ctx.fillRect(x, y, originalwidth, originalheight);
        var changeshapewidth = document.getElementById("shapewidth");
        var changeshapeheight = document.getElementById("shapeheight");
        var rectanglewidthtext = document.getElementById("rectanglewidthtext");
        var rectangleheighttext = document.getElementById("rectangleheighttext");
        changeshapewidth.style.display = "block";
        changeshapeheight.style.display = "block";
        rectanglewidthtext.style.display = "block";
        rectangleheighttext.style.display = "block";
    }
    function draw_circle()
    {
        x = 100;
        y = 100;
        whatshape = 3;
        var red = document.getElementById("colorpickerred").value,
        green = document.getElementById("colorpickergreen").value,
        blue = document.getElementById("colorpickerblue").value;
        ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
        ctx.beginPath();
        ctx.ellipse(x, y, original_semiminor, original_semiminor_axes, 0, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        var changecirclelong = document.getElementById("circlelong");
        var changecircleshort = document.getElementById("circleshort");
        var circlelongtext = document.getElementById("circlelongtext");
        var circleshorttext = document.getElementById("circleshorttext");
        changecirclelong.style.display = "block";
        changecircleshort.style.display = "block";
        circlelongtext.style.display = "block";
        circleshorttext.style.display = "block";
    }
    /*function draw_heart()
    {
        whatshape = 4;      
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.closePath();
        ctx.fill();
    }*/
    function draw_squre()
    {
        whatshape = 5;
        x = 100;
        y = 100;
        original_squrewidth = 100;
        original_squreheight = 100;
        new_squrewidth = 100;
        new_squreheight = 100;
        var red = document.getElementById("colorpickerred").value,
            green = document.getElementById("colorpickergreen").value,
            blue = document.getElementById("colorpickerblue").value;
        ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
        ctx.fillRect(x, y, original_squrewidth, original_squreheight);
        var changeside = document.getElementById("squreside");
        var changesidetext = document.getElementById("squresidetext");
        changeside.style.display = "block";
        changesidetext.style.display = "block";
    }
    /*function draw_star()
    {
        whatshape = 6;
        ctx.beginPath();
        ctx.moveTo(108, 0);
        ctx.lineTo(141, 70);
        ctx.lineTo(218, 78.3);
        ctx.lineTo(162, 131);
        ctx.lineTo(175, 205);
        ctx.lineTo(108, 170);
        ctx.lineTo(41.2, 205);
        ctx.lineTo(55, 131);
        ctx.lineTo(1, 78);
        ctx.lineTo(75, 68);
        ctx.lineTo(108, 0);
        ctx.closePath();
        ctx.fill();
    }*/
    var x = 100;
    var y = 100;
    var drawcheck = document.getElementById("checkdraw");
    var shapecheck = document.getElementById("checkshape");
    var img;
    
    function dowhat(elem)
    {
        var group = document.dowhatForm.dowhatGroup;
        for (var i=0 ; i < group.length ; i++) {
            if (group[i] != elem) {
                group[i].checked = false;
            }
        }
        if(!drawcheck.checked)
        {
          img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        }
    }
    function doKeyDown(e)
    {
      //====================
      //  THE W KEY
      //====================
      var red = document.getElementById("colorpickerred").value,
          green = document.getElementById("colorpickergreen").value,
          blue = document.getElementById("colorpickerblue").value;
      
      if (e.keyCode == 87)
      {
        clearCanvas();
        ctx.putImageData(img, 0, 0);
        
        if(whatshape == 2)
        {
          y = y - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x, y, newwidth, newheight);
        }
        if(whatshape == 3)
        {
          y = y - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.beginPath();
          ctx.ellipse(x, y, new_semiminor, new_semiminor_axes, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
        if(whatshape == 5)
        {
          y = y - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y, new_squrewidth, new_squreheight);
        }
        
      }
      //====================
      //  THE S KEY
      //====================
      if (e.keyCode == 83)
      {
        clearCanvas();
        ctx.putImageData(img, 0, 0);
        if(whatshape == 2)
        {
          y = y + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x, y, newwidth, newheight);
        }
        if(whatshape == 3)
        {
          y = y + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.beginPath();
          ctx.ellipse(x, y, new_semiminor, new_semiminor_axes, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
        if(whatshape == 5)
        {
          y = y + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y, new_squrewidth, new_squreheight);
        }
        
      }
      //====================
      //  THE A KEY
      //====================
      if (e.keyCode == 65)
      {
        clearCanvas();
        ctx.putImageData(img, 0, 0);
        if(whatshape == 2)
        {
          x = x - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x, y, newwidth, newheight);
        }
        if(whatshape == 3)
        {
          x = x - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.beginPath();
          ctx.ellipse(x, y, new_semiminor, new_semiminor_axes, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
        if(whatshape == 5)
        {
          x = x - 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y, new_squrewidth, new_squreheight);
        }
        
      }
      //====================
      //  THE D KEY
      //====================
      if (e.keyCode == 68)
      {
        clearCanvas();
        ctx.putImageData(img, 0, 0);
        if(whatshape == 2)
        {
          x = x + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x, y, newwidth, newheight);
        }
        if(whatshape == 3)
        {
          x = x + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.beginPath();
          ctx.ellipse(x, y, new_semiminor, new_semiminor_axes, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }
        if(whatshape == 5)
        {
          x = x + 10;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y, new_squrewidth, new_squreheight);
        }
        
      }
      if(e.keyCode == 13)
      {
        
        img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        alert("圖形已被儲存");
        if(whatshape == 2)
        {
            var changeshapewidth = document.getElementById("shapewidth");
            var changeshapeheight = document.getElementById("shapeheight");
            var rectanglewidthtext = document.getElementById("rectanglewidthtext");
            var rectangleheighttext = document.getElementById("rectangleheighttext");
            changeshapewidth.style.display = "none";
            changeshapeheight.style.display = "none";
            rectanglewidthtext.style.display = "none";
            rectangleheighttext.style.display = "none";
        }
        
        if(whatshape == 3)
        {
            var circlelong = document.getElementById("circlelong");
            var circleshort = document.getElementById("circleshort");
            var circlelongtext = document.getElementById("circlelongtext");
            var circleshorttext = document.getElementById("circleshorttext");
            circlelong.style.display = "none";
            circleshort.style.display = "none";
            circlelongtext.style.display = "none";
            circleshorttext.style.display = "none";
        }

        if(whatshape == 5)
        {
            var squreside = document.getElementById("squreside");
            var squresidetext = document.getElementById("squresidetext");
            squreside.style.display = "none";
            squresidetext.style.display = "none";
        }
        
      }
    }
    function clearCanvas() {
      canvas.width = canvas.width;
    }
    function show_change_shape_size()
    {   
        
        clearCanvas();
        ctx.putImageData(img, 0, 0);
        if(whatshape == 2)
        {
          
          var changeshapewidth = document.getElementById("shapewidth");
          var changeshapeheight = document.getElementById("shapeheight");
          var widthnum = document.getElementById("widthnum");
          var heightnum = document.getElementById("heightnum");
          widthnum.innerHTML = changeshapewidth.value;
          heightnum.innerHTML = changeshapeheight.value;
          var red = document.getElementById("colorpickerred").value,
              green = document.getElementById("colorpickergreen").value,
              blue = document.getElementById("colorpickerblue").value;
      
          newwidth = changeshapewidth.value;
          newheight = changeshapeheight.value;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y,newwidth, newheight);
        }
        
        if(whatshape == 3)
        {
          var changecirclelong = document.getElementById("circlelong");
          var changecircleshort = document.getElementById("circleshort");
          var longnum = document.getElementById("longnum");
          var shortnum = document.getElementById("shortnum");
          longnum.innerHTML = changecirclelong.value;
          shortnum.innerHTML = changecircleshort.value;
          var red = document.getElementById("colorpickerred").value,
              green = document.getElementById("colorpickergreen").value,
              blue = document.getElementById("colorpickerblue").value;
          new_semiminor = changecirclelong.value;
          new_semiminor_axes = changecircleshort.value;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.beginPath();
          ctx.ellipse(x, y, new_semiminor, new_semiminor_axes, 0, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();
        }


        if(whatshape == 5)
        {
          var changesqureside = document.getElementById("squreside");
          var sidenum = document.getElementById("sidenum");
          sidenum.innerHTML = changesqureside.value;
        
          var red = document.getElementById("colorpickerred").value,
              green = document.getElementById("colorpickergreen").value,
              blue = document.getElementById("colorpickerblue").value;
      
          new_squrewidth = changesqureside.value;
          new_squreheight = changesqureside.value;
          ctx.fillStyle = "rgb(" + tempr + ", " + tempg + ", " + tempb +")";
          ctx.fillRect(x,y,new_squrewidth, new_squrewidth);
        }
        
    }
