<template>
  <div>
    <div class="head_top w-full bg-white-500">
      <div class="head_top_min">
        <div class="head_t_l">
          <img class="ml-2" src="../../assets/image/sun_icon.png" alt="">
          <span>晴</span>
          <span>13℃-25℃</span>
          <span>请注意，大风蓝色预警</span>
        </div>
        <div class="head_t_r">
           <div class="flex items-center mr-4 cursor-pointer">
             <!-- <img v-if="talkFlag==true" @click="goTalkAc" src="../../assets/image/new_msg_icon.png" alt="">
             <img v-if="talkFlag==false" @click="goTalkAc" src="../../assets/image/new_msg_active_icon.png" alt=""> -->
             <img @click="goTalkAc" class="el-dropdown-link" src="@/assets/image/new_msg_icon.png" alt="">
             <el-dropdown trigger="click">
               <img v-if="talkFlag==true" class="ml-1" src="../../assets/image/down_icon.png" alt="">
               <img v-if="talkFlag==false" class="ml-1" src="../../assets/image/down_active_icon.png" alt="">
               <el-dropdown-menu>
                 <el-dropdown-item class="clearfix talkicon">
                   <!-- <img class="mr-2" src="@/assets/image/team_icon.png" alt=""> -->
                   <span @click="goTalkAc">讨论</span>
                 </el-dropdown-item>
                 <!-- <el-dropdown-item class="clearfix talkicon">
                   <img class="mr-2" src="@/assets/image/team_icon.png" alt="">
                   <span @click="InitiateCollaboration">
                     发起协作
                   </span>
                 </el-dropdown-item> -->
               </el-dropdown-menu>
             </el-dropdown>
           </div>
           <!-- <div class="flex items-center mr-4 cursor-pointer">
             <img src="../../assets/image/date_icon.png" alt="">
             <img class="ml-1" src="../../assets/image/down_icon.png" alt="">
           </div> -->
           <!-- <div class="flex items-center mr-4 cursor-pointer">
             <img src="../../assets/image/question_icon.png" alt="">
             <img class="ml-1" src="../../assets/image/down_icon.png" alt="">
           </div> -->
           <div class="flex items-center mr-4 cursor-pointer">
             <img @click="goMessageAc(0)" src="../../assets/image/msg_icon.png" alt="">
             <el-dropdown trigger="click">
               <img v-if="talkFlag==true" class="ml-1" src="../../assets/image/down_icon.png" alt="">
               <img v-if="talkFlag==false" class="ml-1" src="../../assets/image/down_active_icon.png" alt="">
               <el-dropdown-menu>
                 <el-dropdown-item class="clearfix talkicon">
                   <span @click="goMessageAc(1)">系统通知</span>
                 </el-dropdown-item>
                 <el-dropdown-item class="clearfix talkicon">
                   <span @click="goMessageAc(2)">公告消息</span>
                 </el-dropdown-item>
                 <el-dropdown-item class="clearfix talkicon">
                   <span @click="goMessageAc(3)">分享消息</span>
                 </el-dropdown-item>
               </el-dropdown-menu>
             </el-dropdown>
           </div>
           <!-- <span class="text-base ml-6 mr-4">
             常用工具
           </span> -->
           <div class="cursor-pointer mr-2">
             <el-dropdown>
               <span class="el-dropdown-link text-base">
                 <img src="../../assets/image/list_icon.png" alt="">
               </span>
               <el-dropdown-menu slot="dropdown" class="taolun" width="100px">
                 <div class="a" @click="layout" style="width: 100px;cursor: pointer;font-size:14px;text-align:center;line-height:20px">退出</div>
                 <!-- <div class="a b" disabled style="width: 100px;font-size:14px;text-align:center;line-height:30px">发起讨论</div> -->
               </el-dropdown-menu>
             </el-dropdown>

           </div>
        </div>
      </div>
    </div>
    <div class="head_mid w-full">
      <div class="head_mid_min">
        <div class="head_m_l">
          <div>
            {{shortName}}
          </div>
          <dl>
            <dt>下午好,<span>{{name}}</span></dt>
            <dd class="hidden">今天是公元二零二零年四月二十九日，是您的生日，祝您生日快乐！</dd>
          </dl>
        </div>
        <div class="head_m_r">
          <ul>
          	<li @click="tabChange(1)">
              <img v-if="renwu==false" src="@/assets/image/renwu_icon01.png" alt="">
              <img v-if="renwu==true" src="@/assets/image/renwu_active_icon01.png" alt="">
              <p :class="renwu==true?'active':'default_active' ">任务管理</p>
            </li>
            <li @click="tabChange(2)">
              <img v-if="xiangmu==false" src="@/assets/image/xiangmu_icon02.png" alt="">
              <img v-if="xiangmu==true" src="@/assets/image/xiangmu_active_icon02.png" alt="">
              <p :class="xiangmu==true?'active':'default_active' ">项目管理</p>
            </li>
            <li @click="tabChange(3)">
              <img src="@/assets/image/zhishi_icon01.png" alt="">
              <p>知识管理</p>
            </li>
            <li @click="tabChange(4)">
              <img src="@/assets/image/shiwu_icon01.png" alt="">
              <p>事务管理</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <tishi-box></tishi-box>
  </div>
</template>

<script>
  import tishi_box from "@/components/partials/tishi_box.vue"
  export default{
    name: 'head_common',
    components:{
      'tishi-box': tishi_box
    },
    props: {
      renwu: Boolean,
      xiangmu: Boolean,
      required: true
    },
    data() {
      return {
        name: localStorage.getItem('name'),
        shortName:'', // 名字两个字
        userId: localStorage.getItem('userId'),
        talkFlag: true, // 默认讨论样式
      }
    },
    mounted() {
      this.getName()
    },
    methods:{
      layout () {
        alert('退出登录')
      },
      getName () {
        this.shortName = this.name.slice(1)  // 截取用户姓名后两位
        // if (renwu != undefined){
        //   this.renwuFlag = renwu
        // } else {
        //   this.renwuFlag = false
        // }

      },
      goTalkAc () {
        this.talkFlag = !this.talkFlag

        this.$router.replace('/discussListAll/0/0/1')
      },
      goMessageAc (e) {
        if(e==0){
          this.$router.replace('/messageList')
        } else if (e==1){
          this.$router.replace('/messagexitong')
        } else if (e==2){
          this.$router.replace('/messagegonggao')
        } else if (e==3){
          this.$router.replace('/messagefenxiang')
        }
      },
      tabChange (e) {
        if(e==1){
          this.$router.replace('/TaskManagement')
          this.renwuFlag = true
        } else if (e==2){
          this.$router.replace('/projectManagement')
          this.renwuFlag = false

        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $color01: #00baa2;
  $color02: #a3a3a3;
  $color03: #f39800;
  $color04: #3489e8;
  $color05: #848484;
  $color06: #e8343d;
  $color07: #8d34e8;
  $color08: #606060;
  $color09: #443d4e;
  .active{
    color:$color06;
  }
  .default_active{color:$color05}
  .head_top{
    color: $color05;
    .head_top_min{
      max-width: 1000px;
      margin:0 auto;
      height: 37px;
      line-height: 37px;
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      .head_t_l{
        display: flex;
        align-items: center;
        width: 350px;
        img{
          display: block;
          margin-right: 10px;
        }
        span{
          display: block;
          &:nth-of-type(2){
            margin:0 33px;
          }
        }
      }
      .head_t_r{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 370px;
      }
    }
  }
  .head_mid{
    background-color: #f8f8f8;
    .head_mid_min{
      max-width: 1000px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      .head_m_l{
        display: flex;
        align-items: center;
        width: 350px;
        padding-top:50px;
        padding-bottom: 32px;
        div{
          display: block;
          width:56px;
          height: 56px;
          border-radius: 28px;
          text-align: center;
          line-height: 56px;
          background-color:$color06;
          color:#fff;
          margin-right: 23px;
        }
        dl{
          width: 260px;
          dt{
            font-size: 24px;
            span{
              font-weight: bolder;
              color:#000;
            }
          }
          dd{
            font-size:13px;
          }
        }
      }
      .head_m_r{
        display: flex;
        align-items: flex-end;
        ul{
          display: flex;
          align-items: flex-end;
          width: 31.25rem;
          padding-bottom: 32px;
          li{
            width: 25%;
            cursor: pointer;
            text-align: center;
            img{
              display: inline-block;
              width: 29px;
              height: 29px;
            }
            p{
              border-right: 2px solid $color02;
              margin-top: 5px;
              font-weight: bold;
              height: 18px;
              line-height: 18px;

            }
            &:nth-of-type(3){
              p{
                color:#e3e3e3;
              }
            }
            &:last-of-type{
              p{
                border:none;
                color:#e3e3e3;
              }
            }
          }
        }
      }
    }
  }
  .talkicon{display: flex;align-items: center;cursor: pointer;}
</style>
