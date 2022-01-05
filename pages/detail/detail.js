import {
  getDetail,
  getRecommends,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo,
} from '../../service/detail'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ["商品", "参数", "评价", "推荐"],
    iid: '',
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfo: {},
    recommends: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid: options.iid
    }),
      this._getDetail()
    this._getRecommends()
  },
  // 监听添加到购物车
  onAddCart() {
    const obj = {
      iid: this.data.iid,
      img: this.data.topImages[0],
      title: this.data.baseInfo.title,
      desc: this.data.baseInfo.desc,
      pri: this.data.baseInfo.realPrice
    }
    app.addToCart(obj)
  },
  // 定义网络请求的相关方法

  _getDetail() {
    getDetail(
      this.data.iid
    ).then(res => {
      const data = res.data.result;

      // 1.取出顶部的图片
      const topImages = data.itemInfo.topImages;

      // 2.创建BaseInfo对象
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建ShopInfo对象
      const shopInfo = new ShopInfo(data.shopInfo);

      // 4.获取detailInfo信息
      const detailInfo = data.detailInfo;

      // 5.创建ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule)

      // 6.获取评论信息
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
      }
      this.setData({
        topImages: topImages,
        baseInfo: baseInfo,
        shopInfo: shopInfo,
        detailInfo: detailInfo,
        paramInfo: paramInfo,
        commentInfo: commentInfo
      })
    })
  },
  _getRecommends() {
    getRecommends().then(res => {
      this.setData({
        recommends: res.data.data.list
      })
    })
  }
})