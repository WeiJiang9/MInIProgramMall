// pages/detail/childCmps/tab-bar/tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      const index = e.target.dataset.index
      this.setData({
        currentIndex: index
      })
    }
  }
})
