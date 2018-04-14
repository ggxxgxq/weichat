Page({
  Data:{
     list:[]
  },
  staticData:{
    keyword:""
  },
  handleKeywordsChange(e){
    //console.log(e.detail.value)
    this.staticData.keyword = e.detail.value
  },
  handleSearchTap(){
    //console.log(this.staticData.keyword)
    wx.request({
      url: 'https://felixlu.duapp.com/index.php/trade/get_search_list',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        keyword: this.staticData.keyword
      },
      success: (res) => {
        console.log(res)
        this.setData({
          list: res.data.data
        })
      }
    })
  }


})