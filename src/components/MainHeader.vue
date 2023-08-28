<script setup>
	import SocialLinks from '@/components/SocialLinks.vue'
	import Logo from '@/components/Logo.vue'
	import NavMenu from '@/components/NavMenu.vue'
	import HeaderContacts from '@/components/HeaderContacts.vue'

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
	<header class="header container">
		<div class="header__top">
			<HeaderContacts />
			<SocialLinks
				class="header__links"
				:links="companyLinks"
				:has-lines="false"
				:icon-color="'light'"
				:icon-size="20"
			/>
		</div>
		<div class="header__bottom">
			<Logo class="header__logo" />
			<NavMenu />
			<a
				class="header__button"
				href="#"
				>Download</a
			>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.header__top {
		display: flex;
		justify-content: space-between;
		color: $light;
	}
	.header__links {
		width: 135px;
	}
	.header__bottom {
		display: grid;
		grid-template-columns: 1fr auto;
		position: relative;
		padding: 5px;

		background-color: $light;
		border-radius: 5px;
	}
	.header__logo {
		display: none;
		position: absolute;
		top: 0;
		left: 50%;
		transition: transformX(-50%) transformY(50%);

		@include mix.breakpoint(tablet) {
			display: block;
		}
	}
	.header__button {
		@include mix.adaptive-fs($fs-xs, $fs-mt, $fs-mt);
		padding: 10px 12px;

		color: $text-secondary;
		font-weight: 600;
		text-transform: uppercase;
		text-decoration: none;
		text-align: center;

		border-radius: 5px;
		background-color: $accent;

		transition: background-color 0.2s ease;
		@include mix.hover {
			background-color: $accent-muted;
		}
	}
</style>
