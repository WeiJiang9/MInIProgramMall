// components/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemGoods: {
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
    itemClick(event) {
      let iid = this.data.itemGoods.iid || this.data.itemGoods.item_id
      wx.navigateTo({
        url: "../../pages/detail/detail?iid=" + iid
      })
    }
  }
})
