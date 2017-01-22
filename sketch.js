var consignes = [];
var corrections = [];
var consignesLi = [];
var correctionsP = [];
var listeExercices;
var bouton;

function setup() {
  noCanvas();
  for (var i = 0; i < 5; i++) {
    var exId = floor(random(exercices.length));
    consignes[i] = exercices[exId].consigne();
    corrections[i] = exercices[exId].correction();

    consignesLi[i] = createElement("li", consignes[i]);
    correctionsP[i] = createP("Correction masquée.");

    correctionsP[i].style("font-style", "italic");

    consignesLi[i].parent("listeExercices");
    correctionsP[i].parent("listeExercices");
  }

  bouton = createButton("Afficher la correction");
  bouton.mousePressed(afficherReponse);

}

function afficherReponse() {
  for (var i = 0; i < corrections.length; i++) {
    correctionsP[i].html(corrections[i]);
    correctionsP[i].style("color", "red");
  }

}


function nfFr(n) { //Change les points en virgules pour les nombres décimaux
  if (n === 0 || n % floor(n) == 0) {
    return str(n);
  }
  return join(split(str(n), "."), ",");

}
