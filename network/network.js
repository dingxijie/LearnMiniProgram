// 封装网络请求函数

import {BASE_URL} from './config'

export default function(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        resolve(res);
      },
      fail: (error) => {
        reject(error);
      },
    })
  })
}