//app.js
App({
  onLaunch: function () {
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  currentDate () {
      function getZore (val) {
        if(val < 10) {
          return '0' + val 
        }
        return val
      }
      var time = new Date()
      return [time.getFullYear(),  getZore(time.getMonth() + 1),  getZore(time.getDate())].join('-')
  },
  globalData:{
    userInfo:null
  }
})