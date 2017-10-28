//shuffle the answers
var answers = document.querySelectorAll('ul');

for(var eachQ = 0; eachQ < answers.length; eachQ++) {
   for (var i = answers[eachQ].children.length; i >= 0; i--) {
   answers[eachQ].appendChild(answers[eachQ].children[Math.random() * i | 0]);
  }
}

//Answer's constructor
function Question(Griffindor, Hufflepuff, Ravenclaw, Slytherin) {
  this.Griffindor = Griffindor;
  this.Hufflepuff = Hufflepuff;
  this.Ravenclaw = Ravenclaw;
  this.Slytherin = Slytherin;
}

//Array of objects
var arrHouses = [];

var question1 = arrHouses.push(new Question("Great","Bold","Wise","Good"));
var question2 = arrHouses.push(new Question("Selfish","Ordinary","Cowardly","Ignorant"));
var question3 = arrHouses.push(new Question("A Glory Potion","A Love Potion","A Awesome Potion","A Power Potion"));
var question4 = arrHouses.push(new Question("Think of your achievements","Opinion only matters when I'm alive","Miss you and smile","Ask for more stories of your adventures"));
var question5 = arrHouses.push(new Question("Sea","Parchment","Crackling log fire","Home"));
var question6 = arrHouses.push(new Question("Trumpet","Piano","Violin","Drums"));
var question7 = arrHouses.push(new Question("Trusted","Praised","Liked","Envied"));
var question8 = arrHouses.push(new Question("Hunger","Cold","Loneliness","Boredom"));
var question9 = arrHouses.push(new Question("Read minds","Super-strength","Invisibility","Change appearance"));

//Printing the answers
  var allUl = document.getElementsByClassName('answers');
  for (var index = 0; index < allUl.length; index++) {
    for(var iterations = 0 ; iterations < 4 ; iterations++) {
     var target = allUl[index].children[iterations].getAttribute('id')
     var paragraph = allUl[index].children[iterations].firstChild
      paragraph.innerHTML = arrHouses[index][target]
    }
  }

//Highlight the user's click
function highlighting(divObj) {
  var currentUl = divObj.parentNode.getElementsByClassName('answer');
  for (var i = 0; i < currentUl.length; i++){
    if (currentUl[i].classList.contains('heighlight')) {
      currentUl[i].classList.remove("heighlight");
    }
  }
  divObj.classList.add("heighlight");
}


//submit event Sorting
function sortingHouse(){
 var arrAnswers = document.getElementsByClassName("heighlight");

  if(arrAnswers.length < 8) {
    alert("You may not have answered all the questions");
    return;
  }

  var arrIds = []

  for(var i = 0; i < arrAnswers.length ; i++){
     arrIds.push(arrAnswers[i].id);
  }

  var housesId = {
     ravenclaw: 0,
     hufflepuff: 0,
     slytherin: 0,
     griffindor: 0,    
  }

  for(var j = 0; j < arrIds.length; j++ ){
    var lowerCaser = arrIds[j].toLowerCase();

    if (lowerCaser == "ravenclaw" ) {
      housesId.ravenclaw++
    }
    if (lowerCaser == "hufflepuff" ) {
      housesId.hufflepuff++
    }
    if (lowerCaser == "slytherin" ) {
      housesId.slytherin++
    }
    if (lowerCaser == "griffindor" ) {
      housesId.griffindor++
    }
  }

  var housesSorted = Object.keys(housesId).sort(function(a,b){return housesId[b]-housesId[a]});

alert("You are in " + housesSorted[0].toUpperCase() + "!!");
}
