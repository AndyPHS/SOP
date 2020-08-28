<template>

    <div>
        <tishi_box
        v-for="(item,key) in messageList"
        :key="key"
         :type="1" :content="content"></tishi_box>
    </div>
    
</template>

<script>

let wsSend=null //心跳

import tishi_box from "@/components/partials/tishi_box.vue"
export default {
// 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
    name: "swooleNews",
    data() {
        return {
        // messageFlag: true,
            // type:0,
            // content:"",
            // messageFlag:false,
            messageList:[],
            content:"",
        }
    },
    mounted(){
        // this.websocket() 
    },
    components:{
        tishi_box
    },
    methods:{
        websocket(){
            var wsl= 'ws://192.168.1.114:9502'
            var ws = new WebSocket(wsl);//新建立一个连接

            // ws.onopen = function(){
            //     ws.send('{"token":"71aed61034b2d8b98596919164daf9d437b756cf"}')
            // };  //开始连接时携带token 无token时后段自动断开连接
            ws.onopen = (event) => {
                console.log('open',event)
                ws.send('{"token":"'+localStorage.getItem('token')+'","type":"1"}')
            };

            ws.onmessage = (event) => {
                console.log(event.data);/*ws.close();*/ //接受返回的消息数据
                let res = JSON.parse(event.data);;
                this.startSwooleHeartbeat(ws)
                this.swooleTips();
                // console.log(res,12312312312)
                switch(res.type){
                    case "1":
                        // this.swooleTips();

                    break;
                    case "55":
                        this.messageList.push(1);
                        this.content=res.content;
                    break;
                }
            };

        },
        swooleTips(content="消息通知"){
            const h = this.$createElement;
            // this.$notify({
            // title: '消息通知',
            // message: h('i', { style: 'color: teal'}, $content)
            // });
            // this.$notify({
            //     title: '消息通知',
            //     dangerouslyUseHTMLString: true,
            //     message: content,
            //     clsss:"de"
            // });
        },
        startSwooleHeartbeat(ws){ //断线重连
            var timeoutnum = setTimeout(function () {
                ws.send('{"token":"'+localStorage.getItem('token')+'","type":"56","content":"heartbeat"}')
            },4000)
        }
    },
    created() {
        this.websocket()
    }
}
</script>

<style scoped>
</style>