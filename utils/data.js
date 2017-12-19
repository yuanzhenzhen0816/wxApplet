var detail = {
  data: [{
    swiperImg: ['/images/lunb.jpg', '/images/lunb02.jpg'],
    foodid: 1, 
    url: '/images/lunb.jpg', 
    foodname: '雪菜肉丝面', 
    foodprice: 25, 
    oldprice: 48,
    storeTotal: 5,
    foodintroduce: '100%纯人工手擀面,无添加剂无防腐剂,健康营养，口感筋道，让人流连忘返的美味',
    standard: [{ name: "规格", size: [{ code: "cm", name: "大份", price: 25 }, { code: "cm", name: "小份", price: 23 }] }],
    foodevaluate: {
      score: '4.9',
      valuatecon: [
        { 'username': '小明', 'iphone': '133*****866', 'evaluate': '味道非常好,以后我希望推荐好朋友一起来吃', 'evaluatedate': '2017-06-23 17:28:00' },
        { 'username': '关关', 'iphone': '159*****270', 'evaluate': '面真的是手擀的╮(╯▽╰)╭，吃出了妈妈的味道，喜欢喜欢', 'evaluatedate': '2017-07-20 11:11:00' }
      ],
    },
  },
    {
      foodid: 2,
      url: '/images/lunb02.jpg',
      foodname: '意大利牛肉面',
      foodprice: 18,
      oldprice: 28,
      storeTotal: 5,
      foodintroduce: '100%纯人工手擀面,无添加剂无防腐剂,健康营养，口感筋道，让人流连忘返的美味',
      standard: [{ name: "规格", size: [{ code: "cm", name: "大份", price: 18 }, { code: "cm", name: "小份", price: 15 }] }],
    },
    {
      foodid: 3,
      url: '/images/lunb.jpg',
      foodname: '意大利牛肉面',
      foodprice: 28,
      oldprice: 38,
      storeTotal: 5,
      foodintroduce: '100%纯人工手擀面,无添加剂无防腐剂,健康营养，口感筋道，让人流连忘返的美味',
      standard: [{ name: "规格", size: [{ code: "cm", name: "大份", price: 28 }, { code: "cm", name: "小份", price: 25 }] }],
    }],
  
}
module.exports = {
  detail: detail
}