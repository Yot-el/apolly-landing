<script setup>
	import { RouterView } from 'vue-router'
	import MainHeader from '@/components/MainHeader.vue'
	import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
	<MainHeader class="app__header" />
	<RouterView class="app__main" />
	<MainFooter />
</template>

<style lang="scss" scoped>
	.app__header {
		position: absolute;
		top: 30px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}
</style>
