<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
	<div class="logo">
		<img
			class="logo__image"
			src="@/assets/images/logo.svg"
			alt="Apolly's logo"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.logo {
		display: flex;
		padding: 20px 15px;
		background-color: $light;
		border-radius: 5px;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
	}
</style>
