
<template>
  <div class="social-group"  v-if="settings">
    <a :href="settings.setting.facebook" class="social-group__item" target="_blank">
      <span class="icon-font">
        <svg-icon type="icon-facebook" />
      </span>
    </a>

    <a :href="settings.setting.twitter" class="social-group__item" target="_blank">
      <span class="icon-font">
        <svg-icon type="icon-twitter" />
      </span>
    </a>

    <a :href="settings.setting.instagram" class="social-group__item" target="_blank">
      <span class="icon-font">
        <svg-icon type="icon-instagram" />
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialGroup',
  settings: {
    twitter: 'twit',
    facebook: 'face',
    instagram: 'insta'
  },
  data () {
    return {
      items: [
        {
          id: 0,
          icon: 'icon-facebook',
          link: 'https://www.facebook.com/holywoodskyline/'
        },
        {
          id: 1,
          icon: 'icon-twitter',
          link: 'https://twitter.com/holywoodskyline'
        },
        {
          id: 2,
          icon: 'icon-instagram',
          link: 'https://www.instagram.com/holywoodskyline/'
        }
      ]
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/components/social-group";
</style>
