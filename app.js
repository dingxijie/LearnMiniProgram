// app.js 通过App函数注册一个小程序，并执行生命周期函数
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序初始化完成时: onLaunch")

    // 初始化时候 获取用户信息
    wx.getUserInfo({
      success: (res) => {
        // console.log(res)
      }
    })

    // 模拟发生错误
    setTimeout(() => {
      const err = new Error("发生了一些错误")
      //throw err;
    }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("小程序启动，或从后台进入前台显示: onShow")
    // console.log(options)

    /***  在生命周期函数里面，可能要做的几件事情，如下:
     * 1: 判断小程序的进入场景
     * 2. 监听生命周期函数，执行对应的业务逻辑，比如获取用户信息
     * 3. 因为App()实例只有一个，并且是全局共享的(单例对象)，所以可以定义全局数据globalData，所有页面都可使用该数据
     * */
    // 1. 判断小程序的进入场景
    switch (options.scene) {
      case 1001:
        break;
      case 1005:
        break;
    }

    // 2. 获取用户信息（3种方式获取，其中wx.getUserInfo方式已经废弃）
    // 通常用<button open-type="getUserInfo" bindgetuserinfo="">获取用户授权</button>
    // 用内置组件<open-data type="userNickName"></open-data>展示显示用户信息
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("小程序从前台进入后台: onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg);
  },
  globalData: {
    name: 'dj',
    age: 28
  }
})

