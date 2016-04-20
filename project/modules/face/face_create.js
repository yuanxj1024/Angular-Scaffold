'use strict';
/**
  * 首页
  */

angular.module('wechat-platform').controller('FaceCreateCtrl', function ($scope, API, $http, FACE, cookie, Upload, $error, $location) {
  // 收起左边菜单栏
  $scope.settings.base.asideFolded = true;

  $scope.eventCards = []; // 活动使用的卡券数组
  $scope.charLenError = {};


  //活动信息
  $scope.event = {
    name: '', //活动名称    
    pv: 2000, // 活动参与人数 基数
    target: 0, // 活动限制参与人数 
    beginTime: '', // 活动开始时间
    endTime: '', // 活动结束时间
    des: '',//默认描述
    tips: '请尽快去领取您的奖品哦！', // 刷脸中奖描述
    failDes: '您的颜值太高，我们不敢说...', // 未中奖文案
    shareFailDes: '您的好友颜值太高，我们不敢说...', // 未中奖好友文案
    shopInfo: {
      logo: $scope.user.avatar || 'img/a0.jpg', //商家logo
      name: '', //商家名称
      des: '' //商家描述      
    },
    portrait: '', // 刷脸默认肖像(手机显示)
    avatar: '', // 刷脸默认头像（手机显示）
    share:{
      onOff: true,
      icon: $scope.user.avatar || 'img/a0.jpg', //分享的图标
      title: '', //分享的名称
      des: '' //分享描述
    },
    cards: [],
    lotterySettings: []
  };


  //通过ID获得指定活动
  var getEventById = function (id, cb) {
    $http.get(FACE.api + '/events/' + id).success(function(result) {
      cb(null, result);
    }).error(function (err) {
      cb(err);
    });
  };

  var eid = $location.search().eid;
  // 若有此 id，则表示编辑已有活动信息，需要获取以选中卡券信息
  if (eid) {
    getEventById(eid, function (err, result) {
      if(err || !result) {
        $error.show(err || '该活动不存在');
        return $location.path('/cloud/appstore/face');        
      }
      $scope.event = result;
      //生成 cardId 组成的数组
      $scope.cardIds = _.pluck(result.cards, 'cardId');
    });
  }else{
    $scope.event.portrait = 'http://7u2jeb.com1.z0.glb.clouddn.com/6e7aba7b9aee51791019b00afaab17d4.jpg';
    $scope.event.avatar = 'http://7u2jeb.com1.z0.glb.clouddn.com/8a53f6eb8f2e54f16effd8ead88f0ba7.png';
  }

  // 通过指令渲染已选择卡券后通过此函数获取卡券列表详情
  $scope.getSelectCardsInfo = function(data) {
    $scope.eventCards = data;
  };


  // 规则
  

  // 添加规则
  $scope.addSettings = function () {
    $scope.event.lotterySettings.push({
      gender: 'male', //性别
      from: '', //起
      to: '', //止
      cardId: undefined, //卡券ID
      ownerDes: '', // 结果描述
      shareDes:''
    });
  };

  //检验规则 
  function ruleCheck(rules){
    var len = rules.length;    
    if(!len) {
      return $error.show('请设置中奖规则！');
    }
    var overlap = {
      male: new Array(100),
      female: new Array(100)
    };

    var index = 0;

    while( index < len ){//从前向后检查
      var rule = rules[index];
      var errors = {};
      errors[index] = {};

      //空值检测
      var empty; //str
      _.each(rule, function(val, key){
        if((!val && Number(val) !== 0) && key !== 'cardId') {
          empty += (key + ' ');
        }
      });

      if(empty){
        empty += '不能为空！';      
        errors[index].empty = empty;
      }

      if(rule.to <= rule.from ){
        errors[index].range = '最大颜值不能小于最小颜值';
      }

      //范围检测
      for( var i = parseFloat(rule.from); i< parseFloat(rule.to) ; i++ ){
        if(rule.gender === 'both'){
          //male
          var lapM = overlap.male[i];
          if(lapM){
            errors[index].over = '范围与第'+ lapM +'条规则重叠';
            break;
          }
          //female
          var lapF = overlap.female[i];
          if(lapF){
            errors[index].over = '范围与第'+ lapF +'条规则重叠';
            break;
          }

          overlap.female[i] = (index+1);
          overlap.male[i] = (index+1);

        }else{
          var lap = overlap[rule.gender][i];//用数字(规则序号)代替做判断
          if( lap ){
            errors[index].over = '范围与第'+ lap +'条规则重叠';
            break;
          } //已经为 true  ==》 重叠 
          overlap[rule.gender][i] = (index+1);         
        }
      }      
      if( errors[index].empty || errors[index].over || errors[index].range)return errors;
      index++;
    }
  }

  // 移除规则
  $scope.removeSettings = function (model, item) {
    var index = model.indexOf(item);
    model.splice(index, 1);
  };  

  //图片上传
  $scope.$watch('shopInfoLogo', function () {
    $scope.uploadImage($scope.shopInfoLogo, '.shopInfoLogo', function(err, url) {
      if(err) {
        $error.show(err);
      } else {
        $scope.event.shopInfo.logo = url;
      }
    });
  });
  //share_icon
  $scope.$watch('portrait', function () {
    $scope.uploadImage($scope.portrait, '.portrait', function(err, url) {
      if(err) {
        $error.show(err);
      } else {
        $scope.event.portrait = url;
      }
    });
  });

  $scope.$watch('avatar', function () {
    $scope.uploadImage($scope.avatar, '.avatar', function(err, url) {
      if(err) {
        $error.show(err);
      } else {
        $scope.event.avatar = url;
      }
    });
  });  

  $scope.$watch('shareIcon', function () {
    $scope.uploadImage($scope.shareIcon, '.shareIcon', function(err, url) {
      if(err) {
        $error.show(err);
      } else {
        $scope.event.share.icon = url;
      }
    });
  });



  //保存提交    
  $scope.save = function () {

    if (_.compact(_.values($scope.charLenError)).length) {
      return $error.show('请修改表单的不合法字段!');
    }

    var data = angular.copy($scope.event);
    //规则检验
    var errorList = ruleCheck(data.lotterySettings),
        error = _.find(errorList,function(val){ return val; });

    if(error){
      var str;
      for( var attr in errorList){
        str = '第' + ( Number(attr) + 1 ) + '规则有误:<br>';
        for( var item in errorList[attr]){

          str += errorList[attr][item];
        }
      }

      return $error.show(str);
    }

    data.lotterySettings = _.flatten(_.compact(_.map(data.lotterySettings, function(item){
      if(item.gender === 'both'){
        var cp = _.clone(item);
        cp.gender = 'male';
        var cp2 = _.clone(item); 
        cp2.gender = 'female';
        return [cp, cp2];
      }
      return item;
    })), true);

    data.cards = _.map($scope.eventCards, function(item){
      return {
        name: item.base_info.title,
        beginTime: item.base_info.date_info.begin_timestamp || item.base_info.date_info.fixed_begin_term,
        endTime: item.base_info.date_info.end_timestamp || item.base_info.date_info.fixed_term,
        dateInfo: item.base_info.date_info,
        status: item.status,
        cardId: item.card_id,
        getLimit: item.base_info.get_limit,
        cardType: item.card_type,
        quantity: item.base_info.sku.quantity
      };
    });

      
    if(!data.lotterySettings || !data.lotterySettings.length) {
      return $error.show('请设置中奖规则');
    }

    if(!data.shopInfo.logo || data.shopInfo.logo === 'img/a0.jpg') {
      return $error.show('请上传商户图标');
    }

    if(!data.share.icon || data.share.icon === 'img/a0.jpg') {
      return $error.show('请上传分享图标');
    }
    data.beginTime = moment(data.beginTime).startOf('day').valueOf();
    data.endTime = moment(data.endTime).endOf('day').valueOf();

    if(eid){//改
      $http.put( FACE.api+'/events/'+eid, data).success(function () {
        $location.path('/cloud/appstore/face');
      }).error(function (err) {
        $error.show(err);
      });
    }else{//创建
      $http.post( FACE.api+'/events', data).success(function () {
        $location.path('/cloud/appstore/face');
      }).error(function (err) {
        $error.show(err);
      });      
    }
  };

  // 日期控件
  $scope.dateOptions = {
    minDate: Date.now(),
    open: function(el) {
      angular.element(el).focus();
      angular.element(el).click();
    }
  };

  //提示文本最大长度
  $scope.maxlength = 50;

  // 根据 cardId 获取 卡券信息
  $scope.getCardInfoById = function(cardId) {
    return _.find($scope.eventCards, function(item){
      return item.card_id === cardId;
    }) || {};
  };

});