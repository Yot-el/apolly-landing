<script setup>
	import HeroSection from '@/components/HeroSection.vue'
</script>

<template>
	<main class="home">
		<h1 class="visually-hidden">Home page</h1>
		<HeroSection class="home__hero" />
	</main>
</template>

<style lang="scss" scoped>
	.home {
		flex-grow: 1;
	}

	.home__hero {
		height: 100dvh;
		padding: 170px 0 50px 0;
	}
</style>
