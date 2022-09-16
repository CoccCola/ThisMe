var $background = $(".background");
var $tsm = $(".tsm");
var $avatar = $(".avatar");
var $b = $(".b");
var $c = $(".c");
var $wavesdown = $(".wavesdown");


var progress = 0;
var timeout_avatar;
var timeout_bc;
var timeout_wave;
var flag=1;
function displayNone(){
	$wavesdown.css("display","none");
}
window.onmousewheel = document.onmousewheel = (e) => {
	if (e.wheelDelta < 0) {
		if (progress <= 15) {
			progress++;
		}
		if (progress == 1) {
			$background.css({'filter':"blur(5px)"});
			$tsm.css({
				'opacity':'0',
				'transform': 'translate(-50%, -185%)'
			});
			$avatar.css({
				'opacity': '1',
				'transform': 'translate(-50%, -50%)',
			});
			$b.css({
				"transform": "skewX(0deg) scale(1)",
				"opacity": "0.9"
			});
			$c.css({
				"transform": "skewY(0deg) scale(1)",
				"opacity": "0.9"
			});
			$wavesdown.css({
				"transform": "translateY(100%)",
				"opacity": "0"
			});

		}

	} else if(e.wheelDelta > 0){
		if (progress >= 1) {
			progress--;
		}
		if(progress==1){	
			$background.css({'filter':"blur(0px)"});
			$tsm.css({
				'opacity':'1',
				'transform': 'translate(-50%, -80%)'
			});
			$avatar.css({
				'opacity': '0',
				'transform': 'translate(-50%, 30%)',
			});
			$b.css({
				"transform": "skewX(65deg) scale(3)",
				"opacity": "0"
			});
			$c.css({
				"transform": "skewY(-65deg) scale(3)",
				"opacity": "0"
			});
			$wavesdown.css({
				// "display":"block",
				"transform": "translateY(0)",
				"opacity": "1"
			});
		}
	}
	console.log(progress);
	
}
