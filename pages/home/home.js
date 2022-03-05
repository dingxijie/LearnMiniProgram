// 导入网络请求封装对象
import request from '../../service/network.js';
Page({
  onLoad: function (options) {
    // 1. 网络请求基本使用,原生方式调用，不推荐。推荐用后面的封装方式。
    //this.get_data_origin();

    // 2. 使用封装的request发送请求
    // Promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend'
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })

  },
  // 原生方式
  get_data_origin() {
    wx.request({
      url: 'http://152.136.185.210:7878/api/hy66/recommend',
      method: 'get',
      data: {

      },
      dataType: 'json',
      success: function(res) {
        console.log(res)
      },
      fail: function(error) {

      },
      complete: function(res) {

      }
    })
  }
})