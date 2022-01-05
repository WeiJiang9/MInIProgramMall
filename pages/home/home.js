// pages/home/home.js
import { getMultiData, getProduct } from '../../service/home'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommend: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      sell: {
        page: 1,
        list: []
      },
      pop: {
        page: 1,
        list: []
      },
      new: {
        page: 1,
        list: []
      }
    },
    currentType: 'sell',
    iid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发送网略请求
    this._getMultiData()
    this._getProduct('sell')
    this._getProduct('pop')
    this._getProduct('new')
  },
  tabBarClick(event) {
    let index = event.detail.index
    let currentType = ''
    switch (index) {
      case 0:
        currentType = 'sell';
        break;
      case 1:
        currentType = 'pop';
        break;
      case 2:
        currentType = 'new';
        break;
    }
    this.setData({
      currentType
    })
  },
  // onImageLoad() {
  //   wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
  //     // const show = rect.top > 0
  //     // this.setData({
  //     //   showTabControl: !show
  //     // })
  //   }).exec()
  // },
  // 监听滚动到底部, 加载更多内容
  onReachBottom() {
    this._getProduct(this.data.currentType)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 定义网络请求的方法
  _getMultiData() {
    getMultiData().then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setData({
        banners,
        recommend
      })
    }).catch(err => {
      console.log(err);
    })
  },

  _getProduct(type) {
    const page = this.data.goods[type].page;
    getProduct(type, page).then(res => {
      const list = res.data.data.list;
      const goods = this.data.goods
      goods[type].list.push(...list)
      goods[type].page += 1
      this.setData({
        goods
      })
    })
  }
})