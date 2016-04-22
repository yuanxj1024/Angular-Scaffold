'use strict';

/**
 * 路由配置
 * authentication 为 true 则需要验证是否以登陆
 */
angular.module('wechat-platform').config(function ($stateProvider, $urlRouterProvider, $locationProvider, RouteManifest, AppStore, ngClipProvider) {
  //复制黏贴插件
  ngClipProvider.setPath('bower_components/zeroclipboard/dist/ZeroClipboard.swf');

  $urlRouterProvider.otherwise('/login');
  _.extend(RouteManifest, AppStore);
  var _routers = _.sortBy(_.pairs(RouteManifest), function(val){ return val[0].length; });
  _routers.forEach(function (arr) {
    var path = arr[0];
    var config = arr[1];
    if (config.authentication) {
      config.resolve = angular.extend(config.resolve || {}, {
        user: function (User) {
          return User.ensureLogin();
        }
      });
    }
    $stateProvider.state(path, config);
  });
  // $locationProvider.html5Mode(true);

}).run(function ($rootScope, $location) {
    /**
     * 监听跳转到登陆页面事件
     */
    $rootScope.$on('event:auth-loginRequiredShowPage', function () {

      angular.element('.close').click();
      $location.path('/login');

    });

    /**
     * 用户被停用
     */
    $rootScope.$on('event:user-isLocked', function () {
      angular.element('.close').click();
      $location.path('/lock');
    });

  });