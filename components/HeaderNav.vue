<template>
  <div>
  <mobile-menu @click.native="toggleMenu"/>
  <div class="header">
    <div class="header__mobile">
      <div class="header__mobile-green"></div>
      <div class="header__mobile-blue"></div>
    </div>

    <div class="header__wrp" style="position: relative">

      <router-link to="/" class="header-logo" >
        <img src="@/assets/img/logo.svg" alt="movie holywoodskyline" class="header-logo__img logo-main">
        <img src="@/assets/img/logoUcraft.png" alt="movie holywoodskyline" class="header-logo__img logo-white">
        <img src="@/assets/img/holywoodskyline2.png" alt="movie holywoodskyline" class="header-logo__img logo-colored">
        <img src="@/assets/img/amblem1.svg" alt="movie holywoodskyline" class="header-logo__img logo-amblem">

<!--         <img src="@/assets/img/logo.svg" alt="movie holywoodskyline" class="header-logo__img logo-main">
        <img src="@/assets/img/logo-white.svg" alt="movie holywoodskyline" class="header-logo__img logo-white">
        <img src="@/assets/img/logo-colored.svg" alt="movie holywoodskyline" class="header-logo__img logo-colored">
        <img src="@/assets/img/amblem.svg" alt="movie holywoodskyline" class="header-logo__img logo-amblem"> -->

      </router-link>

      <div class="header-right">
        <div class="header-menu">
          <router-link
            class="header-menu__item"
            :class="{'opacity-1 color-light-green' : link.id === 3}"
            v-for="link in links"
            :key="link.id"
            :to="link.to"
          >
            {{ link.title }}
          </router-link>
        </div>
        <div class="header-menu-ctr">
          <router-link to="/domain-management/add" class="header-menu__item">
            <div class="btn-txt">Add Movie</div>
            <div class="icon-font">
              <svg-icon type="icon-plus"/>
            </div>
          </router-link>
          <div class="header-menu-ctr__item header-user-drowdown">
            <v-button
              class="purple round header-login-btn"
              title='Login'
              icon="icon-user"
              icon-position="right"
              @click.native="login"
              v-if="!type_id || type_id === 'null' || type_id === 'undefined' || type_id === ''"
            />            
            <v-button
              class="purple round header-login-btn"
              :title="(isLogin === 'true') ? first_name : 'Login'"
              icon="icon-user"
              icon-position="right"
              @click.native="login"
              v-if="type_id === '2'"
            />
            <v-button
              class="purple round header-login-btn"
              :title="(isLogin === 'true') ? getDormName : 'Login'"
              icon="icon-user"
              icon-position="right"
              @click.native="login"
              v-if="type_id === '1'"
            />
            <div class="account" v-if="isLogin == 'true'">
              <div class="horizantal" style="z-index: -1; position: absolute;"></div>
              <div class="account__item user">
                <span class="account__item mycolor1" v-if="type_id === '2'">Profile</span>
                <span class="account__item mycolor1" v-if="type_id === '1'">Account Management</span>
              </div>
              <div v-if="type_id === '2'">
              <div class="account__item" v-for="menu in userMenu" :key="menu.id">
                <router-link :to="menu.to" class="account__item-link">{{ menu.title }}</router-link>
              </div>
              </div>
              <div v-if="type_id === '1'">
              <div class="account__item" v-for="menu in dormUserMenu" :key="menu.id">
                <router-link :to="menu.to" class="account__item-link">{{ menu.title }}</router-link>
              </div>
              </div>
              <div class="account__item exit mycursor">
                <div v-on:click="logout()" class="account__item-link">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HeaderNav',
  data () {
    return {
      // user:{},
      type_id: 2,
      isDormUser: 2,
      isLogin: false,
      links: [
        {
          id: 0,
          title: 'Genres',
          to: { name: 'CityList' }
        },
        {
          id: 1,
          title: 'TV',
          to: { name: 'TVSearch' }
        },
        {
          id: 2,
          title: 'Arama',
          to: { name: 'DormSearch' }
        },
        {
          id: 3,
          title: 'Ülkeler Tablosu',
          to: { name: 'SeriesSearch' }
        },     
        {
          id: 4,
          title: 'Günlük Sayılar',
          to: { name: 'Person' } //RequestPrice
        },      
      ],
      userMenu: [
        {
          id: 0,
          title: 'Account Settings',
          to: { name: 'UserSettings' }
        },
        {
          id: 1,
          title: 'Favorites',
          to: { name: 'UserFavorites' }
        },
        {
          id: 2,
          title: 'Watchlist',
          to: { name: 'UserWatchlist' }
        },         
        {
          id: 3,
          title: 'Rated Movies',
          to: { name: 'UserRatedMovies' }
        },        
        {
          id: 4,
          title: 'Lists',
          to: { name: 'UserComment' }
        }
/*         {
          id: 3,
          title: 'Teklifler',
          to: { name: 'UserOffers' }
        } */
      ],
      dormUserMenu: [
        {
          id: 0,
          title: 'Account Information',
          to: { name: 'DormUserAccount' }
        },
        {
          id: 1,
          title: 'Statistics',
          to: { name: 'DormUserStatistic' }
        },
        {
          id: 2,
          title: 'Messages',
          to: { name: 'DormUserMessages' }
        },
        {
          id: 3,
          title: 'Lists',
          to: { name: 'DormUserComments' }
        },        
        {
          id: 4,
          title: 'Movies',
          to: { name: 'DormUserDorms' }
        }
      ]
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('open')
    }
  },
    computed: {
    getLogin () {
    },
    getDormName(){
            const name = dorm_name.slice(0, 10) + "..."
      return name
    }
  },
  mounted() {   
  },
 watch: { '$route' () { 
//   this.updateList() 
    // temporary solution  
   } },  
}
</script>

<style lang="scss">
  @import "../assets/scss/components/header";

  .mycursor {
    cursor: pointer; }

  .mycursorArrow {
    cursor: arrow; }

  .mycolor1 {
    color:#4b5ba4
  }

  .colorWhite {
    color:white;
  }
</style>
