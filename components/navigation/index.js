// components/navigation/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnTap:function(value){
      let params = value.currentTarget.dataset.type
      this.triggerEvent('navBtnTapEvent', params)
    }
  }
})
