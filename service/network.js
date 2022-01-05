import {
  baseURL,
  timeout
} from './config.js'

let request = (options) => {
  wx.showLoading({
    title: '加载中...',
  })
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data,
      success: (res) => {
        resolve(res)
        wx.hideLoading({
        })
      },
      fail:reject
    })
  })
}
export default request