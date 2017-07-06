var app = getApp();
var common = require('../../utils/util.js');

const months=[],days=[],times=[],date = new Date(),curr = date.getMonth()+1;
var th31=[1,3,5,7,8,10,12];
for (var i = curr; i <= curr + 1;i++){
  for (var j = 1; j < 31; j++) {
    months.push(i + '月' + j + '日')
  }
}
for (var i = 0; i < 31; i++) {
  times.push(i+':00 - '+i+1+':00')
}
var detail = {
  data: [
    {
      title: months[0],
      timer: months
    },
    {
      title: times[0],
      timer: times
    }
  ],
  months: [],
  days: [],
  times: [],
};
var pickdata = detail.data;
Page({
  data: {
    month:'07月02日',
    time:'11:00-12:00',
    curNav: "0",
    isShowm:0,
    pickdata: pickdata
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
 
  pickClick: function (e) {
    var that=this,
        index = e.currentTarget.dataset.index;
    that.setData({
      pickdata:that.data.pickdata,
      curNav: index,
      isShow:1
    })
  },
  bindChange:function(e){
    var that=this;
    const val = e.detail.value;
    var index = that.data.curNav;
    var pickIn = that.data.pickdata[index];
    pickIn.title = pickIn.timer[val[0]]
    that.setData({
      pickdata: that.data.pickdata
    })
    console.log(pickdata)
  },
  hideMask:function(){
    var that = this;
    that.setData({
      isShow: 0,
    })
  },
  confirm:function(e){
    var that=this;
    that.setData({
      isShow: 0,
    })
  }
})