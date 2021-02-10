DEMO
===========================

### 启动项目
此项目已经通过轻服务部署完成可直接用浏览器打开views目录中01.html运行,也可访问 https://qc8o4l.fn.thelarkcloud.com/toutiaominni, 若想将项目部署于其他账号,部署方法如下(以轻服务为例,方法繁琐仅供参考):
- 部署react-admin-client
1. 打包:npm run build生成build文件夹，用于部署在服务器上
2. 上传静态资源:登录轻服务打开数据管理中的_file,将build目录中的css文件,json文件和js文件上传即可
3. 上传index.html,打开index.html,找到其依赖的文件,将路径改为其在轻服务中的url,最后将index.html上传
- 部署public
将public中的所有文件上传至轻服务中的_flie
- 部署views
1. 打开两个html文件,找到其依赖于public中的文件,将路径改为其在轻服务中的url
2. 在html文件中找到"发布"注册""登录"位置的超链接将其改为index.html在轻服务中的url
3. 上传两个html文件至轻服务
- 部署云函数
1. 打开 https://qingfuwu.cn/share/qc8o4lo5k4tuzzxx6v ,将其中的所有函数拷贝至你的账号,注意函数名也要相同,上线所有函数
2. 打开名为toutiaomini的函数,将其中的链接改为views中对应的两个html部署后的url
3. 复制toutiaomini的请求地址即可成功启动完整的项目并访问

### 目录结构描述

 &nbsp;|── README.md                   		 // help<Br/>
 &nbsp;|── views                      
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |── 01.html					// 线上首页结构及js代码<Br/>
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── 02.html					// 线上详情页结构及js代码<Br/>
 &nbsp;|── public  
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |── 01.css					// 线上首页样式<Br/>
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |── 02.css					// 线上详情页样式<Br/>
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |── iconfont.css			        // 引用的字体图标<Br/>
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |── template-web.js			        // 模板引擎用于渲染<Br/>
 &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── tool.js					// 轮播图辅助工具<Br/>
└── react-admin-client				//后台管理页面工作区<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── node_modules			//存放用包管理工具下载的包<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── public					//存放静态文件的文件夹<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.html			//给出root节点，用于渲染App组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── src						//主要代码存放的文件夹<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── api					//存放API的文件夹<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── ajax.js //发送AJAX请求的js文件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── index.js //用ajax.js中的函数封装的与后端交互的API<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── components			//组件文件夹<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── EditEmailForm	//修改Email信息的组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── EditGenderForm//修改性别的组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── EditNickForm	//修改用户名的组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── EditPWDForm //修改密码的组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── LeftNav //左部导航栏组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── NormalLoginForm	//登录组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── PictureWall		//照片墙组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── RichTextEditor//富文本编辑框组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── ShowSquare //鼠标悬停在用户头像上方显示的下拉菜单组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── TopHeader //页面头部区域组件<Br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|── config				//配置文件夹<Br/>
	│   │   ├── articleTypeConfig.js	//存放文章类型-值对的对象数组<Br/>
	|	|   └── menuConfig.js			//存放左部导航栏菜单信息的对象数组<Br/>
	│   ├── pages				//页面文件夹（路由组件文件夹）<Br/>
	│   │   ├── Admin			//后台管理页面<Br/>
	|	│   │   │ 
	|	│   │   ├── AdminList	//文章列表<Br/>
	|	│   │   ├── AdminLuru	//文章录入|编辑<Br/>
	|	│   │   ├── Home		//主页<Br/>
	|	|	|   └── InfoChange	//个人信息页面<Br/>
	|	|   └── Login			//登录注册页面<Br/>
	|	│       ├── Log			//登录<Br/>
	|	|		└── Reister		//注册<Br/>
	│   ├── utils<Br/>
	|	|   └── storageUtils.js	//存放封装好的本地存储函数，用于保存用户信息和当前编辑的文章信息<Br/>
	│   ├── App.js				//App组件<Br/>
	|   └── index.js			//渲染App组件到页面<Br/>
	├── .eslintcache	<Br/>
	├── .gitignore<Br/>
	├── config-overrides.js		//定义antd主题<Br/>
	├── package.json			//已经下载好的包<Br/>
	└── package-lock.json<Br/>

### 团队分工（仅完成加分项中的点赞点踩）
- 后台管理页面(采用react框架,react-admin-client):李有庆
- 线上页面(采用原生js,public和views),后端云函数 (https://qingfuwu.cn/share/qc8o4lo5k4tuzzxx6v) :陈铭均

### 路由设计

| 路径      | 方法   | 参数               | 备注         |
| ------------------------- | ---- | -------  | ---------------------- | 
| https://qc8o4l.fn.thelarkcloud.com/toutiaominni				|get/post 	|											|获取线上首页						|
|https://qc8o4l.fn.thelarkcloud.com/toutiaominni				|get/post 	|article_id									|获取线上详情页					|
|index.html的url+#/login/register									|get/post 	|											|获取后台注册页					|
|index.html的url+#/admin/luru/input									|get/post 	|										   	|获取后台管理录入页				|
|index.html的url+#/login/log										|get/post 	|										   	|获取后台登录页					|
|index.html的url+#													|get/post 	|										   	|获取后台管理首页					|
|https://qc8o4l.fn.thelarkcloud.com/login						|get/post 	|nickname password							|处理添加登录请求					|
|https://qc8o4l.fn.thelarkcloud.com/add_article					|get/post 	|nickname title_name title_img content type	|处理添加文章请求					|
|https://qc8o4l.fn.thelarkcloud.com/delete_article				|get/post 	|article_id									|处理删除文章请求					|
|https://qc8o4l.fn.thelarkcloud.com/update_article				|get/post 	|article_id title_name title_img conten type|更新文章标题图片内容和类型		|
|https://qc8o4l.fn.thelarkcloud.com/update_article_status		|get/post 	|article_id	status							|更新文章状态						|
|https://qc8o4l.fn.thelarkcloud.com/update_article_goodandbad	|get/post 	|article_id	quality num username			|更新文章及用户的点赞点踩及关注量	|
|https://qc8o4l.fn.thelarkcloud.com/get_all_title				|get/post 	|type keywords								|按类型或关键字获取标题			|
|https://qc8o4l.fn.thelarkcloud.com/register				|get/post 	|nickname password email					|处理用户注册请求					|
|https://qc8o4l.fn.thelarkcloud.com/delete_user					|get/post 	|user_id									|处理删除用户请求				  	|
|https://qc8o4l.fn.thelarkcloud.com/update_user_nickname		|get/post 	|user_id user_nickname						|处理修改用户昵称请求				|
|https://qc8o4l.fn.thelarkcloud.com/update_user_avatar		|get/post 	|user_id user_avatar						|处理修改用户头像请求				|
|https://qc8o4l.fn.thelarkcloud.com/update_user_password		|get/post 	|user_id user_password						|处理修改用户密码请求				|
|https://qc8o4l.fn.thelarkcloud.com/update_user_email			|get/post 	|user_id user_email							|处理修改用户邮箱请求				|
|https://qc8o4l.fn.thelarkcloud.com/update_user_gender		|get/post 	|user_id user_gender						|处理修改用户性别请求	  			|
