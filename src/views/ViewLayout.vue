<script setup>

</script>

<template>
  <main class="main">
    <div class="main__header">
      <slot name="header" class="main__header"></slot>
    </div>
    <slot name="content"></slot>
  </main>
</template>

<style lang="scss" scoped>
.main {
  &--full-page-header {
    & .main__header {
      min-height: 100dvh;
    }
  }
}
.main__header {
  display: flex;
  flex-direction: column;
  padding: 170px 0 50px 0;

  @include mix.breakpoint(tablet) {
			padding: 130px 0 50px 0;
	}

  @include mix.retina-image('background', 'jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $accent;

  color: $light;
}
</style>