// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currIndex: 0
  },
  methods: {
    itemClick(event) {
      // 获取点击到的索引值
      const dataset = event.currentTarget.dataset;
      const index = dataset.idx;
      // 设置索引值
      this.setData({
        currIndex: index
      })

      // 发射自定义事件，告诉外边页面点击了谁
      this.triggerEvent("itemclick",{index:index,title:this.properties.titles[index]},{});
    }
  }
})
