<script setup>
import { onMounted, ref } from 'vue';
	import Logo from '@/components/Logo.vue'
	import { RouterLink } from 'vue-router'

  const isOpen = ref(false)
  const desktopView = ref(true)
  const menuMaxView = 1260

  const handleView = () => {
    desktopView.value = window.innerWidth > menuMaxView  ? true : false
  }

  onMounted(() => {
    handleView()
    window.addEventListener('resize', handleView)
  })
</script>

<template>
	<nav class="site-menu">
    <button :class="['site-menu__button', isOpen ? 'site-menu__button--opened' :  'site-menu__button--closed']" @click="isOpen = !isOpen">
      <span class="visually-hidden">Menu button</span>
    </button>
		<ul v-show="isOpen || desktopView" class="site-menu__list">
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
    position: relative;
		display: flex;
    align-items: center;
	}
  .site-menu__button {
    display: none;
    padding: 0;
    width: 35px;
    height: 35px;

    border: none;
    cursor: pointer;

    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: transparent;

    @include mix.breakpoint(tabletMenu) {
      display: block;
    }

    &--closed {
      background-image: url('@/assets/icons/menu-closed.svg');
    }
    &--opened {
      background-size: 20px;
      background-image: url('@/assets/icons/menu-opened.svg');
    }
  }
	.site-menu__list {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0 50px;
		list-style: none;

    @include mix.breakpoint(tabletMenu) {
      z-index: 2;
      top: calc(100% + 10px);
      border-radius: 10px;
      position: absolute;
			flex-direction: column;
      padding: 30px;
      gap: 10px;
      box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

      background-color: $light;
		}
	}
	.site-menu__item {
		display: flex;
		align-items: center;
	}
	.site-menu__logo-container {
		margin: 0 20px;
		width: 200px;
		position: relative;

		@include mix.breakpoint(tabletMenu) {
			display: none;
		}
	}
	.site-menu__logo {
		position: absolute;
		top: -19px;
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
