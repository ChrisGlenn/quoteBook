var app = angular.module('quoteBook')
.controller('mainCtrl', function($scope, qService){
	$scope.quoteList = qService.getData();
	$scope.addQuote = function(){
		var newText = $scope.quoteText;
		var newAuthor = $scope.quoteAuthor;
		var newQuote = {
			text: newText,
			author: newAuthor
		}
		qService.addData(newQuote);
	}
	$scope.removeQuote = qService.removeData();
})