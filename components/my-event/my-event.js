// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      // 发射自定义事件，如果需要传数据回去，用第二个参数
      this.triggerEvent('increment',{name:'dj',age:30},{})
    }
  }
})
