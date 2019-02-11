configApp.controller('gameController', function($scope, $location){

    $scope.jeopardy = firstList;
    $scope.double = secondList;
    $scope.final = finalList;
    $scope.playerOne = p1;
    $scope.playerTwo = p2;
    $scope.playerThree = p3;
    
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;
    $scope.playerThreeScore = 0;
    
    $scope.category1 = firstList[0][0]; $scope.category1list = firstList[0];
    $scope.category2 = firstList[1][0]; $scope.category2list = firstList[1];
    $scope.category3 = firstList[2][0]; $scope.category3list = firstList[2];
    $scope.category4 = firstList[3][0]; $scope.category4list = firstList[3];
    $scope.category5 = firstList[4][0]; $scope.category5list = firstList[4];
    $scope.category6 = firstList[5][0]; $scope.category6list = firstList[5];
    $scope.category7 = secondList[0][0]; $scope.category7list = secondList[0];
    $scope.category8 = secondList[1][0]; $scope.category8list = secondList[1];
    $scope.category9 = secondList[2][0]; $scope.category9list = secondList[2];
    $scope.category10 = secondList[3][0]; $scope.category10list = secondList[3];
    $scope.category11 = secondList[4][0]; $scope.category11list = secondList[4];
    $scope.category12 = secondList[5][0]; $scope.category12list = secondList[5];
    $scope.category13 = finalList[0][0]; $scope.category13list = finalList[0];
    $scope.question;
    $scope.notimesUp = false;
   
    
    $scope.generateDouble = function(list){
        for(var i = 0; i < 6; i++){
            for(var j = 0; j < 5; j++){
                secondList[i][j].value = secondList[i][j].value * 2;
            }
        }
    }

    $scope.clues = [
        {'object1': '$200', 'object2': '$200', 'object3': '$200', 'object4': '$200', 'object5': '$200', 'object6': '$200'}, 
        {'object1': '$400', 'object2': '$400','object3': '$400','object4': '$400','object5': '$400','object6': '$400'},
        {'object1': '$600', 'object2': '$600', 'object3': '$600', 'object4': '$600', 'object5': '$600', 'object6': '$600'},
        {'object1': '$800', 'object2': '$800', 'object3': '$800', 'object4': '$800', 'object5': '$800', 'object6': '$800'},
        {'object1': '$1000', 'object2': '$1000', 'object3': '$1000', 'object4': '$1000', 'object5': '$1000', 'object6': '$1000'},
    ];
    
    $scope.doubleClues = [
        {'object1': '$400', 'object2': '$400', 'object3': '$400', 'object4': '$400', 'object5': '$400', 'object6': '$400'}, 
        {'object1': '$800', 'object2': '$800','object3': '$800','object4': '$800','object5': '$800','object6': '$800'},
        {'object1': '$1200', 'object2': '$1200', 'object3': '$1200', 'object4': '$1200', 'object5': '$1200', 'object6': '$1200'},
        {'object1': '$1600', 'object2': '$1600', 'object3': '$1600', 'object4': '$1600', 'object5': '$1600', 'object6': '$1600'},
        {'object1': '$2000', 'object2': '$2000', 'object3': '$2000', 'object4': '$2000', 'object5': '$2000', 'object6': '$2000'},
    ];
    
    $scope.finalClues = [
        {'object1': 'Final Clue'}
    ];
    
    
    
    $scope.alertClue = function(object, value){
    if(object == 1){
        if(value == '$200'){
            $scope.question = $scope.category1list[0].question;
            $scope.clues[0].object1 = "";
            $scope.score = 200;           
        } else if(value == '$400'){
            $scope.question = $scope.category1list[1].question;
            $scope.clues[1].object1 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category1list[2].question;
            $scope.clues[2].object1 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category1list[3].question;
            $scope.clues[3].object1 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category1list[4].question;
            $scope.clues[4].object1 = "";
            $scope.score = 1000;
        }
    } else if(object == 2){
        if(value == '$200'){
            $scope.question = $scope.category2list[0].question;
            $scope.clues[0].object2 = "";
            $scope.score = 200;
        } else if(value == '$400'){
            $scope.question = $scope.category2list[1].question;
            $scope.clues[1].object2 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category2list[2].question;
            $scope.clues[2].object2 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category2list[3].question;
            $scope.clues[3].object2 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category2list[4].question;
            $scope.clues[4].object2 = "";
            $scope.score = 1000;
        }
    } else if(object == 3){
        if(value == '$200'){
            $scope.question = $scope.category3list[0].question;
            $scope.clues[0].object3 = "";
            $scope.score = 200;
        } else if(value == '$400'){
            $scope.question = $scope.category3list[1].question;
            $scope.clues[1].object3 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category3list[2].question;
            $scope.clues[2].object3 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category3list[3].question;
            $scope.clues[3].object3 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category3list[4].question;
            $scope.clues[4].object3 = "";
            $scope.score = 1000;
        }
    } else if(object == 4){
        if(value == '$200'){
            $scope.question = $scope.category4list[0].question;
            $scope.clues[0].object4 = "";
            $scope.score = 200;
        } else if(value == '$400'){
            $scope.question = $scope.category4list[1].question;
            $scope.clues[1].object4 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category4list[2].question;
            $scope.clues[2].object4 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category4list[3].question;
            $scope.clues[3].object4 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category4list[4].question;
            $scope.clues[4].object4 = "";
            $scope.score = 1000;
        }
    } else if(object == 5){
        if(value == '$200'){
            $scope.question = $scope.category5list[0].question;
            $scope.clues[0].object5 = "";
            $scope.score = 200;
        } else if(value == '$400'){
            $scope.question = $scope.category5list[1].question;
            $scope.clues[1].object5 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category5list[2].question;
            $scope.clues[2].object5 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category5list[3].question;
            $scope.clues[3].object5 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category5list[4].question;
            $scope.clues[4].object5 = "";
            $scope.score = 1000;
        }
    } else if(object == 6){
        if(value == '$200'){
            $scope.question = $scope.category6list[0].question;
            $scope.clues[0].object6 = "";
            $scope.score = 200;
        } else if(value == '$400'){
            $scope.question = $scope.category6list[1].question;
            $scope.clues[1].object6 = "";
            $scope.score = 400;
        } else if(value == '$600'){
            $scope.question = $scope.category6list[2].question;
            $scope.clues[2].object6 = "";
            $scope.score = 600;
        } else if(value == '$800'){
            $scope.question = $scope.category6list[3].question;
            $scope.clues[3].object6 = "";
            $scope.score = 800;
        } else if(value == '$1000'){
            $scope.question = $scope.category6list[4].question;
            $scope.clues[4].object6 = "";
            $scope.score = 1000;
        }
    }
    
    $scope.count = 20;
    $scope.counter  = setInterval(timer, 1000);
        
    };
    
    $scope.alertDoubleClue = function(object, value){
    if(object == 1){
        if(value == '$400'){
            $scope.question = $scope.category7list[0].question;
            $scope.doubleClues[0].object1 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category7list[1].question;
            $scope.doubleClues[1].object1 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category7list[2].question;
            $scope.doubleClues[2].object1 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category7list[3].question;
            $scope.doubleClues[3].object1 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category7list[4].question;
            $scope.doubleClues[4].object1 = "";
            $scope.score = 2000;
        }
    } else if(object == 2){
        if(value == '$400'){
            $scope.question = $scope.category8list[0].question;
            $scope.doubleClues[0].object2 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category8list[1].question;
            $scope.doubleClues[1].object2 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category8list[2].question;
            $scope.doubleClues[2].object2 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category8list[3].question;
            $scope.doubleClues[3].object2 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category8list[4].question;
            $scope.doubleClues[4].object2 = "";
            $scope.score = 2000;
        }
    } else if(object == 3){
        if(value == '$400'){
            $scope.question = $scope.category9list[0].question;
            $scope.doubleClues[0].object3 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category9list[1].question;
            $scope.doubleClues[1].object3 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category9list[2].question;
            $scope.doubleClues[2].object3 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category9list[3].question;
            $scope.doubleClues[3].object3 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category9list[4].question;
            $scope.doubleClues[4].object3 = "";
            $scope.score = 2000;
        }
    } else if(object == 4){
        if(value == '$400'){
            $scope.question = $scope.category10list[0].question;
            $scope.doubleClues[0].object4 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category10list[1].question;
            $scope.doubleClues[1].object4 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category10list[2].question;
            $scope.doubleClues[2].object4 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category10list[3].question;
            $scope.doubleClues[3].object4 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category10list[4].question;
            $scope.doubleClues[4].object4 = "";
            $scope.score = 2000;
        }
    } else if(object == 5){
        if(value == '$400'){
            $scope.question = $scope.category11list[0].question;
            $scope.doubleClues[0].object5 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category11list[1].question;
            $scope.doubleClues[1].object5 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category11list[2].question;
            $scope.doubleClues[2].object5 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category11list[3].question;
            $scope.doubleClues[3].object5 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category11list[4].question;
            $scope.doubleClues[4].object5 = "";
            $scope.score = 2000;
        }
    } else if(object == 6){
        if(value == '$400'){
            $scope.question = $scope.category12list[0].question;
            $scope.doubleClues[0].object6 = "";
            $scope.score = 400;
        } else if(value == '$800'){
            $scope.question = $scope.category12list[1].question;
            $scope.doubleClues[1].object6 = "";
            $scope.score = 800;
        } else if(value == '$1200'){
            $scope.question = $scope.category12list[2].question;
            $scope.doubleClues[2].object6 = "";
            $scope.score = 1200;
        } else if(value == '$1600'){
            $scope.question = $scope.category12list[3].question;
            $scope.doubleClues[3].object6 = "";
            $scope.score = 1600;
        } else if(value == '$2000'){
            $scope.question = $scope.category12list[4].question;
            $scope.doubleClues[4].object6 = "";
            $scope.score = 2000;
        }
    }
    
    $scope.count = 20;
    $scope.counter  = setInterval(timer, 1000);
        
    };
    
    $scope.alertFinalClue = function() {
        $scope.question = $scope.category13list[4].question;
        $scope.finalClues[0].object1 = "";
        var audio = new Audio('sounds/Final');
        audio.play();
        $scope.count = 30;
        $scope.counter = setInterval(timer, 1000);
        $scope.notimesUp = true;
    };
    
    
    function openTimer() {
        $scope.count=$scope.count-1;
        if($scope.count <= 0){
        clearInterval($scope.counter);
        $('#loading').hide();
        }
    };
    
    function timer(){
    $scope.count=$scope.count-1;
    if($scope.count <= 0){
        clearInterval($scope.counter);
        if(!$scope.notimesUp){
            $scope.audio = new Audio('sounds/TimesUp');
            $scope.audio.play();
        } 
        $('#clueModal').modal('toggle'); // toggle the modal
        return;
    } 
    document.getElementById("timer").innerHTML= $scope.count + " secs"; // watch for spelling
    };
    
    $scope.subtractScore = function(score, player){
       if(player == '1'){
           $scope.playerOneScore = $scope.playerOneScore - score;
       } else if(player == '2'){
           $scope.playerTwoScore = $scope.playerTwoScore - score;
       } else if(player == '3'){
           $scope.playerThreeScore = $scope.playerThreeScore - score;
       }
       $scope.count = $scope.newCount;
       $scope.counter = setInterval(timer, 1000);
    };
    
    $scope.addScore = function(score, player){
       if(player == '1'){
           $scope.playerOneScore = $scope.playerOneScore + score;
       } else if(player == '2'){
           $scope.playerTwoScore = $scope.playerTwoScore + score;
       } else if(player == '3'){
           $scope.playerThreeScore = $scope.playerThreeScore + score;
       }  
       clearInterval($scope.counter);
      $('#clueModal').modal('toggle');
    };
    
    $scope.loadDouble = function() {
        $('#loading').show();
        $scope.count = 4;
        $scope.counter = setInterval(openTimer, 1000);
        $scope.audio = new Audio('sounds/Load');
        $scope.audio.play();
        document.getElementById("jeopardy").style.display = 'none';
        document.getElementById("double").style.display = 'table';
        document.getElementById("doubleButton").disabled = true;
        document.getElementById("finalButton").disabled = false;
    };
    
    $scope.loadFinal = function() {
        document.getElementById("double").style.display = 'none';
        document.getElementById("final").style.display = 'table';
        document.getElementById("finalButton").disabled = true;
    };
    
    $scope.playerAnswer = function() {
      $scope.newCount = $scope.count;
      clearInterval($scope.counter);
      document.getElementById("timer").innerHTML= $scope.newCount + " secs";
      
    };
    
    $(document).ready(function() {
        $scope.count = 4;
        $scope.counter = setInterval(openTimer, 1000);
        $scope.audio = new Audio('sounds/Load');
        $scope.audio.play();
        $scope.generateDouble(secondList);
    });
    
});


