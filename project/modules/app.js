'use strict';

(function(angular, App, undefined){
  var app = angular.module('wechat-platform', [
    'ngAnimate',
    'ngCookies',
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    'I18N',
    'brantwills.paging',
    'ngFileReader',
    'ngFileUpload',
    'ngClipboard',
    'ngTagsInput',
    'htmlSortable',
    'ngSanitize',
    'summernote',
    'chart.js',
    'ui.select',
    'angularAwesomeSlider'
  ]);
  app.constant('API', App.API);
  app.constant('CardCustomUrl', App.CardCustomUrl);
  app.constant('ChargAPI', App.ChargAPI);
  app.constant('REPORTSAPI', App.REPORTSAPI);
  app.constant('AuthUrl', App.authUrl);
  app.constant('MENUS', App.MENUS);
  app.constant('LOTTERY', App.LOTTERY);
  app.constant('SCRATCH', App.SCRATCH);
  app.constant('XMAS', App.XMAS);
  app.constant('NINE', App.NINE);
  app.constant('ROTATE', App.ROTATE);
  app.constant('FACE', App.FACE);
  app.constant('STAMPS', App.STAMPS);
  app.constant('ADCOLUMNS', App.ADCOLUMNS);
  app.constant('ARTICLES', App.ARTICLES);
  app.constant('FOLLOWS', App.FOLLOWS);
  app.constant('BOXS', App.BOXS);
  app.constant('CHATS', App.CHATS);
  app.constant('SURVEYS', App.SURVEYS);
  app.constant('GUIDE', App.GUIDE);
  app.constant('CLOUDAPI', App.CLOUDAPI);
  app.constant('MANAGEAPI', App.MANAGEAPI);
  app.constant('SHAKEHB', App.SHAKEHB);
  app.constant('SHOP_STANDARD_EXCEL_URL', App.SHOP_STANDARD_EXCEL_URL);
  app.constant('VOTE', App.VOTE);
  app.constant('CHUN', App.CHUN);
  app.constant('SHAKE', App.SHAKE);
  app.constant('MAIDAN', App.MAIDAN);
  app.constant('CODE', App.CODE);
})(angular, (App || App = {});

