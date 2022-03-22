var canva;
var GameState=0;
var ContestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
