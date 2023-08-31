<script setup>
	import StoresLinks from '@/components/StoresLinks.vue'
</script>

<template>
	<section class="hero">
		<Transition
			name="fade"
			appear
		>
			<div class="hero__inner container">
				<div class="hero__left">
					<div class="hero__content">
						<h2 class="hero__title">A great app makes your life better</h2>
						<p class="hero__description">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
						<StoresLinks class="hero__buttons">
							<template #title>Download app now</template>
						</StoresLinks>
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
		</Transition>
	</section>
</template>

<style lang="scss" scoped>
	.hero {
		display: flex;
		color: $text-primary;
	}

	.hero__inner {
		display: flex;
		justify-content: space-between;
		gap: 80px;

		@include mix.breakpoint(mobile) {
			gap: 50px;
			flex-direction: column;
		}
	}
	.hero__left {
		display: flex;
		position: relative;
		align-self: center;

		max-width: 570px;
		min-width: 470px;

		@include mix.breakpoint(tablet) {
			min-width: 356px;
			max-width: 470px;
		}

		@include mix.breakpoint(mobile) {
			margin: 0 20px;
			max-width: 450px;
			min-width: 270px;
		}

		&::after {
			content: '';
			z-index: 0;
			position: absolute;
			width: 97%;
			top: 0;
			left: 0;
			height: calc(100% + 20px * 2);
			transform: translateY(-35px) translateX(25px);
			border: 18px solid $accent-muted;

			@include mix.breakpoint(tablet) {
				width: 95%;
				height: calc(100% + 15px * 2);
			}

			@include mix.breakpoint(mobile) {
				width: 90%;
				height: calc(100% + 10px * 2);
				transform: translateY(-17px) translateX(40px);
				border: 10px solid $accent-muted;
			}
		}
	}
	.hero__content {
		position: relative;
		z-index: 1;
		padding: 40px 20px 40px 30px;
		background-color: $light;

		@include mix.breakpoint(tablet) {
			padding: 15px 7px 15px 20px;
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

	.fade-enter-from {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity 1s ease-in-out;
	}
</style>
