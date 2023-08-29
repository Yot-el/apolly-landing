<script setup>
	import StoresLinks from '@/components/StoresLinks.vue'
</script>

<template>
	<section class="hero">
		<div class="hero__inner container">
			<div class="hero__left">
				<div class="hero__content">
					<h2 class="hero__title">A great app makes your life better</h2>
					<p class="hero__description">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<StoresLinks class="hero__buttons" />
				</div>
			</div>
			<div class="hero__image-container">
				<img
					class="hero__image"
					src="@/assets/images/hero.png"
					alt="mobile app view"
					width="363"
					height="725"
				/>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.hero {
		display: flex;
		@include mix.retina-image('hero-background', 'jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: $accent;
	}

	.hero__inner {
		display: flex;
		justify-content: center;
		gap: 175px;

		@include mix.breakpoint(tablet) {
			gap: 130px;
		}

		@include mix.breakpoint(mobile) {
			gap: 50px;
			flex-direction: column;
		}
	}
	.hero__left {
		display: flex;
		position: relative;
		align-self: center;

		&::after {
			content: '';
			z-index: 0;
			position: absolute;
			width: 100%;
			top: -30px;
			left: 30px;
			height: calc(100% + 30px * 2);
			transform: translateY(-15px);
			border: 18px solid $accent-muted;

			@include mix.breakpoint(tablet) {
				width: 95%;
				height: calc(100% + 15px * 2);
				transform: translateY(-5px);
			}

			@include mix.breakpoint(mobile) {
				width: 87%;
				height: calc(100% + 6px * 2);
				transform: translateY(15px);
				border: 10px solid $accent-muted;
			}
		}

		@include mix.breakpoint(mobile) {
			padding: 0 20px 0 0;
		}
	}
	.hero__content {
		position: relative;
		z-index: 1;
		padding: 40px 20px 40px 30px;
		width: 570px;

		background-color: $light;

		@include mix.breakpoint(tablet) {
			padding: 15px 7px 15px 20px;
			width: 356px;
		}

		@include mix.breakpoint(mobile) {
			width: 100%;
		}
	}
	.hero__title {
		@include mix.adaptive-fs($fs-l, $fs-l, $fs-xxl);
		margin: 0 0 20px 0;

		font-weight: 700;
		line-height: 1.2em;
		text-transform: uppercase;
		color: $accent;
	}
	.hero__description {
		margin: 0 0 50px 0;
	}

	.hero__image-container {
		display: flex;
		align-items: center;

		@include mix.breakpoint(mobile) {
			justify-content: center;
		}
	}

	.hero__image {
		min-width: 250px;
		width: 270px;

		@include mix.breakpoint(tablet) {
			width: 215px;
			min-width: 215px;
		}
	}
</style>
