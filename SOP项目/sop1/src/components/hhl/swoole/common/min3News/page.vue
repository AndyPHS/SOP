<template>

<div v-if="display" class="content">
    <div class="news_top">
        <p>消息通知</p>
        <p @click="quxiao">X</p>
    </div>
    <div class="news_bottom">
        <p>
            {{content}}
        </p>
    </div>
</div>


</template>




<script>
export default {
// 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
    name: "min3News",
    data () {
            return {
                content:123,
                time:3000,
                display:true
            }
    },
    mounted(){
        // this.websocket()
        this.start()
    },
    methods:{
        quxiao(){
            this.display=false
        },
        start(){
            let res = setTimeout(function () {
                this.display=false;
                alert(123)
            },this.time)
        }
    },
    created() {
    }
}
</script>

<style scoped>
.content{
    width:400px;
    height:150px;
    border: 1px solid #000;
    z-index: 999;
    float: right;
}
.news_top{
    height: 50px;
}
.news_bottom{
    height: 100px;
}
</style>