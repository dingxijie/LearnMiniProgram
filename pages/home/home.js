// pages/home/home.js
Page({
  // showActionSheet
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      // alertText: 'alertText',
      itemColor: 'green',
      success: (result) => {
        console.log(result);
        switch(result.tapIndex) {
          case 0:
            console.log("点击了相册")
            break;
          case 1: 
          console.log("点击了拍照")
            break;      
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  //showLoading
  handleShowLoading() {
    wx.showLoading({
      title: '加载中......',
      mask: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })

    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 3000)
  },

  // showMoadl
  handleShowModal() {
    wx.showModal({
      cancelColor: 'red',
      cancelText: '退出',
      confirmColor: 'green',
      confirmText: '保存',
      content: '我是内容',
      // editable: true,
      // placeholderText: 'placeholderText',
      showCancel: true,
      title: '我是标题',
      success: (result) => {
        // console.log(result);
        if(result.cancel){
          console.log("点击了取消按钮")
        }
        if(result.confirm) {
          console.log("点击了确定按钮")
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },

  // showToast
  handleShowToast() {
    wx.showToast({
      title: '你好',
      duration: 3000,
      icon: 'loading',
      // image: 'image',// 自定义图片
      mask: false,
      success: (res) => {
        console.log("展示成功")
      },
      fail: (res) => {},
      complete: (res) => {
        console.log("完成")
      },
    })
  },
  // 分享
  onShareAppMessage() {
    return {
      title: '我是home页分享',
      path:'/pages/about/about',
      imageUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})