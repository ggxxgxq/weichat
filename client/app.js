App({
  onLaunch(){
    try{
        const info = wx.getSystemInfoSync()
        console.log(info)
        this.globalData.width = info.windowWidth
        this.globalData.height = info.windowHeight
    }catch(error){
        console.log(err)
    }
  },
  globalData:{}
 
})