'use strict';

eventsApp.controller('EventController', 
	function EventController($scope){
	$scope.sortorder = 'name';
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
				duration: 1,
				level: 'Advanced',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 0
			},
			{
				name: 'Scopes for fun and profit',
				creatorName: 'JOhnDoe',
				duration: 2,
				level: 'Introductory',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 0
			},
			{
				name: 'Well Behaved Controllers',
				creatorName: 'Jane Smith',
				duration: 4,
				level: 'Intermediate',
				abstract: 'In this session you will learn the and outs of directives',
				upVoteCount: 0
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