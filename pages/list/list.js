//index.js
var app = getApp()
Page({
  data: {
    date: '',
    todo: [],
    txt: ''
  },
  //事件处理函数
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    this.initList()
  },
  onLoad: function () {
    var currentDate = app.currentDate
    this.setData({
      date: currentDate()
    })
    this.initList()
  },
  onShow () {
    this.initList()
  },
  addTodoHandle(e) {
    console.log('add')
    var todoList = this.data.todo
    todoList.unshift({ txt: e.detail.value, done: false })
    this.setData({
      todo: todoList
    })
    this.setData({
      txt: ''
    })
    wx.setStorageSync(this.data.date, this.data.todo)
  },
  todoTapHandle(e) {
    var todoList = this.data.todo
    todoList[e.target.id].done = !todoList[e.target.id].done
    this.setData({
      todo: todoList
    })
    wx.setStorageSync(this.data.date, this.data.todo)
  },
  initList() {
    if (this.data.date) {
      var list = wx.getStorageSync(this.data.date) || []
      this.setData({ todo: list })
    }
  }

})
