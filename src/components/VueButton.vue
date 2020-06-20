<template>
  <button class="button">
    <span class="button__wrp">
      <!--icon left-->
      <span class="button__icon" v-if="icon && iconPosition === 'left'">
        <svg-icon :type="icon"/>
      </span>
      <!--img icon left-->
      <span class="button__icon" v-if="img && iconPosition === 'left'">
        <img :src="img" alt="" class="icon">
      </span>
      <!--title-->
      <span class="button__txt" v-if="title">
        {{ title }}
      </span>
      <!--icon right-->
      <span class="button__icon" v-if="icon && iconPosition === 'right'">
        <svg-icon :type="icon"/>
      </span>
      <!--img icon right-->
      <span class="button__icon" v-if="img && iconPosition === 'right'">
        <img :src="img" alt="" class="icon">
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'VueButton',
  props: {
    title: String,
    icon: String,
    img: String,
    iconPosition: String
  }
}
</script>

<style lang="scss">
@import "../assets/scss/components/buttons";
</style>
