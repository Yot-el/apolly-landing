<script setup>
	/* eslint-disable */
	const props = defineProps({
		links: {
			type: Array,
			required: true
		},
		hasLines: {
			type: Boolean,
			default: false
		},
		iconColor: {
			type: String,
			default: 'light'
		},
		iconSize: {
			type: Number,
			default: 24
		}
	})
</script>

<template>
	<section class="socials">
		<h2 class="visually-hidden">Social links</h2>
		<ul :class="['socials__list', { 'socials__list--has-lines': hasLines }]">
			<li
				:class="['socials__item', `socials__item--${iconColor}`]"
				v-for="link in links"
				:key="link.name"
			>
				<a
					:class="[
						'socials__link',
						`socials__link--${link.name}`,
						`socials__link--${iconColor}`
					]"
					:style="{
						width: `${iconSize + 8}px`,
						height: `${iconSize + 8}px`,
						maskSize: `${iconSize}px`
					}"
					:href="link.href"
				>
					<span class="visually-hidden">{{ link.name }}</span>
				</a>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
	.socials {
		display: flex;
	}

	.socials__list {
		margin: 0;
		padding: 0;
		flex-grow: 1;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
		align-items: center;
		justify-content: space-between;

		list-style: none;

		&--has-lines {
			& :not(:last-child)::after {
				content: '';
				position: absolute;
				top: 50%;
				right: 0;
				height: 70%;
				width: 1px;
				transform: translateY(-50%) translateX(-50%);
			}
		}
	}

	.socials__item {
		display: grid;
		justify-content: center;
		position: relative;

		&--light::after {
			background-color: $light;
		}
		&--dark:after {
			background-color: $dark-muted;
		}
	}

	.socials__link {
		mask-position: center;
		mask-size: cover;
		mask-repeat: no-repeat;

		&--light {
			background-color: $light;
			@include mix.hover {
				background-color: transparentize($light, 0.6);
			}
		}
		&--dark {
			background-color: $dark;
			@include mix.hover {
				background-color: $accent;
			}
		}

		transition: background-color 0.2s ease;

		&--facebook {
			mask-image: url('@/assets/icons/facebook.svg');
		}
		&--youtube {
			mask-image: url('@/assets/icons/youtube.svg');
		}
		&--twitter {
			mask-image: url('@/assets/icons/twitter.svg');
		}
		&--instagram {
			mask-image: url('@/assets/icons/instagram.svg');
		}
	}
</style>
