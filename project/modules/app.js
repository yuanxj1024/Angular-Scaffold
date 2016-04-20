'use strict';

(function(angular, Sensoro, undefined){
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
  app.constant('API', Sensoro.API);
  app.constant('CardCustomUrl', Sensoro.CardCustomUrl);
  app.constant('ChargAPI', Sensoro.ChargAPI);
  app.constant('REPORTSAPI', Sensoro.REPORTSAPI);
  app.constant('AuthUrl', Sensoro.authUrl);
  app.constant('MENUS', Sensoro.MENUS);
  app.constant('LOTTERY', Sensoro.LOTTERY);
  app.constant('SCRATCH', Sensoro.SCRATCH);
  app.constant('XMAS', Sensoro.XMAS);
  app.constant('NINE', Sensoro.NINE);
  app.constant('ROTATE', Sensoro.ROTATE);
  app.constant('FACE', Sensoro.FACE);
  app.constant('STAMPS', Sensoro.STAMPS);
  app.constant('ADCOLUMNS', Sensoro.ADCOLUMNS);
  app.constant('ARTICLES', Sensoro.ARTICLES);
  app.constant('FOLLOWS', Sensoro.FOLLOWS);
  app.constant('BOXS', Sensoro.BOXS);
  app.constant('CHATS', Sensoro.CHATS);
  app.constant('SURVEYS', Sensoro.SURVEYS);
  app.constant('GUIDE', Sensoro.GUIDE);
  app.constant('CLOUDAPI', Sensoro.CLOUDAPI);
  app.constant('MANAGEAPI', Sensoro.MANAGEAPI);
  app.constant('SHAKEHB', Sensoro.SHAKEHB);
  app.constant('SHOP_STANDARD_EXCEL_URL', Sensoro.SHOP_STANDARD_EXCEL_URL);
  app.constant('VOTE', Sensoro.VOTE);
  app.constant('CHUN', Sensoro.CHUN);
  app.constant('SHAKE', Sensoro.SHAKE);
  app.constant('MAIDAN', Sensoro.MAIDAN);
  app.constant('CODE', Sensoro.CODE);
})(angular, Sensoro);

