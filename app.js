// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // 监听添加到购物车
  addToCart(obj) {
    const oldCart = this.globalData.cartList.find(item => item.iid === obj.iid)
    if (oldCart) {
      oldCart.count += 1
      wx.showToast({
        title: '当前商品数量+1',
      })
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
      wx.showToast({
        title: '加入购物车成功',
      })
      if(this.addCartCallback) {
        this.addCartCallback()
      }
    }
  },
  // 点击分享
  onShareAppMessage() {
    return {
    }
  },
  globalData: {
    userInfo: null,
    cartList: []
  }
})
