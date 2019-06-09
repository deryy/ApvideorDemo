$(document).ready(function(){
		$("#fullpage").fullpage({
			scrollingSpeed:500,
			fixedElements:'.header',
			anchors:['page1','page2','page3','page4','page5'],
			// continuousVertical:true,
			verticalCentered:false,
			navigation:true,
			scrollOverflow: true,
			afterLoad:function(anchorLink,index){
				if(index==1){
					$("#intro").delay(500).animate({
						left: '0%'
					}, 1000, 'easeOutExpo');
					$("#i_para").delay(500).animate({
						left:'0%'
					},1000, 'easeOutExpo');
					// $(".para").delay(1000).fadeIn(1800);
				}
				if(index==2){
					$(".school").fadeIn(500);
					$("#education").delay(500).animate({
						left: '0%'
					}, 1000, 'easeOutExpo');
					$("#e_para").delay(500).animate({
						left:'0%'
					},1000, 'easeOutExpo');
					$(".prize").delay(1000).animate({
						top:'0px'
					},1000, 'easeOutExpo');
				}
				if(index==3){
					$('#ability').animate({
						left: '0%'
					}, 1000, 'easeOutExpo');
					$(".one").animate({
						left:'0%'
					},1000,'easeOutExpo');
					$(".two").delay(100).animate({
						left:'0%'
					},1000,'easeOutExpo');
				}
				if(index==4){
					$('#project').animate({
							left: '0%'
					}, 1000, 'easeOutExpo');
					$('#p_para').animate({
							left: '0%'
					}, 1000, 'easeOutExpo');
				}
				if(index==5){
					$('#exp').animate({
							left: '0%'
					}, 1000, 'easeOutExpo');
					$("#exp_para").animate({
						left:'0%'
					},1000, 'easeOutExpo');
					$(".end").delay(500).fadeIn(1000);
				}
			}
		});
		var pic=$('.pic');
		var see=1;
		pic.height(pic.width());
		$(window).resize(function(){
			var pic=$('.pic');
			pic.height(pic.width());
		});
		// var change=setInterval(to_right,5000);
		function to_right(){
			$(".item"+see).fadeOut(500);
			if(++see>3){see-=3;}
			$(".item"+see).delay(600).fadeIn(1000);
		}
		function to_left(){
			$(".item"+see).fadeOut(500);
			if(--see<1){see+=3;}
			$(".item"+see).delay(600).fadeIn(1000);
		}
		$(".item_to_right").click(to_right);
		$(".item_to_left").click(to_left);
		// $(".item").hover(function(){clearInterval(change);},function(){
		// 	change=setInterval(to_right,5000);
		// });
	})
	