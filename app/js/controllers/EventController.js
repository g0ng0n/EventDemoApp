'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){

	$scope.event = {
		name: 'Angular Boot Camp',
		date: '1/1/2013',
		time: '10:30 am',
		location: {
			address: 'Google Headquarters',
			city: 'Mountain View',
			province: 'CA'
		},
		imageUrl: '/img/angularjs-logo.png',
		sessions:[
			{
				name: 'Directives Masterclass',
				creatorName: 'Bob Smith',
				duration: '1hs',
				level: 'Advanced',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 7
			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'JOhnDoe',
				duration: '30min',
				level: 'Introductory',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 3
			},
			{
				name: 'Well Behaved Controllers',
				creatorName: 'Jane Smith',
				duration: '1hs',
				level: 'Intermediate',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 2
			}
		]
	}

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	};
	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	};
});