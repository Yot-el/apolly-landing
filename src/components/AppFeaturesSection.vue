<script setup>
	import { onMounted } from 'vue'
	import SectionLayout from '@/components/SectionLayout.vue'
	import gsap from 'gsap'

	onMounted(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.features',
				start: 'top bottom'
			}
		})

		timeline
			.from('.features__image', { opacity: 0, duration: 0.5 })
			.from('.features__item--chat', { opacity: 0, y: -10, duration: 0.4 })
			.from(['.features__item--features', '.features__item--version'], {
				opacity: 0,
				y: -10,
				duration: 0.4
			})
			.from(['.features__item--design', '.features__item--retina'], {
				opacity: 0,
				y: -10,
				duration: 0.4
			})
			.from('.features__item--support', { opacity: 0, y: -10, duration: 0.4 })
	})
</script>

<template>
	<SectionLayout class="section--has-background">
		<template #title> App features </template>
		<template #description>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante
			velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
			tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc
			libero urna, feugiat.
		</template>
		<template #content>
			<div class="features container">
				<div class="features__item features__item--chat">
					<h3 class="features__title">Full free chat</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div class="features__item features__item--features">
					<h3 class="features__title">Unlimited features</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div class="features__item features__item--design">
					<h3 class="features__title">Awesome ui design</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>

				<img
					class="features__image"
					src="@/assets/images/features.png"
					alt="mobile interface image"
				/>

				<div class="features__item features__item--version">
					<h3 class="features__title">Iso & android version</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div class="features__item features__item--retina">
					<h3 class="features__title">Retina ready graphics</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div class="features__item features__item--support">
					<h3 class="features__title">24/7 support by real people</h3>
					<p class="features__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</template>
	</SectionLayout>
</template>

<style lang="scss" scoped>
	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		grid-template-areas:
			'. chat .'
			'features img version'
			'design img retina'
			'. support .';

		@include mix.breakpoint(mobile) {
			display: flex;
			flex-direction: column;
			gap: 30px;
		}
	}
	.features__image {
		align-self: center;
		justify-self: center;
		grid-area: img;
		width: 250px;

		border-radius: 30px;
		box-shadow: 40px 40px 100px 0px rgba(24, 48, 63, 0.5);
	}
	.features__item {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 50px 0 0 0;
		gap: 15px;

		&::after {
			position: absolute;
			content: '';
			top: 0;
			width: 40px;
			height: 40px;
			background-size: 100%;
			background-position: center;
			background-repeat: no-repeat;
		}

		&--chat {
			grid-area: chat;
			align-items: center;
			text-align: center;

			&::after {
				background-image: url('@/assets/icons/chat.svg');
			}
		}
		&--version {
			grid-area: version;
			align-items: start;
			text-align: start;

			&::after {
				margin: 0 0 0 -8px;
				background-image: url('@/assets/icons/version.svg');
			}
		}
		&--retina {
			grid-area: retina;
			align-items: start;
			text-align: start;

			&::after {
				background-image: url('@/assets/icons/retina.svg');
			}
		}
		&--support {
			grid-area: support;
			align-items: center;
			text-align: center;

			&::after {
				background-image: url('@/assets/icons/support.svg');
			}
		}
		&--design {
			grid-area: design;
			align-items: end;
			text-align: end;

			&::after {
				background-image: url('@/assets/icons/design.svg');
			}
		}
		&--features {
			grid-area: features;
			align-items: end;
			text-align: end;

			&::after {
				background-image: url('@/assets/icons/features.svg');
			}
		}

		@include mix.breakpoint(mobile) {
			padding: 70px 0 0 0;
			align-items: center;
			text-align: center;
		}
	}

	.features__title {
		margin: 0;

		@include mix.adaptive-fs($fs-mt, $fs-mt, $fs-l);
		line-height: 1.5em;
		font-weight: 600;
		text-transform: uppercase;

		@include mix.breakpoint(mobile) {
			width: min(70%, 250px);
		}
	}

	.features__description {
		margin: 0;
		width: 70%;

		@include mix.breakpoint(mobile) {
			width: min(70%, 400px);
		}
	}
</style>
