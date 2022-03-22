class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         GameState = data.val();
      })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
       
    async start(){
     if(GameState === 0){
      contestant = new Contestant()
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
      contestantCount = contestantCountRef.val();
      contestant.getCount();
      }
      question = new Question();
      question.display();
      }
    }

   play(){
     question.hide();
     background("yellow")
     textSize(30);
     fill("brown")
     text("Result of the quiz", 340, 50)
     text("----------------------------------------", 320, 65)
     Contestant.getPlayrInfo();

     if(allContestants !== undefined)
     {
       var display_answers = 230;
       fill("blue")
       textSize(20)
       text("Note: Contestant who answered correct are highlighted in green colour", 130, 230)
       for(var plr in allContestants)
       {
         var correctAns = "3";
         if(correctAns === allContestants[plr].answer)
         fill("Green")
         else
         fill("red")

         display_answers+=30;
         textSize(15);
         text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_answers)
       }
     }
   }

}