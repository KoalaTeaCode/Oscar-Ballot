'use strict';

angular.module('myApp')

.controller('AuthCtrl', ['Auth', '$rootScope', function(Auth, $rootScope) {
  var vm = this;

  vm.facebookUserId = Auth.facebookUserId;

  this.loginWithFacebook = function () {
    Auth.loginWithFacebook();
  }

  $rootScope.$on('facebookUserId-loaded', function (event, facebookUserId) {
    vm.facebookUserId = facebookUserId;
	});
}]);
