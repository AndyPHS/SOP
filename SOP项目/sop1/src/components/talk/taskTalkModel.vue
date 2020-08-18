<template>
  <div class="tasktalk">
    <head-common></head-common>
    <div class="con  w-full">
      <div class="con_min ">
         <div class="con_minall pt-20">
           <div class="taolunBox">
             <div class="flex items-center">
               <img class="cursor-pointer mr-3" src="../../assets/image/talk_icon.png" alt="">
               <span @click="startTalk" class="cursor-pointer text-gray-700 text-base">发起讨论</span>
             </div>
           </div>
           <div class="w-2/3 mx-auto px-10">
             <h2 class="text-2xl text-red-500 font-bold pb-6 border-b text-center">讨论</h2>
             <ul class="py-5 flex justify-around px-20">
               <li :class="active==1?'text-f39800':'text-a3a3a3' " @click="tabCheck(1)" class="text-lg font-bold">全部讨论<span>(4)</span></li>
               <li :class="active==2?'text-f39800':'text-a3a3a3' " @click="tabCheck(2)" class="text-lg font-bold">我发起的<span>(1)</span></li>
               <li :class="active==3?'text-f39800':'text-a3a3a3' " @click="tabCheck(3)" class="text-lg font-bold">邀请我的<span>(3)</span></li>
             </ul>
             <div class="searchBox">
               <form action="">
                 <input type="text" v-model="searchMsg" placeholder="输入讨论内容、发起人姓名进行搜索">
               </form>
               <div class="img">
                 <img @click="searchAc" src="../../assets/image/search_icon1.png" alt="">
               </div>
             </div>
           </div>
           <div class="w-full pt-10">
              <ul>
                <li>
                  <div class="flex justify-between py-8 bg-f4f4f4 px-10 text-base">
                     <div class="flex items-center">
                       <img class="mr-3" src="../../assets/image/xiangmu_icon.png" alt="">
                       <img class="mr-3 hidden" src="../../assets/image/bangzhu_icon.png" alt="">
                       <img class="mr-3 hidden" src="../../assets/image/qita_icon.png" alt="">
                       <div>望京法院立案</div>
                     </div>
                     <div class="flex items-center">
                       <div class="mr-3">张力虹</div>
                       <div class="text-sm">2019-10-08 10:30</div>
                     </div>
                     <div class="flex items-center">
                       <img @click="replayAc(1)" class="cursor-pointer mr-3" src="../../assets/image/talk_icon.png" alt="">
                       <img @click="deleteAc()" class="cursor-pointer" src="../../assets/image/delete_icon.png" alt="">
                     </div>
                  </div>
                  <div class="px-24">
                    <h3 class="py-4 text-sm">
                      有没有人想和我一起去巴厘岛？
                    </h3>
                    <ul class="flex flex-wrap">
                      <li class="mr-3 px-3 py-3 border rounded-sm bg-f4f4f4 flex items-center">
                        <img class="mr-3" src="../../assets/image/image_icon.png" alt="">
                        <div class="text-sm">王建国身份证.jpg</div>
                      </li>
                      <li class="mr-3 px-3 py-3 border rounded-sm bg-f4f4f4 flex items-center">
                        <img class="mr-3" src="../../assets/image/image_icon.png" alt="">
                        <div class="text-sm">王建国身份证.jpg</div>
                      </li>
                      <li class="mr-3 px-3 py-3 border rounded-sm bg-f4f4f4 flex items-center">
                        <img class="mr-3" src="../../assets/image/image_icon.png" alt="">
                        <div class="text-sm">王建国身份证.jpg</div>
                      </li>
                    </ul>
                    <div class="py-5">
                      <ul class="pl-5 text-sm">
                        <li class="flex leading-loose">
                          <div class="mr-10"><span class="text-blue-500 font-bold">林志玲：</span>我能一起去么？</div>
                          <div class="text-gray-500">2019-10-09-35</div>
                        </li>
                        <li class="flex leading-loose">
                          <div class="mr-10"><span class="text-blue-500 font-bold">刘诗诗：</span>我也想去，能加我一个么</div>
                          <div class="text-gray-500">2019-10-09-35</div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="huifuId == 1">
                      <form action="" class="flex items-center mt-5 mb-3 bg-f4f4f4 border border-gray-300">
                        <textarea name="reworkmes" cols="40" v-model="huifuMsg" rows="3" class="w-4/5  bg-f4f4f4 px-3 py-1" style="OVERFLOW:hidden"></textarea>
                        <el-divider direction="vertical"></el-divider>
                        <span @click="replayOkAc" class="w-1/6 pl-6 text-center cursor-pointer">回复</span>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="text-center">
                <div class="w-1/2 py-10 mx-auto">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="20">
                  </el-pagination>
                </div>
              </div>
           </div>
           <div v-if="notalkFlag">
             <div class="w-1/2 mx-auto text-center py-32">
               <img class="inline-block mx-auto" src="../../assets/image/notalk_icon.png" alt="">
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import head_common from "../partials/head_common.vue"
export default {
  name:'TaskManagement',
  components: {
    'head-common': head_common
  },
  data(){
    return {
      // 分页
      currentPage: 1,
      notalkFlag: false,
      huifuId :null,
      huifuMsg: '', // 回复的内容
      active: 1,
      searchMsg: '' // 搜索内容
    }
  },
  methods:{
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 返回
    goback () {
       this.$router.replace('/TaskCon')
    },
    // 发起讨论
    startTalk () {
      this.$router.replace('/talkStart')
    },
    deleteAc () { // 删除讨论
      this.$confirm('删除之后不可恢复，确认删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then((data) => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch((data) =>{
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    replayAc (e) { // 点击回复按钮
      this.huifuId = e
    },
    replayOkAc () { // 确认回复
      alert(this.huifuMsg)
      this.$message({
        type: 'success',
        message: '回复成功!'
      });
      this.huifuMsg = ''
    },
    tabCheck (e) {
      this.active = e
    },
    searchAc () { //搜索按钮
      alert(this.searchMsg)
      this.searchMsg = ''
    }
  }
}
</script>

<style  scoped lang="scss">
  $color01: #00baa2;
  $color02: #a3a3a3;
  $color03: #f39800;
  $color04: #3489e8;
  $color05: #848484;
  $color06: #e8343d;
  $color07: #8d34e8;
  $color08: #606060;
  $color09: #443d4e;
  .bg-f4f4f4{background-color: #f4f4f4;}
  .bg-e7e7e7{background-color: #e7e7e7;}
  .text-a3a3a3{color: #a3a3a3;}
  .text-f39800{color: #f39800;}
  .tasktalk{
    .con{
      background-color: #f8f8f8;
      padding-bottom:20px;
      .con_min{
        max-width: 1000px;
        margin:0 auto;
        background-color: #fff;
        .con_minall{
          box-shadow: 1px 1px 15px 1px rgba(28,9,9,0.1);
          border-radius: 5px;
          position: relative;
          .taolunBox{
            position: absolute;
            top: 68px;
            right: 57px;
          }
          .searchBox{
            width: 590px;
            height: 32px;
            margin:20px auto;
            line-height: 32px;
            border: 1px solid #bababa;
            border-radius: 16px;
            display: flex;
            align-items: center;
            input{
              width: 528px;
              padding-left: 13px;
              line-height: 30px;
              height: 30px;
              border:none;
              border-radius: 15px;
              font-size: 16px;
            }
            .img{
              width: 40px;
              height: 30px;
              text-align: center;
              // display: inline-block;
              margin:0 auto;
              img{
                margin:5px auto;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
</style>
