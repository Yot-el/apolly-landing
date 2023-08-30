<script setup>
	import { onMounted } from 'vue'
	import SectionLayout from '@/components/SectionLayout.vue'

	import gsap from 'gsap'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	gsap.registerPlugin(ScrollTrigger)

	onMounted(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.about',
				start: 'top bottom'
			}
		})

		timeline
			.set('.about-card', { overflow: 'hidden' })
			.from('.about__image-container', { opacity: 0, x: -100, duration: 0.5 })
			.fromTo(
				'.about-card',
				{ height: 0, opacity: 0 },
				{ height: 'auto', opacity: 1, duration: 0.6, stagger: 0.5 }
			)
	})
</script>

<template>
	<SectionLayout>
		<template #title> About our app </template>
		<template #description>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante
			velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
			tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc
			libero urna, feugiat.
		</template>
		<template #content>
			<div class="about container">
				<div class="about__image-container">
					<img
						class="about__image"
						src="@/assets/images/about-app-image.png"
						alt="About app image"
						width="386"
						height="526"
					/>
				</div>
				<ul class="about__list">
					<li class="about-card">
						<h3 class="about-card__title">Creative design</h3>
						<p class="about-card__description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
							nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
							Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
						</p>
					</li>
					<li class="about-card">
						<h3 class="about-card__title">Easy to use</h3>
						<p class="about-card__description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
							nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
							Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
						</p>
					</li>
					<li class="about-card">
						<h3 class="about-card__title">Best user experince</h3>
						<p class="about-card__description">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
							nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
							Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
						</p>
					</li>
				</ul>
			</div>
		</template>
	</SectionLayout>
</template>

<style lang="scss" scoped>
	.about {
		display: grid;
		grid-template-columns: 0.75fr 1fr;
		gap: min(15%, 150px);
		min-height: 560px;

		@include mix.breakpoint(tablet) {
			grid-template-columns: 1fr;
			gap: 25px;
		}
	}
	.about__list {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 30px;

		list-style: none;

		@include mix.breakpoint(tablet) {
			align-items: center;
		}
	}
	.about-card {
		display: flex;
		flex-direction: column;
		position: relative;
		width: min(100%, 600px);
		padding: 30px 20px 20px 50px;

		border-radius: 10px;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

		&::after {
			content: '';
			position: absolute;
			width: 24px;
			height: 24px;
			top: 31px;
			left: 16px;
			background-image: url('@/assets/icons/card-about-icon.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100%;
		}
	}
	.about-card__title {
		margin: 0 0 12px 0;
		font-size: $fs-mt;
		text-transform: uppercase;
		font-weight: 600;
		line-height: 1.5em;
	}
	.about-card__description {
		margin: 0;
		color: $text-muted;
	}
	.about__image-container {
		min-width: 386px;
		position: relative;
		align-self: center;
		justify-self: end;
		display: flex;
		justify-content: end;

		&::after {
			bottom: -10px;
			left: 45%;
			z-index: 0;
			transform: translateX(-50%);
			position: absolute;
			content: '';
			background-color: $light;
			border-radius: 50%;
			width: 212px;
			height: 71px;
			filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.1));

			@include mix.breakpoint(tablet) {
				left: 48%;
			}
		}

		@include mix.breakpoint(tablet) {
			min-width: 238px;
			justify-self: stretch;
			align-self: stretch;
			justify-content: center;
		}
	}

	.about__image {
		position: relative;
		z-index: 1;
		width: 386px;
		height: 526px;

		@include mix.breakpoint(tablet) {
			width: 238px;
			height: 324px;
		}
	}
</style>
