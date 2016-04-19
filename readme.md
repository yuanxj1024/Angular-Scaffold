#Angular 项目结构

结合之前的项目搭建的使用AngularJS,jQuery 支持在IE8上运行的项目目录结构。

考虑到业务模块比较多，并且引用了jQuery库，还要考虑性能问题，所以gulp打包优先压缩合并首页首屏模块，使用ocLazyLoad配合路由加载对应View的JS,CSS.

