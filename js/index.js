var sideRegsiter = document.getElementById("sideRegsiter");
var right = document.getElementById("right");
var menuImg = document.getElementById("menuImg");
var closeButton = document.getElementById("closeButton");
var disLat = document.getElementById("disLat");
var yarn = document.getElementById("yarn");
var seaso =  document.getElementById("seaso");
var brandNavTwo = document.getElementById("brandNavTwo");
var fullDNavTwo = document.getElementById("fullDNavTwo");
var marNavTwo = document.getElementById("marNavTwo");

//点击menu，出现登录，导航信息
menuImg.onmousedown = function(){
	close();
}
closeButton.onmousedown = function(){
	close();
}
//关闭菜单栏的判断条件
function close(){
	//判断sideRegsiter元素的左边，离wrapp的左边的距离
	if(sideRegsiter.offsetLeft < 0){
		sideRegsiter.style.left = "0";
		closeButton.style.display = "block";
		menuImg.style.marginTop = "230px";
	}else if(sideRegsiter.offsetLeft == 0){
		sideRegsiter.style.left = "-547.05px";
		closeButton.style.display = "none";
		menuImg.style.marginTop = "270px";
	}
}
//二级导航
disLat.onclick = function(){
	impAndExp(brandNavTwo);
}
yarn.onclick = function(){
	impAndExp(fullDNavTwo);
}
seaso.onclick = function(){
	impAndExp(marNavTwo);
}
function impAndExp(_id){
	if(_id.style.display == "none"){
		_id.style.display = "block";
	}else{
		_id.style.display = "none";
	}
}
//把sideRegsiter的width设为可视高度
sideRegsiter.style.height = document.documentElement.clientHeight + "px";
right.style.height = document.documentElement.clientHeight + "px";
window.onresize = function(){
	sideRegsiter.style.height = document.documentElement.clientHeight + "px";
	right.style.height = document.documentElement.clientHeight + "px";
}
//JQuery
$(function(){
	//复制logoTop,滚动条的70px时，动画，吸顶
	$('#clone').append($('#logoTop').clone());
	$(document).scroll(function(){
		if($(document).scrollTop() > 70){
			$('#clone').stop().animate({'top':'0px'},1000);
		}else if($(document).scrollTop() < 70){
			$('#clone').stop().animate({'top':'0px'},1000,function(){
				$('#clone').css('top','-140px');
			});
		}
	});
	//2017年春夏系列，下滑、收起
	$('#seriesImg li').eq(0).hover(function(){
		$('#liOne').slideDown(100);
	},function(){
		$('#liOne').slideUp(100);
		
	});
	$('#seriesImg li').eq(1).hover(function(){
		$('#liTwo').slideDown(100);
	},function(){
		$('#liTwo').slideUp(100);
		
	});
	$('#seriesImg li').eq(2).hover(function(){
		$('#Three').slideDown(100);
	},function(){
		$('#Three').slideUp(100);
		
	});
	$('#seriesImg li').eq(3).hover(function(){
		$('#Four').slideDown(100);
	},function(){
		$('#Four').slideUp(100);
	});
	//点击，出现视频
	$('#videoClick').click(function(){
		$('#video').css('display','block');
		$('#video video').get(0).src = "file/ReleaseConference.mp4";
	});
	//点击，隐藏视频
	$('.shut').click(function(){
		$('#video').css('display','none');
		$('#video video').get(0).src = "file/ReleaseConference.mp4";
	});
	/*滚动条，到一定距离出现元素*/
	$(document).scroll(function(){
		if($(document).scrollTop() > 1300){
			$('.moveDiv').fadeIn(2000);
		}
	
	});
	/*数据*/
	var judge = true;
	$(document).scroll(function(){
		var timin = null;
		if($(document).scrollTop() > 1800){
			if(judge){
				judge = false;
				var count = 1;
				timingOne = setInterval(function(){
					var num = Number($('#dataOne').get(0).innerHTML) + 1;
					$('#dataOne').html(num);
					count++;
					if(count > 80){
						clearInterval(timingOne);
					}
				},80);
				timingTwo = setInterval(function(){
					var num = Number($('#dataTwo').get(0).innerHTML) + 1;
					$('#dataTwo').html(num);
					count++;
					if(count > 80){
						clearInterval(timingTwo);
					}
				},80);
				timingThree = setInterval(function(){
					var num = Number($('#dataThree').get(0).innerHTML) + 1;
					$('#dataThree').html(num);
					count++;
					if(count > 80){
						clearInterval(timingThree);
					}
				},80);
				timingFour = setInterval(function(){
					var num = Number($('#dataFour').get(0).innerHTML) + 1;
					$('#dataFour').html(num);
					count++;
					if(count > 80){
						clearInterval(timingFour);
					}
				},80);
			}
		}
	});
	/*回到顶部*/
	$(document).scroll(function(){
//		console.log($(document).scroll());
		if($(document).scrollTop() > 800){
			$('#goBackTo').css('display','block');
		}else if($(document).scrollTop() < 800){
			$('#goBackTo').css('display','none');
		};
	});
	$('#goBackTo').click(function(){
		var suspend = setInterval(function(){
		window.scrollBy(0,-150);
		if($(document).scrollTop() == 0){
			clearInterval(suspend);
			};
		},50);
	});
	//登录后，改变登录状态
	var local = window.localStorage;  
	var test = window.location.search;
	if(test.split("=")[1] == local.username){
		$('#signI').html("已登录");
		$('#signI a').attr('href',''); 
		$('#signOut').css("display","block");
		$('.user').html("您好! " + test.split("=")[1]);
	}
	//注销
	$('#signOut').click(function(){
		$('#signOut').css("display","none");
		$('#signI').html("<a href='login.html'>登录</a>");
		$('.user').get(0).innerHTML = "";
		location.replace(location.href.replace(location.search, ""));
	});
		
});


