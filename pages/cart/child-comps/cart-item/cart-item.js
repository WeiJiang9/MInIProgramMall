// pages/cart/child-comps/cart-item/cart-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cartItem: {
      type: Object,
      value: {}
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    checkClick() {
      const goods = app.globalData.cartList.find(item => item.iid === this.properties.cartItem.iid)
      const index = app.globalData.cartList.findIndex(item => item.iid === this.properties.cartItem.iid)
      goods.checked = !goods.checked
      app.changeGoodsState(goods,index)
    }
  }
})
