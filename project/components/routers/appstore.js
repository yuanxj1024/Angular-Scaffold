/**
   * 路由逻辑
   *
   *
   */

angular.module('wechat-platform').constant('AppStore', {
  'cloud.appstore': { // 应用相关页面
    url: '/appstore',
    templateUrl: 'modules/appstore/appstore.html',
    controller: 'AppStoreCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/appstore/appstore.js']);
        }
      ]
    }
  },
  'cloud.appstore.lottery': { // 海报卡券
    url: '/appstore/lottery',
    parent: 'cloud',
    templateUrl: 'modules/lottery/lottery.html',
    controller: 'LotteryCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/lottery/lottery.js']);
        }
      ]
    }
  },
  'cloud.appstore.lottery.create': {
    url: '/appstore/lottery/create',
    parent: 'cloud',
    templateUrl: 'modules/lottery/lottery_create.html',
    controller: 'LotteryCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/lottery.css', 'modules/lottery/lottery_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.lottery.chart': {
    url: '/appstore/lottery/chart',
    parent: 'cloud',
    templateUrl: 'modules/lottery/lottery_chart.html',
    controller: 'LotteryChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/lottery/lottery_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.box': { // 白宝箱
    url: '/appstore/box',
    parent: 'cloud',
    templateUrl: 'modules/box/box.html',
    controller: 'BoxCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/box/box.js']);
        }
      ]
    }
  },
  'cloud.appstore.box.create': {
    url: '/appstore/box/create',
    parent: 'cloud',
    templateUrl: 'modules/box/box_create.html',
    controller: 'BoxCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/box.css','modules/box/box_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.box.chart': {
    url: '/appstore/box/chart',
    parent: 'cloud',
    templateUrl: 'modules/box/box_chart.html',
    controller: 'BoxChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/box/box_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.face': { // 颜值测评
    url: '/appstore/face',
    parent: 'cloud',
    templateUrl: 'modules/face/face.html',
    controller: 'FaceCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/face/face.js']);
        }
      ]
    }
  },
  'cloud.appstore.face.create': {
    url: '/appstore/face/create',
    parent: 'cloud',
    templateUrl: 'modules/face/face_create.html',
    controller: 'FaceCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/shualian_preview.css', 'css/shualian.css', 'modules/face/face_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.face.chart': {
    url: '/appstore/face/chart',
    parent: 'cloud',
    templateUrl: 'modules/face/face_chart.html',
    controller: 'FaceChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/face/face_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.article': { // 图文
    url: '/appstore/article',
    parent: 'cloud',
    templateUrl: 'modules/article/article.html',
    controller: 'ArticleCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/article/article.js']);
        }
      ]
    }
  },
  'cloud.appstore.article.create': {
    url: '/appstore/article/create',
    parent: 'cloud',
    templateUrl: 'modules/article/article_create.html',
    controller: 'ArticleCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/article/article_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.article.chart': {
    url: '/appstore/article/chart',
    parent: 'cloud',
    templateUrl: 'modules/article/article_chart.html',
    controller: 'ArticleChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/article/article_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.follow': { // 摇一摇关注
    url: '/appstore/follow',
    parent: 'cloud',
    templateUrl: 'modules/follow/follow.html',
    controller: 'FollowCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/follow/follow.js']);
        }
      ]
    }
  },
  'cloud.appstore.follow.create': {
    url: '/appstore/follow/create',
    parent: 'cloud',
    templateUrl: 'modules/follow/follow_create.html',
    controller: 'FollowCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/follow/follow_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.follow.chart': {
    url: '/appstore/follow/chart',
    parent: 'cloud',
    templateUrl: 'modules/follow/follow_chart.html',
    controller: 'FollowChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/follow/follow_chart.js','bower_components/echarts/build/dist/echarts-all.js','bower_components/angular-echarts/dist/angular-echarts.min.js']);
        }
      ]
    }
  },
  'cloud.appstore.menu': { // 菜单
    url: '/appstore/menu',
    parent: 'cloud',
    templateUrl: 'modules/menu/menu.html',
    controller: 'MenuCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/menu/menu.js']);
        }
      ]
    }
  },
  'cloud.appstore.menu.create': {
    url: '/appstore/menu/create',
    parent: 'cloud',
    templateUrl: 'modules/menu/menu_create.html',
    controller: 'MenuCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/menu.css', 'modules/menu/menu_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.menu.chart': {
    url: '/appstore/menu/chart',
    parent: 'cloud',
    templateUrl: 'modules/menu/menu_chart.html',
    controller: 'MenuChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/menu/menu_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.adcolumn': { // 广告栏
    url: '/appstore/adcolumn',
    parent: 'cloud',
    templateUrl: 'modules/adcolumn/adcolumn.html',
    controller: 'AdcolumnCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/adcolumn/adcolumn.js']);
        }
      ]
    }
  },
  'cloud.appstore.adcolumn.create': {
    url: '/appstore/adcolumn/create',
    parent: 'cloud',
    templateUrl: 'modules/adcolumn/adcolumn_create.html',
    controller: 'AdcolumnCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/adcolumn/adcolumn_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.adcolumn.chart': {
    url: '/appstore/adcolumn/chart',
    parent: 'cloud',
    templateUrl: 'modules/adcolumn/adcolumn_chart.html',
    controller: 'AdcolumnChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/adcolumn/adcolumn_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.chat': { // 聊天室
    url: '/appstore/chat',
    parent: 'cloud',
    templateUrl: 'modules/chat/chat.html',
    controller: 'ChatCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/chat/chat.js']);
        }
      ]
    }
  },
  'cloud.appstore.chat.create': {
    url: '/appstore/chat/create',
    parent: 'cloud',
    templateUrl: 'modules/chat/chat_create.html',
    controller: 'ChatCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/chat/chat_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.chat.chart': {
    url: '/appstore/chat/chart',
    parent: 'cloud',
    templateUrl: 'modules/chat/chat_chart.html',
    controller: 'ChatChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/chat/chat_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.survey': { // 调查问卷
    url: '/appstore/survey',
    parent: 'cloud',
    templateUrl: 'modules/survey/survey.html',
    controller: 'SurveyCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/survey/survey.js']);
        }
      ]
    }
  },
  'cloud.appstore.survey.create': {
    url: '/appstore/survey/create',
    parent: 'cloud',
    templateUrl: 'modules/survey/survey_create.html',
    controller: 'SurveyCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/survey/survey_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.survey.chart': {
    url: '/appstore/survey/chart',
    parent: 'cloud',
    templateUrl: 'modules/survey/survey_chart.html',
    controller: 'SurveyChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/survey/survey_chart.js','css/survey.css','bower_components/echarts/build/dist/echarts-all.js','bower_components/angular-echarts/dist/angular-echarts.min.js']);
        }
      ]
    }
  },
  'cloud.appstore.shake': { // 疯狂摇一摇
    url: '/appstore/shake',
    parent: 'cloud',
    templateUrl: 'modules/shake/shake.html',
    controller: 'ShakeCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/shake/shake.js']);
        }
      ]
    }
  },
  'cloud.appstore.shake.create': {
    url: '/appstore/shake/create',
    parent: 'cloud',
    templateUrl: 'modules/shake/shake_create.html',
    controller: 'ShakeCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/shake/shake_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.shake.chart': {
    url: '/appstore/shake/chart',
    parent: 'cloud',
    templateUrl: 'modules/shake/shake_chart.html',
    controller: 'ShakeChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/shake/shake_chart.js']);
        }
      ]
    }
  },

  'cloud.appstore.maidan': { // 买单
    url: '/appstore/maidan',
    parent: 'cloud',
    templateUrl: 'modules/maidan/maidan.html',
    controller: 'maidanCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/maidan/maidan.js']);
        }
      ]
    }
  },
  'cloud.appstore.maidan.create': {
    url: '/appstore/maidan/create',
    parent: 'cloud',
    templateUrl: 'modules/maidan/maidan_create.html',
    controller: 'maidanCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/maidan/maidan_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.maidan.chart': {
    url: '/appstore/maidan/chart',
    parent: 'cloud',
    templateUrl: 'modules/maidan/maidan_chart.html',
    controller: 'maidanChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/maidan/maidan_chart.js']);
        }
      ]
    }
  },

  // code
  'cloud.appstore.code': {
    url: '/appstore/code',
    parent: 'cloud',
    templateUrl: 'modules/code/code.html',
    controller: 'codeCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/code/code.js']);
        }
      ]
    }
  },
  'cloud.appstore.code.create': {
    url: '/appstore/code/create',
    parent: 'cloud',
    templateUrl: 'modules/code/code_create.html',
    controller: 'codeCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/code/code_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.code.chart': {
    url: '/appstore/code/chart',
    parent: 'cloud',
    templateUrl: 'modules/code/code_chart.html',
    controller: 'codeChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/code/code_chart.js']);
        }
      ]
    }
  },



  'cloud.appstore.nine': { // 九宫格
    url: '/appstore/nine',
    parent: 'cloud',
    templateUrl: 'modules/nine/nine.html',
    controller: 'NineCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/nine/nine.js']);
        }
      ]
    }
  },
  'cloud.appstore.nine.create': {
    url: '/appstore/nine/create',
    parent: 'cloud',
    templateUrl: 'modules/nine/nine_create.html',
    controller: 'NineCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/nine.css', 'modules/nine/nine_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.nine.chart': {
    url: '/appstore/nine/chart',
    parent: 'cloud',
    templateUrl: 'modules/nine/nine_chart.html',
    controller: 'NineChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/nine/nine_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.scratch': { // 挂挂卡
    url: '/appstore/scratch',
    parent: 'cloud',
    templateUrl: 'modules/scratch/scratch.html',
    controller: 'ScratchCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/scratch/scratch.js']);
        }
      ]
    }
  },
  'cloud.appstore.scratch.create': {
    url: '/appstore/scratch/create',
    parent: 'cloud',
    templateUrl: 'modules/scratch/scratch_create.html',
    controller: 'ScratchCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/ggk.css', 'modules/scratch/scratch_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.scratch.chart': {
    url: '/appstore/scratch/chart',
    parent: 'cloud',
    templateUrl: 'modules/scratch/scratch_chart.html',
    controller: 'ScratchChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/scratch/scratch_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.stamp': { // 签到
    url: '/appstore/stamp',
    parent: 'cloud',
    templateUrl: 'modules/stamp/stamp.html',
    controller: 'StampCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/stamp/stamp.js']);
        }
      ]
    }
  },
  'cloud.appstore.stamp.create': {
    url: '/appstore/stamp/create',
    parent: 'cloud',
    templateUrl: 'modules/stamp/stamp_create.html',
    controller: 'StampCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['css/stamp_preview.css', 'modules/stamp/stamp_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.stamp.chart': {
    url: '/appstore/stamp/chart',
    parent: 'cloud',
    templateUrl: 'modules/stamp/stamp_chart.html',
    controller: 'StampChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['css/shualian_preview.css', 'css/shualian.css', 'modules/stamp/stamp_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.xmas': { // 圣诞
    url: '/appstore/xmas',
    parent: 'cloud',
    templateUrl: 'modules/xmas/xmas.html',
    controller: 'XmasCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/xmas/xmas.js']);
        }
      ]
    }
  },
  'cloud.appstore.xmas.create': {
    url: '/appstore/xmas/create',
    parent: 'cloud',
    templateUrl: 'modules/xmas/xmas_create.html',
    controller: 'XmasCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/xmas.css', 'modules/xmas/xmas_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.xmas.chart': {
    url: '/appstore/xmas/chart',
    parent: 'cloud',
    templateUrl: 'modules/xmas/xmas_chart.html',
    controller: 'XmasChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/xmas/xmas_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.rotate': { // 圣诞
    url: '/appstore/rotate',
    parent: 'cloud',
    templateUrl: 'modules/rotate/rotate.html',
    controller: 'RotateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/rotate/rotate.js']);
        }
      ]
    }
  },
  'cloud.appstore.rotate.create': {
    url: '/appstore/rotate/create',
    parent: 'cloud',
    templateUrl: 'modules/rotate/rotate_create.html',
    controller: 'RotateCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['css/rotate.css', 'modules/rotate/rotate_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.rotate.chart': {
    url: '/appstore/rotate/chart',
    parent: 'cloud',
    templateUrl: 'modules/rotate/rotate_chart.html',
    controller: 'RotateChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/rotate/rotate_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.shakehb': { // 摇一摇红包
    url: '/appstore/shakehb',
    parent: 'cloud',
    templateUrl: 'modules/shakehb/shakehb.html',
    controller: 'ShakeHBCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/shakehb/shakehb.js']);
        }
      ]
    }
  },
  'cloud.appstore.shakehb.detail': {
    url: '/appstore/shakehb/detail',
    parent: 'cloud',
    templateUrl: 'modules/shakehb/shakehb_detail.html',
    controller: 'ShakehbDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/shakehb/shakehb_detail.js']);
        }
      ]
    }
  },
  'cloud.appstore.shakehb.create': {
    url: '/appstore/shakehb/create',
    parent: 'cloud',
    templateUrl: 'modules/shakehb/shakehb_create.html',
    controller: 'ShakehbCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/shakehb/shakehb_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.shakehb.chart': {
    url: '/appstore/shakehb/chart',
    parent: 'cloud',
    templateUrl: 'modules/shakehb/shakehb_chart.html',
    controller: 'ShakehbChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/shakehb/shakehb_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.guide': { // 导览
    url: '/appstore/guide',
    parent: 'cloud',
    templateUrl: 'modules/guide/guide.html',
    controller: 'GuideCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/guide/guide.js']);
        }
      ]
    }
  },
  'cloud.appstore.guide.create': {
    url: '/appstore/guide/create',
    parent: 'cloud',
    templateUrl: 'modules/guide/guide_create.html',
    controller: 'GuideCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/guide/guide_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.guide.chart': {
    url: '/appstore/guide/chart',
    parent: 'cloud',
    templateUrl: 'modules/guide/guide_chart.html',
    controller: 'GuideChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/guide/guide_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.brand': { // 品牌卡券2
    url: '/appstore/brand',
    parent: 'cloud',
    templateUrl: 'modules/brand/brand.html',
    controller: 'BrandCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/brand/brand.js']);
        }
      ]
    }
  },
  'cloud.appstore.brand.create': {
    url: '/appstore/brand/create',
    parent: 'cloud',
    templateUrl: 'modules/brand/brand_create.html',
    controller: 'BrandCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/brand/brand_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.vote': { // 投票
    url: '/appstore/vote',
    parent: 'cloud',
    templateUrl: 'modules/vote/vote.html',
    controller: 'VoteCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/vote/vote.js']);
        }
      ]
    }
  },
  'cloud.appstore.vote.create': {
    url: '/appstore/vote/create',
    parent: 'cloud',
    templateUrl: 'modules/vote/vote_create.html',
    controller: 'VoteCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/vote/vote_create.js', 'css/vote_preview.css']);
        }
      ]
    }
  },
  'cloud.appstore.vote.chart': {
    url: '/appstore/vote/chart',
    parent: 'cloud',
    templateUrl: 'modules/vote/vote_chart.html',
    controller: 'VoteChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/vote/vote_chart.js']);
        }
      ]
    }
  },
  'cloud.appstore.chun': { // 摇一摇红包
    url: '/appstore/chun',
    parent: 'cloud',
    templateUrl: 'modules/chun/chun.html',
    controller: 'ChunCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/chun/chun.js']);
        }
      ]
    }
  },
  'cloud.appstore.chun.detail': {
    url: '/appstore/chun/detail',
    parent: 'cloud',
    templateUrl: 'modules/chun/chun_detail.html',
    controller: 'ChunDetailCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/chun/chun_detail.js']);
        }
      ]
    }
  },
  'cloud.appstore.chun.create': {
    url: '/appstore/chun/create',
    parent: 'cloud',
    templateUrl: 'modules/chun/chun_create.html',
    controller: 'ChunCreateCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function ($ocLazyLoad) {
          return $ocLazyLoad.load(['modules/chun/chun_create.js']);
        }
      ]
    }
  },
  'cloud.appstore.chun.chart': {
    url: '/appstore/chun/chart',
    parent: 'cloud',
    templateUrl: 'modules/chun/chun_chart.html',
    controller: 'ChunChartCtrl',
    resolve: {
      deps: ['$ocLazyLoad',
        function( $ocLazyLoad ){
          return $ocLazyLoad.load(['modules/chun/chun_chart.js']);
        }
      ]
    }
  }
});
