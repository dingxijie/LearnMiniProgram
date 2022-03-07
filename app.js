const TOKEN = 'token';
App({
  // 全局对象数据，但小程序关闭后，对象被回收，需要重新赋值
  globalData: {
    token: ''
  },
  // 小程序加载完成执行
  onLaunch() {
    // 先判断缓存中是否有token
    const token = wx.getStorageSync(TOKEN);
    if(token && token.length !== 0) {
      // 检验token是否过期及合法性
      this.checkToken(token);
    } else { // 没有token，需要重新登录
      // 登录
      this.login();
    }
  },
  checkToken(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'POST',
      header: {
        token
      },
      success: (res) => {
        // 没有错误码，表明token有效
        if(!res.data.errCode) {
          console.log("token有效")
          // 再次保存
          this.globalData.token = token;
        } else {
          // 重新登录
          this.login();
        }
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },
  login() {
    console.log("去登陆")
    // 登录获取token
    wx.login({
      success: (res) => {
        // 1. 获取code，code只有五分钟有效期
        const code = res.code;
        
        // 将code发给我们自己后台服务器获取token
        // 1. 传code到后台，结合AppID和Appsecrit去微信服务器获取session_key和openId,openId是每个微信用户的唯一标识
        // 2. 将openId保存到数据库
        // 3. jwt生成自定义的token，并返回到客户端，以后业务请求需要携带上
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code
          },
          success: (res) => {
            // 获取token
            const token = res.data.token;
            // 保存token
            this.globalData.token = token;
            // 保存token到缓存中
            wx.setStorageSync(TOKEN, token);
          },
          fail: (error) => {
            console.log(error);
          }
        })
      }
    })
  }
})
