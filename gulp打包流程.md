#Gulp打包流程
####文件结构
*	project
	*	bower_components
	*	components
		*	common
		*	directives
			*	tpl	- 指令自己的模板
		*	filters
		*	lib
		*	routers
		*	services
	*	modules
		*	agent
			*	.js
			*	.html
		*	apply
		*	...
	*	css
		*	lib
		
		

####Gulp Task
*	实现的功能
	*	JsHint语法检查
	*	Js代码风格检查
	*	首页资源压缩
	*	所有文件加上md5戳
	*	自动备份功能
		
		只备份当天第一次发布时的备份，也就是说备份是之前的，今天不论发布多少次不会在备份，保证备份是上个版本的可用版本； 备份文件只保留最多3个不同日期的备份。		
*	使用
	
	```	
	1.  gulp release  // 发布
	2.  gulp jshit    //语法检查 
	```		