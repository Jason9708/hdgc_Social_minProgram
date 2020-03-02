// pages/List/list.js
import { avatarPath, articleCoverPath } from '../../utils/util.js'
Page({
  /**
   * 组件的初始数据
   */
  data: {
    articlesList:[],  // 文章列表
    articleCoverPath: articleCoverPath,
    avatarPath: avatarPath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllArticleList()
  },

  /**
   * 获取全部文章列表
   */
  getAllArticleList: function () {
    var params = {
      url: 'http://localhost:5000/hdgc/article',
      header: {
        'content-Type': 'application/json;charset=UTF-8'
      },
      timeout: 10000,
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        if (res.data.code == 0) {
          this.setData({
            articlesList: res.data.data
          })
        }
      }
    }
    wx.request(params)
  },

  navigationEvent: function (e) {
    if (e.detail == 1) {
      wx.redirectTo({
        url: '../../pages/Home/home'
      })
    } else {
      wx.redirectTo({
        url: '../../pages/List/list'
      })
    }
  }
})
