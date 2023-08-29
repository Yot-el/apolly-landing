<script setup>
	import { onMounted, ref } from 'vue'
	import SectionLayout from '@/components/SectionLayout.vue'

	import { register } from 'swiper/element/bundle'
	register()

	const swiper = ref(null)
	const pagination = {
		clickable: true,
		bulletClass: 'swiper__pagination-bullet',
		bulletActiveClass: 'swiper__pagination-bullet--active'
	}

	onMounted(() => {
		swiper.value.initialize()
	})

	const onNextButtonClick = () => {
		swiper.value.swiper.slideNext()
	}
	const onPrevButtonClick = () => {
		swiper.value.swiper.slidePrev()
	}
</script>

<template>
	<SectionLayout>
		<template #title> Checkout our app interface look </template>
		<template #description>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante
			velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
			tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc
			libero urna, feugiat.
		</template>
		<template #content>
			<div class="swiper container">
				<button
					class="swiper__button swiper__button--prev"
					@click="onPrevButtonClick"
				>
					<span class="visually-hidden">Previous slide</span>
				</button>
				<swiper-container
					class="swiper__inner"
					:initialSlide="2"
					:slides-per-view="'auto'"
					:centeredSlides="true"
					ref="swiper"
					init="false"
					:pagination="pagination"
					:effect="'coverflow'"
					:coverflowEffect="{
						rotate: 0,
						stretch: 60,
						scale: 0.9,
						depth: 100,
						modifier: 1,
						slideShadows: false
					}"
				>
					<swiper-slide class="swiper-slide">
						<img
							src="@/assets/images/carousel/carousel-1.png"
							alt="Image by xvector on Freepik"
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<img
							src="@/assets/images/carousel/carousel-2.png"
							alt=""
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<img
							src="@/assets/images/carousel/carousel-3.png"
							alt=""
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<img
							src="@/assets/images/carousel/carousel-4.png"
							alt=""
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<img
							src="@/assets/images/carousel/carousel-6.png"
							alt="Image by Freepik"
						/>
					</swiper-slide>
				</swiper-container>
				<button
					class="swiper__button swiper__button--next"
					@click="onNextButtonClick"
				>
					<span class="visually-hidden">Next slide</span>
				</button>
			</div>
		</template>
	</SectionLayout>
</template>

<style lang="scss" scoped>
	.swiper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.swiper__button {
		display: block;
		min-width: 50px;
		height: 50px;
		padding: 0;

		background-image: url('@/assets/icons/swiper-button.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-color: transparent;

		cursor: pointer;
		border-radius: 50%;
		border: 1px solid $accent;

		&--next {
			transform: rotate(180deg);
		}

		@include mix.breakpoint(tablet) {
			display: none;
		}
	}
	.swiper__inner {
		display: block;
		min-width: 500px;
		max-width: 1000px;
		margin: 0;
	}
	.swiper-slide {
		position: relative;
		width: 245px;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: transparentize($light, 0.7);
			transition: all 0.2s ease;
		}

		&-next::after,
		&-prev::after {
			background-color: transparentize($light, 0.9);
		}

		&-active::after {
			background-color: transparentize($light, 1);
		}

		& img {
			position: relative;
			width: 245px;
			height: 532px;
		}
	}
</style>
