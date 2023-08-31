<script setup></script>

<template>
	<address class="contacts">
		<ul class="contacts__list">
			<li class="contacts__item">
				<a
					class="contacts__link contacts__link--email"
					href="mailto:Info@youremail.com"
				>
					Info@youremail.com
				</a>
			</li>
			<li class="contacts__item contacts__item--phone">
				<a
					class="contacts__link contacts__link--phone"
					href="tel:480 555-0103"
				>
					(480) 555-0103
				</a>
			</li>
		</ul>
	</address>
</template>

<style lang="scss" scoped>
	.contacts {
		font-style: normal;
	}
	.contacts__list {
		margin: 0;
		display: flex;
		gap: 47px;
		list-style: none;
	}
	.contacts__item {
		display: flex;
	}
	.contacts__link {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		gap: 18px;

		text-decoration: none;
		color: inherit;

		transition: opacity 0.2s ease;
		@include mix.hover {
			opacity: 0.6;
		}

		&:active {
			text-decoration: underline;
			text-underline-offset: 5px;
		}

		&::after {
			content: '';
			display: block;
			width: 18px;
			height: 18px;
			mask-size: 100%;
			mask-position: center;
			mask-repeat: no-repeat;
			background-color: $light;
		}

		&--email::after {
			mask-image: url('@/assets/icons/email.svg');
		}
		&--phone::after {
			mask-image: url('@/assets/icons/phone.svg');
		}
	}
</style>
