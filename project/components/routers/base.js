/**
   * 路由逻辑
   *
   *
   */

angular.module('wechat-platform').constant('RouteManifest', {
  'index': { // 初始页面，无内容，跳转
    url: '/',
    templateUrl: 'modules/loading/loading.html',
    controller: 'IndexCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/home/index.js']);
        }
      ]
    }
  },
  'home': { // 新首页
    url: '/home',
    templateUrl: 'modules/new/new.html',
    controller: 'NewCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/new/new.js',
            'bower_components/echarts/build/dist/echarts-all.js',
            'bower_components/angular-echarts/dist/angular-echarts.min.js',
            'bower_components/angular-smoothscroll/dist/scripts/bb15da28.scripts.js',
            'components/lib/snowstorm-min.js']);
        }
      ]
    }
  },
  'login': { // 登陆页面
    url: '/login',
    templateUrl: 'modules/login/login.html',
    controller: 'LoginCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/login/login.js']);
        }
      ]
    }
  },
  'lock': { // 用户被锁定，或被删除时的登陆后页面
    url: '/lock',
    templateUrl: 'modules/lock/lock.html',
    controller: 'LockCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/lock/lock.js']);
        }
      ]
    }
  },
  'cloud': { // 业务逻辑页面
    url: '/cloud',
    templateUrl: 'modules/cloud/cloud.html',
    controller: 'CloudCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/cloud/cloud.js']);
        }
      ]
    }
  },
  'cloud.agent': { // 运营商管理页面
    url: '/agent',
    templateUrl: 'modules/agent/agent.html',
    controller: 'AgentCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/agent/agent.js']);
        }
      ]
    }
  },
  'cloud.store': { // 商户管理页面
    url: '/store',
    templateUrl: 'modules/store/store.html',
    controller: 'StoreCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/store/store.js']);
        }
      ]
    }
  },
  'cloud.realtime': { // 实时监控页面
    url: '/realtime',
    templateUrl: 'modules/realtime/realtime.html',
    controller: 'RealtimeCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/realtime/realtime.js']);
        }
      ]
    }
  },
  'cloud.apprule': { // 应用管理页面
    url: '/apprule',
    templateUrl: 'modules/apprule/apprule.html',
    controller: 'AppruleCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/apprule/apprule.js']);
        }
      ]
    }
  },
  'cloud.income': { // 应用管理页面
    url: '/income',
    templateUrl: 'modules/income/income.html',
    controller: 'IncomeCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/income/income.js']);
        }
      ]
    }
  },
  'cloud.rule': { // 计费规则管理页面
    url: '/rule',
    templateUrl: 'modules/rule/rule.html',
    controller: 'RuleCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/rule/rule.js']);
        }
      ]
    }
  },
  'cloud.pay': { // 财务管理页面，充值、赠送、退款等
    url: '/pay',
    templateUrl: 'modules/pay/pay.html',
    controller: 'PayCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/pay/pay.js']);
        }
      ]
    }
  },
  'cloud.apply': { // 开户申请单列表页面
    url: '/apply',
    templateUrl: 'modules/apply/apply.html',
    controller: 'ApplyCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/apply/apply.js']);
        }
      ]
    }
  },
  'cloud.apply.create': { // 开户申请单列表页面
    url: '/apply/create',
    templateUrl: 'modules/apply/apply_create.html',
    parent: 'cloud',
    controller: 'ApplyCreateCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/apply/apply_create.js']);
        }
      ]
    }
  },
  'cloud.apply.detail': { // 开户申请单列表页面
    url: '/apply/detail',
    templateUrl: 'modules/apply/apply_detail.html',
    parent: 'cloud',
    controller: 'ApplyDetailCtrl',
    authentication: ['admin', 'operator', 'business'],
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/apply/apply_detail.js']);
        }
      ]
    }
  },
  'cloud.dashboard': { // 当日数据统计，和历史数据列表页面
    url: '/dashboard',
    templateUrl: 'modules/dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/dashboard/dashboard.js']);
        }
      ]
    }
  },
  'cloud.card': { // 卡券列表
    url: '/card',
    templateUrl: 'modules/card/card.html',
    controller: 'CardCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/card/card.js']);
        }
      ]
    }
  },
  'cloud.card.create': { // 创建卡券
    url: '/card/create',
    parent: 'cloud',
    templateUrl: 'modules/card/card_create.html',
    controller: 'CardCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/card/card_create.js']);
        }
      ]
    }
  },
  'cloud.card.detail': { // 卡券详情
    url: '/card/detail',
    parent: 'cloud',
    templateUrl: 'modules/card/card_detail.html',
    controller: 'CardDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/card/card_detail.js']);
        }
      ]
    }
  },
  'cloud.card.codesList': { // 卡券领取人列表
    url: '/card/codesList',
    parent: 'cloud',
    templateUrl: 'modules/card/card_code_list.html',
    controller: 'CardsCodesListCtrl',
    params:{
      card: ''
    },
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/card/card_code_list.js']);
        }
      ]
    }
  },
  'cloud.card.consume': { // 卡券核销
    url: '/card/consume',
    parent: 'cloud',
    templateUrl: 'modules/card/card_consume.html',
    controller: 'CardConsumeCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/card/card_consume.js']);
        }
      ]
    }
  },
  'cloud.poi': {
    url: '/poi',
    templateUrl: 'modules/poi/poi.html',
    controller: 'PoiCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/poi/poi.js']);
        }
      ]
    }
  },
  'cloud.poi.create': {
    url: '/poi/create',
    parent: 'cloud',
    templateUrl: 'modules/poi/poi_create.html',
    controller: 'PoiCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/poi/poi_create.js']);
        }
      ]
    }
  },
  'cloud.poi.detail': {
    url: '/poi/detail',
    parent: 'cloud',
    templateUrl: 'modules/poi/poi_detail.html',
    controller: 'PoiDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/poi/poi_detail.js']);
        }
      ]
    }
  },
  'cloud.event': {
    url: '/event',
    templateUrl: 'modules/event/event.html',
    controller: 'EventCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/event/event.js']);
        }
      ]
    }
  },
  'cloud.event.create': {
    url: '/event/create',
    parent: 'cloud',
    templateUrl: 'modules/event/event_create.html',
    controller: 'EventCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/event/event_create.js']);
        }
      ]
    }
  },
  'cloud.event.chart': {
    url: '/event/chart',
    parent: 'cloud',
    templateUrl: 'modules/event/event_chart.html',
    controller: 'EventChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/event/event_chart.js']);
        }
      ]
    }
  },
  'cloud.event.detail': {
    url: '/event/detail',
    parent: 'cloud',
    templateUrl: 'modules/event/event_detail.html',
    controller: 'EventDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/event/event_detail.js']);
        }
      ]
    }
  },
  'cloud.task': {
    url: '/task',
    templateUrl: 'modules/task/task.html',
    controller: 'TaskCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/task/task.js']);
        }
      ]
    }
  },
  'cloud.task.create': {
    url: '/task/create',
    parent: 'cloud',
    templateUrl: 'modules/task/task_create.html',
    controller: 'TaskCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/task/task_create.js']);
        }
      ]
    }
  },
  'cloud.task.detail': {
    url: '/task/detail',
    parent: 'cloud',
    templateUrl: 'modules/task/task_detail.html',
    controller: 'TaskDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/task/task_detail.js']);
        }
      ]
    }
  },
  'cloud.lbschart': {
    url: '/lbschart',
    templateUrl: 'modules/lbschart/lbschart.html',
    controller: 'LbschartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/lbschart/lbschart.js']);
        }
      ]
    }
  },
  'cloud.lbschart.shops': {
    url: '/lbschart/shops/:events',
    parent: 'cloud',
    templateUrl: 'modules/shop/shop_statistic.html',
    controller: 'ShopStatisticCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/shop/shop_statistic.js']);
        }
      ]
    }
  },
  'cloud.customer': {
    url: '/customer',
    templateUrl: 'modules/customer/customer.html',
    controller: 'CustomerCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/customer/customer.js']);
        }
      ]
    }
  },
  'cloud.customer.track': {
    url: '/customer/track',
    parent: 'cloud',
    templateUrl: 'modules/track/track.html',
    controller: 'TrackCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/track/track.js']);
        }
      ]
    }
  },
  'cloud.customer.track.hb': {
    url: '/customer/track/hb',
    parent: 'cloud',
    templateUrl: 'modules/track/track_hb.html',
    controller: 'trackHbCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/track/track_hb.js']);
        }
      ]
    }
  },
  'cloud.customer.track.cards': {
	  url: '/customer/track/cards',
	  parent: 'cloud',
	  templateUrl: 'modules/track/track_cards.html',
	  controller: 'trackCardsCtrl',
	  resolve: {
		  deps: ['$ocLazyLoad',
			  function ($ocLazyLoad) {
				  return $ocLazyLoad.load(['modules/track/track_cards.js']);
			  }
		  ]
	  }
  },
  'cloud.around': {
    url: '/around',
    templateUrl: 'modules/around/around.html',
    controller: 'AroundCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/around/around.js']);
        }
      ]
    }
  },
  'cloud.send': {
    url: '/send',
    templateUrl: 'modules/send/send.html',
    controller: 'SendCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/send/send.js']);
        }
      ]
    }
  },
  'cloud.send.advanced': {
    url: '/send/advanced',
    parent: 'cloud',
    templateUrl: 'modules/send/send_advanced.html',
    controller: 'SendAdvancedCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/send/send_advanced.js']);
        }
      ]
    }
  },
  'cloud.send.logs':{
    url: '/send/logs',
    parent: 'cloud',
    templateUrl: 'modules/send/send_logs.html',
    controller: 'SendLogsCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/send/send_logs.js']);
        }
      ]
    }
  },
  'cloud.ppt': {
    url: '/ppt',
    templateUrl: 'modules/ppt/ppt.html',
    controller: 'PptCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load([{
            files: [
              'modules/ppt/ppt-refactor.js',
              'bower_components/echarts/build/dist/echarts-all.js',
              'bower_components/angular-echarts/dist/angular-echarts.min.js',
              'components/lib/sigma.js',
              'components/lib/plugins.js',
              'components/lib/Please.min.js'
            ],
            serie: true
          }]);
        }
      ]
    }
  },
  'cloud.authorization': {
    url: '/authorization',
    templateUrl: 'modules/authorization/authorization.html',
    controller: 'AuthorizationCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/authorization/authorization.js']);
        }
      ]
    }
  },
  'cloud.profile': {
    url: '/profile',
    templateUrl: 'modules/profile/profile.html',
    controller: 'ProfileCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/profile/profile.js']);
        }
      ]
    }
  },
  'cloud.bill': { // 我的账单
    url: '/bill',
    templateUrl: 'modules/bill/bill.html',
    controller: 'BillCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/bill/bill.js']);
        }
      ]
    }
  },
  'cloud.wechat': { // 公众号绑定页面
    url: '/wechat',
    templateUrl: 'modules/wechat/wechat.html',
    controller: 'WechatCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wechat/wechat.js']);
        }
      ]
    }
  },
  'cloud.manage': {
    url: '/manage',
    templateUrl: 'modules/manage/manage.html',
    controller: 'ManageCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/manage/manage.js']);
        }
      ]
    }
  },
  'cloud.document': { // 文档
    url: '/document',
    templateUrl: 'modules/document/document.html',
    controller: 'DocumentCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/document/document.js']);
        }
      ]
    }
  },
  'cloud.wx_beacons': {
    url: '/wx_beacons',
    templateUrl: 'modules/wx_beacons/wx_beacons.html',
    controller: 'WX_BeaconsCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_beacons/wx_beacons.js']);
        }
      ]
    }
  },
  'cloud.wx_beacons.detail': {
    url: '/wx_beacons/detail',
    parent: 'cloud',
    templateUrl: 'modules/wx_beacons/wx_beacons_detail.html',
    controller: 'WX_BeaconsDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/wx_beacons/wx_beacons_detail.js']);
        }
      ]
    }
  },
  'cloud.wx_pages': {
    url: '/wx_pages',
    templateUrl: 'modules/wx_pages/wx_pages.html',
    controller: 'WX_PagesCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_pages/wx_pages.js']);
        }
      ]
    }
  },
  'cloud.wx_pages.detail': {
    url: '/wx_pages/detail',
    parent: 'cloud',
    templateUrl: 'modules/wx_pages/wx_pages_detail.html',
    controller: 'WX_PagesDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/wx_pages/wx_pages_detail.js']);
        }
      ]
    }
  },
  'cloud.wx_group': {
    url: '/wx_group',
    templateUrl: 'modules/wx_group/wx_group.html',
    controller: 'WX_GroupCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_group/wx_group.js']);
        }
      ]
    }
  },
  'cloud.wx_group.detail': {
    url: '/wx_group/detail',
    parent: 'cloud',
    templateUrl: 'modules/wx_group/wx_group_detail.html',
    controller: 'WX_GroupDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/wx_group/wx_group_detail.js']);
        }
      ]
    }
  },
  'cloud.wx_envelop': {
    url: '/wx_envelop',
    templateUrl: 'modules/wx_envelop/wx_envelop.html',
    controller: 'WX_EnvelopCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_envelop/wx_envelop.js']);
        }
      ]
    }
  },
  'cloud.wx_envelop_logs':{
    url: '/wx_envelop/logs',
    templateUrl: 'modules/wx_envelop/wx_envelop_logs.html',
    controller: 'WX_EnvelopLogsCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_envelop/wx_envelop_logs.js']);
        }
      ]
    }
  },
  'cloud.wx_shops': {
    url: '/wx_shops',
    templateUrl: 'modules/wx_shops/wx_shops.html',
    controller: 'WX_ShopsCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_shops/wx_shops.js']);
        }
      ]
    }
  },
  'cloud.wx_shops_detail': {
    url: '/wx_shops/detail',
    templateUrl: 'modules/wx_shops/wx_shops_detail.html',
    controller: 'WX_ShopsDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/wx_shops/wx_shops_detail.js']);
        }
      ]
    }
  },
  'cloud.wx_shops_create': {
	  url: '/wx_shops/create',
	  templateUrl: 'modules/wx_shops/wx_shops_create.html',
	  controller: 'WX_ShopsCreateCtrl',
	  resolve: {
		  deps: ['$ocLazyLoad',
		    function ($ocLazyLoad) {
          return $ocLazyLoad.load([{
            files: [
              'components/lib/qqmaphelper.js',
              'modules/wx_shops/wx_shops_create.js'
            ],
            serie: true
          }]);
		    }
		  ]
	  }
  },
  'cloud.message': {
    url: '/message/list',
    templateUrl: 'modules/message/message.html',
  },
  'cloud.press_kit': {
    url: '/press_kit',
    parent: 'cloud',
    templateUrl: 'modules/press/press_kit.html',
    controller: 'PressKitCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/press/press_kit.js']);
        }
      ]
    }
  },
  'cloud.share_doc': {
    url: '/share_doc',
    parent: 'cloud',
    templateUrl: 'modules/share/share_doc.html',
    controller: 'ShareDocCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/share/share_doc.js']);
        }
      ]
    }
  },
  'cloud.spot_group': { //点位管理界面
    url: '/spot_group',
    parent: 'cloud',
    templateUrl: 'modules/spot/spot_group.html',
    controller: 'SpotGroupCtrl', 
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/spot/spot_group.js']);
        }
      ]
    }
  },'cloud.spot_group.detail': { //点位管理界面
    url: '/spot_group/detail',
    parent: 'cloud',
    templateUrl: 'modules/spot/spot_group_detail.html',
    controller: 'SpotGroupDetailCtrl', 
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/spot/spot_group_detail.js']);
        }
      ]
    }
  }
});
