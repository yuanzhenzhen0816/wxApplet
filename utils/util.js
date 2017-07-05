function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function objLength(input) {
  var type = toString(input);
  var length = 0;
  if (type != "[object Object]") {
    //throw "输入必须为对象{}！"
  } else {
    for (var key in input) {
      if (key != "number") {
        length++;
      }

    }
  }
  return length;
};

//设置属性
function goodsPropFilter2(input) {
  var arr = [], arrayStr = JSON.parse(input);
  arrayStr.forEach(function (value) {
    var obj = { value: [] };
    for (var key in value) {
      switch (key) {
        case "name":
          obj.name = value[key];
          break;
        case "code":
          obj.ano = value[key];
          break;
        default:
          obj.value.push(value[key]);
      }
    }
    arr.push(obj);
  })
  return arr;
}
//
function goodsPropFilter(input){
  var arr=[],arrayStr=JSON.parse(input);
  return arrayStr;
};
function alert(des) {
  var self = this;
  self.setData({
    warning: true,
    warnDes: des
  });
  setTimeout(function () {
    self.setData({
      warning: false,
    })
  }, 1000);
};
module.exports = {
  formatTime: formatTime,
  goodsPropFilter: goodsPropFilter,
  objLength: objLength,
  alert: alert
}
