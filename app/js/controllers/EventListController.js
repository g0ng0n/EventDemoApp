'use strict'
eventsApp.controller('EventListController',
	function EventListController($scope, $location, eventData){
		var events = eventData.getAllEvents();
		$scope.events = events;
	}
);