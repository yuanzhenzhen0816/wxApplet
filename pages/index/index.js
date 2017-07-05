var app = getApp();
var detail={
  data:[
    {
      title:'全部商品',
      swiperImg: ['/images/icecream_kv.jpg','/images/jzp_kv.jpg'],
      foodList: [
        { foodid: 1, url: '/images/1390444067_thumb.png', foodname: '雪菜肉丝面', foodprice: 15 },
        { foodid: 2, url: '/images/1451358126_thumb.png', foodname: '御品红烧牛肉面', foodprice: 22 },
        { foodid: 3, url: '/images/1490166919_thumb.png', foodname: '卤肉混沌面', foodprice: 18 },
        { foodid: 3, url: '/images/1490166919_thumb.png', foodname: '卤肉混沌面', foodprice: 18 }
      ],
    },
    {
      title:'热门促销',
      swiperImg: ['/images/jzp_kv.jpg', '/images/icecream_kv.jpg'],
      foodList: [
        { foodid: 3, url: '/images/1490166919_thumb.png', foodname: '卤肉混沌面', foodprice: 18 },
        { foodid: 3, url: '/images/1490166919_thumb.png', foodname: '卤肉混沌面', foodprice: 10 },
      ],
    },
  ]
}
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    curNav: "0",
    city:'',
    latitude:'',
    longitude:'',
    circular:true,
  },    

  //事件处理函数
  onLoad: function () {
    var that = this
    this.loadInfo(); 
  },
  onShow:function(){
    var that=this;
    var info = detail.data,
        info_des = info[0];
    that.setData({
      product:info,
      list: info_des,
      length: info.length
    })
  },
  switchTab: function (e) {
    var that = this,
        index = e.currentTarget.dataset.index,
        info = detail.data[index];
    that.setData({
      list: info,
      curNav:index
    })
  },
  fooddetail: function (e) {
    wx.navigateTo({
      url: '../goods/goods?foodid=1',
    })
  },
  loadInfo: function () {
    var page = this
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
      success: function (res) {
        // success  
        var longitude = res.longitude
        var latitude = res.latitude
        page.loadCity(longitude, latitude)
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this;
    var locationString = latitude + "," + longitude;
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/?l&get_poi=1',
      data: {
        "key": "6EFBZ-EUQL6-RYESP-ECWFR-OV6AH-K7FRT",
        "location": locationString
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        console.log(res);
        var city = res.data.result.address;
        page.setData({ city: city });
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }  
    })
  },
  //轮播
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
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
  }
})
