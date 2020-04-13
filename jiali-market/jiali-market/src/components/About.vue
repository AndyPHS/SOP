<template>
  <div class="home">
    <head-nav></head-nav>
    <div>这是关于家理</div>
  </div>
</template>

<script>
  import HeadNav from '@/components/common/HeadNav.vue'
  export default {
    name: 'About',
    components:{
      HeadNav
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
