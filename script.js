angular.module('BlankApp', ['ngMaterial', 'ngMessages'])
.controller('colorpalatte', function($scope) {
    $scope.colorpalatteNumber = 0;

    $scope.generate = function(){
        var val = document.getElementsByClassName("inputfield");
        $scope.colorpalatteNumber = val[0].value;
        console.log(val[0].value);
        $scope.numberofrows = Math.round($scope.colorpalatteNumber/5);
        $scope.numberofcolumns = Math.round($scope.colorpalatteNumber%5);
        console.log($scope.numberofrows);
        console.log($scope.numberofcolumns);
    }

    $scope.remove = function(){
        console.log($scope.colorpalatteNumber);
        $scope.colorpalatteNumber = 0;
    }
    
    $scope.selectedFrame = function(){
        var col = document.getElementsByClassName("divcolor");
        $scope.color = col[0].value;
        
    }

    $scope.colors = [
        {"idx":"0","color":"#001122","row":"0","cols":"1"},
        {"idx":"1","color":"#001155","row":"0","cols":"2"},
        {"idx":"2","color":"#001177","row":"0","cols":"3"},
        {"idx":"3","color":"#001199","row":"0","cols":"4"},
        {"idx":"4","color":"#0011aa","row":"0","cols":"5"},
        {"idx":"5","color":"#0011bb","row":"1","cols":"1"},
        {"idx":"6","color":"#0011ff","row":"1","cols":"2"},
        {"idx":"7","color":"#002222","row":"1","cols":"3"},
        {"idx":"8","color":"#002255","row":"1","cols":"4"},
        {"idx":"9","color":"#002277","row":"1","cols":"5"},
        {"idx":"10","color":"#002299","row":"2","cols":"1"},
        {"idx":"11","color":"#0022aa","row":"2","cols":"2"},
        {"idx":"12","color":"#0022bb","row":"2","cols":"3"},
        {"idx":"13","color":"#0022ff","row":"2","cols":"4"},
        {"idx":"14","color":"#003322","row":"2","cols":"5"},
        {"idx":"15","color":"#003355","row":"3","cols":"1"},
        {"idx":"16","color":"#003377","row":"3","cols":"2"},
        {"idx":"17","color":"#003399","row":"3","cols":"3"},
        {"idx":"18","color":"#0033aa","row":"3","cols":"4"},
        {"idx":"19","color":"#0033bb","row":"3","cols":"5"},
        {"idx":"20","color":"#0033ff","row":"4","cols":"1"},
        {"idx":"21","color":"#004422","row":"4","cols":"2"},
        {"idx":"22","color":"#004455","row":"4","cols":"3"},
        {"idx":"23","color":"#004477","row":"4","cols":"4"},
        {"idx":"24","color":"#004499","row":"4","cols":"5"},
        {"idx":"25","color":"#0044aa","row":"5","cols":"1"},
        {"idx":"26","color":"#0044bb","row":"5","cols":"2"},
        {"idx":"27","color":"#0044ff","row":"5","cols":"3"},
        {"idx":"28","color":"#005522","row":"5","cols":"4"},
        {"idx":"29","color":"#005555","row":"5","cols":"5"},
    ]
});
