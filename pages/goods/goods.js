var app = getApp();
var common = require('../../utils/util.js');
var detail = {
  data: {
    swiperImg: ['/images/icecream_kv.jpg', '/images/jzp_kv.jpg'],
    foodname: '雪菜肉丝面',
    foodprice: '15',
    foodpriceold: '22',
    storeTotal: 5,
    foodintroduce: '100%纯人工手擀面,无添加剂无防腐剂,健康营养，口感筋道，让人流连忘返的美味',
    standard: [{ name: "规格", size: [{ code: "cm", name: "大份", price: 15 }, { code: "cm", name: "小份", price: 13 }] }],
  },
  foodevaluate: {
    score: '4.9',
    valuatecon: [
      { 'username': '小明', 'iphone': '133*****866', 'evaluate': '味道非常好,以后我希望推荐好朋友一起来吃', 'evaluatedate': '2017-06-23 17:28:00' },
      { 'username': '关关', 'iphone': '159*****270', 'evaluate': '面真的是手擀的╮(╯▽╰)╭，吃出了妈妈的味道，喜欢喜欢', 'evaluatedate': '2017-07-20 11:11:00' }
    ],
  },
}
Page({
  data: {
    num: 1,
    isshow: false,
    havePrice: '',
    total: '',
    haveCheckedProp: '',
  },
  postData: {},
  onLoad: function (options) {
    var app="app";
    var that = this,
        item = detail.data,
        valuatecon = detail.foodevaluate;
    item.property = item.standard;
    var defultprice = item.property[0].size[0].price,
        defultname = item.property[0].size[0].name,
        defultPostData = item.property[0].size[0];
    that.postData = defultPostData;
    that.setData({
      postData:that.postData,
      item: item,
      valuatecon: valuatecon,
      havePrice: defultprice,
      total: defultprice,
      haveCheckedProp: defultname,
    })
    console.log(that)
  },
  //轮播
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  //规格选择状态
  
  getChecked: function (e) {
    var that = this,
      name = e.currentTarget.dataset.name,
      value = e.currentTarget.dataset.value,
      p = e.currentTarget.dataset.price,
      length, objLength;
      that.postData = {};
      that.postData['name'] = name;
      that.postData['price'] = p;
      that.postData['total'] = p * that.data.num;
      length = that.data.item.property.length;
      objLength = common.objLength(that.postData);
      
      this.setData({
        postData: that.postData,
        haveCheckedProp: that.postData['name'],
        havePrice: that.postData['price'],
        total: that.postData['total']
      })
  },
  //添加数量
  add(e) {
    var that = this;
    var num = e.currentTarget.dataset.num;
    var havePrice = that.data.havePrice;

    if (num + 1 > that.data.item.storeTotal) {
      common.alert.call(that, "超过最大库存");
    } else {
      num++;
      var total = havePrice * num
      that.setData({
        num: num,
        total: total
      })
    }

  },
  //减少数量
  del(e) {
    var that = this;
    var num = e.currentTarget.dataset.num;
    var havePrice = that.data.havePrice;
    if (num - 1 < 1) {
      common.alert.call(that, "购买数量最少为1");
    } else {
      num--;
      var total = havePrice * num
      that.setData({
        num: num,
        total: total
      })
    }
  },
  //关闭
  close() {
    this.setData({
      isshow: false
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  specifications: function () {
    this.setData({
      isshow: true
    })
  },
  //立即订购
  buy: function () {
    var that = this,
      foodname = that.data.item.foodname,
      foodprice = that.data.postData.price,
      haveCheckedProp = that.data.haveCheckedProp,
      num = that.data.num,
      total = that.data.total,
      image = that.data.item.swiperImg[0];
    wx.navigateTo({
      url: '../orders/orders?foodname=' + foodname + '&foodprice=' + foodprice + '&num=' + num + '&total=' + total + '&image=' + image + '&haveCheckedProp=' + haveCheckedProp,
    })
  }

})