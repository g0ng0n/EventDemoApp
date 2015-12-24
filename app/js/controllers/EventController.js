'use strict';

eventsApp.controller('EventController', 
	function EventController($scope, eventData, $log){
	$scope.sortorder = 'name';
	$scope.event = eventData.getEvent()
		.$promise
		.then(function(event){$scope.event = event; $log.info(event);})
		.catch(function(response){$log.error(event);}
		);

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};
	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};


});