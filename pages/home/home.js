// pages/home/home.js
Page({
  data: {
    goods:['衣服', '鞋子', '袜子']
  }, 
  handleBtnclick() {
    console.log("用户点击了")
  },
  handleTouchstart() {
    console.log("handleTouchstart")
  },
  handleTouchmove() {
    console.log("handleTouchmove")
  },
  handleTouchend() {
    console.log("handleTouchend")
  },
  handleTap() {
    console.log("handleTap")
  },
  handleLongpress() {
    console.log("handleLongpress")
  },
  handleItemClick(event) {
    //console.log(event);
    // 通过event.currentTarget.dataset.属性名字，来获取data-属性名称 的参数值。
    const dataset = event.currentTarget.dataset;
    const index = dataset.idx;
    const item = dataset.item;
    console.log(index, item);
  },
  capView1() {
    console.log("capView1");
  },
  bindView1() {
    console.log("bindView1");
  },
  capView2() {
    console.log("capView2");
  },
  bindView2() {
    console.log("bindView2");
  },
  capView3() {
    console.log("capView3");
  },
  bindView3() {
    console.log("bindView3");
  },
})