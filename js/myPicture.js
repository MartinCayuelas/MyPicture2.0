

/*Affichage*/

function afficheVoiture(){

	var img = '<img class="img-responsive" id="voiture" src="img/voiture.jpg" alt="voiture">';
	document.getElementById("photo").innerHTML = img;

	var affiche = document.getElementById("voiture");
	affiche.style.display = "block";

}

function affichePaysage(){
	var img = '<img class="img-responsive" id="paysage" src="img/paysage.jpg" alt="paysage">';
	document.getElementById("photo").innerHTML = img;
}

function afficheAnimal(){

	var img = '<img class="img-responsive" id="animal" src="img/animal.jpg" alt="animal">';
	document.getElementById("photo").innerHTML = img;

}
function afficheTour(){

	var img = '<img class="img-responsive" id="animal" src="img/tour.jpg" alt="animal">';
	document.getElementById("photo").innerHTML = img;

}
function afficheTemple(){

	var img = '<img class="img-responsive" id="animal" src="img/temple.jpg" alt="animal">';
	document.getElementById("photo").innerHTML = img;

}
function afficheNy(){

	var img = '<img class="img-responsive" id="animal" src="img/ny.jpg" alt="animal">';
	document.getElementById("photo").innerHTML = img;

}

function afficheRandom(){
	var i = Math.floor((Math.random() * 6) + 1); 

	if(i == 1){
		afficheVoiture();
	}else if(i == 2){
		affichePaysage();
	}else if(i == 3){
		afficheAnimal();
	}else if(i == 4){
		afficheTour();
	}else if(i == 5){
		afficheTemple();
	}else{
		afficheNy();

	}
}


/*Filtre*/

function filtreOpacity(){

		  document.getElementById("photo").style.opacity = "0.5";

}

function filtreInverse(){

	document.getElementById("photo").style.filter = "invert(100%)";
}

function filtreGrey(){

	document.getElementById("photo").style.filter = "grayscale(100%)";
}

function filtreFlou(){
	document.getElementById("photo").style.filter = "blur(3px)";
}

function filtreLumineux(){
	document.getElementById("photo").style.filter = "brightness(200%)";
}

function filtreContrast(){
	document.getElementById("photo").style.filter = "contrast(200%)";
}

function defiltre(){

	document.getElementById("photo").style = "";
}

/*Plus*/

function moreFiltre(){

	 var plus = document.getElementById("Plus");
    plus.style.display = "block";

    var more = document.getElementById("more");

    more.style.display ="none";

    var choix = '<a href="#Moins" onclick="minusFiltre();"><span class="glyphicon glyphicon-minus moins" id="more"></span></a>';

    document.getElementById("moreOption").innerHTML = choix;


}

function minusFiltre(){

	var plus = document.getElementById("Plus");
	plus.style.display = "none";

	var selecteur = '<a href="#Plus" onclick="moreFiltre();"><span class="glyphicon glyphicon-plus plus" id="more"></span></a>';
	document.getElementById("moreOption").innerHTML = selecteur;

	
}

function filtreRotation(){
	document.getElementById("photo").style.filter = "hue-rotate(90deg)";
}

function filtreSaturation(){
	document.getElementById("photo").style.filter = "saturate(700%)";
}

function filtreSepia(){
	document.getElementById("photo").style.filter = "sepia(100%);";
}

function filtreBleu(){
	document.getElementById("photo").style.filter = "drop-shadow(8px 8px 10px blue)";
}

function filtreVert(){
	document.getElementById("photo").style.filter = "drop-shadow(8px 8px 10px green)";
}
function filtreRouge(){
	document.getElementById("photo").style.filter = "drop-shadow(8px 8px 10px red)";
}



/*Combinaison de filtre*/

function addCombinaison(){

var div = '<div id="optionsFiltre"><div class="checkbox"><label><input type="checkbox" value="">Gris</label></div><div class="checkbox"><label><input type="checkbox" value="">Flou</label></div><div class="checkbox"> <label><input type="checkbox" value="">Option 3</label></div></div>';

document.getElementById("CombiFiltre").innerHTML = div;

}

function removeCombinaison(){
	var div = document.getElementById("optionsFiltre");
	document.getElementById("CombiFiltre").removeChild(div);
}