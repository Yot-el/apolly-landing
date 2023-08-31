<script setup>
	import HeroSection from '@/components/HeroSection.vue'
	import AboutAppSection from '@/components/AboutAppSection.vue'
	import AppInterfaceSection from '@/components/AppInterfaceSection.vue'
	import TeamSection from '@/components/TeamSection.vue'
	import AppFeaturesSection from '@/components/AppFeaturesSection.vue'
</script>

<template>
	<main class="home">
		<h1 class="visually-hidden">Home page</h1>
		<HeroSection class="home__hero" />
		<AboutAppSection />
		<AppFeaturesSection />
		<AppInterfaceSection />
		<TeamSection />
	</main>
</template>

<style lang="scss" scoped>
	.home {
		flex-grow: 1;
	}

	.home__hero {
		height: 100dvh;
		padding: 170px 0 50px 0;

		@include mix.breakpoint(tablet) {
			padding: 130px 0 50px 0;
		}

		@include mix.breakpoint(mobile) {
			height: auto;
		}
	}
</style>
