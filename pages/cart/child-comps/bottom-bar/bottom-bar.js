// pages/cart/child-comps/bottom-bar/bottom-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalPrice: {
      type: Number
    },
    totalCounter: {
      type: Number
    },
    isSelectAll: {
      type: Boolean
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
    checkAllClick() {
      this.triggerEvent("checkAllClick")
    }
  }
})
