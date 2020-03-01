// pages/Home/home.js
import { avatarPath, articleCoverPath } from '../../utils/util.js' 
Page({
  /**
   * 组件的初始数据
   */
  data: {
    currentArticle:'',  // 当前显示文章
    currentIndex: 0, // 当前文章id
    articlesList:[], // 热门文章数组
    articleCoverPath: articleCoverPath,
    avatarPath: avatarPath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options){
    this.getHotArticleList()
  },

  /**
   * 组件的方法列表
   */
  getHotArticleList:function(){
    var params = {
      url:'http://localhost:5000/hdgc/article/getHotArticle',
      header: {
        'content-Type': 'application/json;charset=UTF-8'
      },
      timeout:10000,
      method:'GET',
      success:(res) => {
        console.log(res.data)
        if(res.data.code == 0){
          this.setData({
            articlesList:res.data.data,
            currentIndex:0
          })
        }
      }
    }
    wx.request(params)
  },

  getPrevious:function(){
    this.setData({
      currentIndex: this.data.currentIndex - 1
    })
  },

  getNext: function () {
    this.setData({
      currentIndex: this.data.currentIndex + 1
    })
  },

  navigationEvent: function(e){
    if(e.detail == 1){
      wx.navigateTo({
        url:'../../pages/Home/home'
      })
    }else{
      wx.navigateTo({
        url: '../../pages/List/list'
      })
    }
  }
})
