'use strict';
/**
  * 首页
  */

angular.module('wechat-platform').controller('FaceChartCtrl', function ($scope, API, FACE, $http, $location) {

  var eventId = $location.search().eventId || $location.search().eid;
  $scope.eventId = eventId;

  $scope.paramsObj = {
    event: 'face',
    eventId: eventId
  };

  // 分页参数
  var count = 10;  
  $scope.pageSize = count;
  $scope.total = 0;

  $scope.faceParams = {
    status: '',
    minPercent: undefined,
    maxPercent: undefined
  };

  // 获取刷脸记录 log
  $scope.faceLogsTotal = 0;
  $scope.facePage = 0;
  $scope.getFaceLogs = function(page){
    page = page || 1;
    $scope.facePage = page;
    var params = {page: page, count: count, eid: eventId};
    _.extend(params, $scope.faceParams);
    $http.get(FACE.api + '/logs', {params: params}).success(function(ret){
      $scope.faceLogs = ret.data;
      $scope.faceLogsTotal = ret.count;
      if(ret.data.length) {
        $scope.faceProgress = 'complete';      
      }else {
        $scope.faceProgress = 'empty';
      }           
    }).error(function(err){
      $scope.faceProgress = 'error';
      console.log(err);
    });
  };

});