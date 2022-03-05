// components/my-multi-slot/my-multi-slot.js
Component({
  // 1. 定义额外配置选项
  options: {
    // 在使用多插槽的时候，需要设置为true
    multipleSlots: true,
    //  组件样式隔离
    styleIsolation: 'shared'
  },
  // 2. 定义传入的属性
  properties: {
    title: {
      type: String,
      value: '',
      observer: function(newvalue, oldvalue) {

      }
    }
  },
  // 3. 定义内部属性
  data: {

  },
  // 4. 定义方法
  methods: {
    counter: 0
  },
  // 5. 外界给组件传入额外的样式
  externalClasses: ['title-class'],
  // 6. 可以监听properties/data的属性的改变,但这里只能拿到newValue，拿不到oldValue
  observers: {
    counter: function(newValue) {
      console.log(newValue)
    }
  },
  // 7. 组件中监听生命周期函数
  // 7.1 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时")
    },
    hide() {
      console.log("监听组件所在页面隐藏出来时")
    },
    resize() {
      console.log("监听页面尺寸的改变")
    }
  },
  // 7.2 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建")
    },
    attached() {
      console.log("组件被添加到页面或其他组件中")
    },
    ready() {
      console.log("组件被渲染出来")
    },
    moved() {
      console.log("组件被移动到另外一个节点")
    },
    detached() {
      console.log("组件被移除掉")
    }
  }

})
