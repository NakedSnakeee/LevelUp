$(function  () {

	$('.reviews_blocks').slick({
		infitie: true,
		dots: true,
		sliderToWshow: 1,
		slidesToScroll: 1
	});

	//Меню
	var menuBtn = $('.menubtn');
	var menuNav = $('.mobile_header');

	menuBtn.on('click', function(event) {
		menuNav.toggleClass('active');
		/*menuNav.css('display: flex');*/
	});


	//таймер
	window. onload= function () {

	var local_val = localStorage.getItem("timer");
	var i;

	if(local_val)
	   i = local_val ;
	else 
	   i = 1800;

	var timer_elem = document.getElementById('timer');
	var new_price = document.getElementById('new_price');
	var old_price = document.getElementById('old_price');
	var min;
	var sec;

	    var timer = setInterval(function () {
	        i--;
	        min = Math.floor(i / 60);
	        sec = i % 60;
	        timer_elem.innerHTML =  min + ':' + sec;
	        localStorage.setItem("timer",i);
	        if (i < 0) {
	            timer_elem .innerHTML = '0';
	            new_price.innerHTML = '1000р.';

	            clearInterval(timer);
	        }
	    }, 1000)
	}

})