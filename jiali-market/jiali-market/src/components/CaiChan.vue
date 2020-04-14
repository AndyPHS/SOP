<template>
  <div class="home">
    <head-nav></head-nav>
    <div>这是财产页面</div>
    <you-shi></you-shi>
    <rong-yu></rong-yu>
    <bottom-part></bottom-part>
  </div>
</template>

<script>
import HeadNav from '@/components/common/HeadNav.vue'
import BottomPart from '@/components/common/BottomPart.vue'
import RongYu from '@/components/common/RongYu.vue'
  import YouShi from '@/components/common/YouShi.vue'
  export default {
    name: 'CaiChan',
    components:{
      HeadNav,
      BottomPart,
      RongYu,
      YouShi
    },
    data () {
      return {

      }
    },
    methods:{
    }
  }
</script>

<style  scoped lang="scss" type="text/css">


</style>
