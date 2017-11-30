angular.
  module('commanderApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/situationView', {
          template: '<soldier-list></soldier-list>'
        }).
        when('/settingsView', {
          template: '<settings-list></settings-list>'
        }).
        otherwise('/situationView');
    }
  ]);