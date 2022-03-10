import request from '../network/network'

// 1. 获取轮播图和推荐数据
export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

// 2. 获取商品数据
export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}