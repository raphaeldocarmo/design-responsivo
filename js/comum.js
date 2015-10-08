var posicaoInicial = $('nav').position().top;
var posicaoInicialHome = $('#Home').position().top;
var posicaoInicialQuemSou = $('#QuemSou').position().top;
var posicaoInicialOQueEh = $('#DesignResponsivo').position().top;
var posicaoInicialMediaQueries = $('#MediaQueries').position().top;
var posicaoInicialOndeSaberMais = $('#OndeSaberMais').position().top;
var posicaoInicialDuvidas = $('#Duvidas').position().top;
var tamanhoDoMenu = $('nav').height();
var alturaSemTamanhoDoMenu = window.innerHeight;
var larguraDaTela = window.innerWidth;
var altura = alturaSemTamanhoDoMenu - tamanhoDoMenu;

$("header").css("min-height", altura);
$("article").css("min-height", alturaSemTamanhoDoMenu);

$(document).ready(function(){
	if(larguraDaTela > 800){

		$("article").css("padding-top", tamanhoDoMenu *2);
		$(document).scroll(function () { // oscultador de scroll

		    var posicaoScroll = $(document).scrollTop(); // obtem a quantidade de scroll no momento
		     if (posicaoInicial < posicaoScroll){ 
		     	$('nav').addClass("fixa");
		     } else {
		     	$('nav').removeClass("fixa");
		     }
		});
	}
});

var removerAtivaMenu =  $("nav ul li").find("a").removeClass("ativo");

$("#menuHome").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#Home").offset().top
	}, 2000);
});

$("#menuQuemSou").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#QuemSou").offset().top
	}, 2000);
});

$("#menuDesignResponsivo").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#DesignResponsivo").offset().top
	}, 2000);
});

$("#menuQuemSou").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#QuemSou").offset().top
	}, 2000);
});

$("#menuMediaQueries").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#MediaQueries").offset().top
	}, 2000);
});

$("#menuSaibaMais").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#OndeSaberMais").offset().top
	}, 2000);
});

$("#menuDuvidas").on("click", function(){
	$('html, body').animate({
	    scrollTop: $("#Duvidas").offset().top
	}, 2000);
});

function determinaSeEhResolucaoPequena(){
	if(larguraDaTela <= 800){
		$("body").addClass("aplicar-responsivo");
	}else{
		$("body").removeClass("aplicar-responsivo");
	}
}determinaSeEhResolucaoPequena();

$("nav").on("click", function(){
	var menu = $("nav");
	$(menu).toggleClass("exibir");
	$("article").css("padding-top", 30);
})
$("section").on("click", function(){
	var menu = $("nav");
	$(menu).removeClass("exibir");
})