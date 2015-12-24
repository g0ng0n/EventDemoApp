'use strict';

eventsApp.controller('EditEventController',
	function EditEventController($scope, eventData, $log){
		$scope.saveEvent = function(event, newEventForm){
			console.log(newEventForm);
			if(newEventForm.$valid){
				eventData.save(event)
					.$promise
					.then(function(event){$scope.event = event; $log.info(event);})
					.catch(function(response){$log.error(event);});
			}

		};

		$scope.cancelEdit = function(event){
			windows.location = "/EventDetails.html";
		}
	}
);