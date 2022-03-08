// pages/detail/detail.js
Page({
  // 页面加载出来
  onLoad: function (options) {
    // 这里的options参数，能获取到别的页面传过来的参数
    console.log(options); // 打印 {name:'dj',age:'18'}
  },
  // 页面卸载
  onUnload() {
    console.log("详情页被卸载")
    // 页面在返回的时候，会被卸载掉
    // 如果希望页面返回时候，改变被返回页面的数据，则在这里做
    const pages = getCurrentPages();
    const page = pages[pages.length - 2];
    page.setData({
      title: '我是在detail返回时改变的数据'
    })
  },
  // 代码方式返回
  handleBack() {
    wx.navigateBack({
      delta: 1,
    })
  }
})