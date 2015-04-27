
$(document).ready(function(){

	init();

function init(){
	handleLogInBtn();
}

function handleLogInBtn(){
	$('#logInBtn').on('click',function(){
		logInPop();
		handleCloselogIn();
	});
}
function handleCloselogIn(){
	$('.closelogin').on('click',function(){
		$('.loginContanier').remove();
	});
	$(".mask").on('click',function(){
		$('.loginContanier').remove();
	});
}
function logInPop(){
	var html = ['<div class="loginContanier"><div class="mask"></div>',
	'<div class="longin">',
	'<div class="longinContent">',
	'<div class="closelogin">',
	'</div>',
	'</div>',
	'</div></div>'].join('');
	$("body").append(html);
	$('.mask').height($(window).height()).width($(window).width());
}

});