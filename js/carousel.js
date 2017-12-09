$(function(){
	var arrImg = ["carousel1.jpg","carousel2.jpg","carousel3.jpg"];
	var num = 0; //轮播图，计数
	var timer = null;  //定时器id
	var lengt = $('#carouselUl li').length; //tab切换的length
	
	//图片切入
	$('#getInto').stop().animate({'left':'0'},1000);
	//轮播图切换
	function seamless(){
		if(num > lengt-1){
			num = 0;  
		}else if(num < 0){
			num = lengt-1; 
		}
		$('#carouselUl li').eq(num).addClass("active").siblings().removeClass("active");
		$('#carousel img').get(0).src = "img/" + arrImg[num];	
	}
	//Tab切换
	$('#carouselUl li').click(function(){
		num = $(this).index();
		seamless();
	});
	//自动轮播
	timer = setInterval(function(){
		num++;
		seamless();
	},3000);
	//鼠标悬浮，暂停轮播
	$('#carousel').hover(function(){
		clearInterval(timer); //移入，清除定时器
		},function(){
		timer = setInterval(function(){
			num++;
			seamless();
		},3000);
	});
});