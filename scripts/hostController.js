configApp.controller('hostController', function($scope, $location){

    $(document).ready(function() {
        $scope.generateDouble(secondList);
    });
    
    $scope.jeopardy = firstList;
    $scope.double = secondList;
    $scope.final = finalList;
    $scope.playerOne = p1;
    $scope.playerTwo = p2;
    $scope.playerThree = p3;
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
    
    $scope.generateDouble = function(list){
        for(var i = 0; i < 6; i++){
            for(var j = 0; j < 5; j++){
                secondList[i][j].value = secondList[i][j].value * 2;
            }
        }
    };
    
    
});