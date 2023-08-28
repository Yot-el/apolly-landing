<script setup>
	import Logo from '@/components/Logo.vue'
	import { RouterLink } from 'vue-router'
</script>

<template>
	<nav class="site-menu">
		<ul class="site-menu__list">
			<li class="site-menu__item">
				<RouterLink
					class="site-menu__link"
					to="/"
					>Home</RouterLink
				>
			</li>
			<li class="site-menu__item">
				<RouterLink
					class="site-menu__link"
					to="/about"
					>About</RouterLink
				>
			</li>
			<li class="site-menu__item">
				<RouterLink
					class="site-menu__link"
					to="/features"
					>Features</RouterLink
				>
			</li>
			<li class="site-menu__item site-menu__logo-container">
				<Logo class="site-menu__logo" />
			</li>
			<li class="site-menu__item">
				<RouterLink
					class="site-menu__link"
					to="/screenshots"
					>Screenshots</RouterLink
				>
			</li>
			<li class="site-menu__item">
				<RouterLink
					class="site-menu__link"
					to="/blog"
					>Blog</RouterLink
				>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
	.site-menu {
		display: flex;
	}
	.site-menu__list {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0 50px;
		list-style: none;
	}
	.site-menu__item {
		display: flex;
		align-items: center;
	}
	.site-menu__logo-container {
		margin: 0 20px;
		width: 200px;
		position: relative;

		@include mix.breakpoint(tablet) {
			display: none;
		}
	}
	.site-menu__logo {
		position: absolute;
		top: -13px;
	}
	.site-menu__link {
		font-size: $fs-mt;
		line-height: 1.5em;
		text-transform: uppercase;
		color: $text-primary;
		font-weight: 600;

		text-decoration-color: transparent;
		text-underline-offset: 3px;

		transition: all 0.2s ease;

		@include mix.hover {
			color: $accent;
			text-decoration-color: $accent;
		}
	}
</style>
