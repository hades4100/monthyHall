var ia = document.getElementById("buttonone");
var ib = document.getElementById("buttontwo");
var ic = document.getElementById("buttonthree");
var btnarr = [ia, ib, ic];
var clicked = [false, false, false];
var imgarr = Array.from(document.images);
var choiceone = document.getElementById("choiceone");
var choicetwo = document.getElementById("choicetwo");

function bn1() {
  clicked[0] = true;
  flip();
}
function bn2() {
  clicked[1] = true;
  flip();
}
function bn3() {
  clicked[2] = true;
  flip();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var car = getRandomInt(3);

function clrbuttons() {
  let nodelist = document.querySelectorAll(".bn.pick");
  let bns = Array.from(nodelist);
  for (i = 0; i < bns.length; i++) {
    bns[i].style.opacity = 0;
    bns[i].onclick = "";
  }
}

function flip() {
  clrbuttons();
  console.log("car pos:" + car);
  for (i = 0; i < 3; i++) {
    if (clicked[i] != true && i != car) {
      imgarr[i].src = "goat.jpg";
      break;
    }
  }
  choiceone.style.opacity = 1;
  choicetwo.style.opacity = 1;
}

function stay() {
  let clickedpos = "";
  for (i = 0; i < 3; i++) {
    if (clicked[i] == true) {
      clickedpos = i;
    }
  }
  general(clickedpos);
}
function general(position) {
  if (position == car) {
    imgarr[car].src = "car.jpg";
    for (i = 0; i < 3; i++) {
      if (imgarr[i].src.indexOf("door.jpg") > -1) {
        imgarr[i].src = "goat.jpg";
      }
    }
    alert("you won!");
  } else {
    imgarr[position].src = "goat.jpg";
    imgarr[car].src = "car.jpg";
    alert("you lose");
  }
}

function move() {
  let goatpos = 5;
  for (i = 0; i < 3; i++) {
    if (imgarr[i].src.indexOf("goat.jpg") > -1) {
      goatpos = i;
      console.log("goatpos: " + goatpos);
    }
  }
  let newpos = 5;
  for (i = 0; i < 3; i++) {
    if (clicked[i] == false && i != goatpos) {
      newpos = i;
      console.log("newpos:" + newpos);
    }
  }
  general(newpos);
}
