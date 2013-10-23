'use strict';

/* App Module */
/* For some reason, the order of these is important. if the 'Person:id' page is above the others, it assumes 'nav' and "about" are people to search for. Weird to me.
*/

angular.module('100_Ages', ['ngResponsiveImages', 'ngMobile', 'ui.bootstrap']).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {templateUrl: 'partials/splash.html', controller: SplashCtrl}).
		when('/nav', {templateUrl: 'partials/nav.html', controller: NavCtrl}).
		when('/nav/:personType', {templateUrl: 'partials/person-list.html', controller: NavListCtrl}).
		when('/about', {templateUrl: 'partials/about.html'}).
		when('/0', {templateUrl: 'partials/splash.html', controller: SplashCtrl}).
		when('/101', {redirectTo: '/1'}).
		when('/:personId', {templateUrl: 'partials/person.html', controller: DetailCtrl}).
		otherwise({redirectTo: '/'});
	}]);