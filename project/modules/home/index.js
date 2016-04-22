'use strict';

/**
  * 跳转模块，若登陆则跳转到店铺模块，是否跳转到登陆页面
  */
angular.module('wechat-platform').controller('IndexCtrl', function($state) {
  $state.go('home');
});