// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home'

// 常量
const TOP_DISTANCE = 1000;

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['新款','流行','精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currType: 'pop',
    showBackTop: false, // 是否显示回到顶部
    isTabFixed: false,  // tab-control是否fixed停留
    tabOffsetTop: 0 // tab-control组件距离顶部的可滚动距离
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1. 获取轮播图和推荐数据
    this._getMultiData();

    // 2. 获取商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },

  // ---------------------网络请求相关---------------------
  _getMultiData() {
    getMultiData().then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _getGoodsData(type) {
    // 页码加1
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then((res) => {
      // 取出旧数据
      const tempList = this.data.goods[type].list;
      tempList.push(...res.data.data.list);
      // 设置数据和页码
      const listKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [listKey] : tempList,
        [pageKey] : page
      })
    })
  },

  // ---------------------事件处理相关---------------------
  // 处理tab-control点击事件
  handleTabClick(event) {
    const index = event.detail.index;
    let currType = '';
    switch (index) {
      case 0:
        currType = 'pop';
        break;
      case 1:
        currType = 'new';
        break;
      case 2:
        currType = 'sell';
        break;
      default:
        break;
    }
    // 切换选中类型来改变展示的对应类型商品
    this.setData({
      currType
    })
  },
  // 推荐信息中的图片加载完成事件
  imageLoaded() {
    // 获取tab-control组件距离顶部的可滚动距离
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabOffsetTop = rect.top;
    }).exec()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 上拉加载更多=>请求下一页数据
    this._getGoodsData(this.data.currType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 监听页面滚动
  onPageScroll(options) {
    const scrollTop = options.scrollTop;
    // 官方建议：不要在滚动里面频繁调用setData()函数
    // 1. 设置回到顶部按钮何时显示隐藏
    const flag1 = scrollTop >= TOP_DISTANCE;
    if(flag1 != this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    // 2. 设置是否tab-control何时停留效果
    const flag2 = scrollTop >= this.data.tabOffsetTop;
    if(flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }
})