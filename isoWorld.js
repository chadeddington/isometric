function main()
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

	c = document.getElementById("myCanvas")
    ctx=c.getContext("2d")

    tile = new Image();
	tile.src = 'tile.png';

	space = new Image();
	space.src = 'space.png';

	brick = new Image();
	brick.src = 'brick.png';

	startX = 200;
	startY = -200;

	posX = 0;
	posY = 0;


    timer = setInterval(function()
    {
        //clear canvas
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillStyle = 'green';
        ctx.fillRect(0,0,c.width,c.height);
        //drawImage(src, x position, y position, width, height)
		for (var i = 0; i < gameMap.length; i++)
      	{
      		posX = startX;

	        for (var j = 0; j < gameMap[i].length; j++)
	        {
	            if (gameMap[i][j] == 0)
	            {
	                ctx.drawImage(brick,isoX(posX,posY),isoY(posX,posY),64,64);
	                posX = posX + 32;
	            }
	            else if (gameMap[i][j] == 2)
	            {
	               ctx.drawImage(tile,isoX(posX,posY),isoY(posX,posY),64,64);
	               posX = posX + 32
	            }
	            else if (gameMap[i][j] == 9)
	            {	                
	                posX = posX + 32
	            }    
	        }

        	posY = posY + 32;
        	   
      	}
      	posY = startY;
     	posX = startX;

     	if (leftkey)
     	{
     		startX -= 10;
     		startY += 10;
     	}

     	if (rightkey)
     	{
     		startX += 10;
     		startY -= 10;
     	}

     	
        
    },30);

    //********** Action Listeners ******

	window.onkeyup = function (e)
	{
   		var key = e.keyCode
    	{
	      	if (key == 37) //left keycode
	      	{
	         	leftkey = false;	                    
	      	}
	      	if (key == 39) //right keycode
	      	{
	         	rightkey = false;
	      	}
    	}
	}        
	window.onkeydown = function (e)
	{
	   	var key = e.keyCode
	   	{
	      	if (key == 37) //left keycode
	      	{
	         	leftkey = true;                    
	      	}
	      	if (key == 39) //right keycode
	      	{
	         	rightkey = true;
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