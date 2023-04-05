const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const flecheGauche = document.querySelector (".arrow_left");
const flecheDroite = document.querySelector (".arrow_right");
let dots = document.querySelectorAll(".dot");
let dotsIndex = 0;
let imgSlides = document.querySelectorAll(".banner-img");
let bannerP = document.querySelector("#banner p")
imgSlides.forEach(img => img.style.display = "none");
imgSlides[0].style.display = "block";
const changeSlides = (dotIndex) => {
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[dotIndex].classList.add("dot_selected");
	imgSlides.forEach(img => img.style.display = "none");
	imgSlides[dotIndex].style.display = "block";
	bannerP.innerHTML = slides[dotIndex].tagLine;
}

flecheGauche.addEventListener("click", function() {
	console.log ("fleche gauche cliquee");
	if (dotsIndex === 0) {
		dotsIndex = 3
	} else {
		dotsIndex -= 1
	}
	switch (dotsIndex) {
		case 0:
			changeSlides(0)
			break;
		case 1:
			changeSlides(1)
			break;
		case 2:
			changeSlides(2)
			break;
		case 3:
			changeSlides(3)
			break;	
	}
})
flecheDroite.addEventListener("click", function() {
	console.log ("fleche droite cliquee");
	if (dotsIndex === 3) {
		dotsIndex = 0
	} else {
		dotsIndex += 1 
	}
	switch (dotsIndex) {
		case 0:
			changeSlides(0)
			break;
		case 1:
			changeSlides(1)
			break;
		case 2:
			changeSlides(2)
			break;
		case 3:
			changeSlides(3)
			break;		
	}
})