<script setup>
	import { onMounted } from 'vue'
	import SocialLinks from '@/components/SocialLinks.vue'
	import { RouterLink } from 'vue-router'

	import gsap from 'gsap'
	import ScrollTrigger from 'gsap/ScrollTrigger'

	gsap.registerPlugin(ScrollTrigger)

	onMounted(() => {
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '.footer',
				start: 'top bottom'
			}
		})

		timeline
			.set('.footer__email', { width: 0, padding: 0 })
			.set('.footer__form', { width: 52 })
			.from('.footer__inner', { opacity: 0, duration: 0.8 })
			.add('.footer__email', 'startExpand')
			.add('.footer__form', 'startExpand')
			.to(
				'.footer__email',
				{ padding: '11 5 11 15', duration: 0.3 },
				'startExpand'
			)
			.to('.footer__form', { width: 'auto' }, 'startExpand')
	})

	const companyLinks = [
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
	<footer class="footer">
		<div class="footer__inner container">
			<div class="footer__contacts">
				<h3 class="footer__title">Apolly</h3>
				<p class="footer__text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
					ante velit vitae. Est tellus vitae, nullam lobortis enim.
				</p>
				<SocialLinks
					class="footer__social-links"
					:links="companyLinks"
					:has-lines="true"
					:icon-color="'light'"
					:icon-size="24"
				/>
			</div>
			<nav class="footer__item">
				<h3 class="footer__title">Quick link</h3>
				<ul class="footer__list">
					<li>
						<RouterLink
							class="footer__link"
							to="/about"
							>About</RouterLink
						>
					</li>
					<li>
						<RouterLink
							class="footer__link"
							to="/features"
							>Features</RouterLink
						>
					</li>
					<li>
						<RouterLink
							class="footer__link"
							to="/screenshot"
							>Screenshot</RouterLink
						>
					</li>
					<li>
						<RouterLink
							class="footer__link"
							to="/blog"
							>Blog</RouterLink
						>
					</li>
				</ul>
			</nav>
			<div class="footer__item">
				<h3 class="footer__title">News letter</h3>
				<p class="footer__text">
					Subscribe our newsletter to get our latest update & news.
				</p>
				<form
					class="footer__form"
					action="/"
					method="post"
				>
					<input
						class="footer__email"
						type="email"
						name="email"
						placeholder="Your email address"
						required
					/>
					<button
						class="footer__submit-button"
						type="submit"
					>
						<span class="visually-hidden">Subscribe</span>
					</button>
				</form>
			</div>
			<span class="footer__copyright">
				&copy; Copyright 2021. All Right Reserved.
			</span>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
	.footer {
		padding: 230px 0 0 0;
		background-color: $dark;
		color: $light;
	}

	.footer__inner {
		display: grid;
		grid-template-columns: repeat(3, minmax(100px, 1fr));
		gap: 50px;
	}

	.footer__social-links {
		margin: 0 0 0 -20px;
		max-width: 230px;
	}
	.footer__text {
		margin: 0 0 30px 0;
	}
	.footer__title {
		margin: 0 0 11px 0;

		@include mix.adaptive-fs($fs-l, $fs-mt, $fs-l);
		font-weight: 600;
		font-weight: 600;
		line-height: 1.5em;
		text-transform: uppercase;
	}
	.footer__list {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 11px;

		list-style: none;
	}
	.footer__link {
		color: $light;
		text-decoration: none;
		transition: all 0.2s ease;

		@include mix.hover {
			opacity: 0.6;
		}
	}
	.footer__copyright {
		grid-column: 1 / -1;
		padding: 18px 0;

		text-align: center;
		border-top: 1px solid $light;
	}
	.footer__form {
		display: flex;
		padding: 2px;

		background-color: $light;
		border-radius: 4px;
	}
	.footer__email {
		padding: 11px 5px 11px 15px;
		flex-grow: 1;
		width: auto;

		font-size: $fs-m;
		font-family: $font-family;
		color: $text-primary;
		border: none;

		@include mix.hover {
			&::placeholder {
				color: $accent;
			}
		}

		&::placeholder {
			color: $text-muted;
		}

		&:focus {
			outline: none;
		}
		&:focus-visible {
			&::placeholder {
				color: $accent;
				text-decoration: underline $accent;
			}
		}
	}
	.footer__submit-button {
		width: 52px;
		height: 46px;
		will-change: transform;

		border: none;
		border-radius: 4px;
		cursor: pointer;
		background-color: $accent;
		background-image: url('@/assets/icons/email-submit.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: 24px;

		transition: all 0.3s ease;

		@include mix.hover {
			background-color: $accent-muted;
		}
	}
</style>
