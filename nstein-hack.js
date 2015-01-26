console.log("i have successfully gotten into nstein!")
$(".magWYSIWYG.content").css({
	"margin":"auto",
	"width":"100%"
});

//$(".boldParagraph").remove();

$(".magWYSIWYG p:not('#iframe')").css({
	"display": "block",
	"margin": "15px auto",
	"max-width": "800px",
	"font-weight": "bold",
	"line-height": "1.4em",
	"padding": "0px 10px"
});

$("#iframe iframe").height($(window).height * .8);