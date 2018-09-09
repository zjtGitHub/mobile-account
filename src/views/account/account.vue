<template>
 <div class="account-wrap">
    <head-title :title="'记账：'"></head-title>
    <div class="go-btn-box">
       <router-link to="/account/expend"> 
       <div class="go-account go-consumption">支出</div>
       </router-link>
       <router-link to="/account/earn"> 
       <div class="go-account go-earn">收入</div>
       </router-link>
    </div> 
  </div> 
</template>

<style lang="scss" scoped>

@import "../../assets/scss/define";
    .go-btn-box{
        @extend %pa;
        @extend %tac;
        @extend %f14;
        @extend %cfff;
        @extend %l0;
        @extend %r0;
        @extend %t50;
        transform: translate3d(0,-50%,0);
    }
    .go-account{
        @extend %db;
        @extend %cp;
        @extend %cfff;
        margin: 0 auto 20px;
        width: 150px;
        height: 35px;
        line-height: 35px;
        border-radius: 5px;
        &.go-consumption{
            background-color: #FF4949;
            box-shadow: 0 3px 0 0 red;
        }
        &.go-earn{
            background-color: #69ce72;
            box-shadow: 0 3px 0 0 #13CE66;
        }
    }
</style>


<script>
import types from "../../store/mutation-types";
import headTitle from "../../components/head-title.vue";
export default {
  name: "account_index",
  created() {
    this.setNavIndex();
  },
  components: {
    headTitle
  },
  methods: {
    setNavIndex() {
      this.$store.commit(types.SET_NAV_INDEX, "2");
    }
  }
};
</script>
 