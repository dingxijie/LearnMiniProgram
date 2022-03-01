// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  // 选择相册图片
  chooseImageAlbum() {
    wx.chooseImage({
      success: (res) => {
        // 取出路径
        const path = res.tempFilePaths[0];
        // 设置到imagePath
        this.setData({
          imagePath: path
        })
      }
    })
  },
  imageLoaded() {
    console.log('图片加载完成');
  }

})