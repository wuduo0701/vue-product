- vue学习  - 从零搭建vue + webpack项目

使用了掘金的《图雀社区》的 用vue + express 实现迷你全栈项目
[https://juejin.im/post/5dfd851c6fb9a0163e248463]

webpack 现代js应用程序的静态模块打包工具

vue 通过组件来组织项目，单个项目就是web中的 html + js + css
vue 通过路由来定义多个组件，进行页面之间的跳转
一个页面是一个组件，一个组件可以由很多组件组成

- 页面级组件，倾向于使用page文件夹来方便管理

router-link 和a标签类似

- 嵌套路由 
把需要归为一类的页面设置一个入口文件，然后这一类文件都放在这个路由文件定义的children字段