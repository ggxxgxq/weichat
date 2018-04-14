const app = getApp()

Page({
  data:{
    "longitude":"",
     "latitude":"",
     controls:[{
       id:0,
       iconPath:"/resources/images/center.png",
       position:{
         left:app.globalData.width-42,
         top:app.globalData.height-44-44,
         width:32,
         height:32
       },
       clickable:true
     },{
       id:1,
       iconPath: "/resources/images/pin.png",
       position: {
         left: app.globalData.width/2 -11,
         top: (app.globalData.height -44) / 2 - 31,
         width: 22,
         height: 31
       }
     }],
     markers:[]
  },
  onLoad(){
    //console.log(app.globalData)
    this.mapCtx = wx.createMapContext("map", this)
    this.getLocation()
    this.getData()
  },
  getLocation(){
    wx.getLocation({
      type: "gcj02",
      success: this.getPositionData.bind(this)
    })
  },
  getData(){
     wx.request({
       url:"https://tayfjppz.qcloud.la/index.php/trade/get_list",
       success:(res)=>{
           //console.log(res)
           const data = res.data.data
           this.setData({
             markers:
             data.map( (item)=>({
             iconPath: "/resources/images/"+item.type+".png",
             id:item.id,
             latitude: item.latitude,
             longitude: item.longitude,
             width: 30,
             height: 30
              }))
           })
       }
     })
  },
  getPositionData(res){
    this.setData({
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  handleControlTap(){
    this.mapCtx.moveToLocation()
  },
  handleMarkerTap( e ){
    console.log(e)
     wx.navigateTo({
       url: '/pages/detail/detail?id='+e.markerId,
     })
  }
})
