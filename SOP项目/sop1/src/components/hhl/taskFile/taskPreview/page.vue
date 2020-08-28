<template>
  <div class="message">
    <div class="con  w-full">
      <div class="con_min ">
        <div class="con_minall py-10">
          <div class="flex justify-between items-start px-10">
            <div class="flex items-center">
              <img class="mr-3" src="@/assets/image/back_icon.png" alt="">
              <span @click="goList" class="text-base cursor-pointer">返回</span>
            </div>
            <div class="text-center">
              <h2 class="text-2xl text-606060 font-bold">20190930 张力虹 张三离婚纠纷起诉状 1.0版</h2>
              <h6 class="py-3 text-sm text-gray-600">张力虹：2019-10-14</h6>
            </div>
            <div class="text-left">
              <div class="flex justify-start items-center mb-5">
                <img class="mr-3" src="@/assets/image/download_icon.png" alt="">
                <span @click="download" class="text-base text-gray-500">下载文件</span>
              </div>
              <div class="flex justify-start items-center">
                <img class="mr-3" src="@/assets/image/fenxiang_icon2.png" alt="">
                <span @click="shareAc" class="text-base text-gray-500">分享给他人</span>
              </div>
            </div>
          </div>
          <div class="neirong">
            <h3 class="text-center font-bold text-lg">民事起诉状</h3>
            <div class="py-10 px-10">
                <!-- <pdf 
                    ref="pdf"
                    :src="pdfUrl">
                </pdf> -->
                <input id="document" type="file">
                <div v-html="vHtml" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 分享弹窗 -->
    <el-dialog title="" :visible.sync="dialogShare" center width="720px">
      <el-form :model="shareForm" id="configrenwu">
        <el-form-item label="分享给" label-width="150px">
          <el-select class="mr-10 w-4/5" v-model="shareForm.selectBox" placeholder="请选择" @change="addshareAc">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="py-3 sharename">
        <ul class="flex">
          <li v-for="(item, index) in sharenameAll" :key="index" class="">{{ item.name }}<img @click="removeShare(index)" src="@/assets/image/close_red_icon.png" alt=""></li>
        </ul>
      </div>
      <div slot="footer" class="dialog-footer pb-4 w-4/5 mx-auto flex justify-around" >
        <div class="registBtn mx-auto" @click="shareOkBtn">确定</div>
        <div class="registCancleBtn"  @click="cancleShareBtn">取消</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import mammoth from 'mammoth'
export default {
  name:'messageCon',
  components: {
      pdf
  },
  data(){
    return{
      searchMsg: '', // 搜索内容
      dialogShare: false,
      // 分享弹窗
      shareForm: {
        selectBox: ''
      },
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
      sharenameAll: [
        {name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},{name:'大海',id:1},
      ],
        pdfUrl: '',
        vHtml: '',
    }
  },
  mounted() {
 document.getElementById('document').addEventListener('change', this.uploading, false)
  },
  methods: {
    download () { // 下载按钮
      this.$message({
        showClose: true,
        message: '文件已成功下载',
        type: 'success'
      });
    },
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
    goList () {
      this.$router.replace('/messageList')
    },
    uploading() {
      const that = this
      var file = "/static/001.docx" // 获取文件
      
    //   var reader = new FileReader()
    //   reader.readAsArrayBuffer(file)
    //   reader.onload = function(e) {
    //     const buffer = e.target.result // 此时是arraybuffer类型
    //     console.log(buffer,12312312312312312)
        mammoth.convertToHtml({ path: file }).then((result) => {
          console.log(result)
          that.vHtml = result.value
        }).done()
    //   }
    },
  },
  created(){
      let path='/static/2020082615045476838460.pdf';
      this.pdfUrl = pdf.createLoadingTask(path)
      this.uploading()
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
  .text-606060 {color: #606060 ;}
  .bg-f4f4f4{background-color: #f4f4f4;}
  .message{
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
          .neirong{
            margin-top: 20px;
            color: #606060;
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
  #tishiBox{
    position: fixed;
    top: 37px;
    right: 20px;
    width: 340px;
    height: 145px;
    border: 1px solid #E8343D;
    border-radius: 10px;
    background-color: #fff;
    .head{
      border-bottom: 1px solid #E8343D;
    }
  }
</style>
