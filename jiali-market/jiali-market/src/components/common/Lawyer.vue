<template>
  <div class="lawyer">
    <div class="lawyer_min">
      <div class="left">
        <div class="yiyi">
          <img src="../../../static/image/common/lawyer_yiyi.png" alt="">
        </div>
        <div class="left_content">
          <div class="left_min">
            <h2>易轶</h2>
            <p>--家理首席律师、中国知名婚姻律师</p>
            <ul>
              <li>中央电视台《法律讲堂》主讲律师</li>
              <li>北京电视台《第三调解室》特邀专家</li>
              <li>2015—2018年度“北京市优秀律师”</li>
              <li>已为1000多位当事人解决婚姻家庭问题</li>
            </ul>
            <a class="zixun" href="">
              <img src="../../../static/image/common/zixun_btn.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="right">
        <h2>知名婚姻家事<span>法律专家</span></h2>
        <dl>
          <dt>
            <img src="../../../static/image/common/lawyer_all.png" alt="">
          </dt>
          <dd>
            <span>家理律师团队</span>中既有执业多年的婚姻家庭专业型律师，也有在大学任教多年的婚姻情感咨询师，更有在法院审理婚姻家庭案件多年的离职法官。
          </dd>
        </dl>
      </div>
    </div>
    <div class="bottom">
      <el-carousel indicator-position="outside" height="342px" width="1080px">
        <el-carousel-item v-for="(item, index) in swiperAll" :key="index" class="bot_con">
          <ul>
            <li v-for="($item, $index) in item" :key="$index">
              <img :src="$item" alt="">
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Lawyer',
    components:{
    },
    data () {
      return {
        swiperAll:[
          [
            './static/image/common/lawyer_yangshuai.png',
            './static/image/common/lawyer_humengdie.png',
            './static/image/common/lawyer_jiangchunmei.png',
            './static/image/common/lawyer_masainan.png'
          ],
          [
            './static/image/common/lawyer_caoziyan.png',
            './static/image/common/lawyer_jinzengyu.png',
            './static/image/common/lawyer_miaolili.png',
            './static/image/common/lawyer_xuqian.png'
          ],
          [
            './static/image/common/lawyer_zhangping.png',
            './static/image/common/lawyer_wuyingjie.png',
            './static/image/common/lawyer_wuyanming.png',
            './static/image/common/lawyer_mahongxia.png'
          ],
        ]
      }
    },
    methods:{
    }
  }
</script>

<style scoped lang="scss">
  .lawyer{
    width:100%;
    background: #ececec;
    padding-bottom: 40px;
    .lawyer_min{
      width: 1080px;
      margin: 0 auto;
      padding-top:27px;
      display: flex;
      justify-content: space-between;
      margin-bottom:24px;
      .left{
        width: 650px;
        height: 381px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: relative;
        .yiyi{
          position: absolute;
          left: 0;
          top:0;
        }
        .left_content{
          width: 524px;
          height: 321px;
          .left_min{
            width: 312px;
            margin-left: 185px;
            text-align: left;
            h2{
              font-size: 36px;
              color:#f25927;
              font-weight: bolder;
              margin-top: 35px;
              padding-bottom: 10px;
            }
            p{
              font-size: 18px;
              color:#333333;
            }
            ul{
              li{
                font-size:15px ;
                color:#4d4d4d;
                list-style: disc;
                height: 30px;
                line-height: 30px;
              }
            }
            .zixun{
              display: block;
              text-align: center;
              margin-top:15px;
              img{
                display: inline-block;
              }
            }
          }
        }
      }
      .right{
        width:386px;
        h2{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width:386px;
          font-size: 30px;
          color:#443d4e;
          font-weight: bold;
          span{
            display: inline-block;
            color:#f65622;
            height:28px;
            line-height: 28px;
          }
        }
        dl{
          width: 100%;
          height: 321px;
          margin-top:15px;
          dt{
            display: block;
          }
          dd{
            font-size: 16px;
            span{
              color:#f65622 ;
            }
          }
        }
      }
    }
    .bottom{
      width: 1080px;
      margin:0 auto;
      .bot_con{
        width: 1080px;
        margin:0 auto;
        ul{
          display: flex;
          justify-content: space-between;
        }
      }

    }
  }
</style>
