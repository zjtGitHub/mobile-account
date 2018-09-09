<template>
  <div id="app-container">
		<transition>
				<router-view></router-view>
		</transition>
		
    <!-- 底部菜单 -->  
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/account">
				<span class="mui-icon mui-icon-extra mui-icon-extra-gold"></span>
				<span class="mui-tab-label">记一笔</span> 
			</router-link>
			<router-link class="mui-tab-item" to="/bill">
				<span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
				<span class="mui-tab-label">账单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/chart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
				<span class="mui-tab-label">分析</span>
			</router-link>
		</nav>

		
  </div>
</template>


<script>



</script>

<style lang='scss' scoped>
#app-container {
  overflow-x: hidden;
	
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to { 
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
  text-align: center;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}


</style>
