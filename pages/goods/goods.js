var app = getApp();
var common = require('../../utils/util.js');
var detailObj = require("../../utils/data.js");
Page({
  data: {
    num: 1,
    isshow: false,
    havePrice: '',
    total: '',
    haveCheckedProp: '',
    foodList: detailObj.detail.data
  },
  postData: {},
  onLoad: function (options) {
    var that = this,
      item = detailObj.detail.data[0],
      valuatecon = detailObj.detail.data[0].foodevaluate;
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
  addcar: function () {
    this.setData({
      isshow: true
    })
  },
  addok:function(){
    wx.showToast({
      title: '添加成功',
      icon:'success',
      duration:2000
    },2000);
    this.close()
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