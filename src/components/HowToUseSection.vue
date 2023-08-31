<script setup>
import {ref, onMounted} from 'vue'
import SectionLayout from '@/components/SectionLayout.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const video = ref(null)

// Appear animation
onMounted(() => {
  const videoTimeline = gsap.timeline({
    scrollTrigger: {
				trigger: '.video',
				start: 'center bottom'
			}
})

  videoTimeline.from('.video', {
			opacity: 0,
      duration: 0.5
		})
})

// Control animation
const controlTimeline = gsap.timeline({ paused: true })
onMounted(() => {
		controlTimeline
    .to('.video__control-container', {'--first-circle-size': '90px', '--second-circle-size': '90px', duration: 0.5})
    .to('.video__control-container', {'--second-circle-size': '110px', '--circles-opacity': '0'}, '>-=0.4')
    .to('.video__control', {width: 70, height: 70, opacity: 0, duration: 0.4}, '>-=0.4')
    .reverse()
	})

const onVideoClick = () => {
  video.value.paused ? video.value.play() : video.value.pause()
}

const onVideoPlay = () => {
  controlTimeline.reversed(false)
}
const onVideoPause = () => {
  controlTimeline.reversed(true)
}
</script>

<template>
  <SectionLayout class="section--has-background">
    <template #title>
      How to use the app perfectly
    </template>
    <template #description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
    </template>
    <template #content>
      <div class="video" @click.prevent="onVideoClick">
        <div class="video__control-container">
          <button class="video__control">
            <span class="visually-hidden">Play or pause</span>
          </button>
        </div>
        <video class="video__content" ref="video" @play="onVideoPlay" @pause="onVideoPause">
          <source src="@/assets/videos/how-to-use.mp4" type="video/mp4"/>
        </video>
      </div>
    </template>
  </SectionLayout>
</template>

<style lang="scss" scoped>
.video {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: clamp(400px, 70%, 600px);

  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 10px 100px 0px rgba(0, 0, 0, 0.24);

  @include mix.breakpoint(mobile) {
    width: clamp(300px, 90%, 500px)
  }
}
.video__control-container {
  --first-circle-size: 60px;
  --second-circle-size: 60px;
  --circles-opacity: 0.6;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  &::after {
    content: "";
    position: absolute;
    opacity: var(--circles-opacity);
    width: var(--first-circle-size);
    height: var(--first-circle-size);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: $light;
  }

  &::before {
    content: "";
    position: absolute;
    opacity: var(--circles-opacity);
    width: var(--second-circle-size);
    height: var(--second-circle-size);
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: $light;
  }
}
.video__control {
  z-index: 1;
  position: relative;
  width: 60px;
  height: 60px;
  padding: 0;

  cursor: pointer;
  border-radius: 50%;
  background-color: $light;
  border: none;

  background-image: url("@/assets/icons/video-control.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
}
.video__content {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>