// components/my-props/my-props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    content: {
      type: String,
      value: '我是默认内容', // 默认值
      observer: (newValue, oldValue) => { // 监听该属性数据的变化
        console.log(newValue, oldValue);
      }
    }
  },
  // 组件的外部样式列表
  externalClasses: ['titleclass']
})
