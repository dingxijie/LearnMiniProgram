// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoaded: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听图片加载完成
    imageLoaded() {
      if(!this.data.isLoaded) {
        this.triggerEvent('imageLoaded')
        // 这里可以直接赋值，不需要用setData()设置值，因为isLoaded不会在页面上使用，不会刷新页面就不需要用setData()方法
        this.data.isLoaded = true;
      }
      
    }
  }
})
