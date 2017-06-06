angular.module('quoteBook').controller('mainCtrl', function($scope, $cookies, dataService){
  $scope.quotes = dataService.getQuotes();

  $scope.deleteMe = function(text){
    dataService.removeData(text);
  }
  $scope.addMe = function(){
    var newQuote = {
      text: $scope.newQuoteText,
      author: $scope.newQuoteAuthor
    }
    if(dataService.addData(newQuote)){
      $scope.newQuoteText = "";
      $scope.newQuoteAuthor = "";
    }
  }

  $cookies.getAll($scope.quotes);
})
