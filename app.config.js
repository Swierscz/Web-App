angular.
  module('commanderApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/situationView', {
          template: '<soldier-list></soldier-list>',
		  css: 'soldiers/soldier-list.style.css'
        }).
        when('/settingsView', {
		  template: '<settings-list></settings-list>',
        }).
        otherwise('/situationView');
    }
  ]);