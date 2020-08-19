<template>
  <div class="all">
    <head-common></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul class="px-4  border-r">
              <li class="text-center cursor-pointer mb-5">
                <img class="mx-auto" src="../assets/image/zhangsanID.png" alt="">
                <h2 class="py-2">张三身份证</h2>
              </li>
              <li class="text-center cursor-pointer mb-5">
                <img class="mx-auto" src="../assets/image/zhangsanID.png" alt="">
                <h2 class="py-2">任务日志</h2>
              </li>
              <li class="text-center cursor-pointer mb-5">
                <img class="mx-auto" src="../assets/image/zhangsanID.png" alt="">
                <h2 class="py-2">任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">

            <!-- 上传文件 -->
            <div>
              <div class="flex justify-between items-start px-10 py-10">
                <div class="flex justify-center items-center">
                  <!-- <img class="mr-3" src="../assets/image/back_icon.png" alt="">
                  <span @click="goCon" class="text-lg cursor-pointer text-gray-500">返回</span> -->
                </div>
                <div class="text-center">
                  <h2 class="text-2xl text-center font-bold mb-5">张三身份证</h2>
                </div>
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="../assets/image/download_icon.png" alt="">
                  <span @click="downloadAc" class="text-lg cursor-pointer ">下载文件</span>
                </div>
              </div>
              <div class="shangchuan_min px-10 pb-10">
                <div>
                  <img src="../assets/image/shenfenzhengIDbig.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import head_common from "@/components/partials/head_common.vue"
  import {addInspectionTask, deleteInspectionTask, selectInspectionTask, selectSurplusInspectionTask} from '@/api/api/requestLogin.js' // 添加，删除，查找项目自检项
  const cityOptions = ['20190925  张力虹  张三离婚纠纷起诉状1.0版', '20190925  张力虹  张三离婚纠纷起诉状2.0版', '20190925  张力虹  张三离婚纠纷起诉状3.0版', '20190925  张力虹  张三离婚纠纷起诉状4.0版'];
  export default{
    name:'ViewImage',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        name: localStorage.getItem('name'),
        userId: localStorage.getItem('userId'),
        shortName:'', // 名字两个字
        ins:1,
      }
    },
    mounted(){
    },
    methods:{
      downloadAc () {
        alert('下载文件')
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
            }
            p{
              border-right: 2px solid $color02;
              margin-top: 5px;
              font-weight: bold;
              height: 18px;
              line-height: 18px;

            }
            &:first-of-type{
              p{
                border-right: 2px solid $color06;
                color:$color06;
              }
            }
            &:nth-of-type(2){
              p{
                color:#848484;
              }
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
  .con{
    background-color: #f8f8f8;
    padding-bottom:20px;
    .con_min{
      max-width: 1000px;
      margin:0 auto;
      .con_minall{
        box-shadow: 1px 1px 15px 1px rgba(28,9,9,0.1);
        border-radius: 5px;
        .con_min_left{
          width: 190px;
          padding:130px 0;
          background-color: #fff;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          ul{
            li{

            }
          }
        }
        .con_min_right{
          width: 800px;
          background-color: #fff;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;

        }
      }
    }
  }

</style>
