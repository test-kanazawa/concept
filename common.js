$(function() {
	if ($(window).width() < 992) {
		$('#global-navi').appendTo('.global-navi-sp');
	}
});

$(function() {
if (navigator.userAgent.indexOf('iPad') > 0) {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('iPad');
}});

$(function() {
	var timer = 0;
	var currentWidth = window.innerWidth;
	$(window).resize(function(){
		if (currentWidth == window.innerWidth) {
			return;
		}
		if (timer > 0) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			location.reload();
		}, 200);
	});
});
