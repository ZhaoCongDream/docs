module.exports = {
  title: '个人主页', 
  description: '赵聪的博客',
  themeConfig: {
    nav: [
        { text: '主页', link: '/' },
        { text: '简历', link: '/resume/' },
        { text: 'Github', link: 'https://www.github.com/codeteenager' },
    ],
    sidebar: [
      ['/resume/', '个人简历'],
      ['/vue/', 'Vue基础学习'],
      // ['/vuex/', 'VueX状态管理'],
      // ['/vuerouter/', 'Vue路由'],
      ['/funcode/', 'JavaScript函数式编程'],
      ['/data/', '数据结构与算法'],
      ['/linux/', 'Ubuntu使用记录'],
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
},
}