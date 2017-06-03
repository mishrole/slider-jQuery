$(document).ready(function(){
	
	var timer = setInterval(function(){slider()},2000);

	function slider(){
		$(".carousel ul").animate({marginLeft:-400},1000,function(){
			$(this).find("li:last").after(
				$(this).find("li:first"));
				$(this).css({marginLeft:0});
		});
	}

	function leftManual(){
		//I don't know how to make this work.

		$(".carousel ul").animate({marginLeft:400},function(){
			$(this).find("li:last").after(
				$(this).find("li:first"));
				$(this).css({marginLeft:400});
		});
	}

	function rightManual(){
		$(".carousel ul").animate({marginLeft:-400},function(){
			$(this).find("li:last").after(
				$(this).find("li:first"));
				$(this).css({marginLeft:0});
		});
	}

	function pause(){
		clearInterval(timer);
	}

	function start(){
		timer =	setInterval(function(){slider()},2000);	
	}

	var left = document.getElementById('btn-left');
	var change = document.getElementById('btn-change');
	var right = document.getElementById('btn-right');

	$(left).on('click', function(){
		pause();
		leftManual();
	});

	$(right).on('click', function(){
		pause();
		rightManual();
	});
/*
	$('.fa-pause').on('click', function(){
		$('.btn-change').toggleClass('fa-pause').toggleClass('fa-play');
		pause();

		$('.fa-play').on('click', function(){
			$('.btn-change').toggleClass('fa-pause').toggleClass('fa-pause');
			start();
		});

	});

	*/
});

/*

	var start = setInterval(function(){
		$(".carousel ul").animate({marginLeft:-400},1000,function(){
			$(this).find("li:last").after(
				$(this).find("li:first"));
				$(this).css({marginLeft:0});
		});
	},2000);

*/