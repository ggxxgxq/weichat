Page({
  data:{
    detail:{}
  },
  onLoad(options){
      console.log(options)
      wx.request({
        url: 'https://tayfjppz.qcloud.la/index.php/trade/get_item',
        method:"POST",
        header:{
          "content-type":"application/x-www-form-urlencoded"
        },
        data:{
          id:options.id
        },
        success:(res)=>{
          console.log(res)
          this.setData({
            detail:res.data.data
          })
        }
      })
  }
})