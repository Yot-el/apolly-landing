<script setup>
	import ViewLayout from '@/views/ViewLayout.vue'
	import HeroSection from '@/components/HeroSection.vue'
	import AboutAppSection from '@/components/AboutAppSection.vue'
	import AppInterfaceSection from '@/components/AppInterfaceSection.vue'
	import TeamSection from '@/components/TeamSection.vue'
	import AppFeaturesSection from '@/components/AppFeaturesSection.vue'
	import HowToUseSection from '@/components/HowToUseSection.vue'
	import DownloadAppSection from '@/components/DownloadAppSection.vue'
</script>

<template>
	<ViewLayout class="home main--full-page-header">
		<template #header>
			<h1 class="visually-hidden">Home page</h1>
			<HeroSection class="home__hero" />
		</template>
		<template #content>
			<AboutAppSection />
			<AppFeaturesSection />
			<AppInterfaceSection />
			<HowToUseSection class="home__how-to-use" />
			<TeamSection />
			<DownloadAppSection />
		</template>
	</ViewLayout>
</template>

<style lang="scss" scoped>
	.home__hero {
		width: 100%;
	}
	.home__how-to-use {
		margin: 0 0 200px 0;
		padding-bottom: 170px;
	}
</style>
