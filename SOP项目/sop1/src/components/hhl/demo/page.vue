<template>
    <div>
    <h1>demo</h1>
    
        <swooleNews></swooleNews>
    </div>

</template>

<script>
import { demo } from '@/api/hhl/demo'

export default {
// 如果需要缓存页面
  // name 字段需要设置为和本页路由 name 字段一致
    name: "demo",
    mounted(){
        this.demoPath()
    },
    methods:{
        demoPath(){
            demo({name:123}).then(async res=>{
                console.log(res)
            })
        }
    }
}
</script>