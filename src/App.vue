<template>
  <div id="app" :class="[pageClass, {'mobileMenuOpened': !isMenuActive}]">
    <!--<div id="app">-->
    <transition name="preloader-fade">
      <div class="preloader" v-if="showPreloader">
        <!--<div class="preloader-img">-->
        <!---->
        <!--&lt;!&ndash;<div class="loader-2"><span></span></div>&ndash;&gt;-->
        <!--<svg-icon type="icon-logo" />-->
        <!--</div>-->
        <img src="@/assets/img/logo-colored.png" alt="movie holywoodskyline" class="preloader-svg" width="400">
      </div>
    </transition>

    <!-- <HeaderNav  @open="showMenus"/> -->
<Home/>
    <Mobile v-if="showMenu"/>

    <div class="wrapper">
      <!--aa-->
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <!-- <Footer/> -->
  </div>
</template>
<script>
import HeaderNav from '@/components/HeaderNav'
import Footer from '@/components/Footer'
import Home from '@/views/Home'
import DormUserMessages from'@/views/DormUserMessages'
// import Breadcrumbs from '@/components/Breadcrumbs'
export default {
  name: 'app',
/*   components: {
    Breadcrumbs
  },  */ 
  metaInfo () {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: this.settings ? this.settings.setting.title : '',
      // all titles will be injected into this template
      // { name: 'description', content: this.settings ? this.settings.setting.description : '' }

      titleTemplate: '%s | Holywood Skyline',
      meta: [
        // { vmid: 'description', name: 'description', content: this.settings ? this.settings.setting.description : '' },
        // { vmid: 'keywords', name: 'keywords', content: this.settings ? this.settings.setting.keywords : '' },

        {
          'property': 'og:title',
          'content': this.settings ? this.settings.setting.title : ''
        },
        {
          'property': 'og:type',
          'content': 'website'
        },
        {
          'property': 'og:url',
          'content': 'https://www.holywoodskyline.com'
        },
        {
          'property': 'og:image',
          'content': 'https://www.holywoodskyline.com/logo.png'
        },
        {
          'property': 'og:description',
          'content': this.settings ? this.settings.setting.description : ''
        },
        {
          'property': 'og:site_name',
          'content': 'Holywood Skyline'
        },
      ],
/*       link: [
        { vmid: 'canonical', rel: 'canonical', href: 'https://www.holywoodskyline.com' },
        { rel: 'favicon', href: 'favicon.ico' }
      ] */
    }
  },
  data () {
    return {
      display: false
    }
  },
  components: {
    HeaderNav, Footer, Home, DormUserMessages
  },
  methods: {
    showMenus () {

    },
    getGeneralSettings () {

    }
  },
  computed: {

  },
  created () {
    this.getGeneralSettings()
  },
  watch: {
    $route () {
      let set = this.settings

    }
  }  
}
</script>
<style lang="scss">
  @import "assets/scss/bootstrap.min";
  @import "assets/scss/normalize";
  @import "assets/scss/global";
  @import "assets/scss/helpers";
  @import "assets/scss/swiper";
  @import "assets/scss/components/shapes";
  @import "assets/scss/components/form";
  //fade

  .preloader-fade-enter-active {
    transition: all .25s ease-in-out;
  }

  .preloader-fade-leave-active {
    transition: all .25s ease-in-out;
  }

  .preloader-fade-enter {
    opacity: 0;
  }

  .preloader-fade-leave-to {
    opacity: 0;
  }

  .menuDisplay{
    display: none;
  }
</style>
