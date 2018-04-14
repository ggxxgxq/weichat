// pages/publish/publish.js
Page({
   data:{
     address:"点击选择，要勾选哦~",
     success:false
   },
   staticData:{
       type:"buy"
   },
   handleAddressTap(){
       wx.chooseLocation({
         success: this.chooseLocationSucc.bind(this)
       })
   },
   chooseLocationSucc(res){
       this.setData({
         address : res.address,
       })
       this.staticData.latitude = res.latitude
       this.staticData.longitude = res.longitude
    },
   handleTypeChange(e){
       this.staticData.type = e.detail.value
       //console.log(this.staticData.type)
   },
   handleMessageChange(e){
     this.staticData.message = e.detail.value
   },
   handleConnectChange(e){
     this.staticData.contact = e.detail.value
   },
   showToast(title){
      wx.showToast({
        title,
        icon: "loading",
        duration: 2000
      })
   },
   handleSubmit(){
     if (this.data.address === "点击选择，要勾选哦~"){
        console.log(1)
        this.showToast("请勾选")
         return
      }

      if (!this.staticData.message) {
        this.showToast("请填写说明方式")
        return
      }

      if (!this.staticData.contact) {
        this.showToast("请填写联系方式")
        return
      }
      const data = Object.assign({},{...this.data,...this.staticData})
      wx.request({
        url:"https://tayfjppz.qcloud.la/index.php/trade/add_item",
        method:"POST",
        data,
        header:{
          "content-type":"application/x-www-form-urlencoded"
        },
        success:(res)=>{
          if(res.data.ret){
            this.setData({
              success:true
            })
          }
        }
      })
   },
   handleBackTap(){
     wx.reLaunch({
       url: '/pages/index/index',
     })
   }
})