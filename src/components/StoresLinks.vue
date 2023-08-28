<script setup></script>

<template>
	<article class="stores-links">
		<h3 class="stores-links__title">Download app now</h3>
		<div class="stores-links__links">
			<a
				class="stores-links__link"
				href="http://play.google.com/store/#?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
			>
				<img
					alt="Get it on Google Play"
					src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
				/>
			</a>
			<a
				class="stores-links__link"
				href="http://play.google.com/store/#?pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
			>
				<img
					alt="Get it on Google Play"
					src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
				/>
			</a>
		</div>
	</article>
</template>

<style lang="scss" scoped>
	.stores-links {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.stores-links__title {
		@include mix.adaptive-fs($fs-mt, $fs-mt, $fs-l);
		line-height: 1.5em;
		font-weight: 600;

		margin: 0;
		text-transform: uppercase;
	}

	.stores-links__links {
		display: flex;
	}

	.stores-links__link {
		position: relative;
		display: flex;
		transform: translateX(-10px);

		& img {
			width: 149px;
		}
	}
</style>
