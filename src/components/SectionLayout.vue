<script setup></script>

<template>
	<section class="section">
		<div class="section__wrapper container">
			<h2 class="section__title">
				<slot name="title"></slot>
			</h2>
			<p class="section__description">
				<slot name="description"></slot>
			</p>
		</div>
		<slot name="content"></slot>
	</section>
</template>

<style lang="scss" scoped>
	.section {
		padding: 70px 0;
		position: relative;

		@include mix.breakpoint(mobile) {
			padding: 40px 0;
		}

		&--has-background {
			@include mix.retina-image('background', 'jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			background-color: $accent;

			color: $light;
		}
	}
	.section__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 18px;
	}
	.section__title {
		margin: 0;

		@include mix.adaptive-fs($fs-l, $fs-xl, $fs-xl);
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1.5em;
		text-align: center;
	}

	.section__description {
		width: min(55%, 720px);
		margin: 0 0 40px 0;
		text-align: center;

		@include mix.breakpoint(tablet) {
			width: 65%;
		}

		@include mix.breakpoint(phone) {
			width: 90%;
		}
	}
</style>
