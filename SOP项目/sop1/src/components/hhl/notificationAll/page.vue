<template>

<div>
    <h1 class="title">消息通知</h1>
    <div class="select">
      <input type="text">
      <button>搜索</button>
    </div>
    <div>
       <ul>
          <li>消息通知</li>
          <li>公告消息</li>
          <li>分享消息</li>
       </ul>
    </div>
    <div>
      <div><button>新消息</button></div>
      <div><button>全部已读</button></div>
    </div>
    <div>
        
    </div>
</div>

</template>

<script>

export default {
// 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
    name: "notificationAll",
    mounted(){
    },
    methods:{
      changeSelect(){ // 
        this.select = !this.select
        this.ins = 1
        this.selectRenWu = false
      },
      changeSelectRenWu(){ // 已读
        selectTask({
          why: this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{  
          console.log()
        })
      },
      listNews(item){// 获取列表
        this.select = false
        this.myjobtitle = item.name;
        this.myjobId = item.ID;
        selectTask({
          why: this.myjobId,
          type: this.changeSelectRenWuID
        }).then((data)=>{  
          this.allocated_top = data.data.data.allocated_top;
          this.toDay = data.data.data.toDay;
          this.nearDay = data.data.data.nearDay;
          this.futureDay = data.data.data.futureDay;
          this.endDay = data.data.data.endDay;
          this.allocated_button = data.data.data.allocated_button;
        })
      },
    }
}
</script>

<style  scoped>
.select input{
  border:1px solid  #000;
  margin-top:100px;
  margin-left:300px;
}

.title{
  margin-left:500px;
}
</style>