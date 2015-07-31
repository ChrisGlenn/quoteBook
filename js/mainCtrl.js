var app = angular.module('quoteBook')
.controller('mainCtrl', function($scope, qService){
	$scope.quotePlaceholder = 'Enter quote...';
	$scope.authorPlaceholder = 'Enter author...';
	$scope.quoteList = qService.getData();
	$scope.addQuote = function(){
		debugger;
		var newQuote = {
			text: $scope.quoteText,
			author: $scope.quoteAuthor
		}	
		if(newQuote.text !== undefined && newQuote.author !== undefined){
			qService.addData(newQuote);
			$scope.quoteText = null;
			$scope.quoteAuthor = null;
		}
		else{
			alert('You must enter a quote AND an author...');
			$scope.quoteText = null;
			$scope.quoteAuthor = null;
		}
	}
	$scope.removeQuote = function(arg1, arg2){
		qService.removeData(arg1, arg2);
	}
})