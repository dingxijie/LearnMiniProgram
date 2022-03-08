// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },
  // 跳到详情页面
  handlePushDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail?name=abc',
    })

    // wx.redirectTo({
    //   url: '/pages/detail/detail',
    // })
  }
})