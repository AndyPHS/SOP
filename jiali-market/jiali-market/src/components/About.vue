<template>
  <div class="home">
    <head-nav></head-nav>
    <div>这是关于家理</div>
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
    name: 'About',
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
.router-link-exact-active{
  color: #f65622;
  text-decoration: underline;
  text-underline: #f65622;
}

</style>
