var $background = $(".background");
var $tsm = $(".tsm");
var $avatar = $(".avatar");
var $b = $(".b");
var $c = $(".c");
var $wavesdown = $(".wavesdown");
var $introduce = $(".introduce");
var $stage1 = $(".stage1");
var $stage2 = $(".stage2");
var $stage2ul = $(".stage2 ul");

var progress = 0;
var flag = 1;

function displayNone() {
	$wavesdown.css("display", "none");
}
window.onmousewheel = document.onmousewheel = (e) => {
	if (e.wheelDelta < 0) {
		if (progress <= 8) {
			progress++;
		}
		if (progress == 1) {
			$background.css({ 'filter': "blur(5px)" });
			$tsm.css({
				'opacity': '0',
				'transform': 'translate(-50%, -185%)'
			});
			$avatar.css({
				'opacity': '1',
				'transform': 'translate(-50%, -50%)',
			});
			$introduce.css({
				'opacity': '1',
				'top': '57%',
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
		if (progress == 7) {
			$stage1.css({
				"opacity": "0",
				"z-index": "0",
			});

			$stage2.css({
				"z-index": "1",
				"opacity": "1"
			});
			$stage2ul.css({
				"top": "-5vh",
			});
		}
	} else if (e.wheelDelta > 0) {
		if (progress >= 1) {
			progress--;
		}
		if (progress == 1) {
			$background.css({ 'filter': "blur(0px)" });
			$tsm.css({
				'opacity': '1',
				'transform': 'translate(-50%, -80%)'
			});
			$avatar.css({
				'opacity': '0',
				'transform': 'translate(-50%, 30%)',
			});
			$introduce.css({
				'opacity': '0',
				'top': '80%',
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
		if (progress == 7) {
			$stage1.css({
				"opacity": "1",
				"z-index": "1",
			});

			$stage2.css({
				"z-index": "0",
				"opacity": "0"
			});
			$stage2ul.css({
				"top": "15vh",
			});
		}
	}
	console.log(progress);

}
if (sessionStorage.flag == 1) {
	progress=8;
	$background.css({ 'filter': "blur(5px)" });
	$tsm.css({
		'opacity': '0',
		'transform': 'translate(-50%, -185%)'
	});
	$avatar.css({
		'opacity': '1',
		'transform': 'translate(-50%, -50%)',
	});
	$introduce.css({
		'opacity': '1',
		'top': '57%',
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
	$stage1.css({
		"opacity": "0",
		"z-index": "0",
	});

	$stage2.css({
		"z-index": "1",
		"opacity": "1"
	});
	$stage2ul.css({
		"top": "-5vh",
	});
}
$stage2.click(function() {
	sessionStorage.flag = 1;
})
