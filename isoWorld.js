function load()
{
  var gameMap = 
  			[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
             [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
             [2,0,2,2,0,2,0,2,0,2,2,2,0,2,2,0,0,0,0,2],
             [2,0,2,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,0,2],
             [2,0,2,0,0,2,2,2,0,2,2,2,0,2,0,2,0,0,0,2],
             [2,0,2,2,0,2,0,2,0,2,0,2,0,2,2,0,0,0,0,2],
             [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
             [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
             [2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2],
             [2,0,0,0,0,0,0,2,2,2,0,0,2,0,0,0,2,0,0,2],
             [2,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,0,0,2],
             [2,0,2,0,0,2,0,0,0,2,0,0,2,0,0,0,2,0,0,2],
             [2,0,2,0,0,2,0,2,0,0,0,0,0,0,0,0,2,0,0,2],
             [2,0,2,0,0,2,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
             [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
             [2,0,2,2,2,0,2,2,2,2,2,0,0,0,2,0,0,0,0,2],
             [2,0,0,0,0,0,0,2,2,2,2,0,0,0,2,0,0,0,0,2],
             [2,0,2,2,0,0,2,0,2,2,2,0,0,0,2,2,0,0,0,2],
             [2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
             [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];

	var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.canvas.width = window.innerWidth - 25;
  ctx.canvas.height = 600;

  debugger;

  var tile = new Image();
	tile.src = 'tile.png';

	var space = new Image();
	space.src = 'space.png';

	var brick = new Image();
	brick.src = 'brick.png';

	var width = 64;

	var startX = 0;
	var startY = 0;

	var posX = 0;
	var posY = 0;

	var leftkey = false;
	var rightkey = false;
	var upkey = false;
	var downkey = false;

	function draw() {
		//clear canvas
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(0,0,c.width,c.height);
        //drawImage(src, x position, y position, width, height)
		for (var i = 0; i < gameMap.length; i++) {
      		posX = startX;
	        for (var j = 0; j < gameMap[i].length; j++) {
	            if (gameMap[i][j] == 0) {
	                ctx.drawImage(space,isoX(posX,posY),isoY(posX,posY),width,width);
	                posX = posX + width / 2;
	            }
	            else if (gameMap[i][j] == 2) {
	               ctx.drawImage(tile,isoX(posX,posY),isoY(posX,posY),width,width);
	               posX = posX + width / 2
	            }
	            else if (gameMap[i][j] == 9) {	                
	                posX = posX + width / 2
	            }    
	        }
        	posY = posY + width / 2;
      	}
      	posY = startY;
     	posX = startX;

     	if (upkey) {
     		startX -= 10;
     		startY -= 10;
     	}

     	if (downkey) {
     		startX += 10;
     		startY += 10;
     	}

     	if (leftkey) {
     		startX -= 10;
     		startY += 10;
     	}

     	if (rightkey) {
     		startX += 10;
     		startY -= 10;
     	}
		window.requestAnimationFrame(draw);
	}
	window.requestAnimationFrame(draw);


    //********** Action Listeners ******

	window.onkeyup = function (e)
	{
   		var key = e.keyCode
    	{
    		//left keycode
	      	if (key == 37) {
	         	leftkey = false;	                    
	      	}
	      	//right keycode
	      	if (key == 39) {
	         	rightkey = false;
	      	}
	      	//up keycode
	      	if (key == 38) {
	      		upkey = false;
	      	}
	      	//down keycode 
	      	if (key == 40) {
	      		downkey = false;
	      	}

    	}
	}        
	window.onkeydown = function (e)
	{
	   	var key = e.keyCode
	   	{
	   		//left keycode
	      	if (key == 37) {
	         	leftkey = true;                    
	      	}
	      	//right keycode
	      	if (key == 39) {
	         	rightkey = true;
	      	} 
	      	//up keycode
	      	if (key ==38) {
	      		upkey = true;
	      	}
	      	//down keycode 
	      	if (key == 40) {
	      		downkey = true;
	      	}
	   	}
	}
}

/*************************************/
//    From Cartesian to Isometric 
//
/*************************************/
function isoX(cartX, cartY) 
{
	x = cartX - cartY;
	return x;
}

function isoY(cartX, cartY)
{
	y = (cartX + cartY) / 2;
	return y;
}