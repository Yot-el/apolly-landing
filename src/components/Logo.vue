<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
	import { RouterLink } from 'vue-router'
</script>

<template>
	<RouterLink
		class="logo"
		to="/"
	>
		<img
			class="logo__image"
			src="@/assets/images/logo.svg"
			alt="Apolly's logo"
			width="167"
			height="28"
		/>
	</RouterLink>
</template>

<style lang="scss" scoped>
	.logo {
		display: flex;
		padding: 20px 15px;
		background-color: $light;
		border-radius: 5px;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);

		@include mix.breakpoint(mobile) {
			padding: 24px 10px;
		}
	}

	.logo__image {
		@include mix.breakpoint(mobile) {
			width: 105px;
			height: 16px;
		}
	}
</style>
