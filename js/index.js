var $background = $(".background");
var $tsm = $(".tsm");
var $avatar = $(".avatar");
var $b = $(".b");
var $c = $(".c");
var $wavesdown = $(".wavesdown");

function run(){
	$background.css({ 'animation-play-state': 'running' });
	$tsm.css({ 'animation-play-state': 'running' });
	$avatar.css({ 'animation-play-state': 'running' });
	$b.css({ 'animation-play-state': 'running' });
	$c.css({ 'animation-play-state': 'running' });
	$wavesdown.css({ 'animation-play-state': 'running' });
	clearTimeout(timeout_avatar);
	timeout_avatar=setTimeout(avatarOut,2400);
	clearTimeout(timeout_bc);
	timeout_bc=setTimeout(bcOut,1500);
	clearTimeout(timeout_tsm);
	timeout_tsm=setTimeout(tsmOut,1200);
}

function avatarOut() {
	$avatar.css({ 'animation-play-state': 'paused' });
}
function bcOut() {
	if(flag==1){
		$wavesdown.css({ 'display': 'none' });
		flag=-1;
	}else{
		flag=1;
	}
	
	$b.css({ 'animation-play-state': 'paused' });
	$c.css({ 'animation-play-state': 'paused' });
	$wavesdown.css({ 'animation-play-state': 'paused' });
}
function tsmOut() {
	$tsm.css({ 'animation-play-state': 'paused' });
}
var progress = 0;
var timeout_avatar;
var timeout_bc;
var timeout_tsm;
var flag=1;
window.onmousewheel = document.onmousewheel = (e) => {
	if (e.wheelDelta < 0) {
		if (progress <= 15) {
			progress++;
		}
		if (progress == 1) {
			run();
		}

	} else {
		if (progress >= 1) {
			progress--;
		}
		if(progress==1){	
			$wavesdown.css({ 'display': 'block' });
			run();
			
		}
	}
	console.log(progress);
	
}
