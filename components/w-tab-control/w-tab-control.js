// components/w-tab-control/w-tab-control.js
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

  /**
   * 组件的初始数据
   */
  data: {
    currIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击tab项,改变选中状态
    handleTabClick(event) {
      const index = event.currentTarget.dataset.idx;
      this.setData({
        currIndex: index
      })

      // 向外发射事件，告知点击了谁
      this.triggerEvent('tabClick',{index:index},{})
    }
  }
})
