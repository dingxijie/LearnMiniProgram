// getApp()可以获取app.js中，App()函数返回的实例对象，进而获取内部定义的东西
const app = getApp();
console.log(app.globalData.name)
console.log(app.globalData.age)
// 通过Page函数注册一个页面，并执行生命周期函数
Page({
  data: {
    name: 'DJ',
    age: 18,
    students: [
      {name: 'dj1', age: 18},
      {name: 'dj2', age: 19},
      {name: 'dj3', age: 16},
      {name: 'dj4', age: 13},
    ],
    counter: 0,
    list: []
  },
  /**
   * Page内部一般要做的几件事情
   * 1. 监听生命周期函数，从服务器获取数据
   * 2. 在data内初始化数据
   * 3. 监听wxml中相关的一些事件
   * 4. 监听其他事件，如上拉加载，下拉刷新，页面滚动等
   */
  onLoad() {
    console.log("页面被加载出来 onLoad")
    // 发送网络请求，获取数据
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend',
      success: (res) => { // 这里用箭头函数，里面的this指向Page，没有问题。如果用function(res){},则this为undefied,需要再外部先用 _this=this
        //console.log(res)
        const data = res.data.data.list;
        this.setData({
          list: data
        })
      }
    })
  },
  onShow() {
    console.log("当页面显示出来时 onShow")
  },
  onReady() {
    console.log("页面【初次】渲染完成时 onReady")
  },
  onHide() {
    console.log("当页面隐藏起来时 onHide")
  },
  onUnload() {
    console.log("页面被卸载时 onUnload")
  },
  // 加一
  addCount() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // 减一
  subCount() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  // 监听事件函数：获取用户信息
  getUserInfo(event) {
   console.log(event) 
  },
  // 监听页面滚动
  onPageScroll(obj) {
    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom() {
    console.log("页面滚动到底部了")
  },
  // 监听下拉刷新:需要json内开启"enablePullDownRefresh": true
  onPullDownRefresh() {
    console.log("下拉刷新事件")
  }
})