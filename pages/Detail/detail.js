// pages/Detail/detail.js
// pages/Home/home.js
import { avatarPath, articleCoverPath } from '../../utils/util.js' 
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articlesDetail:'', // 文章详情
    content:'', // 文章内容
    articleCoverPath: articleCoverPath,
    avatarPath: avatarPath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleDetail(options.id)
  },

  getArticleDetail:function(id){
    var params = {
      url: `http://localhost:5000/hdgc/article/articleInfo/${id}`,
      header: {
        'content-Type': 'application/json;charset=UTF-8'
      },
      timeout: 10000,
      method: 'GET',
      success: (res) => {
        console.log(res.data)
        if (res.data.code == 0) {
          let content = app.towxml(res.data.data.content, 'markdown');
          this.setData({
            articlesDetail: res.data.data,
            content: content
          })
        }
      }
    }
    wx.request(params)
  }
})