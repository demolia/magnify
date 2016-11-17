$(document).ready(function(){

	var original_width = 0  //initialising original width of image to be magnified to zero
	var original_height = 0  // initialising original height of image to be magnified to zero

	$(".magnify").mousemove(function(e){

		if(!original_width && !original_height)
		{
			var image_obj = new Image()
			image_obj.src = $(".small").attr("src")  //to select the value of a particular attribute
			original_width = image_obj.width
			original_height = image_obj.height
		}

		else
		{
			var magnify_offset = $(this).offset()
			var mx = e.pageX - magnify_offset.left
			var my = e.pageY - magnify_offset.top

			if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
			{
				$(".large").fadeIn(100)
			}
			else
			{
				$(".large").fadeOut(100)
			}


			if($(".large").is(":visible"))
			{
				//The background position of .large will be changed according to the position
				//of the mouse over the .small image. So we will get the ratio of the pixel
				//under the mouse pointer with respect to the image and use that to position the 
				//large image inside the magnifying glass


				var rx = Math.round(mx/$(".small").width()*original_width - $(".large").width()/2)*-1
				var ry = Math.round(my/$(".small").height()*original_height - $(".large").height()/2)*-1
				var bgp = rx + "px " + ry + "px"
				
				//Time to move the magnifying glass with the mouse
				var px = mx - $(".large").width()/2
				var py = my - $(".large").height()/2
				//Now the glass moves with the mouse
				//The logic is to deduct half of the glass's width and height from the 
				//mouse coordinates to place it with its center at the mouse coordinates
				
				//If you hover on the image now, you should see the magnifying glass in action
				$(".large").css({left: px, top: py, backgroundPosition: bgp})
			}
		}
	})


})
