'use strict';

/* Controllers */

angular.module('angualrScaffold').controller('AppCtrl', function($scope, $window, $filter, $q, $timeout) {
  // add 'ie' classes to html
  var isIE = !!navigator.userAgent.match(/MSIE/i);
  if (isIE) angular.element($window.document.body).addClass('ie');
  if (isSmartDevice($window)) angular.element($window.document.body).addClass('smart');

  // config
  $scope.settings = {
    base: {
      themeID: 1,
      navbarHeaderColor: 'bg-black',
      navbarCollapseColor: 'bg-white-only',
      asideColor: 'bg-black',
      headerFixed: true,
      asideFixed: false,
      asideFolded: false,
      asideDock: false,
      container: false
    }
  };


  function isSmartDevice($window) {
    // Adapted from http://www.detectmobilebrowsers.com
    var ua = $window.navigator.userAgent || $window.navigator.vendor || $window.opera;
    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
  }

  $scope.alert = function(msg, title) {
    if (angular.element('.modal-backdrop').length) {
      return $timeout(function() {
        $scope.alert(msg, title);
      }, 200);
    }
    $scope.dialogData = {
      title: title || $filter('translate')('utils.title'),
      msg: msg,
      type: 'alert'
    };
    angular.element('#showDialogModal').click();
  };

  $scope.confirm = function(msg, title, checkboxMsg) {
    if (angular.element('.modal-backdrop').length) {
      return $timeout(function() {
        $scope.confirm(msg, title);
      }, 200);
    }
    $scope.dialogData = {
      title: title || $filter('translate')('utils.title'),
      msg: msg,
      checkboxMsg: checkboxMsg,
      checkbox: false,
      type: 'confirm'
    };
    angular.element('#spDialog').modal('show');
    var confirm_flag = false;
    var deferred = $q.defer();

    var confirm = function() {
      confirm_flag = true;
      angular.element('#spDialog .close').click();
      angular.element('#spDialog #dialogConfirmBtn').unbind('click', confirm);
      angular.element('#spDialog').unbind('hide.bs.modal', cancel);
      return deferred.resolve({
        checkbox: $scope.dialogData.checkbox
      });
    };

    var cancel = function() {
      if (!confirm_flag) {
        angular.element('#spDialog #dialogConfirmBtn').unbind('click', confirm);
        angular.element('#spDialog').unbind('hide.bs.modal', cancel);
        return deferred.reject();
      }
    };

    angular.element('#spDialog #dialogConfirmBtn').on('click', confirm);
    angular.element('#spDialog').on('hide.bs.modal', cancel);
    return deferred.promise;
  };

  Messenger.options = {
    extraClasses: 'messenger-fixed messenger-on-top messenger-on-center',
    theme: 'future'
  };

  $scope.notice = function(msg) {

    var time = msg.length / 5;
    if (time > 5) {
      time = 5;
    } else if (time < 1) {
      time = 1;
    }

    new Messenger().post({
      message: msg,
      showCloseButton: true,
      id: 'Only-one-message',
      hideAfter: time,
    });
  };

  // 图片预览
  var httpReg = /http(s)?/;
  $scope.showImg = function(url) {
    if (!httpReg.test(url)) return;
    $scope.previewUrl = url;
    angular.element('#showImgPreviewModal').click();
  };

  // 默认所用应用列表
  $scope.defaultGrants = {
    face: {
      name: '颜值测评',
      cname: 'face'
    }
  };

  // 数据校验的正则表达式
  $scope.constant = {
    phoneReg: /^\+?[0-9- ]{5,17}/,
    //phoneReg: /(^\d{7,8})$|(^(\d{3,4})-(\d{7,8})$)|(^(\d{3,4})-(\d{7,8})-(\d{1,4})$)|(^\d{11}$)/,
    emailReg: /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})(\.[a-z]{2,6})?$/i,
    // 匹配 一位的整数或精确到1位的小数
    discountReg: /^[1-9]{1}(.[1-9]{1})?$/,
    // 代金券正则匹配，匹配大于 0.01 的数字
    cashReg: /^0\.0[1-9](\d+)?$|^0\.[1-9]{1}(\d+)?$|^[1-9](\d+)?\.\d+$|^[1-9](\d+)?$/
  };

  $scope.characterCount = function(str) {
    if (!str) return 0;
    var _len = str.replace(/[^\x00-\xff]/ig, 'xx').length;
    return Math.ceil(_len / 2);
  };

  // 校验文本的长度
  // 一个中文字符 === 2个英文字符
  $scope.minLength = function(str, len, required) {
    if (!str) return !required;
    var _len = str.replace(/[^\x00-\xff]/ig, 'xx').length;
    if (_len > len) return false;
    return true;
  };

  // 校验文本的长度
  // 一个中文字符 === 2个英文字符
  $scope.maxLength = function(str, len, required) {
    if (!str) return !required;
    var _len = str.replace(/[^\x00-\xff]/ig, 'xx').length;
    if (_len >= len) return true;
    return false;
  };

  $scope.isNumber = function(arg) {
    return angular.isNumber(arg);
  };

}).controller('NavCtrl', function($rootScope, $location, $filter, $timeout) {
  $timeout(locationChangeSuccess, 100);

  $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);

  function locationChangeSuccess() {
    angular.element('.modal-backdrop').remove();
    angular.element('body').removeClass('modal-open');
    var path = $location.path();
    var state = _.compact(path.split('/')).join('.');
    var navi = angular.element('nav.navi ul.nav li');
    navi.removeClass('active');
    var setActive = function(str) {
      var el = _.find(navi, function(item) {
        return (item.children && item.children[0] && item.children[0].getAttribute && item.children[0].getAttribute('ui-sref') === str);
      });
      var arr = str.split('.');

      if (_.last(arr) === 'wechat' || _.last(arr) === 'manage') {
        angular.element(el).parent().parent().addClass('active');
      }
      if (el) {
        angular.element(el).addClass('active');
      } else if (arr.length > 1) {
        setActive(_.initial(arr).join('.'));
      }
    };
    setActive(state);
    changePageTitle(state);
  }

  function changePageTitle(state) {
    if (state) {
      var title = $filter('translate')('pagetitle.' + state);
      if (title && title !== 'pagetitle.' + state) {
        //angular.element('head title').text(title);
      }
    }
  }
});