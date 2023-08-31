<script setup>
	import { onMounted } from 'vue'
	import SectionLayout from '@/components/SectionLayout.vue'
	import SocialLinks from '@/components/SocialLinks.vue'
	import gsap from 'gsap'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	gsap.registerPlugin(ScrollTrigger)

	onMounted(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.team',
				start: 'center bottom'
			}
		})

		timeline.from('.team__item', {
			opacity: 0,
			x: -50,
			duration: 0.6,
			stagger: 0.2
		})
	})

	const memberLinks = [
		{
			name: 'facebook',
			href: '#'
		},
		{
			name: 'instagram',
			href: '#'
		},
		{
			name: 'twitter',
			href: '#'
		},
		{
			name: 'youtube',
			href: '#'
		}
	]
</script>

<template>
	<SectionLayout>
		<template #title> Our creative team </template>
		<template #description>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante
			velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam
			tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc
			libero urna, feugiat.
		</template>
		<template #content>
			<ul class="team container">
				<li class="team__item">
					<div class="team__image-container">
						<img
							class="team__image"
							src="@/assets/images/team-1.jpg"
							alt="Image by wayhomestudio on Freepik"
						/>
					</div>
					<h3 class="team__title">Carla Press</h3>
					<span class="team__subtitle">App developer</span>
					<p class="team__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
						nunc ante velit vitae. Est tellus vitae.
					</p>
					<SocialLinks
						class="team__links"
						:links="memberLinks"
						:has-lines="true"
						:icon-color="'dark'"
						:icon-size="24"
					/>
				</li>
				<li class="team__item">
					<div class="team__image-container">
						<img
							class="team__image"
							src="@/assets/images/team-2.jpg"
							alt="Image by wayhomestudio on Freepik"
						/>
					</div>
					<h3 class="team__title">Craig Gouse</h3>
					<span class="team__subtitle">UI/UX Designer</span>
					<p class="team__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
						nunc ante velit vitae. Est tellus vitae.
					</p>
					<SocialLinks
						class="team__links"
						:links="memberLinks"
						:has-lines="true"
						:icon-color="'dark'"
						:icon-size="24"
					/>
				</li>
				<li class="team__item">
					<div class="team__image-container">
						<img
							class="team__image"
							src="@/assets/images/team-3.jpg"
							alt="Image by cookie_studio on Freepik"
						/>
					</div>
					<h3 class="team__title">Jocelyn Septimus</h3>
					<span class="team__subtitle">Website developer</span>
					<p class="team__description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
						nunc ante velit vitae. Est tellus vitae.
					</p>
					<SocialLinks
						class="team__links"
						:links="memberLinks"
						:has-lines="true"
						:icon-color="'dark'"
						:icon-size="24"
					/>
				</li>
			</ul>
		</template>
	</SectionLayout>
</template>

<style lang="scss" scoped>
	.team {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 5%;
		padding: 0;
		list-style: none;

		@include mix.breakpoint(mobile) {
			align-content: center;
			flex-direction: column;
		}
	}

	.team__item {
		padding: 30px 15px 50px 15px;
		width: clamp(213px, 30%, 400px);
		display: flex;
		flex-direction: column;
		align-items: center;

		border-radius: 10px;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

		@include mix.breakpoint(mobile) {
			width: clamp(200px, 100%, 343px);
		}
	}
	.team__image-container {
		display: flex;
		align-self: stretch;
		justify-content: center;
		position: relative;
		margin: 0 0 40px 0;
		padding: 13px 5px;

		&::after {
			content: '';
			position: absolute;
			width: 220px;
			height: 220px;
			top: calc(50% - 110px);
			left: calc(50% - 110px);
			background-image: url('@/assets/icons/team-image.svg');
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			animation: rotateAnimation 5s infinite linear;

			@include mix.breakpoint(tablet) {
				width: 178px;
				height: 178px;
				top: calc(50% - 89px);
				left: calc(50% - 89px);
			}
		}
	}

	@keyframes rotateAnimation {
		100% {
			transform-origin: center;
			transform: rotate(1turn);
		}
	}

	.team__image {
		width: 198px;
		height: 198px;

		border-radius: 50%;
		object-fit: cover;

		@include mix.breakpoint(tablet) {
			width: 160px;
			height: 160px;
		}
	}

	.team__title {
		margin: 0;

		@include mix.adaptive-fs($fs-l, $fs-mt, $fs-l);
		text-align: center;
		font-weight: 700;
		line-height: 1.5em;
		text-transform: uppercase;
	}

	.team__subtitle {
		margin: 0 0 auto 0;

		@include mix.adaptive-fs($fs-m, $fs-xs, $fs-m);
		text-align: center;
		font-weight: 700;
		line-height: 1.5em;
		text-transform: uppercase;
		color: $text-muted;
	}
	.team__description {
		margin: 15px 0 30px 0;

		text-align: center;
		color: $text-muted;

		@include mix.breakpoint(mobile) {
			max-width: 300px;
		}
	}
	.team__links {
		align-self: stretch;
	}
</style>
