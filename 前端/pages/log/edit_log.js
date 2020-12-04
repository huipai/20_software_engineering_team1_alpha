// pages/log/edit_log.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    old_title:"",
    old_time:"",
    old_content:"",
    old_diary_id:"",
    edit_log:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      old_title:options.title,
      old_time:options.time,
      old_content:options.content_userdefine,
      old_diary_id:options.diary_id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  solve_data:function(event){
    var editLog = new Object();
    var key0 = "user_id";
    var key1 = "title";
    var key2 = "content_userdefine";
    var key3 = "time";
    var key4 = "diary_id";
    var value0 = app.data.user_id;
    if(event.detail.value.title != ""){
      var value1 = event.detail.value.title;
    }else{
      var value1 = this.data.old_title;
    }
    if(event.detail.value.content_userdefine != ""){
      var value2 = event.detail.value.content;
    }else{
      var value2 = this.data.old_content;
    }
    var value4 = parseInt(this.data.old_diary_id);;
    
    editLog[key0] = value0;
    editLog[key4] = value4;
    editLog[key1] = value1;
    editLog[key2] = value2;
    this.setData({
      edit_log:editLog
    });
    console.log(value1);
    console.log(this.data.edit_log);
    wx.request({
      url: 'https://api.iminx.cn/user/diary/modify',
      data:{
        "user_id":app.data.user_id,
        "diary_id":value4,
        "title":value1,
        "content":value2
      },
      dataType:"JSON",
      method:"POST",
      success:function(res){
        console.log(res)
      }
    })
  },
  confirm_edit:function(){
    console.log(1)
  }

})