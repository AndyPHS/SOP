<template>
  <div class="all">
    <head-common></head-common>
    <div class="con w-full">
      <div class="con_min">
        <div class="flex con_minall">
          <div class="con_min_left">
            <ul>
              <li @click="checkTab(1)" class="flex justify-center items-center">
                <img src="@/assets/image/msgcheck_icon.png" alt="">
                <h2>任务信息</h2>
              </li>
              <li @click="checkTab(2)" class="flex justify-center items-center">
                <img src="@/assets/image/logcheck_icon.png" alt="">
                <h2>任务日志</h2>
              </li>
              <li @click="checkTab(3)" class="flex justify-center items-center bg-white">
                <img src="@/assets/image/filecheck_icon.png" alt="">
                <h2>任务文件</h2>
              </li>
            </ul>
          </div>
          <div class="con_min_right">
            <!-- 上传文件 -->
            <div class="shangchuan">
              <div class="flex justify-between items-start px-10 py-10">
                <div class="flex justify-center items-center">
                  <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
                  <span @click="goCon" class="text-lg cursor-pointer text-gray-500">返回</span>
                </div>
                <div class="text-center">
                  <h2 class="text-2xl text-red-500 font-bold mb-5">确认管辖法院</h2>
                  <h3 class="text-xl text-gray-500 font-bold">张三诉讼李四离婚纠纷案件</h3>
                </div>
                <div></div>
              </div>
              <div class="shangchuan_min px-10 pb-10">
                <el-form ref="uploadForm" :model="uploadForm" label-width="80px">
                  <el-form-item label="上传位置">
                    <el-select v-model="uploadForm.where" size="mini" placeholder="请选择上传位置">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <div class="px-3">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                  <div class="pt-5">
                    <el-form-item label="查看权限">
                      <el-radio-group v-model="uploadForm.right" @change="selectRight">
                        <el-radio value="1" label="团队所有人可见"></el-radio>
                        <el-radio value="2" label="团队部分人可见"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </div>
                  <div v-if="isHasRight">
                    <el-form-item label="谁可以看">
                      <el-select v-model="uploadForm.hasright" size="mini" multiple placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </el-form>
                <div class="w-2/3 py-10 mx-auto flex justify-around">
                  <div class="registBtn mx-auto" @click="uploadOkBtn">确认上传</div>
                  <div class="registCancleBtn"  @click="uploadCancleBtn">取消</div>
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
    name:'TaskFileUpload',
    components: {
      'head-common': head_common
    },
    data() {
      return {
        visible:false,
        name: localStorage.getItem('name'),
        userId: localStorage.getItem('userId'),
        shortName:'', // 名字两个字
        ins:1,
        // 多选框
        checkedCities: [],
        cities: cityOptions,
        // 分页
        currentPage1: 5,
        // 上传文件
        uploadForm: {
          where: '', // 上传位置
          right: '', // 权限
          hasright: [] // 谁可以看
        },
        isHasRight: false,  // 是否有权看
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        wenjuanList: true,
        shangchuanBox: false,
        // 移动弹窗
        dialogMove: false,
        formLabelWidth: '150px',

      }
    },
    mounted(){

    },
    methods:{
      textbtn () { // 重命名
        alert(1)
      },
      goCon () { // 点击文件页面
        this.$router.replace('/TaskFile')
      },
      taolun () {
        alert(1)
      },
      // 多选框
      handleCheckedCitiesChange(value) {
        console.log(value)
      },
      // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      // 上传图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      selectRight () { // 选择谁可以见
         console.log(this.uploadForm.right)
        if (this.uploadForm.right == '团队部分人可见'){
          this.isHasRight = true
        } else {
          this.isHasRight = false
        }
      },
      uploadOkBtn () { // 点击确认上传按钮
        this.$message({
          showClose: true,
          message: '恭喜你，上传成功',
          type: 'success'
        });
      },
      uploadCancleBtn () { // 取消
        this.$message({
          showClose: true,
          message: '取消上传'
        });
      },
      // 移动至
      moveAc () { // 点击移动
        this.dialogMove = true
      },
      moveOkBtn () { // 确定移动
        this.dialogMove = false
      },
      cancleMoveBtn () { // 取消移动
        this.dialogMove = false
        this.moveForm.selectBox = ''
      },
      // 分享
      shareAc () { // 点击分享
        this.dialogShare = true
      },
      shareOkBtn () { //确认分享
        this.dialogShare = false
        this.$message({
          showClose: true,
          message: '文件已成功分享',
          type: 'success'
        });
      },
      cancleShareBtn () { // 取消分享
        this.dialogShare = false
        this.shareForm.selectBox = ''
      },
      addshareAc () { // 添加分享人
        this.sharenameAll.push({
          name: this.shareForm.selectBox,
          id: 222
        })
      },
      removeShare (index) { // 删除某元素
        this.sharenameAll.splice(index, 1)
      },
      // 删除
      removeFileAc () {
        this.$confirm('确认删除该文件, 删除后不可恢复，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then((data)=>{

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      // 左侧导航切换
      checkTab (e) {
        if(e==1){
          this.$router.push({
            path:'/TaskCon',
            query:{
              nav: 1
            }
          })
        } else if (e==2){
         this.$router.push({
           path:'/TaskCon',
           query:{
             nav: 2
           }
         })
        } else if (e==3){
          this.$router.replace('/TaskFileall')
        }
      },
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
          width: 138px;
          padding:130px 0;
          background-color: #e7e7e7;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          ul{
            li{
              height: 63px;
              h2{
                color: #443d4e;
                font-weight: bold;
                margin-left: 10px;
              }
            }
          }
        }
        .con_min_right{
          width: 862px;
          background-color: #fff;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          .wenjian{
            .wenjian_min{
              .wenjianliebiao{
                .wenjianliebiao_left{
                  span{
                    width: 17px;
                    height: 17px;
                    display: block;
                    line-height: 17px;
                    text-align: center;
                    border-radius: 50%;
                    background-color: red;
                    position: absolute;
                    top:-8px;
                    right: -15px;
                    color:#fff;
                    font-size: 12px;
                  }
                }
                .el-checkbox__input.is-checked+.el-checkbox__label{
                  width: 100% !important;
                }
              }
            }
          }
          .shangchuan{
            .shangchuan_min{
              .registBtn{
                width: 173px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer; text-align: center;
                &:hover{
                  background-color: red;color: #fff;
                }
              }
              .registCancleBtn{
                width: 173px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer;}
  .registBtn:hover{background-color: red;color: #fff;}
  .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer;}
  // 分享
  .sharename{
    margin-left: 150px;
    ul{
      li{
        padding:3px 4px;
        color: #3489e8;
        border:1px solid #3489e8;
        border-radius: 5px;
        position: relative;
        margin-right: 18px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        img{
          display: inline-block;
          position: absolute;
          top:-6px;
          right: -6px;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
  .iconList{
    position: absolute;
    top:-10px;
    right: -40px;
    display: flex;
    align-items: center;
    li{
      margin-right: 8px;
    }
  }
</style>
