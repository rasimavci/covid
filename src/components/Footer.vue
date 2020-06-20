<template>
  <div class="footer">
    <div class="footer__top">
      <container>
        <div class="position-relative">
          <div class="footer__left">
            <img src="@/assets/img/shapes/shape-7.svg" alt="" class="shape-7">
            <v-link
              to="/contact"
              class="green round footer__button"
              icon="icon-plus"
              icon-position="right"
              title="Add Movie"
            />
          </div>
          <div class="footer-ctr">
            <div class="footer-ctr__item">
              <span class="footer-ctr__icon">
                <svg-icon type="icon-mail" />
              </span>
              <div class="footer-ctr__txt" v-if="settings">
                <a href="mailto:support@holywoodskyline.com">{{ settings.setting.email }}</a>
              </div>
            </div>

            <div class="footer-ctr__item">
              <span class="footer-ctr__icon">
                <svg-icon type="icon-headphone" />
              </span>
              <div class="footer-ctr__txt" v-if="settings">
                <a href="tel:+905315720000">{{ settings.setting.mobile_phone }}</a>
              </div>
            </div>
          </div>
        </div>
      </container>
    </div>
    <container>
      <div class="footer__wrp">
        <div class="footer-inf">
          <img src="@/assets/img/logoUcraft.png" alt="" class="footer-inf__logo">
          <div class="footer-inf__txt" v-if="settings">
            {{ settings.setting.address }}
          </div>
          <SocialGroup />
        </div>
        <div class="footer-list">
          <div class="footer__col">
            <div class="footer-links">
              <div class="footer-links__title"><span class="color-blue">Quick Search</span> Methods</div>
              <router-link class="footer-links__item" v-for="link in searchLinks" :key="link.id" :to="link.to">
                <span class="icon-font">
                  <svg-icon type="icon-search" />
                </span>
                <span class="btn-txt">
                  {{ link.title }}
                </span>
              </router-link>
            </div>
          </div>

          <div class="footer__col">
            <div class="footer-links">
              <div class="footer-links__title"><span class="color-blue">Ads for </span> Movies</div>
              <router-link class="footer-links__item" v-for="link in advertLinks" :key="link.id" :to="link.to">
                <span class="btn-txt">
                  {{ link.title }}
                </span>
              </router-link>
            </div>
          </div>

          <div class="footer__col">
            <div class="footer-links">
              <router-link class="footer-links__item" v-for="link in mainLinks" :key="link.id" :to="link.to">
                <span class="btn-txt">
                  {{ link.title }}
                </span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-sec">
        <div class="clearfix"></div>
        <ul class="contractLinks">
          <li>
            <a href="/privacy-policy">
              <strong class="text d-block font-500">Privacy Policy</strong>
            </a>
          </li>
          <li>
            <a href="/cancel-and-return-conditions">
              <strong class="text d-block font-500">Cancel and Return Conditions</strong>
            </a>
          </li>
          <li>
            <a href="/distance-sales-contract">
              <strong class="text d-block font-500">Distance Sales Contract</strong>
            </a>
          </li>
          <li>
            <a href="/user-contract">
              <strong class="text d-block font-500">User Contract</strong>
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
        <strong class="text d-block font-700 color-gray" v-if="settings">{{ settings.setting.copyright }}</strong>

        <div class="footer-sec__cards">
          <img src="@/assets/img/shapes/shape-8.svg" alt="" class="shape-8">
          <img src="@/assets/img/payments.png" alt="" class="footer-sec__img">
        </div>
        <div class="clearfix"></div>
      </div>
    </container>
  </div>
</template>

<script>
import SocialGroup from '@/components/SocialGroup'
export default {
  name: 'Footer',
  components: {
    SocialGroup
  },
  data () {
    return {
      settings: '',
      searchLinks: [
        {
          id: 0,
          title: 'Search by Genre',
          to: { name: 'CityList' }
        },
        {
          id: 1,
          title: 'Search by Studio',
          to: { name: 'UniSearch' }
        },
        {
          id: 2,
          title: 'Search by Series',
          to: { name: 'SearchSeries' }
        },
        {
          id: 3,
          title: 'Search a Movie',
          to: { name: 'DormSearch' }
        },
        {
          id: 4,
          title: 'Search a Celebrity',
          to: { name: 'Person' }
        },                
      ],
      advertLinks: [
        {
          id: 0,
          title: 'Buying Requests',
          to: '/advertisements/alim-talepleri'
        },
        {
          id: 1,
          title: 'Staff Seekers',
          to: '/advertisements/staff-seekers'
        },
        {
          id: 2,
          title: 'Tools',
          to: '/advertisements/tools'
        },
        {
          id: 3,
          title: 'DVD Ads',
          to: '/advertisements/dvd-ads'
        },
        {
          id: 4,
          title: 'Movie Renting',
          to: { name: 'RequestPrice' }
        }        
      ],
      mainLinks: [
        {
          id: 0,
          title: 'About',
          to: { name: 'About' }
        },
        {
          id: 1,
          title: 'On the news',
          to: { name: 'Media' }
        },
        {
          id: 2,
          title: 'FAQ',
          to: { name: 'Faq' } // '/frequently-asked-questions'
        },
        {
          id: 3,
          title: 'Blog',
          to: { name: 'Blog' }
        },
        {
          id: 4,
          title: 'Contact',
          to: { name: 'Contact' }
        }
      ]

    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/footer";
</style>
