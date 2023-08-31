<script setup>
	import { useRouter } from 'vue-router'
	import ViewLayout from '@/views/ViewLayout.vue'

	const router = useRouter()

	const onNotFoundButtonClick = () => {
		router.back()
	}
</script>

<template>
	<ViewLayout class="main--full-page-header">
		<template #header>
			<h1 class="main__title container">404 Error</h1>
			<div class="not-found container">
				<p class="not-found__description">Page not found</p>
				<button
					class="not-found__button"
					@click.prevent="onNotFoundButtonClick"
				>
					Go back
				</button>
			</div>
		</template>
	</ViewLayout>
</template>

<style lang="scss" scoped>
	.not-found {
		padding: 50px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10vh;
	}
	.not-found__description {
		margin: 0;

		font-size: $fs-l;
	}

	.not-found__button {
		padding: 10px 40px;

		font-family: $font-family;
		font-size: $fs-mt;
		color: $accent;
		line-height: 1.5em;

		border: none;
		background-color: $light;
		border-radius: 10px;
		cursor: pointer;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

		transition: all 0.3s ease;

		@include mix.hover {
			color: $accent-muted;
		}
	}
</style>
