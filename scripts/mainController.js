configApp.controller('mainController', function($scope, $location){
    
    var offset = 0;
    $scope.firstRound = [];
    $scope.secondRound = [];
    $scope.firstRoundID = [];
    $scope.secondRoundID = [];
    $scope.firstRoundObj = [];
    $scope.secondRoundObj = [];
    $scope.finalRound = [];
    $scope.finalList = [];
    $scope.finalListID = [];
    $('#loading').hide();
    $.ajax({
               type: 'GET',
               url: "http://jservice.io/api/categories?count=100&offset=" + offset,
               processData: true,
               crossDomain: true,
               data: {},
               dataType: "json",
               success: function (data) {
                   $scope.$apply(function(){
                       console.log(data);
                       $scope.categories = data;
                         
                    });              
               }
           });
           
// shuffles an array range to generate random set
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

function openTimer() {
        var playerOne = document.getElementById('playerOne').value;
        var playerTwo = document.getElementById('playerTwo').value;
        var playerThree = document.getElementById('playerThree').value;
        $scope.count=$scope.count-1;
        if($scope.count <= 0){
            clearInterval($scope.counter);
            $('#loading').hide();
            $scope.generateDailyDouble();
            $scope.OpenInNewTabWinBrowser("index.html#/host", $scope.firstRoundObj, $scope.secondRoundObj, $scope.finalList, playerOne, playerTwo, playerThree); 
        }
    };
      
$scope.OpenInNewTabWinBrowser = function(url, oneList, twoList, finalList, playerOne, playerTwo, playerThree) {
  var win = window.open(url);
  win.firstList = oneList;
  win.secondList = twoList;
  win.finalList = finalList;
  win.p1 = playerOne;
  win.p2 = playerTwo;
  win.p3 = playerThree;

};

$scope.addGame = function() {
    var selection = document.getElementById('selectCategories');
    var id = selection.options[selection.selectedIndex].value;
    var object = {'title': selection.options[selection.selectedIndex].text};
    console.log(id);
    console.log(object);

    if($scope.firstRound.length < 6){
        $scope.firstRound.push(object); 
        $scope.firstRoundID.push(id);
    } else if($scope.secondRound.length < 6) {
        $scope.secondRound.push(object);
        $scope.secondRoundID.push(id);
    } else if($scope.firstRound.length == 6 && $scope.secondRound.length == 6) {
        $scope.finalRound.push(object);
        $scope.finalListID.push(id);
    }
    if($scope.firstRound.length == 0) {
    document.getElementById('clearCategoriesButton').disabled = true;
    document.getElementById('generateRandomCluesButton').disabled = false;
    } else {
    document.getElementById('clearCategoriesButton').disabled = false;
    document.getElementById('generateRandomCluesButton').disabled = true;
    } 
    
    if($scope.finalListID.length == 1) {
    document.getElementById('addGameButton').disabled = true;
    document.getElementById('generateRandomCluesButton').disabled = true;
    document.getElementById('createCategoriesButton').disabled = true;
    } else {
    document.getElementById('addGameButton').disabled = false;
    document.getElementById('createCategoriesButton').disabled = false;
    } 
};


$scope.previousSet = function() {
    offset = offset - 100; 
    $.ajax({
               type: 'GET',
               url: "http://jservice.io/api/categories?count=100&offset=" + offset,
               processData: true,
               crossDomain: true,
               data: {},
               dataType: "json",
               success: function (data) {
                   $scope.$apply(function(){
                       console.log(data);
                       $scope.categories = data;
                    });              
               }
           });
    if(offset == 0) {
    document.getElementById('lastSetButton').disabled = true;
    } else {
    document.getElementById('lastSetButton').disabled = false;
    }  
};

$scope.nextSet = function() {
    offset = offset + 100; 
    $.ajax({
               type: 'GET',
               url: "http://jservice.io/api/categories?count=100&offset=" + offset,
               processData: true,
               crossDomain: true,
               data: {},
               dataType: "json",
               success: function (data) {
                   $scope.$apply(function(){
                       console.log(data);
                       $scope.categories = data;
                         
                    });              
               }
           });
           
    if(offset == 0) {
    document.getElementById('lastSetButton').disabled = true;
    } else {
    document.getElementById('lastSetButton').disabled = false;
    }   
};

$scope.generateRandomClues = function() {
   var indexList = [];
   $scope.firstRound = [];
   $scope.secondRound = [];
   $scope.firstRoundID = [];
   $scope.secondRoundID = [];
   $scope.firstRoundObj = [];
   $scope.secondRoundObj = [];
   $scope.finalList = [];
   $scope.finalListID = [];
   $scope.finalRound = [];
    var range = [];
    for(var i = 1; i < 100; i++){
        range.push(i);    
    }   
    indexList = shuffle(range);
    for(var i = 0; i < 6; i++){     
       $scope.firstRound.push($scope.categories[indexList[i]]);
       $scope.firstRoundID.push($scope.categories[indexList[i]].id);
   }
   for(var i = 6; i < 12; i++){     
       $scope.secondRound.push($scope.categories[indexList[i]]);
       $scope.secondRoundID.push($scope.categories[indexList[i]].id);
   }
   for(var i = 12; i < 13; i++){
       $scope.finalRound.push($scope.categories[indexList[i]]);
       $scope.finalListID.push($scope.categories[indexList[i]].id);
   }

   document.getElementById('clearCategoriesButton').disabled = false;
   document.getElementById('addGameButton').disabled = true;
   document.getElementById('createCategoriesButton').disabled = true;
};

$scope.clearCategories = function() {
    $scope.firstRound = [];
    $scope.secondRound = [];
    $scope.firstRoundID = [];
    $scope.secondRoundID = [];
    $scope.finalList = [];
    $scope.finalRound = [];
    $scope.finalListID = [];
    if($scope.firstRound.length == 0) {
    document.getElementById('clearCategoriesButton').disabled = true;
    document.getElementById('generateRandomCluesButton').disabled = false;
    } else {
    document.getElementById('clearCategoriesButton').disabled = false;
    document.getElementById('generateRandomCluesButton').disabled = true;
    }        
    if($scope.finalRound.length == 1) {
    document.getElementById('addGameButton').disabled = true;
    document.getElementById('createCategoriesButton').disabled = true;
    document.getElementById('generateRandomCluesButton').disabled = true;
    } else {
    document.getElementById('addGameButton').disabled = false;
    document.getElementById('createCategoriesButton').disabled = false;
    } 
};

// function that generates clues and values - by random if clue_count from api is greater than 5
// clueSet HAS to be from the api/clues/ ajax call
$scope.checkValidClues = function(clueSet) {
    var clueSetList = [];
    if(clueSet.length > 5){ // if we have more than 5 clues, need to generate random values
        var indexLength = clueSet.length;
        var value = 200;
        var randomIndex = Math.floor(Math.random() * Math.floor(indexLength - 6)); // generate starting random index from 0 to set length
        for(var i = 0; i < 5; i++){
            if(clueSet[randomIndex].answer == "" || clueSet[randomIndex].question == "" || clueSet[randomIndex].value == ""){ // if we don't have an answer, question, or value
              i--; // reduce the for loop counter - a little unorthodox but it works for our purposes
            } else {
                var object = {'category': clueSet[randomIndex].category.title,'question': clueSet[randomIndex].question, 'answer': clueSet[randomIndex].answer, 'value': value, 'isDouble': false};
                clueSetList.push(object);
                value = value + 200; // increase the value - we really don't care about the difficulty of the questions if there could be infinite 
            }
            randomIndex = randomIndex + 1;
        }
        console.log(clueSetList); 
    } else {
      for(var i = 0; i < clueSet.length; i++){
          if(clueSet[i].answer == "" || clueSet[i].question == "" || clueSet[i].value == ""){ // if we don't have an answer, question, or value
              console.log("Invalid empty clue field in: " + clueSet[i].category_id);
              alert("YOU SHOULD NOT USE THE SET: " + clueSet[i].category.title);
          } else if(clueSet[i].value == 200 || clueSet[i].value == 400 || clueSet[i].value == 600 || clueSet[i].value == 800 || clueSet[i].value == 1000){ // if we have a correct value
               if(clueSet[i].value == 200){
                var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 200, 'isDouble': false};
                clueSetList.push(object);
              } else if(clueSet[i].value == 400){
                var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 400, 'isDouble': false};
                clueSetList.push(object);
              } else if(clueSet[i].value == 600){
                var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 600, 'isDouble': false};
                clueSetList.push(object);
              } else if(clueSet[i].value == 800){
                var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 800, 'isDouble': false};
                clueSetList.push(object);
              } else {
                var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 1000, 'isDouble': false};
                clueSetList.push(object);
              }
          } else { // else we can assign it a value based on its position in the clue set
            console.log("Invalid value clue found in " + clueSet[i].category_id);
              if(clueSetList.length == 0){
                  var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 200, 'isDouble': false};
                    clueSetList.push(object);
              } else if(clueSetList.length == 1){
                  var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 400, 'isDouble': false};
                    clueSetList.push(object);
              } else if(clueSetList.length == 2){
                  var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 600, 'isDouble': false};
                    clueSetList.push(object);
              } else if(clueSetList.length == 3){
                  var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 800, 'isDouble': false};
                    clueSetList.push(object);
              } else if(clueSetList.length == 4){
                  var object = {'category': clueSet[i].category.title,'question': clueSet[i].question, 'answer': clueSet[i].answer, 'value': 1000, 'isDouble': false};
                    clueSetList.push(object);
              } else {
              console.log("Invalid error in " + clueSet[i].category_id);
                }
            }
        }
      console.log(clueSetList);
    }
    return clueSetList;
};

$scope.generateAnswers = function() {
    if($scope.firstRound.length != 6 && $scope.secondRound.length != 6){
        alert("You have not selected enough categories. Cancelling clue generation");
        return;
    } else {       
        // for loop for jeopardy clues and answers
        for(var i = 0; i < 6; i++){
            var index = $scope.firstRoundID[i];
            if(index == 'custom'){
                $scope.firstRoundObj.push($scope.customCategoryList);
            } else {
                $.ajax({
                   type: 'GET',
                   url: "http://jservice.io/api/clues?category=" + index,
                   processData: true,
                   crossDomain: true,
                   data: {},
                   dataType: "json",
                   success: function (data) {
                       $scope.$apply(function(){
                           $scope.firstRoundObj.push($scope.checkValidClues(data));
                            });
                        }              
                });
            }
        }
        
        // for loop for double jeopardy clues and answers
        for(var i = 0; i < 6; i++){
            var index = $scope.secondRoundID[i];
            if(index == 'custom'){
                $scope.secondRoundObj.push($scope.customCategoryList);
            } else {
                $.ajax({
                   type: 'GET',
                   url: "http://jservice.io/api/clues?category=" + index,
                   processData: true,
                   crossDomain: true,
                   data: {},
                   dataType: "json",
                   success: function (data) {
                       $scope.$apply(function(){
                            $scope.secondRoundObj.push($scope.checkValidClues(data));
                        });              
                   }
               });
            }
        }
        
        for(var i = 0; i < 1; i++){
            
            var index = $scope.finalListID[i];
            if(index == 'custom'){
                $scope.finalList.push($scope.customCategoryList);
            } else {
                $.ajax({
                   type: 'GET',
                   url: "http://jservice.io/api/clues?category=" + index,
                   processData: true,
                   crossDomain: true,
                   data: {},
                   dataType: "json",
                   success: function (data) {
                       $scope.$apply(function(){
                            $scope.finalList.push($scope.checkValidClues(data));
                        });              
                   }
               });
            }
        }
        
        $('#loading').show();
        $scope.count = 5;
        $scope.counter = setInterval(openTimer, 1000);
 
    }
};

$scope.startGame = function() {
    var playerOne = document.getElementById('playerOne').value;
    var playerTwo = document.getElementById('playerTwo').value;
    var playerThree = document.getElementById('playerThree').value;
    $scope.OpenInNewTabWinBrowser("index.html#/screen", $scope.firstRoundObj, $scope.secondRoundObj, $scope.finalList, playerOne, playerTwo, playerThree);
      // add the players to the player table in SQL
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/startGame/",
        processData: true,
        crossDomain: true,
        data: {player1: playerOne, player2: playerTwo, player3: playerThree},
        dataType: "json",
        success: function (data) {
            $scope.$apply(function(){
                console.log(data);
            });              
        }
    });
};

$scope.generateDailyDouble = function(){
  // one clue from the first list needs to be daily double; two from the second  
  var randomCategoryFirstRound1 = Math.floor(Math.random() * 6);
  var randomCategorySecondRound1 = Math.floor(Math.random() * 6);
  var randomCategorySecondRound2 = Math.floor(Math.random() * 6);
  var randomQuestionFirstRound1 = Math.floor(Math.random() * 5);
  var randomQuestionSecondRound1 = Math.floor(Math.random() * 5);
  var randomQuestionSecondRound2 = Math.floor(Math.random() * 5);
  $scope.firstRoundObj[randomCategoryFirstRound1][randomQuestionFirstRound1].isDouble = true;
  $scope.secondRoundObj[randomCategorySecondRound1][randomQuestionSecondRound1].isDouble = true;
  $scope.secondRoundObj[randomCategorySecondRound2][randomQuestionSecondRound2].isDouble = true;
    // used to check if an object has the daily double property - myObj.hasOwnProperty('daily')
};

$scope.createCategory = function(){
    var title = document.getElementById('categoryName').value;
    $scope.createCategoryName = document.getElementById('categoryName').value;
    $scope.createQuestion1 = document.getElementById('mnemonicQuestion1').value;
    $scope.createAnswer1 = document.getElementById('mnemonicAnswer1').value;
    $scope.createQuestion2 = document.getElementById('mnemonicQuestion2').value;
    $scope.createAnswer2 = document.getElementById('mnemonicAnswer2').value;
    $scope.createQuestion3 = document.getElementById('mnemonicQuestion3').value;
    $scope.createAnswer3 = document.getElementById('mnemonicAnswer3').value;
    $scope.createQuestion4 = document.getElementById('mnemonicQuestion4').value;
    $scope.createAnswer4 = document.getElementById('mnemonicAnswer4').value;
    $scope.createQuestion5 = document.getElementById('mnemonicQuestion5').value;
    $scope.createAnswer5 = document.getElementById('mnemonicAnswer5').value;
    $scope.createCategoryID = 'custom';
    var object = {'title': $scope.createCategoryName};
    $scope.customCategoryList = [
        {'category': title,'question': $scope.createQuestion1, 'answer': $scope.createAnswer1, 'value': 200, 'isDouble': false},
        {'category': title,'question': $scope.createQuestion2, 'answer': $scope.createAnswer2, 'value': 400, 'isDouble': false},
        {'category': title,'question': $scope.createQuestion3, 'answer': $scope.createAnswer3, 'value': 600, 'isDouble': false},
        {'category': title,'question': $scope.createQuestion4, 'answer': $scope.createAnswer4, 'value': 800, 'isDouble': false},
        {'category': title,'question': $scope.createQuestion5, 'answer': $scope.createAnswer5, 'value': 1000, 'isDouble': false},
    ];
    
    
    if($scope.firstRound.length < 6){
        $scope.firstRound.push(object); 
        $scope.firstRoundID.push($scope.createCategoryID);
    } else if($scope.secondRound.length < 6) {
        $scope.secondRound.push(object);
        $scope.secondRoundID.push($scope.createCategoryID);
    } else if($scope.firstRound.length == 6 && $scope.secondRound.length == 6) {
        $scope.finalRound.push(object);
        $scope.finalListID.push($scope.createCategoryID);
    }
    
    $('#createCategoryModal').modal('toggle');
    
};


});