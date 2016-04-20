(function(self){

  self.Sensoro = self.Sensoro || {};
  // BASE API
  self.Sensoro.API = 'http://qing.mocha.server.sensoro.com/base';
  // 卡券自助核销入口 url
  self.Sensoro.CardCustomUrl = 'http://x.mocha.server.sensoro.com/mobile/consumer.html';
  // 微信授权 URL
  self.Sensoro.authUrl = 'http://qing.mocha.server.sensoro.com/base/wechats/auth';

    // Report 平台
  self.Sensoro.REPORTSAPI = 'http://qing.mocha.server.sensoro.com/reports';
  // Manage 平台
  self.Sensoro.MANAGEAPI = 'https://manage-api.mocha.server.sensoro.com';
  // Cloud 平台
  self.Sensoro.CLOUDAPI = 'https://cloud-api.mocha.server.sensoro.com';
  // 计费平台
  self.Sensoro.ChargAPI = 'http://qing.mocha.server.sensoro.com/chargs';

  // 海报卡劵
  self.Sensoro.LOTTERY = {
    api: 'http://qing.mocha.server.sensoro.com/app/lottery',
  };

  // 菜单
  self.Sensoro.MENUS = {
    api: 'http://qing.mocha.server.sensoro.com/app/menu',
    logo_default:'http://qing.mocha.server.sensoro.com/img/logo_default.jpg',
  };

  // 图文
  self.Sensoro.ARTICLES = {
    api: 'http://qing.mocha.server.sensoro.com/app/article',
  };

  // 摇一摇关注
  self.Sensoro.FOLLOWS = {
    api: 'http://qing.mocha.server.sensoro.com/app/follow',
  };

  // 调查问卷
  self.Sensoro.SURVEYS = {
      api:'http://qing.mocha.server.sensoro.com/app/survey'
  };

  // 聊天室
  self.Sensoro.CHATS = {
    api: 'http://qing.mocha.server.sensoro.com/app/chat',
  };

  // 广告栏
  self.Sensoro.ADCOLUMNS = {
    api: 'http://qing.mocha.server.sensoro.com/app/adcolumn',
  };

  //百宝箱
  self.Sensoro.BOXS = {
    api:'http://qing.mocha.server.sensoro.com/app/box',
    logo_default:'http://qing.mocha.server.sensoro.com/img/logo_default.jpg',
  };

  //刷脸
  self.Sensoro.FACE = {
    api:'http://qing.mocha.server.sensoro.com/app/face',
  };

  //刮刮卡
  self.Sensoro.SCRATCH = {
    api:'http://qing.mocha.server.sensoro.com/app/scratch',
  };

  //签到
  self.Sensoro.STAMPS = {
      api: 'http://qing.mocha.server.sensoro.com/app/stamp',
  };

  //投票
  self.Sensoro.VOTE = {
      api: 'http://qing.mocha.server.sensoro.com/app/vote',
  };

  //圣诞
  self.Sensoro.XMAS = {
      api: 'http://qing.mocha.server.sensoro.com/app/xmas',
  };

  //nine
  self.Sensoro.NINE = {
    api: 'http://qing.mocha.server.sensoro.com/app/nine',
  };

  //摇红包
  self.Sensoro.SHAKEHB = {
      api: 'http://qing.mocha.server.sensoro.com/app/shakehb',
  };

  //导览
  self.Sensoro.GUIDE = {
      api: 'http://qing.mocha.server.sensoro.com/app/guide',
  };

  //摇红包
  self.Sensoro.CHUN = {
      api: 'http://qing.mocha.server.sensoro.com/app/chun',
  };

  //疯狂摇一摇
  self.Sensoro.SHAKE = {
      api: 'http://qing.mocha.server.sensoro.com/app/shake',
  };

  //九公格
  self.Sensoro.NINE = {
      api: 'http://qing.mocha.server.sensoro.com/app/nine',
  };

  //大转盘
  self.Sensoro.ROTATE = {
      api: 'http://qing.mocha.server.sensoro.com/app/rotate',
  };

  //买单
  self.Sensoro.MAIDAN = {
    api: 'http://qing.mocha.server.sensoro.com/app/maidan/events/',
    views: 'http://qing.mocha.server.sensoro.com/app/maidan/views/'
  };

  //CODE
  self.Sensoro.CODE = {
    api: 'http://qing.mocha.server.sensoro.com/app/code'
  }

  // 批量创建店铺的标准模板
  self.Sensoro.SHOP_STANDARD_EXCEL_URL = 'http://7xool2.com1.z0.glb.clouddn.com/%E9%97%A8%E5%BA%97%E6%89%B9%E9%87%8F%E4%B8%8A%E4%BC%A0%E6%A8%A1%E6%9D%BF.xlsx';

})(window);
