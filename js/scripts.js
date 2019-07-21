//toggle what-we-do
$(document).ready(function(){
	$(".design").on("click", function(){
		$("#design_text").toggle();
		$("#design_icon").toggle();
	});
});
$(document).ready(function(){
	$(".development").on("click", function(){
		$("#development_text").toggle();
		$("#development_icon").toggle();
	});
});
$(document).ready(function(){
	$(".product").on("click", function(){
		$("#product_text").toggle();
		$("#product_icon").toggle();
	});
});
//hover effect, portfolio
$(document).ready(function(){
	$(".image1").hover(function(){
	  $(".p1").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image2").hover(function(){
	  $(".p2").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image3").hover(function(){
	  $(".p3").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image4").hover(function(){
	  $(".p4").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image5").hover(function(){
	  $(".p5").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image6").hover(function(){
	  $(".p6").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image7").hover(function(){
	  $(".p7").fadeToggle();
	});
  });
  $(document).ready(function(){
	$(".image8").hover(function(){
	  $(".p8").fadeToggle();
	});
  
        event.preventDefault();
    })
});

  $(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + ' your subscription is well received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});

  
