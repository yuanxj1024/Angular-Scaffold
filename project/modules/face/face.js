'use strict';
/**
  * 首页
  */

angular.module('wechat-platform').controller('FaceCtrl', function ($rootScope, $scope, FACE, cookie, $http, $error) {
  $scope.progress = 'loading';

  //获得活动列表
  var count = 30;
  $scope.pageSize = count; // 每页条目
  getEvents();
  $scope.getEvents = getEvents;
  function getEvents(page) {
    page = page || 1;
    $scope.currentPage = page;
    $http.get(FACE.api + '/events', {params: {page: page, count: count}}).success(function (results) {
      $scope.total = results.count;
      $scope.events = results.data;
      if(results.data.length > 0){
        $scope.progress = 'complete';
      }else {
        $scope.progress = 'empty';
      }          
    }).error(function (err) {
      $error.show(err);
      $scope.progress = 'error';
    });
  }

  var removeItem = function (model, item) {
    var index = model.indexOf(item);     
    model.splice(index, 1);
  };

  //显示二维码框
  $scope.showQRModal = function(curev){
    $scope.currentEvent = curev;
    angular.element('#showQRModal').click();
  };

  $scope.onLinkClick = function () {
    $scope.notice('已复制');
  };

  //获取微信活动链接
  $scope.getLink = function (id) {
    return FACE.api + '/views/' + id;
  }; 

  $scope.deleteEvent = function(model, item, eid){
    var msg = '请确认此操作，删除后不可恢复。';
    var title = '删除刷脸活动';    
    $scope.confirm(msg, title).then(function(){
      $http.delete( FACE.api+'/events/'+eid ).success(function () {
        removeItem(model, item);
      }).error(function (err) {
        $error.show(err);
      });    
    });
  };


});