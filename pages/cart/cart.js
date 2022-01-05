// pages/cart/cart.js
const app = getApp()
Page({

  data: {
    cartList: [],
    totalCounter: 0,
    totalPrice: 0,
    isSelectAll: true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cartList: app.globalData.cartList
    })
    app.addCartCallback = () => {
      this.setData({
        cartList: app.globalData.cartList
      })
      this._changeData()
    }
    app.changeGoodsState = (goods, index) => {
      this.setData({
        [`cartList[${index}]`]: goods
      })
      const flag = this.data.cartList.every(item => item.checked)
      this.setData({
        isSelectAll: flag
      })

      this._changeData()
    }
  },
  onShow() {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartList.length})`,
    })
    this._changeData()
  },
  _changeData() {
    let counter = 0
    let totalPrice = 0;
    this.data.cartList.forEach(item => {
      if (item.checked) {
        counter++
        totalPrice += item.pri * item.count
      }
      this.setData({
        totalCounter: counter,
        totalPrice: totalPrice
      })
    })
  },
  checkAllClick() {
    const cartList = this.data.cartList
    if (this.data.isSelectAll) {
      cartList.map(item => item.checked = false)
      this.setData({
        isSelectAll: false,
        cartList: cartList
      })
    } else {
      cartList.map(item => item.checked = true)
      this.setData({
        isSelectAll: true,
        cartList: cartList
      })
    }
    this._changeData()
  }
})