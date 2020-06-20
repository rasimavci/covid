<template>
  <div class="user-wrp-comments">
    <div class="result-bracket__title user__list-count">
      <span v-if="!messages">Covid19 Datası Yükleniyor</span>
       <span class="result-bracket__count" v-if="messages">{{ messages.length }} </span> <span v-if="messages">Ülke Raporu</span>
      <!-- <span class="result-bracket__count">{{ first}} - {{ last }}</span> Arası Mesajlarınız ! (Toplam {{messagesAll.length}} Mesajınız Var) -->
    </div>
      <pagination
    v-if="pagination"
    :pagination="pagination"
    router="CityPage"
  />

    <ContentLoader v-if="!messages"
        :height="700">
        <rect x="0" y="0" rx="3" ry="3" width="415" height="65" />
        <rect x="0" y="68" rx="3" ry="3" width="415" height="65" />
        <rect x="0" y="136" rx="3" ry="3" width="415" height="65" />
        <rect x="0" y="204" rx="3" ry="3" width="415" height="65" />
        <rect x="0" y="272" rx="3" ry="3" width="415" height="65" />
      
      </ContentLoader>  
    <div class="user__list-offer">
      <div class="user__list-offer__item" v-for="msg in messages" :key="msg.id">
        <div class="user__list-comment-wrp">
          <div class="user__list__dorm">
            <div class="user__list__dorm-img-wrp">
                 <span class="logo-wrp__icon">
                      <svg-icon type="icon-mail"/>
                    </span>
            </div>
            <div class="user__list__dorm-wrp">
              <p class="user__list__dorm-name">{{ msg.Country }}</p>

              <div>
                <span class="user__list__dorm-location">
                 <svg-icon class="user__list__dorm-location-svg" type="icon-envelope-box"/>
                Yeni Vaka{{ msg.NewConfirmed }}</span>

                <span class="user__list__dorm-location">
                 <svg-icon class="user__list__dorm-location-svg" type="icon-phone-classic"/>
                Yeni Ölüm {{ msg.NewDeaths }}</span>
              </div>

            </div>
          </div>

            <div class="user__list__dorm-wrp">
              <p class="user__list__dorm-name">Toplam Vaka</p>

              <div class="user__list__dorm-gen">
                <span class="user__list__dorm-location">
                {{msg.TotalConfirmed}}</span>
                <p class="user__list__dorm-name">Toplam Ölüm</p>
                 <span class="user__list__dorm-location">
                {{msg.TotalDeaths}}</span> 
                <p class="user__list__dorm-name">Toplam İyileşen</p>
                 <span class="user__list__dorm-location">
                {{msg.TotalRecovered}}</span> 

                <span class="user__list__dorm-location" v-if="msg.TotalDeath">
                Bu mesaj {{msg.TotalDeaths}} Toplam Ölü sayısı</span>
                <span class="user__list__dorm-location" v-else-if="msg.TotalRecovered">
                Bu mesaj {{msg.TotalRecovered}} id li üniversiteden toplu mesaj olarak geldi</span>
                <span class="user__list__dorm-location" v-else-if="msg.from === 'city'">
                Bu mesaj {{msg.from_id}} id li şehirden toplu mesaj olarak geldi</span>          
                <span class="user__list__dorm-location" v-else-if="msg.from === 'district'">
                Bu mesaj {{msg.from_id}} id li ilçeden toplu mesaj olarak geldi</span>
                <span class="user__list__dorm-location" v-else-if="msg.from === 'dorm'">
                Bu mesaj {{msg.from_id}} id li yurttan toplu mesaj olarak geldi</span>                                            
                <span class="user__list__dorm-location" v-else>
                Bilinmiyor {{msg.message}}</span>  -                            
              </div>

            </div>

          <div class="right-bar" style="margin-top: 15px;">
            <p class="user__list-date"> {{ msg.Date }}</p>
            <p class="user__list-date">
              <span class="user__list__dorm-hour">
                 <svg-icon class="user__list__dorm-hour-svg" type="icon-oclock"/>
              </span>
              <!-- {{ msg.time }} -->
            </p>
          </div>
          
        </div>
        <div class="user__list-comment">
          <div class="user__list-link">
            <div class="user__list-bottom">
              Tarih :
              <p class="user__list-bottom-title">
                <span class="location-ico">
               <svg-icon type="icon-location"/>
            </span>{{ msg.Date }}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  <div class="pagination">
    <a href="#" v-if="messagesAll.length > 1" v-on:click="openMessages(0,100)" class="pagination__item" :class="[ first == 0 ? 'page-active' : '' ]"><span class="pagination__item-number">1</span></a>
    <a href="#" v-if="messagesAll.length > 100" v-on:click="openMessages(100, 200)" class="pagination__item" :class="[ first == 100 ? 'page-active' : '' ]"><span class="pagination__item-number">2</span></a>
    <a href="#" v-if="messagesAll.length > 200" v-on:click="openMessages(200, 300)" class="pagination__item" :class="[ first == 200 ? 'page-active' : '' ]"><span class="pagination__item-number">3</span></a>
    <a href="#" v-if="messagesAll.length > 300" v-on:click="openMessages(300,400)" class="pagination__item" :class="[ first == 300 ? 'page-active' : '' ]" ><span class="pagination__item-number">4</span></a>
    <a href="#" v-if="messagesAll.length > 400" v-on:click="openMessages(400,500)" class="pagination__item" :class="[ first == 400 ? 'page-active' : '' ]"><span class="pagination__item-number">5</span></a>
    <a href="#" v-if="messagesAll.length > 500" v-on:click="openMessages(500, 600)" class="pagination__item" :class="[ first == 500 ? 'page-active' : '' ]"><span class="pagination__item-number">6</span></a>
    <a href="#" v-if="messagesAll.length > 600" v-on:click="openMessages(600, 700)" class="pagination__item" :class="[ first == 600 ? 'page-active' : '' ]"><span class="pagination__item-number">7</span></a>
    <a href="#" v-if="messagesAll.length > 700" v-on:click="openMessages(700, 800)" class="pagination__item" :class="[ first == 700 ? 'page-active' : '' ]"><span class="pagination__item-number">8</span></a>
    <a href="#" v-if="messagesAll.length > 800" v-on:click="openMessages(800, 900)" class="pagination__item" :class="[ first == 800 ? 'page-active' : '' ]"><span class="pagination__item-number">9</span></a>
    <a href="#" v-if="messagesAll.length > 900" v-on:click="openMessages(900, 1000)" class="pagination__item" :class="[ first == 900 ? 'page-active' : '' ]"><span class="pagination__item-number">10</span></a>
    <a href="#" v-if="messagesAll.length > 1000" v-on:click="openMessages(1000, 1100)" class="pagination__item" :class="[ first == 1000 ? 'page-active' : '' ]"><span class="pagination__item-number">11</span></a>
    <a href="#" v-if="messagesAll.length > 1100" v-on:click="openMessages(1000, 1200)" class="pagination__item" :class="[ first == 1100 ? 'page-active' : '' ]"><span class="pagination__item-number">12</span></a>
    <a href="#" v-if="messagesAll.length > 1200" v-on:click="openMessages(1200, 1300)" class="pagination__item" :class="[ first == 1200 ? 'page-active' : '' ]"><span class="pagination__item-number">13</span></a>
    <a href="#" v-if="messagesAll.length > 1300" v-on:click="openMessages(1300, 1400)" class="pagination__item" :class="[ first == 1300 ? 'page-active' : '' ]"><span class="pagination__item-number">14</span></a>
    <a href="#" v-if="messagesAll.length > 1400" v-on:click="openMessages(1400, 1500)" class="pagination__item" :class="[ first == 1400 ? 'page-active' : '' ]"><span class="pagination__item-number">15</span></a>
    <a href="#" v-if="messagesAll.length > 1500" v-on:click="openMessages(1500, 1600)" class="pagination__item" :class="[ first == 1500 ? 'page-active' : '' ]"><span class="pagination__item-number">16</span></a>
    <a href="#" v-if="messagesAll.length > 1600" v-on:click="openMessages(1600, 1700)" class="pagination__item" :class="[ first == 1600 ? 'page-active' : '' ]"><span class="pagination__item-number">17</span></a>
    <a href="#" v-if="messagesAll.length > 1700" v-on:click="openMessages(1700, 1800)" class="pagination__item" :class="[ first == 1700 ? 'page-active' : '' ]"><span class="pagination__item-number">18</span></a>
    <a href="#" v-if="messagesAll.length > 1800" v-on:click="openMessages(1800, 1900)" class="pagination__item" :class="[ first == 1800 ? 'page-active' : '' ]"><span class="pagination__item-number">19</span></a>
    <a href="#" v-if="messagesAll.length > 1900" v-on:click="openMessages(1900, 2000)" class="pagination__item" :class="[ first == 1900 ? 'page-active' : '' ]"><span class="pagination__item-number">20</span></a>
    </div>
    <div class ="pagination">
    <a href="#" v-if="messagesAll.length > 2000" v-on:click="openMessages(2000, 2100)" class="pagination__item" :class="[ first == 2000 ? 'page-active' : '' ]"><span class="pagination__item-number">21</span></a>
    <a href="#" v-if="messagesAll.length > 2100" v-on:click="openMessages(2100, 2200)" class="pagination__item" :class="[ first == 2100 ? 'page-active' : '' ]"><span class="pagination__item-number">22</span></a>  
    <a href="#" v-if="messagesAll.length > 2200" v-on:click="openMessages(2200, 2300)" class="pagination__item" :class="[ first == 2200 ? 'page-active' : '' ]"><span class="pagination__item-number">23</span></a>
    <a href="#" v-if="messagesAll.length > 2300" v-on:click="openMessages(2300, 2400)" class="pagination__item" :class="[ first == 2300 ? 'page-active' : '' ]"><span class="pagination__item-number">24</span></a>
    <a href="#" v-if="messagesAll.length > 2400" v-on:click="openMessages(2400, 2500)" class="pagination__item" :class="[ first == 2400 ? 'page-active' : '' ]"><span class="pagination__item-number">25</span></a>    
    <a href="#" v-if="messagesAll.length > 2500" v-on:click="openMessages(2500, 2600)" class="pagination__item" :class="[ first == 2500 ? 'page-active' : '' ]"><span class="pagination__item-number">26</span></a>
    <a href="#" v-if="messagesAll.length > 2600" v-on:click="openMessages(2600, 2700)" class="pagination__item" :class="[ first == 2600 ? 'page-active' : '' ]"><span class="pagination__item-number">27</span></a>  
    <a href="#" v-if="messagesAll.length > 2700" v-on:click="openMessages(2700, 2800)" class="pagination__item" :class="[ first == 2700 ? 'page-active' : '' ]"><span class="pagination__item-number">28</span></a>
    <a href="#" v-if="messagesAll.length > 2800" v-on:click="openMessages(2800, 2900)" class="pagination__item" :class="[ first == 2800 ? 'page-active' : '' ]"><span class="pagination__item-number">29</span></a>
    <a href="#" v-if="messagesAll.length > 2900" v-on:click="openMessages(2900, 3000)" class="pagination__item" :class="[ first == 2900 ? 'page-active' : '' ]"><span class="pagination__item-number">30</span></a>
    <a href="#" v-if="messagesAll.length > 3000" v-on:click="openMessages(3000, 3100)" class="pagination__item" :class="[ first == 3000 ? 'page-active' : '' ]"><span class="pagination__item-number">31</span></a>
    <a href="#" v-if="messagesAll.length > 3100" v-on:click="openMessages(3100, 3200)" class="pagination__item" :class="[ first == 3100 ? 'page-active' : '' ]"><span class="pagination__item-number">32</span></a>
    <a href="#" v-if="messagesAll.length > 3200" v-on:click="openMessages(3200, 3300)" class="pagination__item" :class="[ first == 3200 ? 'page-active' : '' ]"><span class="pagination__item-number">33</span></a>
    <a href="#" v-if="messagesAll.length > 3300" v-on:click="openMessages(3300, 3400)" class="pagination__item" :class="[ first == 3300 ? 'page-active' : '' ]"><span class="pagination__item-number">34</span></a>
    <a href="#" v-if="messagesAll.length > 3400" v-on:click="openMessages(3400, 3500)" class="pagination__item" :class="[ first == 3400 ? 'page-active' : '' ]"><span class="pagination__item-number">35</span></a>  
    <a href="#" v-if="messagesAll.length > 3500" v-on:click="openMessages(3500, 3600)" class="pagination__item" :class="[ first == 3500 ? 'page-active' : '' ]"><span class="pagination__item-number">36</span></a>
    <a href="#" v-if="messagesAll.length > 3600" v-on:click="openMessages(3600, 3700)" class="pagination__item" :class="[ first == 3600 ? 'page-active' : '' ]"><span class="pagination__item-number">37</span></a>
    <a href="#" v-if="messagesAll.length > 3700" v-on:click="openMessages(3700, 3800)" class="pagination__item" :class="[ first == 3700 ? 'page-active' : '' ]"><span class="pagination__item-number">38</span></a>
    <a href="#" v-if="messagesAll.length > 3800" v-on:click="openMessages(3800, 3900)" class="pagination__item" :class="[ first == 3800 ? 'page-active' : '' ]"><span class="pagination__item-number">39</span></a>
    <a href="#" v-if="messagesAll.length > 3900" v-on:click="openMessages(3900, 4000)" class="pagination__item" :class="[ first == 3900 ? 'page-active' : '' ]"><span class="pagination__item-number">40</span></a>
    </div>
<!--     <div class ="pagination">
    <a href="#" v-if="messagesAll.length > 2050" v-on:click="openMessages(2000, 2050)" class="pagination__item" :class="[ first == 2000 ? 'page-active' : '' ]"><span class="pagination__item-number">41</span></a>   
    <a href="#" v-if="messagesAll.length > 2100" v-on:click="openMessages(2050, 2100)" class="pagination__item" :class="[ first == 2000 ? 'page-active' : '' ]"><span class="pagination__item-number">42</span></a>
    <a href="#" v-if="messagesAll.length > 2150" v-on:click="openMessages(2100, 2150)" class="pagination__item" :class="[ first == 2100 ? 'page-active' : '' ]"><span class="pagination__item-number">43</span></a>
    <a href="#" v-if="messagesAll.length > 2200" v-on:click="openMessages(2150, 2200)" class="pagination__item" :class="[ first == 2100 ? 'page-active' : '' ]"><span class="pagination__item-number">44</span></a>
    <a href="#" v-if="messagesAll.length > 2250" v-on:click="openMessages(2200, 2350)" class="pagination__item" :class="[ first == 2200 ? 'page-active' : '' ]"><span class="pagination__item-number">45</span></a>
    <a href="#" v-if="messagesAll.length > 2300" v-on:click="openMessages(2250, 2400)" class="pagination__item" :class="[ first == 2200 ? 'page-active' : '' ]"><span class="pagination__item-number">46</span></a>   
    <a href="#" v-if="messagesAll.length > 2350" v-on:click="openMessages(2300, 2450)" class="pagination__item" :class="[ first == 2300 ? 'page-active' : '' ]"><span class="pagination__item-number">47</span></a>
    <a href="#" v-if="messagesAll.length > 2400" v-on:click="openMessages(2350, 2500)" class="pagination__item" :class="[ first == 2300 ? 'page-active' : '' ]"><span class="pagination__item-number">48</span></a>
    <a href="#" v-if="messagesAll.length > 2450" v-on:click="openMessages(2400, 2600)" class="pagination__item" :class="[ first == 2400 ? 'page-active' : '' ]"><span class="pagination__item-number">59</span></a>
  </div> -->
    <!-- <paginations-new/> -->
  </div>
</template>

<script>
// import PaginationsNew from '@/components/paginationNew'
import { ContentLoader } from 'vue-content-loader'
import axios from 'axios'
export default {
  name: 'Offers',
  components: {
    ContentLoader //, PaginationsNew
  },
  data () {
    return {
      first: 0,
      last: 50,
      errors:[],
      cities: [],
      districts: [],
      messagesAll: [],
      messages: null
    }
  },
methods: {
    openMessages(first, last) {
      this.first = first
      this.last = last
      this.messages = this.messagesAll.slice(first,last)
    },
    getMessages () {  
      let self = this
      axios.get(`/summary`)
        .then(response => {
          self.messages = response.data.Countries //.reverse()
        //  self.messages = response.dataself.messagesAll.slice(0,50) 
           /*self.messages.forEach((data) => {
             
            const city = self.cities.find((city) => city.id == data.dorm.city_id)
            // self.getCityDetails(city.id)
            data.dorm.city_name = city.name

            })  */  
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getCities () {
      let self = this
      axios.get('/site/home/select-cities')
        .then(response => {
          self.cities = response.data
          self.getMessages ()
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getCityDetails (city_slug) {
      let self = this
      axios.get(`/site/cities/${city_slug}`)
        .then(response => {
          self.districts = response.data.districts
        })
        .catch(e => {
          self.errors.push(e)
        })
    }
},
created() {
  this.getMessages()
    //this.getCities()
},
mounted() {
   // this.getCities()
},
  watch: {
    $route () {
      //this.getCities()
    }
  }


}
</script>

<style lang="scss">
  @import "../assets/scss/components/messages";
  @import "../assets/scss/components/pagination-new";
</style>
