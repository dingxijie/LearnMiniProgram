// 对wxwx.request({})网络请求进行Promise的封装

// 方式二，更加简便
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: resolve,
      fail: reject,
    })
  })
}

// 方式一
// export default function request(options) {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'GET',
//       data: options.data || {},
//       success: (res) => {
//         resolve(res);
//       },
//       fail: (err) => {
//         reject(err);
//       },
//     })
//   })
// }