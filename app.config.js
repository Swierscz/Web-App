angular.module('commanderApp')
  .config(function($stateProvider) {
	  
	
  var loginState = {
	name: 'loginState',
    url: '/login',
    component: 'loginView'
  }
	  
  var mainState = {
    name: 'mainState',
    url: '/main',
    component: 'mainView'
  }
 
 var situationState = {
	name: 'mainState.situation',
    url: '/situation',
    component: 'soldierList'
 }
 
 
  var settingsState = {
	  name: 'mainState.settings',
	  url: '/settings',
	  component: 'settingsList'
  }
  
  $stateProvider.state(loginState);
  $stateProvider.state(mainState);
  $stateProvider.state(situationState);
  $stateProvider.state(settingsState);
});