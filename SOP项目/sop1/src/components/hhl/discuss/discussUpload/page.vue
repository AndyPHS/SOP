<template>
  <div class="talkStart">
    <head-common></head-common>
    <div class="con  w-full">
      <div class="con_min ">
        <div class="con_minall pt-10">
          <div class="flex justify-between items-start px-10">
            <div class="flex items-center">
              <img class="cursor-pointer mr-3" src="@/assets/image/back_icon.png" alt="">
              <span @click="goback" class="cursor-pointer text-base">返回</span>
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold py-2">发起讨论</h3>
            </div>
            <div class="flex items-center"></div>
          </div>
          <div class="w-full py-10 ">
              <div class="w-2/3 mx-auto">
                <el-form :model="talkform" id="talkform">
                  <el-form-item label="讨论分类" :label-width="formLabelWidth">
                    <el-select class="mr-10" v-model="talkform.type" placeholder="请选择">
                      <el-option label="项目讨论" value="1"></el-option>
                      <el-option label="发起帮助" value="2"></el-option>
                      <el-option label="其他讨论" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="讨论主题" :label-width="formLabelWidth">
                    <el-input v-model="talkform.title" class="inputcon" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="讨论内容" :label-width="formLabelWidth">
                    <el-input v-model="talkform.content" type="textarea" :rows="3" placeholder="输入日志内容" class="inputcon" autocomplete="off"></el-input>
                  </el-form-item>
                  <div class="w-2/3 mb-5 mx-auto">
                    <el-upload
                      class="upload-demo"
                      action="/api/sop_api/v1/files/temporaryFile"
                      name="files"
                      multiple
                      :headers="{'Authorization':token}"
                      :on-success	="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                  <el-form-item label="邀请成员" :label-width="formLabelWidth">
                    <el-select
                        v-model="talkform.users"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        placeholder="请输入关键词"
                        :remote-method="remoteMethod"
                        :loading="loading">
                        <el-option
                          v-for="item in options"
                          :key="item.id"
                          :label="item.name"
                          :value="item.id">
                        </el-option>
                      </el-select>
                  </el-form-item>
                </el-form>
                <div class="py-2 sharename hidden">
                  <ul class="flex">
                    <li v-for="(item, index) in this.talkform.users" :key="index" class="">{{ item.name }}<img @click="removeShare(index)" src="@/assets/image/close_red_icon.png" alt=""></li>
                  </ul>
                </div>
                <div  class=" py-10 w-4/5 mx-auto flex justify-around" >
                  <div class="registBtn mx-auto" @click="talkOkBtn">发起讨论</div>
                  <div class="registCancleBtn"  @click="cancleTalkBtn">取消</div>
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
import { addDiscuss } from '@/api/hhl/discuss/addDiscuss'
import { selectUsers } from '@/api/hhl/users/selectUsers'

export default {
  name:'discussUpload',
  components: {
    'head-common': head_common
  },
  data(){
    return {
      formLabelWidth: '150px',
      talkform:{
        type: null, // 类型
        title: '',  // 讨论标题
        content: '', // 讨论内容
        files: [],  // 讨论文件
        users: [

        ],  // 成员
        pid:this.$route.params.pid,
        tid:this.$route.params.tid,
      },
      fileList: [],
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
      loading:false,
      token:""
    }
  },
  mounted(){
      this.getToken()
    },
  methods:{
    // 返回
    goback () {
       this.$router.go(-1)
    },
    handleRemove(file, fileList) { // 删除讨论图片
      console.log(file, fileList);
    },
    handlePreview(file) { // 添加讨论图片
      // this.talkform.files
      for(let i=0;i>file.data.length;i++){
        this.talkform.files.push(file.data[i]);
      }
    },
    addshareAc (item) { // 添加邀请人
      this.talkform.users.push({
        name: this.talkform.selectBox,
        id: 222
      })
    },
    removeShare (index) { // 删除邀请人
      this.talkform.users.splice(index, 1)
    },
    talkOkBtn () { // 发起讨论
    // console.log(this.talkform)
    let linshi = this.talkform.users;
    this.talkform.users="["+this.talkform.users.join(",")+"]"
    let data=this.talkform;
    addDiscuss(data).then(async res=>{
      this.options=res.data.data
      this.talkform.users=linshi
       this.$router.go(-1)
    })
      // alert(1)

    },
    cancleTalkBtn () {
      alert('取消讨论')
    },
    remoteMethod(query){
      if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            let data={
              name:query
            }
            selectUsers(data).then(async res=>{
              this.options=res.data.data
            })
          }, 200);
        } else {
          this.options = [];
        }
    },
    getToken(){
            this.token = 'bearer '+localStorage.getItem('token')
        },
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
  .talkStart{
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
        }
      }
    }
  }
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
  .registBtn{width: 225px;height: 37px;font-size:18px;color:red;border:1px solid red;border-radius: 19px;line-height: 37px;cursor: pointer; text-align: center;}
  .registBtn:hover{background-color: red;color: #fff;}
  .registCancleBtn{width: 225px;height: 37px;font-size:18px;color:#808080;border:1px solid #808080;border-radius: 19px;line-height: 37px;cursor: pointer; text-align: center;}
  .inputcon{width: 83.3% !important;}
</style>
