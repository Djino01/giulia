gsap.registerPlugin(ScrollTrigger);
if ($(window).width() >= '1920') {
	var translaytOne = 2;
}
if ($(window).width() <= '1920') {
	var translaytOne = 1.6;
}
if ($(window).width() <= '1530') {
	var translaytOne = 1.2;
}
if ($(window).width() <= '1318') {
	var translaytOne = 1;
}
gsap.from(".conditions__img", {
	scrollTrigger: {
		trigger: ".conditions",
		scrub: true,
		pin: false,
		start: "top 0%",
		end: "center 50%"
	},
	scale: translaytOne,
	ease: "sine.out"
});