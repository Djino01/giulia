gsap.registerPlugin(ScrollTrigger);
gsap.to(".stages__progress-bg", {
	scrollTrigger: {
		trigger: ".stages__progress",
		scrub: true,
		pin: false,
		start: "top center",
		end: "bottom 65%",
		onUpdate: function (self) {
			var progress = self.progress * 100;
			$(".stages__progress-value").text(Math.round(progress));
		}
	},
	scale: 1,
	ease: "sine.out"
});
gsap.to(".stages__progress-icon--box", {
	scrollTrigger: {
		trigger: ".stages__progress",
		scrub: true,
		pin: false,
		start: "top center",
		end: "bottom 65%"
	},
	height: "calc(100% - 59px)",
	ease: "sine.out"
});
gsap.to(".stages__progress-box--bg", {
	scrollTrigger: {
		trigger: ".stages__progress",
		scrub: true,
		pin: false,
		start: "top center",
		end: "bottom 65%"
	},
	height: "calc(100% - 70px)",
	ease: "sine.out"
});