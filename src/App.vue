<script setup>
	import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView class="app__main" />
</template>

<style lang="scss" scoped>
	.app__header {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
