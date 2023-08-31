<script setup>
import { onMounted } from 'vue'
import SectionLayout from '@/components/SectionLayout.vue'
import StoresLinks from '@/components/StoresLinks.vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.download',
				start: 'center bottom'
			}
		})

		timeline
    .from('.download__image-container', {opacity: 0, x: 20, duration: 0.5})
    .from('.download__stats-item', {opacity: 0, y: -10, duration: 0.5, stagger: 0.2}, '>-=0.2')
	})
</script>

<template>
  <SectionLayout class="section--left download container">
    <template #title>
      Download app now
    </template>
    <template #description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
    </template>
    <template #content>
      <div class="download__image-container">
        <img class="download__image" src="@/assets/images/download-app.png" alt="download app image">
      </div>
      <StoresLinks class="download__links"/>
      <dl class="download__stats">
        <div class="download__stats-item download__stats-item--downloads">
          <dt class="download__stats-name">Downloads</dt>
          <dd class="download__stats-value">59865</dd>
        </div>
        <div class="download__stats-item download__stats-item--likes">
          <dt class="download__stats-name">Likes</dt>
          <dd class="download__stats-value">29852</dd>
        </div>
        <div class="download__stats-item download__stats-item--rating">
          <dt class="download__stats-name">Star rating</dt>
          <dd class="download__stats-value">1500</dd>
        </div>
      </dl>
    </template>
  </SectionLayout>
</template>

<style lang="scss" scoped>
.download {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 3%;

  @include mix.breakpoint(mobile) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.download__image-container {
  min-width: 300px;
  max-width: 450px;
  display: flex;
  position: relative;
  align-self: center;
  grid-column: 2;
  grid-row: span 3;

  @include mix.breakpoint(mobile) {
    margin: 0 0 30px 0;
  }

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
}
.download__image {
  position: relative;
  z-index: 1;

  @include mix.breakpoint(tablet) {
    width: 350px;
  }
  @include mix.breakpoint(mobile) {
    width: 100%;
    max-width: 350px;
  }
}
.download__links {
  margin: 0 0 50px 0;
}
.download__stats {
  margin: 0;
  display: flex;
  gap: 10px;
  justify-content: start;
  flex-wrap: wrap;

  @include mix.breakpoint(mobile) {
    width: 100%;
    justify-content: center;
  }
}
.download__stats-item {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 80px 10px 20px 10px;
  width: clamp(140px, 30%, 170px);

  background-color: $accent;
  border-radius: 10px;

  color: $light;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);

    background-position: center;
    background-size: 35px;
    background-repeat: no-repeat;

    @include mix.breakpoint(mobile) {
      top: 15px;
      width: 20px;
      height: 20px;
      background-size: 20px;
    }
  }

  &--downloads::after {
    background-image: url("@/assets/icons/download.svg");
  }
  &--likes::after {
    background-image: url("@/assets/icons/thumb-up.svg");
  }
  &--rating::after {
    background-image: url("@/assets/icons/star.svg");
  }

  @include mix.breakpoint(mobile) {
    width: clamp(100px, 30%, 150px);
    padding: 40px 5px 15px 5px;
  }
}
.download__stats-name {
  @include mix.adaptive-fs($fs-m, $fs-m, $fs-mt);

  @include mix.breakpoint(mobile) {
    font-weight: 400;
    text-transform: capitalize;
  }
}
.download__stats-value {
  margin: 0 0 15px 0;
  @include mix.adaptive-fs($fs-mt, $fs-mt, $fs-l);

  @include mix.breakpoint(mobile) {
    margin: 0 0 8px 0;
  }
}
</style>