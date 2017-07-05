var app = getApp();
var common = require('../../utils/util.js');
   var detail={ 
    month :['7月05日','7月06日','7月07日'],
    time:['8:00-9:00','9:00-10:00','10:00-11:00','11:00-12:00']
   }
Page({
  data: {
    month:'07月02日',
    time:'11:00-12:00',
    isShowm:0,
    isshowt:0
  },
  onLoad:function(e){
    var foodname = e.foodname,
        foodprice = e.foodprice,
        num = e.num,
        haveCheckedProp = e.haveCheckedProp,
        total = e.total,
        image = e.image;
    var that = this;
        that.setData({
          foodname: foodname,
          foodprice: foodprice,
          num:num,
          haveCheckedProp: haveCheckedProp,
          total: total,
          image: image,
          
        })
  },
  bindChange: function (e) {
    var that=this,
        val = e.detail.value,
        mon = detail.month
    this.setData({
      month: mon[val[0]]
    })
  },
  month:function(e){
    var that = this;
    that.setData({
      isShowm: 1,
      isShowt:0,
      montndata: detail.month,
    })
  },
  hideMask:function(){
    var that = this;
    that.setData({
      isShowm: 0,
    })
  },
  confirm:function(e){
    var that=this;
    that.setData({
      month:that.data.month,
      isShowm: 0,
    })
  }
})