$(".hamburger").on("click", function () {
	$(".mobile-nav-menu").removeClass("hidden");
	$("nav").addClass("hidden");
});

$(".menu-exit").on("click", function () {
	$(".mobile-nav-menu").addClass("hidden");
	$("nav").removeClass("hidden");
});

$(".features li").on("click", function (event) {
	featuresTarget = event.target.id;
	$("#bookmarking").removeClass("selected");
	$("#searching").removeClass("selected");
	$("#sharing").removeClass("selected");
	$(".tab1-image").addClass("hidden");
	$(".tab2-image").addClass("hidden");
	$(".tab3-image").addClass("hidden");
	$(".tab1-text").addClass("hidden");
	$(".tab2-text").addClass("hidden");
	$(".tab3-text").addClass("hidden");

	if (featuresTarget == "bookmarking") {
		$("#bookmarking").addClass("selected");
		$(".tab1-image").removeClass("hidden");
		$(".tab1-text").removeClass("hidden");
	} else if (featuresTarget == "searching") {
		$("#searching").addClass("selected");
		$(".tab2-image").removeClass("hidden");
		$(".tab2-text").removeClass("hidden");
	} else if (featuresTarget == "sharing") {
		$("#sharing").addClass("selected");
		$(".tab3-image").removeClass("hidden");
		$(".tab3-text").removeClass("hidden");
	}
});

$(".question").on("click", function (event) {
	faqTarget = event.target.id;
	console.log(event);
	if (faqTarget == "question1") {
		$("#answer1").toggleClass("hidden");
		$("#question1").toggleClass("flipped");
	} else if (faqTarget == "question2") {
		$("#answer2").toggleClass("hidden");
		$("#question2").toggleClass("flipped");
	} else if (faqTarget == "question3") {
		$("#answer3").toggleClass("hidden");
		$("#question3").toggleClass("flipped");
	} else if (faqTarget == "question4") {
		$("#answer4").toggleClass("hidden");
		$("#question4").toggleClass("flipped");
	}
});
