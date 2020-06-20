<template>
  <router-link :to="to" class="button">
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
  </router-link>
</template>

<script>
export default {
  name: 'VueLink',
  props: {
    title: String,
    icon: String,
    img: String,
    iconPosition: String,
    to: [String, Object]
  }
}
</script>

<style scoped>

</style>
