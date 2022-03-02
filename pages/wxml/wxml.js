// pages/wxml/wxml.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: '你好，小程序',
    firstname: 'ding',
    lastname: 'xijie',
    age: 12,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow:true,
    score: 50,
    letters: ['a','b','c']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 定时器
      setInterval(() => {
        this.setData({
          nowTime: new Date().toLocaleString()
        })
      }, 1000)
  },
  // 切换颜色
  switchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})