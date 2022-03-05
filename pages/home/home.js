// pages/home/home.js
Page({
  data: {
    counter: 0
  },
  // 用event中的detail接收发射自定义事件时候传过来的数据
  handleIncrement(event) {
    //console.log('-----',event);
    console.log(event.detail.name)
    console.log(event.detail.age)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // tab-control组件内部发生了点击，传到了外部这里来处理
  handleTabClick(event) {
    const detail = event.detail;
    const index = detail.index;
    const title = detail.title;
    console.log(index,title);
  },
  // 通过this.selectCompnent(id或者class)获取组件对象
  handleCpnIncrement() {
    // id或者class都可以
    const selectCpnObj = this.selectComponent('#my-select-cpn');

    // 直接修改数据（可以，但不推荐，推荐调用方法方式，如下）
    // selectCpnObj.setData({
    //   counter: selectCpnObj.data.counter + 1
    // })

    // 调用方法
    selectCpnObj.incrementCounter(10);
  }
})