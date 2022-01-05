// pages/home/childCpns/w-recommend/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type: Array,
      value: []
    }
  },
  methods: {
    onImageLoad() {
      this.triggerEvent("onImageLoad")
    }
  }
})
