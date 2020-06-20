<template>
  <div class="istatistik">
    
    <div class="featured-dorms__list dorm-card__list user__list-wrp">
      <container class="gen-container">
        <div class="user-settings__top">
          <div class="user-settings__profil">
            
            <div class="left-one">
              <div class="left">
                <!-- <img src="@/assets/img/campuscity-logo.png" alt="" class="user-settings__profil-img"> -->
                </div>

              <div class="right" style="margin-left: -45px;" > 
                <img :src="logo" alt="" class="user-settings__profil-img2">
                <p class="user-settings__profil-name">
                Covid19 Ülke Raporu </p>
                <p class="user-settings__profil-mail">
                  {{country}}
                </p>
              <p class="user-settings__profil-name mail">
                {{mail1}}
                <span class="sign-out">
                  <svg class="icon">
                    <use xlink:href="/icon/icons.svg#icon-mail"></use>
                  </svg>
                </span>
              </p>                
              </div>
            </div>                
            <div class="right">
            </div>
          </div>
        </div>

      <ContentLoader v-if="!liveData && !mobileCheck"
        :height="320">
        <rect x="2" y="0" rx="3" ry="3" width="95" height="80"/>
        <rect x="103" y="0" rx="3" ry="3" width="95" height="80"/> 
        <rect x="202" y="0" rx="3" ry="3" width="95" height="80"/>
        <rect x="303" y="0" rx="3" ry="3" width="95" height="80"/>   
      </ContentLoader>

        <ContentLoader v-if="!countryTotal"
        :height="300">
        <rect x="0" y="0" rx="3" ry="3" width="410" height="300"/>      
      </ContentLoader>

      <ContentLoader v-if="!statistics && mobileCheck" 
        :height="700">
        <rect x="2" y="0" rx="3" ry="3" width="200" height="280" />
        <rect x="230" y="0" rx="3" ry="3" width="200" height="280" /> 
        <rect x="2" y="320" rx="3" ry="3" width="200" height="280" />
        <rect x="230" y="320" rx="3" ry="3" width="200" height="280" />      
      </ContentLoader>

        <div class="user__list-offer" v-if="liveData">
          <div class="dorm-statistic">
            <div class="statistic-top">

              <div class="statistic__item">
                <h3 class="statistic__item-title">YENİ VAKA</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number">{{liveData.NewConfirmed}}</p>
                  <p class="statistic__item-text">Content</p>
                </div>
                <p class="statistic__item-days">
                  
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">VAKA SAYISI</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number">{{liveData.TotalConfirmed}}</p>
                  <p class="statistic__item-text">Kişi hasta oldu</p>
                </div>
                <p class="statistic__item-days">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  Tüm Zamanlar Toplamı
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">ÖLÜ</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number">{{liveData.TotalDeaths}}</p>
                  <p class="statistic__item-text">Kişi Vefat Etti</p>
                </div>
                <p class="statistic__item-days">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  Tüm Zamanlar Toplamı
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">İYİLEŞEN</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number">{{liveData.TotalRecovered}}</p>
                  <p class="statistic__item-text">Kişi Taburcu Oldu</p>
                </div>
                <p class="statistic__item-days">
                     <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  Tüm Zamanlar Toplamı
                </p>
              </div>
            </div>
          </div>

          <div class="report" v-if="countryTotal">
            <div class="report__top">
              <div class="report-left">
                <p class="report__title">ÜLKE RAPORU</p>
                <!-- <p class="report__text">1 Aralık -22 Ocak tarihleri arasında yayında olan {{dormStats.length}} Yurt‘un raporu</p> -->
                <p class="report__text">Ülkenizde bulunan {{liveData.Confirmed}} Vakanın raporu</p>
              </div>

      <div class="hero-search__left searchDesktop">
       <div class="hero-search__select">
        <SelectBoxNoFilter :options="countries" myplaceholder="Ülke Seç"
        @onselect="selectCountry"/>
      </div>
      <div class="hero-search__select">
        <SelectBoxDate
          :options="days"
          myplaceholder="Tarih Aralığı Seç"
          @onselect="changeData"
        />
      </div>
    </div>

<!--               <div class="istatistik.report-right">
                <div class="istatistik.report-right__item mywidth">
                      <SelectBoxNoFilter
      :options="dorms"
      :disabled="disabled"
      @onselect="selectDorm"
      form-element
      :title="title"
      myplaceholder="Yurt Bazlı Filtrele"
      class="select-box"
      name="dorm_name"/>
                <div class="istatistik.report-right__item">
                  <SelectBoxNoFilter :options="days" myplaceholder="Dönem Seçin" style="font-weight: bold" @onselect="selectDays"/>
                </div>
            </div>
            </div> -->
            </div>

            <div class="report__bottom" v-if="countryTotal">
              <div class="report__bottom-item">
                <div class="report-icon">
                 <span class="oclcok">
                    <svg-icon type="virus"/>
                  </span>
                </div>
                <div class="report-detail" >
                  <p class="report-detail__number">{{countryTotal[countryTotal.length-1].Confirmed}}</p>
                  <p class="report-detail__text">Enfekte</p>
                </div>
                <div class="report-check check-gen">
                  <label class="container2">
                    <div class="check">
                      <input type="checkbox" v-model="checked1">
                      <span class="checkmark"></span>
                    </div>
                  </label>

                </div>
               </div>
               <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #3dc6a7">
                 <span class="oclcok">
                    <svg-icon type="vaccine"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">{{countryTotal[countryTotal.length-1].Recovered}}</p>
                  <p class="report-detail__text">İyileşen</p>
                </div>
                <div class="report-check check-gen">
                  <label class="container2">
                    <div class="check">
                      <input type="checkbox" v-model="checked2">
                      <span class="checkmark"></span>
                    </div>
                  </label>

                </div>
              </div>
              <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #f0c062">
                 <span class="oclcok">
                    <svg-icon type="virus"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">{{countryTotal[countryTotal.length-1].Active}}</p>
                  <p class="report-detail__text">Aktif Vaka</p>
                </div>
                <div class="report-check check-gen">
                  <label class="container2">
                    <div class="check">
                      <input type="checkbox" v-model="checked3">
                      <span class="checkmark"></span>
                    </div>
                  </label>

                </div>
              </div>
              <div class="report__bottom-item">
                <div class="report-icon" style="background-color: #ff7676">
                 <span class="oclcok">
                    <svg-icon type="exclamation-mark"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">{{countryTotal[countryTotal.length-1].Deaths}}</p>
                  <p class="report-detail__text">Ölü</p>
                </div>
                <div class="report-check check-gen">
                  <label class="container2">
                    <div class="check">
                      <input type="checkbox" v-model="checked4">
                      <span class="checkmark"></span>
                    </div>
                  </label>

                </div>
              </div>
             </div>
             <div class="chart">
              <VueApexCharts id="chart" width="100%" height="400px" type="line" :options="options"
                             :series="series" @click.native="ProfileChange('')" v-if="countryTotal"></VueApexCharts>
<!--               <VueApexCharts v-else-if="days1 === 'Temmuz-Ağustos'" width="100%" height="400px" type="line" :options="optionsTemmuzAgustos"
                             :series="series" @click.native="ProfileChange('')"></VueApexCharts> -->
<!--               <VueApexCharts v-if="checked1 && !checked2" width="100%" height="400px" type="line" :options="options90"
                             :series="series90" @click.native="ProfileChange('')"></VueApexCharts>                             
              <VueApexCharts v-if="checked1 && checked2 && !checked3" width="100%" height="400px" type="line" :options="options"
                             :series="series3yok" @click.native="ProfileChange('')"></VueApexCharts>
              <VueApexCharts v-if="checked1 && checked2 && checked3 && !checked4" width="100%" height="400px" type="line" :options="options"
                             :series="series4yok" @click.native="ProfileChange('')"></VueApexCharts>  -->                                                                                         
            </div>
<!--     <div id="chart">
      <apexchart type=bar height=350 :options="options" :series="series2" />
    </div> -->
          </div>

        </div>
      </container>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import Moment from 'moment'
import SelectBoxNoFilter from '@/components/SelectBoxTempNoFilter'
import SelectBoxDate from '@/components/SelectBoxDate'
import { ContentLoader } from 'vue-content-loader'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    VueApexCharts, SelectBoxNoFilter, SelectBoxDate, ContentLoader
  },
  metaInfo () {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'İstatistik',
      link: [
        { rel: 'canonical', href: window.location.origin + '/country/stats/' }
      ]
    }
  },  
  data () {
    return {
      country: 'Türkiye',
      countryTotal: null,
    //   liveData: null,
       ConfirmedCases: [],
       covidDataDeath: [],
       covidDataRecovered: [],
       covidDataActive: [],
      countries:[
  {
    "Country": "Türkiye",
    "Slug": "turkey",
    "ISO2": "TR"
  },    
  {
    "Country": "Afganistan",
    "Slug": "afghanistan",
    "ISO2": "AF"
  },
  {
    "Country": "Almanya",
    "Slug": "germany",
    "ISO2": "DE"
  },
  {
    "Country": "Amerika Birleşik Devletleri",
    "Slug": "united-states",
    "ISO2": "US"
  },    
  {
    "Country": "Andorra",
    "Slug": "andorra",
    "ISO2": "AD"
  },  
  {
    "Country": "Angola",
    "Slug": "angola",
    "ISO2": "AO"
  },    
  {
    "Country": "Antartika",
    "Slug": "antarctica",
    "ISO2": "AQ"
  },
  {
    Country: "Arjantin",
    Slug: "argentina",
    ISO2: "AR"
  },
  {
    "Country": "Arnavutluk",
    "Slug": "albania",
    "ISO2": "AL"
  },
  {
    "Country": "Avustralya",
    "Slug": "australia",
    "ISO2": "AU"
  },
  {
    "Country": "Avusturya",
    "Slug": "austria",
    "ISO2": "AT"
  },  
  {
    "Country": "Azerbaycan",
    "Slug": "azerbaijan",
    "ISO2": "AZ"
  },
  {
    "Country": "Bahamalar",
    "Slug": "bahamas",
    "ISO2": "BS"
  },    
  {
    "Country": "Bahreyn",
    "Slug": "bahrain",
    "ISO2": "BH"
  },
  {
    "Country": "Bangladeş",
    "Slug": "bangladesh",
    "ISO2": "BD"
  }, 
  {
    "Country": "Belarus",
    "Slug": "belarus",
    "ISO2": "BY"
  },      
  {
    "Country": "Belçika",
    "Slug": "belgium",
    "ISO2": "BE"
  },
  {
    "Country": "Belize",
    "Slug": "belize",
    "ISO2": "BZ"
  },  
  {
    "Country": "Benin",
    "Slug": "benin",
    "ISO2": "BJ"
  },  
  {
    "Country": "Birleşik Arap Emirlikleri",
    "Slug": "united-arab-emirates",
    "ISO2": "AE"
  },
  {
    "Country": "Bolivya",
    "Slug": "bolivia",
    "ISO2": "BO"
  },  
  {
    "Country": "Bosna ve Hersek",
    "Slug": "bosnia-and-herzegovina",
    "ISO2": "BA"
  },
  {
    "Country": "Botsvana",
    "Slug": "botswana",
    "ISO2": "BW"
  },  
  {
    "Country": "Brezilya",
    "Slug": "brazil",
    "ISO2": "BR"
  },
  {
    "Country": "Brunei Sultanlığı",
    "Slug": "brunei",
    "ISO2": "BN"
  },     
  {
    "Country": "Bulgaristan",
    "Slug": "bulgaria",
    "ISO2": "BG"
  },
  {
    "Country": "Burkina Faso",
    "Slug": "burkina-faso",
    "ISO2": "BF"
  },  
  {
    "Country": "Butan",
    "Slug": "bhutan",
    "ISO2": "BT"
  },        
  {
    "Country": "Cebelitarık",
    "Slug": "gibraltar",
    "ISO2": "GI"
  },
  {
    "Country": "Cezayir",
    "Slug": "algeria",
    "ISO2": "DZ"
  },   
  {
    "Country": "Çad",
    "Slug": "chad",
    "ISO2": "TD"
  },  
  {
    "Country": "Çek Cumhuriyeti",
    "Slug": "czech-republic",
    "ISO2": "CZ"
  },
  {
    "Country": "Çin",
    "Slug": "china",
    "ISO2": "CN"
  },
  {
    "Country": "Danimarka",
    "Slug": "denmark",
    "ISO2": "DK"
  },    
  {
    "Country": "Dominik",
    "Slug": "dominica",
    "ISO2": "DM"
  },
  {
    "Country": "Dominik Cumhuriyeti",
    "Slug": "dominican-republic",
    "ISO2": "DO"
  },   
  {
    "Country": "El Salvador",
    "Slug": "el-salvador",
    "ISO2": "SV"
  },
  {
    "Country": "Ekvador",
    "Slug": "ecuador",
    "ISO2": "EC"
  },
  {
    "Country": "Ekvatoral Gine",
    "Slug": "equatorial-guinea",
    "ISO2": "GQ"
  },  
  {
    "Country": "Endonezya",
    "Slug": "indonesia",
    "ISO2": "ID"
  },
  {
    "Country": "Eritre",
    "Slug": "eritrea",
    "ISO2": "ER"
  },  
  {
    "Country": "Ermenistan",
    "Slug": "armenia",
    "ISO2": "AM"
  },  
  {
    "Country": "Estonya",
    "Slug": "estonia",
    "ISO2": "EE"
  },
  {
    "Country": "Etiyopya",
    "Slug": "ethiopia",
    "ISO2": "ET"
  },  
  {
    "Country": "Finlandiya",
    "Slug": "finland",
    "ISO2": "FI"
  },
  {
    "Country": "Fas",
    "Slug": "morocco",
    "ISO2": "MA"
  },
  {
    "Country": "Fiji",
    "Slug": "fiji",
    "ISO2": "FJ"
  },  
  {
    "Country": "Fransa",
    "Slug": "france",
    "ISO2": "FR"
  },
  {
    "Country": "Filipinler",
    "Slug": "philippines",
    "ISO2": "PH"
  },
  {
    "Country": "Fildişi Sahili",
    "Slug": "cote-divoire",
    "ISO2": "CI"
  },    
 {
    "Country": "Filistin",
    "Slug": "palestine",
    "ISO2": "PS"
  },
  {
    "Country": "Gambiya",
    "Slug": "gambia",
    "ISO2": "GM"
  },
  {
    "Country": "Gana",
    "Slug": "ghana",
    "ISO2": "GH"
  },  
  {
    "Country": "Gine",
    "Slug": "guinea",
    "ISO2": "GN"
  },
  {
    "Country": "Güney Afrika",
    "Slug": "south-africa",
    "ISO2": "ZA"
  },
  {
    "Country": "Guyana",
    "Slug": "guyana",
    "ISO2": "GY"
  },
  {
    "Country": "Güney Sudan",
    "Slug": "south-sudan",
    "ISO2": "SS"
  },  
  {
    "Country": "Gürcistan",
    "Slug": "georgia",
    "ISO2": "GE"
  },    

  {
    "Country": "Güney Kore",
    "Slug": "korea-south",
    "ISO2": "KR"
  },
       
  {
    "Country": "Granada",
    "Slug": "grenada",
    "ISO2": "GD"
  },
  {
    "Country": "Grönland",
    "Slug": "greenland",
    "ISO2": "GL"
  },
  {
    "Country": "Guam",
    "Slug": "guam",
    "ISO2": "GU"
  }, 
  {
    "Country": "Guatemala",
    "Slug": "guatemala",
    "ISO2": "GT"
  },  
  {
    "Country": "Haiti",
    "Slug": "haiti",
    "ISO2": "HT"
  },    
  {
    "Country": "Hırvatistan",
    "Slug": "croatia",
    "ISO2": "HR"
  },
  {
    "Country": "Hindistan",
    "Slug": "india",
    "ISO2": "IN"
  },   
  {
    "Country": "Hollanda",
    "Slug": "netherlands",
    "ISO2": "NL"
  },
  {
    "Country": "Honduras",
    "Slug": "honduras",
    "ISO2": "HN"
  },  
  {
    "Country": "Hong Kong",
    "Slug": "hong-kong-sar-china",
    "ISO2": "HK"
  },
  {
    "Country": "Irak",
    "Slug": "iraq",
    "ISO2": "IQ"
  },  
  {
    "Country": "İngiltere",
    "Slug": "united-kingdom",
    "ISO2": "GB"
  },  
  {
    "Country": "İran",
    "Slug": "iran",
    "ISO2": "IR"
  },
  {
    "Country": "İrlanda",
    "Slug": "ireland",
    "ISO2": "IE"
  },
  {
    "Country": "İspanya",
    "Slug": "spain",
    "ISO2": "ES"
  },
  {
    "Country": "İsveç",
    "Slug": "sweden",
    "ISO2": "SE"
  },    
  {
    "Country": "İtalya",
    "Slug": "italy",
    "ISO2": "IT"
  },  
  {
    "Country": "İzlanda",
    "Slug": "iceland",
    "ISO2": "IS"
  },
  {
    "Country": "İsrail",
    "Slug": "israel",
    "ISO2": "IL"
  },
    {
    "Country": "İsviçre",
    "Slug": "switzerland",
    "ISO2": "CH"
  }, 
  {
    "Country": "Japonya",
    "Slug": "japan",
    "ISO2": "JP"
  },
  {
    "Country": "Jamaika",
    "Slug": "jamaica",
    "ISO2": "JM"
  },
    {
    "Country": "Kamboçya",
    "Slug": "cambodia",
    "ISO2": "KH"
  },     
    {
    "Country": "Kemarun",
    "Slug": "cameroon",
    "ISO2": "CM"
  },
  {
    "Country": "Kanada",
    "Slug": "canada",
    "ISO2": "CA"
  },
  {
    "Country": "Karadağ",
    "Slug": "montenegro",
    "ISO2": "ME"
  },
  {
    "Country": "Katar",
    "Slug": "qatar",
    "ISO2": "QA"
  },   
  {
    "Country": "Kazakistan",
    "Slug": "kazakhstan",
    "ISO2": "KZ"
  },     
  {
    "Country": "Kenya",
    "Slug": "kenya",
    "ISO2": "KE"
  },

  {
    "Country": "Kıbrıs",
    "Slug": "cyprus",
    "ISO2": "CY"
  },  
  {
    "Country": "Kırgızistan",
    "Slug": "kyrgyzstan",
    "ISO2": "KG"
  },  
  {
    "Country": "Kosova",
    "Slug": "kosovo",
    "ISO2": "XK"
  }, 
  {
    "Country": "Kosta Rika",
    "Slug": "costa-rica",
    "ISO2": "CR"
  },   
  {
    "Country": "Küba",
    "Slug": "cuba",
    "ISO2": "CU"
  },
  {
    "Country": "Kongo",
    "Slug": "congo-kinshasa",
    "ISO2": "CD"
  },
  {
    "Country": "Kolombiya",
    "Slug": "colombia",
    "ISO2": "CO"
  },  
  {
    "Country": "Kuveyt",
    "Slug": "kuwait",
    "ISO2": "KW"
  },
  {
    "Country": "Kuzey Kore",
    "Slug": "korea-north",
    "ISO2": "KP"
  },  
  {
    "Country": "Liberya",
    "Slug": "liberia",
    "ISO2": "LR"
  },   
  {
    "Country": "Libya",
    "Slug": "libya",
    "ISO2": "LY"
  },  
  {
    "Country": "Litvanya",
    "Slug": "lithuania",
    "ISO2": "LT"
  },
  {
    "Country": "Lihtenştayn",
    "Slug": "liechtenstein",
    "ISO2": "LI"
  },  
  {
    "Country": "Lativya",
    "Slug": "latvia",
    "ISO2": "LV"
  },   
  {
    "Country": "Lübnan",
    "Slug": "lebanon",
    "ISO2": "LB"
  },
  {
    "Country": "Lüksemburg",
    "Slug": "luxembourg",
    "ISO2": "LU"
  },
  {
    "Country": "Macaristan",
    "Slug": "hungary",
    "ISO2": "HU"
  },

  {
    "Country": "Mikronezya",
    "Slug": "micronesia",
    "ISO2": "FM"
  },       
  {
    "Country": "Madagaskar",
    "Slug": "madagascar",
    "ISO2": "MG"
  },  
  {
    "Country": "Makedonya",
    "Slug": "macedonia",
    "ISO2": "MK"
  },  
  {
    "Country": "Maldivler",
    "Slug": "maldives",
    "ISO2": "MV"
  },  
  {
    "Country": "Martinik",
    "Slug": "martinique",
    "ISO2": "MQ"
  },
  {
    "Country": "Malezya",
    "Slug": "malaysia",
    "ISO2": "MY"
  },
  {
    "Country": "Mali",
    "Slug": "mali",
    "ISO2": "ML"
  },  
  {
    "Country": "Malta",
    "Slug": "malta",
    "ISO2": "MT"
  },
  {
    "Country": "Meksika",
    "Slug": "mexico",
    "ISO2": "MX"
  },
  {
    "Country": "Mısır",
    "Slug": "egypt",
    "ISO2": "EG"
  },   
  {
    "Country": "Moldova",
    "Slug": "moldova",
    "ISO2": "MD"
  },
  {
    "Country": "Monako",
    "Slug": "monaco",
    "ISO2": "MC"
  },  
  {
    "Country": "Moğolistan",
    "Slug": "mongolia",
    "ISO2": "MN"
  },
  {
    "Country": "Moritanya",
    "Slug": "mauritania",
    "ISO2": "MR"
  },
  {
    "Country": "Mozambik",
    "Slug": "mozambique",
    "ISO2": "MZ"
  },  
 {
    "Country": "Myanmar",
    "Slug": "myanmar",
    "ISO2": "MM"
  },
  {
    "Country": "Nabibya",
    "Slug": "namibia",
    "ISO2": "NA"
  },
  {
    "Country": "Nepal",
    "Slug": "nepal",
    "ISO2": "NP"
  },  
 {
    "Country": "Nijer",
    "Slug": "niger",
    "ISO2": "NE"
  },
    {
    "Country": "Nijerya",
    "Slug": "nigeria",
    "ISO2": "NG"
  },
 {
    "Country": "Nikaraguay",
    "Slug": "nicaragua",
    "ISO2": "NI"
  },          
  {
    "Country": "Norveç",
    "Slug": "norway",
    "ISO2": "NO"
  },
  {
    "Country": "Orta Afrika Cumhuriyeti",
    "Slug": "central-african-republic",
    "ISO2": "CF"
  },  
  {
    "Country": "Özbekistan",
    "Slug": "uzbekistan",
    "ISO2": "UZ"
  },  
  {
    "Country": "Panama",
    "Slug": "panama",
    "ISO2": "PA"
  },
  {
    "Country": "Pakistan",
    "Slug": "pakistan",
    "ISO2": "PK"
  },
  {
    "Country": "Papua Yeni Gine",
    "Slug": "papua-new-guinea",
    "ISO2": "PG"
  },  
  {
    "Country": "Paraguay",
    "Slug": "paraguay",
    "ISO2": "PY"
  },
  {
    "Country": "Peru",
    "Slug": "peru",
    "ISO2": "PE"
  },  
  {
    "Country": "Porto Riko",
    "Slug": "puerto-rico",
    "ISO2": "PR"
  },  
  {
    "Country": "Polonya",
    "Slug": "poland",
    "ISO2": "PL"
  },
  {
    "Country": "Portekiz",
    "Slug": "portugal",
    "ISO2": "PT"
  },  
  {
    "Country": "Romanya",
    "Slug": "romania",
    "ISO2": "RO"
  },
  {
    "Country": "Ruanda",
    "Slug": "rwanda",
    "ISO2": "RW"
  },  
  {
    "Country": "Rusya",
    "Slug": "russia",
    "ISO2": "RU"
  },
  {
    "Country": "Senegal",
    "Slug": "senegal",
    "ISO2": "SN"
  },   
  {
    "Country": "Singapur",
    "Slug": "singapore",
    "ISO2": "SG"
  },
  {
    "Country": "Somali",
    "Slug": "somalia",
    "ISO2": "SO"
  },

  {
    "Country": "Surinam",
    "Slug": "suriname",
    "ISO2": "SR"
  },  
  {
    "Country": "Suudi Arabistan",
    "Slug": "saudi-arabia",
    "ISO2": "SA"
  },  
  {
    "Country": "Slovakya",
    "Slug": "slovakia",
    "ISO2": "SK"
  },  
  {
    "Country": "Slovenya",
    "Slug": "slovenia",
    "ISO2": "SI"
  },
  {
    "Country": "Sırbistan",
    "Slug": "serbia",
    "ISO2": "RS"
  },  
  {
    "Country": "Suriye",
    "Slug": "syria",
    "ISO2": "SY"
  },
  {
    "Country": "Sudan",
    "Slug": "sudan",
    "ISO2": "SD"
  },
   {
    "Country": "Sri Lanka",
    "Slug": "sri-lanka",
    "ISO2": "LK"
  },
  {
    "Country": "Şeyseller",
    "Slug": "seychelles",
    "ISO2": "SC"
  },  
  {
    "Country": "Şili",
    "Slug": "chile",
    "ISO2": "CL"
  },  
  {
    "Country": "Tanzanya",
    "Slug": "tanzania",
    "ISO2": "TZ"
  },  
  {
    "Country": "Tayvan",
    "Slug": "taiwan",
    "ISO2": "TW"
  },  
  {
    "Country": "Tayland",
    "Slug": "thailand",
    "ISO2": "TH"
  },  
  {
    "Country": "Timor-Leste",
    "Slug": "timor-leste",
    "ISO2": "TL"
  },
  {
    "Country": "Tunus",
    "Slug": "tunisia",
    "ISO2": "TN"
  },


  {
    "Country": "Comoros",
    "Slug": "comoros",
    "ISO2": "KM"
  },




  {
    "Country": "Türkmenistan",
    "Slug": "turkmenistan",
    "ISO2": "TM"
  },


  {
    "Country": "Tonga",
    "Slug": "tonga",
    "ISO2": "TO"
  },
  {
    "Country": "Uganda",
    "Slug": "uganda",
    "ISO2": "UG"
  },
  {
    "Country": "Ukrayna",
    "Slug": "ukraine",
    "ISO2": "UA"
  },  
  {
    "Country": "Uruguay",
    "Slug": "uruguay",
    "ISO2": "UY"
  },  
  {
    "Country": "Ürdün",
    "Slug": "jordan",
    "ISO2": "JO"
  },
  {
    "Country": "Umman",
    "Slug": "oman",
    "ISO2": "OM"
  },

  {
    "Country": "Vatikan Devleti",
    "Slug": "holy-see-vatican-city-state",
    "ISO2": "VA"
  },
  {
    "Country": "Venezüella",
    "Slug": "venezuela",
    "ISO2": "VE"
  },      
  {
    "Country": "Vietnam",
    "Slug": "vietnam",
    "ISO2": "VN"
  },
  {
    "Country": "Yemen",
    "Slug": "yemen",
    "ISO2": "YE"
  },   
  {
    "Country": "Yeni Zelanda",
    "Slug": "new-zealand",
    "ISO2": "NZ"
  },
  {
    "Country": "Yunanistan",
    "Slug": "greece",
    "ISO2": "GR"
  },
  {
    "Country": "Zambiya",
    "Slug": "zambia",
    "ISO2": "ZM"
  },
  {
    "Country": "Zimbabve",
    "Slug": "zimbabwe",
    "ISO2": "ZW"
  },  


  {
    "Country": "Réunion Adası",
    "Slug": "réunion",
    "ISO2": "RE"
  },




  {
    "Country": "Fransız Guyanası",
    "Slug": "french-guiana",
    "ISO2": "GF"
  },
 {
    "Country": "Solomon Adaları",
    "Slug": "solomon-islands",
    "ISO2": "SB"
  },



  {
    "Country": "Lesoto",
    "Slug": "lesotho",
    "ISO2": "LS"
  },

  {
    "Country": "Saint Helena",
    "Slug": "saint-helena",
    "ISO2": "SH"
  },  

  {
    "Country": "Nauru",
    "Slug": "nauru",
    "ISO2": "NR"
  },

  {
    "Country": "Guadeloupe",
    "Slug": "guadeloupe",
    "ISO2": "GP"
  },
  {
    "Country": "Malavi",
    "Slug": "malawi",
    "ISO2": "MW"
  },
  {
    "Country": "Togo",
    "Slug": "togo",
    "ISO2": "TG"
  },


  {
    "Country": "Guernsey Adası",
    "Slug": "guernsey",
    "ISO2": "GG"
  },
   {
    "Country": "Bouvet Adası",
    "Slug": "bouvet-island",
    "ISO2": "BV"
  },
  {
    "Country": "Montserrat",
    "Slug": "montserrat",
    "ISO2": "MS"
  },
  {
    "Country": "Niue",
    "Slug": "niue",
    "ISO2": "NU"
  },

  
  {
    "Country": "Anguilla Adası",
    "Slug": "anguilla",
    "ISO2": "AI"
  },    
  {
    "Country": "Cocos (Keeling) Adaları",
    "Slug": "cocos-keeling-islands",
    "ISO2": "CC"
  },

  {
    "Country": "Kiribati",
    "Slug": "kiribati",
    "ISO2": "KI"
  },

  {
    "Country": "Kongo Cumhuriyeti",
    "Slug": "congo-brazzaville",
    "ISO2": "CG"
  },


  {
    "Country": "Isle of Man Adası",
    "Slug": "isle-of-man",
    "ISO2": "IM"
  },

 
  {
    "Country": "Saint Kitts ve Nevis",
    "Slug": "saint-kitts-and-nevis",
    "ISO2": "KN"
  },
  {
    "Country": "Vanatu",
    "Slug": "vanuatu",
    "ISO2": "VU"
  },
  {
    "Country": "Tacikistan",
    "Slug": "tajikistan",
    "ISO2": "TJ"
  }, 

  {
    "Country": "Samoa",
    "Slug": "samoa",
    "ISO2": "WS"
  },



  {
    "Country": "Cape Verde Adaları",
    "Slug": "cape-verde",
    "ISO2": "CV"
  },

  {
    "Country": "Lao PDR",
    "Slug": "lao-pdr",
    "ISO2": "LA"
  },

  {
    "Country": "Swaziland",
    "Slug": "swaziland",
    "ISO2": "SZ"
  },



  {
    "Country": "Sierra Leone",
    "Slug": "sierra-leone",
    "ISO2": "SL"
  },
  {
    "Country": "Cibati",
    "Slug": "djibouti",
    "ISO2": "DJ"
  },


  {
    "Country": "Yeni Kaledonya",
    "Slug": "new-caledonia",
    "ISO2": "NC"
  },
  {
    "Country": "Amerikan Samoa",
    "Slug": "american-samoa",
    "ISO2": "AS"
  },


  {
    "Country": "Gabon",
    "Slug": "gabon",
    "ISO2": "GA"
  },
  {
    "Country": "Heard and Mcdonald Islands",
    "Slug": "heard-and-mcdonald-islands",
    "ISO2": "HM"
  },
  {
    "Country": "Mayotte",
    "Slug": "mayotte",
    "ISO2": "YT"
  },
 
  {
    "Country": "Batı Sahara",
    "Slug": "western-sahara",
    "ISO2": "EH"
  },
  {
    "Country": "Barbados",
    "Slug": "barbados",
    "ISO2": "BB"
  },


  {
    "Country": "Fransız Polinezyası",
    "Slug": "french-polynesia",
    "ISO2": "PF"
  },

  {
    "Country": "Bermuda",
    "Slug": "bermuda",
    "ISO2": "BM"
  },

 
  {
    "Country": "Antika ve Barbuda",
    "Slug": "antigua-and-barbuda",
    "ISO2": "AG"
  },
  {
    "Country": "Burundi",
    "Slug": "burundi",
    "ISO2": "BI"
  },
  {
    "Country": "Tuvalu",
    "Slug": "tuvalu",
    "ISO2": "TV"
  },
  {
    "Country": "Trinidad ve Tobago",
    "Slug": "trinidad-and-tobago",
    "ISO2": "TT"
  },



  {
    "Country": "Jersey Adası",
    "Slug": "jersey",
    "ISO2": "JE"
  },

  {
    "Country": "San Marino",
    "Slug": "san-marino",
    "ISO2": "SM"
  },

  {
    "Country": "Mauritius",
    "Slug": "mauritius",
    "ISO2": "MU"
  },

  {
    "Country": "Marshall Adaları",
    "Slug": "marshall-islands",
    "ISO2": "MH"
  },
  {
    "Country": "Aruba",
    "Slug": "aruba",
    "ISO2": "AW"
  },

  {
    "Country": "Makao, (Çin İdari Bölgesi)",
    "Slug": "macao-sar-china",
    "ISO2": "MO"
  },

  {
    "Country": "Virjin Adaları",
    "Slug": "virgin-islands",
    "ISO2": "VI"
  },
  {
    "Country": "Faroe Adaları",
    "Slug": "faroe-islands",
    "ISO2": "FO"
  },
  {
    "Country": "Cayman Adaları",
    "Slug": "cayman-islands",
    "ISO2": "KY"
  },  
  {
    "Country": "Güney Sandviç Adaları",
    "Slug": "south-georgia-and-the-south-sandwich-islands",
    "ISO2": "GS"
  },  
  {
    "Country": "Guinea-Bissau Cumhuriyeti",
    "Slug": "guinea-bissau",
    "ISO2": "GW"
  },
  {
    "Country": "Saint Pierre ve Miquelon",
    "Slug": "saint-pierre-and-miquelon",
    "ISO2": "PM"
  },    
  {
    "Country": "Svalbard ve Jan Mayen Adaları",
    "Slug": "svalbard-and-jan-mayen-islands",
    "ISO2": "SJ"
  },
  {
    "Country": "Kuzey Mariana Adaları",
    "Slug": "northern-mariana-islands",
    "ISO2": "MP"
  },
  {
    "Country": "Falkland Adaları",
    "Slug": "falkland-islands-malvinas",
    "ISO2": "FK"
  },
  {
    "Country": "Christmas Adası",
    "Slug": "christmas-island",
    "ISO2": "CX"
  },
  {
    "Country": "Britanya Hint Okyanusu Toprakları",
    "Slug": "british-indian-ocean-territory",
    "ISO2": "IO"
  },
  {
    "Country": "Hollanda Antilleri",
    "Slug": "netherlands-antilles",
    "ISO2": "AN"
  },
  {
    "Country": "Palau Adası",
    "Slug": "palau",
    "ISO2": "PW"
  },    
  {
    "Country": "Tokelau Adaları",
    "Slug": "tokelau",
    "ISO2": "TK"
  },  
  {
    "Country": "Turks ve Caicos Adaları",
    "Slug": "turks-and-caicos-islands",
    "ISO2": "TC"
  },  
  {
    "Country": "Outlying Adaları",
    "Slug": "us-minor-outlying-islands",
    "ISO2": "UM"
  },
  {
    "Country": "Fransız Güney Toprakları",
    "Slug": "french-southern-territories",
    "ISO2": "TF"
  },  
  {
    "Country": "Pitcairn Adaları",
    "Slug": "pitcairn",
    "ISO2": "PN"
  },
  {
    "Country": "İngiliz Virjin Adaları",
    "Slug": "british-virgin-islands",
    "ISO2": "VG"
  },
  {
    "Country": "Azia Lucia",
    "Slug": "saint-lucia",
    "ISO2": "LC"
  },
  {
    "Country": "Aziz Vincent ve Granada",
    "Slug": "saint-vincent-and-the-grenadines",
    "ISO2": "VC"
  },
  {
    "Country": "Aziz Bartelamos Adası",
    "Slug": "saint-barthélemy",
    "ISO2": "BL"
  },
  {
    "Country": "Cook Adaları",
    "Slug": "cook-islands",
    "ISO2": "CK"
  },
  {
    "Country": "Norfolk Adası",
    "Slug": "norfolk-island",
    "ISO2": "NF"
  },
  {
    "Country": "Sao Tome ve Principe",
    "Slug": "sao-tome-and-principe",
    "ISO2": "ST"
  },
  {
    "Country": "ALA Aland Adaları",
    "Slug": "ala-aland-islands",
    "ISO2": "AX"
  },
  {
    "Country": "Wallis ve Futuna Adaları",
    "Slug": "wallis-and-futuna-islands",
    "ISO2": "WF"
  },
  {
    "Country": "Saint-Martin Adası",
    "Slug": "saint-martin-french-part",
    "ISO2": "MF"
  },    
],
      messages: [],
      months: [ "", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
      day: {
          Date: 'Son 90 Gün',
          value: '01',
          selected: false
        },
      day_1: '',
      day_2: '',
      day_3: '',
      day_4: '',
      day_5: '',
      day_6: '',
      day_7: '',
      day_8: '',
      day_9: '',
      day_10: '',      
      day_11: '',
      day_12: '',
      day_13: '',
      day_14: '',
      day_15: '',
      day_16: '',
      day_17: '',
      day_18: '',
      day_19: '',
      day_20: '',
      day_21: '',
      day_22: '',
      day_23: '',
      day_24: '',
      day_25: '',
      day_26: '',
      day_27: '',
      day_28: '',
      day_29: '',
      day_30: '',
      day_31: '',
      day_1_pre: '',
      day_2_pre: '',
      day_3_pre: '',
      day_4_pre: '',
      day_5_pre: '',
      day_6_pre: '',
      day_7_pre: '',
      day_8_pre: '',
      day_9_pre: '',
      day_10_pre: '',      
      day_11_pre: '',
      day_12_pre: '',
      day_13_pre: '',
      day_14_pre: '',
      day_15_pre: '',
      day_16_pre: '',
      day_17_pre: '',
      day_18_pre: '',
      day_19_pre: '',
      day_20_pre: '',
      day_21_pre: '',
      day_22_pre: '',
      day_23_pre: '',
      day_24_pre: '',
      day_25_pre: '',
      day_26_pre: '',
      day_27_pre: '',
      day_28_pre: '',
      day_29_pre: '',
      day_30_pre: '',    
      day_31_pre: '',                 
      day_1_pre2: '',
      day_2_pre2: '',
      day_3_pre2: '',
      day_4_pre2: '',
      day_5_pre2: '',
      day_6_pre2: '',
      day_7_pre2: '',
      day_8_pre2: '',
      day_9_pre2: '',
      day_10_pre2: '',      
      day_11_pre2: '',
      day_12_pre2: '',
      day_13_pre2: '',
      day_14_pre2: '',
      day_15_pre2: '',
      day_16_pre2: '',
      day_17_pre2: '',
      day_18_pre2: '',
      day_19_pre2: '',
      day_20_pre2: '',
      day_21_pre2: '',
      day_22_pre2: '',
      day_23_pre2: '',
      day_24_pre2: '',
      day_25_pre2: '',
      day_26_pre2: '',
      day_27_pre2: '',
      day_28_pre2: '',
      day_29_pre2: '',
      day_30_pre2: '',
      day_31_pre2: '',  
      day_1_pre3: '',
      day_2_pre3: '',
      day_3_pre3: '',
      day_4_pre3: '',
      day_5_pre3: '',
      day_6_pre3: '',
      day_7_pre3: '',
      day_8_pre3: '',
      day_9_pre3: '',
      day_10_pre3: '',      
      day_11_pre3: '',
      day_12_pre3: '',
      day_13_pre3: '',
      day_14_pre3: '',
      day_15_pre3: '',
      day_16_pre3: '',
      day_17_pre3: '',
      day_18_pre3: '',
      day_19_pre3: '',
      day_20_pre3: '',
      day_21_pre3: '',
      day_22_pre3: '',
      day_23_pre3: '',
      day_24_pre3: '',
      day_25_pre3: '',
      day_26_pre3: '',
      day_27_pre3: '',
      day_28_pre3: '',
      day_29_pre3: '',
      day_30_pre3: '',    
      day_31_pre3: '',       
      week1_pre: '',
      week2_pre: '',
      week3_pre: '',
      week4_pre: '',
      week1_pre2: '',
      week2_pre2: '',
      week4_pre2: '',   
      week1_pre3: '',
      week4_pre3: '',        
      week1: '',
      week2: '',
      week3: '',
      week4: '', 
      week5: '',
      week6: '',
      week7: '', 
      week8: '',
      week9: '', 
      week10: '',
      week11: '',
      week12: '', 
      week13: '',  
      week14: '', 
      week15: '',     
      week16: '',   
      week1Data: 0,
      week2Data: 0,
      week3Data: 0,
      week4Data: 0,

      week1Data_pre: 0,
      week2Data_pre: 0,
      week3Data_Pre: 0,
      week4Data_pre: 0,

      week1Data_pre2: 0,
      week2Data_pre2: 0,
      week4Data_pre2: 0, 

      week1Data_pre3: 0,
      week4Data_pre3: 0,      
      week1DataC: 0,
      week2DataC: 0,
      week3DataC: 0,
      week4DataC: 0,
      week1DataC_pre: 0,
      week2DataC_pre: 0,
      week3DataC_Pre: 0,
      week4DataC_pre: 0,
      week1DataC_pre2: 0,
      week4DataC_pre2: 0,
      week1DataC_pre3: 0,
      week4DataC_pre3: 0,      
      week1DataY: 0,
      week2DataY: 0,
      week3DataY: 0,
      week4DataY: 0,
      week1DataY_pre: 0,
      week2DataY_pre: 0,
      week3DataY_Pre: 0,
      week4DataY_pre: 0,
      week1DataY_pre2: 0,
      week4DataY_pre2: 0,      
      data: [],
      data2: [],
      dataC: [],
      dataY: [],
      id: null,
      clickNumber: 0,
      commentNumber: 0,
      messageNumber:0,
      days1: 'Ağustos-Eylül',
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      Ocak1: 0,
      Ocak15: 0,
      Subat1:0,
      Mart1: 0,
      Nisan1: 0,
      Mayis1:0,
      Haziran1: 0,
      Temmuz1: 0,
      Temmuz8: 0,
      Temmuz15: 0,
      Temmuz22: 0,
      Temmuz29: 0,
      Agustos1: 0,
      Agustos5: 0,
      Agustos12: 0,
      Agustos19: 0,
      Agustos26: 0,
      Eylul2:0,
      Eylul9:0,
      Ekim1: 0,
      Kasim1: 0,
      Aralik31:0,
      Temmuz1cl: 0,
      Temmuz8cl: 0,
      Temmuz15cl: 0,
      Temmuz22cl: 0,
      Temmuz29cl: 0,
      Agustos1cl: 0,
      Agustos5cl: 0,
      Agustos12cl: 0,
      Agustos19cl: 0,
      Agustos26cl: 0,
      Eylul2cl: 0,
      Eylul9cl: 0,
      Temmuz1c: 0,
      Temmuz8c: 0,
      Temmuz15c: 0,
      Temmuz22c: 0,
      Temmuz29c: 0,
      Agustos1c: 0,
      Agustos5c: 0,
      Agustos12c: 0,
      Agustos19c: 0,
      Agustos26c: 0,
      Eylul2c: 0,
      Eylul9c: 0,
      totalView: 0,
      logo: '',
      offers: [],
      adverts: [],
      messages: [],
      dorms: [],
      errors: [],
      statistics: true,
      dormStats: [],
      dormStat: {counts:{}},
      mail: '',
      logo: '',
      days2: [
        {
          label: '30',
          value: '01',
          selected: false
        },
        {
          label: '60',
          value: '02',
          selected: false
        },
        {
          label: '90',
          value: '03',
          selected: false
        }
      ],      
      links: [
        {
          id: 0,
          title: 'İstatistik Sımmary',
          to: '/yurtlar-istatistik'
        },
        {
          id: 1,
          title: 'Info',
          to: '/yurt-hesap-bilgileri'
        },
        {
          id: 2,
          title: 'Rezervations',
          to: '/kullanici-teklifler'
        },
        {
          id: 3,
          title: 'Messages',
          to: '/mesaj-liste'
        },
        {
          id: 4,
          title: 'Data',
          to: '/yurt-sube'
        },
        {
          id: 5,
          title: 'Ads',
          to: '/kullanici-favoriler'
        },
        {
          id: 6,
          title: 'Comments',
          to: '/yurtlar-yorumlar'
        }
      ],
      days: [
/*         {
          name: 'Temmuz-Ağustos',
          value: '01',
          selected: false
        },
        {
          name: 'Ağustos-Eylül',
          value: '02',
          selected: true
        }
         , */
        {
          Date: 'Son 1 Hafta',
          value: '01',
          selected: false
        },
        {
          Date: 'Son 2 Hafta',
          value: '03',
          selected: false
        },              
        {
          Date: 'Son 30 Gün',
          value: '04',
          selected: false
        },
        {
          Date: 'Son 60 Gün',
          value: '05',
          selected: false
        },            
        {
          Date: 'Son 90 Gün',
          value: '06',
          selected: false
        },
        {
          Date: 'Son 120 Gün',
          value: '07',
          selected: false
        },                            
      ],    
      options: {
        chart: {
          id: 'chart1',
          type: 'donut'
        },
        xaxis: {
          //categories: [ '1-7 Temmuz', '8-14 Temmuz','15-21 Temmuz', '22-28 Temmuz', '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos','19-25 Ağustos', '26-31 Ağustos']
      //  categories: [ '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos','19-25 Ağustos', '26-31 Ağustos','2-8 Eylül','9-15 Eylül']
        categories: [ this.week1, this.week2, this.week3, this.week4, this.week5]
        }
      },       
      optionsTemmuzAgustos: {
        chart: {
          id: 'vuechart-example',
          type: 'donut'
        },
        xaxis: {
          categories: ['1-7 Temmuz', '8-14 Temmuz','15-21 Temmuz', '22-28 Temmuz', '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos'] ///,'19-25 Ağustos'
        }
      },    
      options90: {
        chart: {
          id: 'vuechart-example',
          type: 'donut'
        },
        xaxis: {
         // categories: [ 'Haziran1','Haziran2','Haziran3','Haziran3','1-7 Temmuz', '8-14 Temmuz','15-21 Temmuz', '22-28 Temmuz', '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos','19-25 Ağustos']
        categories: [ '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos','19-25 Ağustos', '26-31 Ağustos','2-8 Eylül','9-15 Eylül']
        }         
      },        
      series: [ {
        name: 'Enfekte',
        data: [ 0, 20, 20, 0, 0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
      },{
        name: 'İyileşen',
        data: [ 0, 10, 10, 0,0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Aktif Vaka',
        data: [ 5, 5, 0, 0,0,],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Ölü',
        data: [ 25, 45, 15, 55,25],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }    
      ]   

    }
  },
  methods: {
    getSummary () {  
      let self = this
      axios.get(`/summary`)
        .then(response => {
          self.liveData = response.data.Global //.reverse()  
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getCountryTotal (opt) {  
      this.country = opt.Country
      let self = this
      axios.get(`/total/country/${opt.Slug}`)
        .then(response => {
          self.countryTotal = response.data //.reverse()
          self.changeData(opt)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },     
     getInfectionNumbers(opt) {
      let self = this
      axios.get(`/country/${opt.Slug}/status/confirmed?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.ConfirmedCases = response.data
          /*
          self.ConfirmedCases.map((content, index, array) => {
            if(array[index+1]) {
              self.ConfirmedCases[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxInfection = self.ConfirmedCases.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })*/
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getDeath(opt) {
      let self = this
      axios.get(`/country/${opt.Slug}/status/deaths?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataDeath = response.data
/*
          self.covidDataDeath.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataDeath[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxDeath = self.covidDataDeath.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })*/
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
     getRecovered(opt) {
      let self = this
      axios.get(`/country/${opt.Slug}/status/recovered?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataRecovered = response.data
/*
          self.covidDataRecovered.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataRecovered[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxRecovered = self.covidDataRecovered.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })*/
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
     getActive(opt) {
      let self = this
      axios.get(`/country/${opt.Slug}/status/confirmed?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataActive = response.data
        /*
          self.covidDataActive.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataActive[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxActive = self.covidDataActive.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })*/
        })
        .catch(e => {
          this.errors.push(e)
        })
    },          
    selectCountry(opt) {
      this.country = opt.Country
      this.getCountryTotal(opt)
      /*
      this.getInfectionNumbers(opt)
      this.getActive(opt)
      this.getDeath(opt)
      this.getRecovered(opt)
      this.getCountryTotal(opt)
      this.changeData(this.opt)
     // this.selectDays(opt)

      */
      let self = this
      axios.get(`/country/${opt.Slug}`)
        .then(response => {
        //  self.liveData = response.data[[response.data.length-2]]
        //  self.days = response.data
          /*
           response.data.forEach((data) => {
            newdate = data.Date
           // newdata.Date = newdate.Replace('T00:00:00Z','')
             self.days.push(data)
            })*/
        })
        .catch(e => {
          this.errors.push(e)
        })


    },    
    getCountries() {
      let self = this
      axios.get(`/countries`)
        .then(response => {
          self.countries = response.data
            })
        .catch(e => {
          this.errors.push(e)
        })
    },    
changeData_AgustosEylul() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1, this.week2, this.week3, this.week4, this.week5,'2-8 Eylül','9-15 Eylül']
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ '0', '0', '0', '0','0', '0', '0']
    }
  ]);
},
changeData(opt) {
this.day = opt

  if(opt.Date == 'Son 30 Gün') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-29].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-27].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-25].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-23].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-21].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-19].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-17].Date).format('MM/DD')
    this.week8 = Moment(this.countryTotal[this.countryTotal.length-15].Date).format('MM/DD')
    this.week9 = Moment(this.countryTotal[this.countryTotal.length-13].Date).format('MM/DD') //.toISOString().split('T')[0]
    this.week10 = Moment(this.countryTotal[this.countryTotal.length-11].Date).format('MM/DD')
    this.week11 = Moment(this.countryTotal[this.countryTotal.length-9].Date).format('MM/DD')
    this.week12 = Moment(this.countryTotal[this.countryTotal.length-7].Date).format('MM/DD')
    this.week13 = Moment(this.countryTotal[this.countryTotal.length-5].Date).format('MM/DD')
    this.week14 = Moment(this.countryTotal[this.countryTotal.length-3].Date).format('MM/DD')
    this.week15 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')

    this.day1 = this.countryTotal.length-29
    this.day2 = this.countryTotal.length-27
    this.day3 = this.countryTotal.length-25
    this.day4 = this.countryTotal.length-23
    this.day5 = this.countryTotal.length-21
    this.day6 = this.countryTotal.length-19
    this.day7 = this.countryTotal.length-17
    this.day8 = this.countryTotal.length-15
    this.day9 = this.countryTotal.length-13
    this.day10 = this.countryTotal.length-11 
    this.day11 = this.countryTotal.length-9  
    this.day12 = this.countryTotal.length-7
    this.day13 = this.countryTotal.length-5
    this.day14 = this.countryTotal.length-3
    this.day15 = this.countryTotal.length-1
  }  
  else if(opt.Date == 'Son 60 Gün') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-60].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-56].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-52].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-48].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-44].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-40].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-36].Date).format('MM/DD')
    this.week8 = Moment(this.countryTotal[this.countryTotal.length-32].Date).format('MM/DD')
    this.week9 = Moment(this.countryTotal[this.countryTotal.length-28].Date).format('MM/DD')
    this.week10 = Moment(this.countryTotal[this.countryTotal.length-24].Date).format('MM/DD')
    this.week11 = Moment(this.countryTotal[this.countryTotal.length-20].Date).format('MM/DD')
    this.week12 = Moment(this.countryTotal[this.countryTotal.length-16].Date).format('MM/DD')
    this.week13 = Moment(this.countryTotal[this.countryTotal.length-12].Date).format('MM/DD')
    this.week14 = Moment(this.countryTotal[this.countryTotal.length-8].Date).format('MM/DD')
    this.week15 = Moment(this.countryTotal[this.countryTotal.length-4].Date).format('MM/DD')

    this.day1 = this.countryTotal.length-60
    this.day2 = this.countryTotal.length-56
    this.day3 = this.countryTotal.length-52
    this.day4 = this.countryTotal.length-48
    this.day5 = this.countryTotal.length-44
    this.day6 = this.countryTotal.length-40
    this.day7 = this.countryTotal.length-36
    this.day8 = this.countryTotal.length-32
    this.day9 = this.countryTotal.length-28
    this.day10 = this.countryTotal.length-24   
    this.day11 = this.countryTotal.length-20   
    this.day12 = this.countryTotal.length-16
    this.day13 = this.countryTotal.length-12   
    this.day14 = this.countryTotal.length-8
    this.day15 = this.countryTotal.length-4        
  } 
  else if(opt.Date == 'Son 90 Gün') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-90].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-79].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-73].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-67].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-61].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-55].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-49].Date).format('MM/DD')
    this.week8 = Moment(this.countryTotal[this.countryTotal.length-43].Date).format('MM/DD')
    this.week9 = Moment(this.countryTotal[this.countryTotal.length-37].Date).format('MM/DD')
    this.week10 = Moment(this.countryTotal[this.countryTotal.length-31].Date).format('MM/DD')
    this.week11 = Moment(this.countryTotal[this.countryTotal.length-25].Date).format('MM/DD')
    this.week12 = Moment(this.countryTotal[this.countryTotal.length-19].Date).format('MM/DD')
    this.week13 = Moment(this.countryTotal[this.countryTotal.length-13].Date).format('MM/DD')
    this.week14 = Moment(this.countryTotal[this.countryTotal.length-7].Date).format('MM/DD')
    this.week15 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')

    this.day1 = this.countryTotal.length-90
    this.day2 = this.countryTotal.length-79
    this.day3 = this.countryTotal.length-73
    this.day4 = this.countryTotal.length-67
    this.day5 = this.countryTotal.length-61
    this.day6 = this.countryTotal.length-55
    this.day7 = this.countryTotal.length-49
    this.day8 = this.countryTotal.length-43
    this.day9 = this.countryTotal.length-37
    this.day10 = this.countryTotal.length-31
    this.day11 = this.countryTotal.length-25  
    this.day12 = this.countryTotal.length-19
    this.day13 = this.countryTotal.length-13 
    this.day14 = this.countryTotal.length-7
    this.day15 = this.countryTotal.length-1
  }
  else if(opt.Date == 'Son 120 Gün') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-120].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-105].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-97].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-89].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-81].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-73].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-65].Date).format('MM/DD')
    this.week8 = Moment(this.countryTotal[this.countryTotal.length-57].Date).format('MM/DD')
    this.week9 = Moment(this.countryTotal[this.countryTotal.length-49].Date).format('MM/DD')
    this.week10 = Moment(this.countryTotal[this.countryTotal.length-41].Date).format('MM/DD')
    this.week11 = Moment(this.countryTotal[this.countryTotal.length-33].Date).format('MM/DD')
    this.week12 = Moment(this.countryTotal[this.countryTotal.length-25].Date).format('MM/DD')
    this.week13 = Moment(this.countryTotal[this.countryTotal.length-17].Date).format('MM/DD')
    this.week14 = Moment(this.countryTotal[this.countryTotal.length-9].Date).format('MM/DD')
    this.week15 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')
 //   this.week16 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')

    this.day1 = this.countryTotal.length-120
    this.day2 = this.countryTotal.length-105
    this.day3 = this.countryTotal.length-97
    this.day4 = this.countryTotal.length-89
    this.day5 = this.countryTotal.length-82
    this.day6 = this.countryTotal.length-73
    this.day7 = this.countryTotal.length-65
    this.day8 = this.countryTotal.length-57
    this.day9 = this.countryTotal.length-49
    this.day10 = this.countryTotal.length-41
    this.day11 = this.countryTotal.length-33
    this.day12 = this.countryTotal.length-25
    this.day13 = this.countryTotal.length-17
    this.day14 = this.countryTotal.length-9
    this.day15 = this.countryTotal.length-1
 //   this.day16 = this.countryTotal.length-1
  }     
  else if(opt.Date == 'Son 1 Hafta') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-7].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-6].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-5].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-4].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-3].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-2].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')

    this.day1 = this.countryTotal.length-7
    this.day2 = this.countryTotal.length-6
    this.day3 = this.countryTotal.length-5
    this.day4 = this.countryTotal.length-4
    this.day5 = this.countryTotal.length-3
    this.day6 = this.countryTotal.length-2
    this.day7 = this.countryTotal.length-1
   
  }
  else if(opt.Date == 'Son 2 Hafta') {
    this.week1 = Moment(this.countryTotal[this.countryTotal.length-14].Date).format('MM/DD')
    this.week2 = Moment(this.countryTotal[this.countryTotal.length-13].Date).format('MM/DD')
    this.week3 = Moment(this.countryTotal[this.countryTotal.length-12].Date).format('MM/DD')
    this.week4 = Moment(this.countryTotal[this.countryTotal.length-11].Date).format('MM/DD')
    this.week5 = Moment(this.countryTotal[this.countryTotal.length-10].Date).format('MM/DD')
    this.week6 = Moment(this.countryTotal[this.countryTotal.length-9].Date).format('MM/DD')
    this.week7 = Moment(this.countryTotal[this.countryTotal.length-8].Date).format('MM/DD')
    this.week8 = Moment(this.countryTotal[this.countryTotal.length-7].Date).format('MM/DD')
    this.week9 = Moment(this.countryTotal[this.countryTotal.length-6].Date).format('MM/DD')
    this.week10 = Moment(this.countryTotal[this.countryTotal.length-5].Date).format('MM/DD')
    this.week11 = Moment(this.countryTotal[this.countryTotal.length-4].Date).format('MM/DD')
    this.week12 = Moment(this.countryTotal[this.countryTotal.length-3].Date).format('MM/DD')
    this.week13 = Moment(this.countryTotal[this.countryTotal.length-2].Date).format('MM/DD')
    this.week14 = Moment(this.countryTotal[this.countryTotal.length-1].Date).format('MM/DD')


    this.day1 = this.countryTotal.length-14
    this.day2 = this.countryTotal.length-13
    this.day3 = this.countryTotal.length-12
    this.day4 = this.countryTotal.length-11
    this.day5 = this.countryTotal.length-10
    this.day6 = this.countryTotal.length-9
    this.day7 = this.countryTotal.length-8
    this.day8 = this.countryTotal.length-7
    this.day9 = this.countryTotal.length-6
    this.day10 = this.countryTotal.length-5
    this.day11 = this.countryTotal.length-4
    this.day12 = this.countryTotal.length-3
    this.day13 = this.countryTotal.length-2
    this.day14 = this.countryTotal.length-1
  } 


/*
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1, this.week2, this.week3, this.week4, this.week5, this.countryTotal[50].Date,this.countryTotal[60].Date, this.countryTotal[70].Date,this.countryTotal[77].Date,this.countryTotal[77].Date]
    }
  });
  */

var dene = this.countryTotal.slice(5)
var dene2 = 2

if(opt.Date == 'Son 1 Hafta') {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1,this.week2, this.week3, this.week4, this.week5, this.week6,this.week7]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ this.countryTotal[this.day1].Confirmed, this.countryTotal[this.day2].Confirmed, this.countryTotal[this.day3].Confirmed, this.countryTotal[this.day4].Confirmed,this.countryTotal[this.day5].Confirmed, this.countryTotal[this.day6].Confirmed,this.countryTotal[this.day7].Confirmed]
    },
    {
      data:[ this.countryTotal[this.day1].Recovered, this.countryTotal[this.day2].Recovered, this.countryTotal[this.day3].Recovered, this.countryTotal[this.day4].Recovered,this.countryTotal[this.day5].Recovered, this.countryTotal[this.day6].Recovered,this.countryTotal[this.day7].Recovered]
    },
    {
      data:[ this.countryTotal[this.day1].Active, this.countryTotal[this.day2].Active, this.countryTotal[this.day3].Active, this.countryTotal[this.day4].Active,this.countryTotal[this.day5].Active, this.countryTotal[this.day6].Active,this.countryTotal[this.day7].Active]
    },
    {
      data:[ this.countryTotal[this.day1].Deaths, this.countryTotal[this.day2].Deaths, this.countryTotal[this.day3].Deaths, this.countryTotal[this.day4].Deaths,this.countryTotal[this.day5].Deaths, this.countryTotal[this.day6].Deaths,this.countryTotal[this.day7].Deaths]
    },           
  ]);
}
else if (opt.Date == 'Son 2 Hafta') {

  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1,this.week2, this.week3, this.week4, this.week5, this.week6,this.week7, this.week8, this.week9, this.week10, this.week11, this.week12, this.week13, this.week14]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ this.countryTotal[this.day1].Confirmed, this.countryTotal[this.day2].Confirmed, this.countryTotal[this.day3].Confirmed, this.countryTotal[this.day4].Confirmed,this.countryTotal[this.day5].Confirmed, this.countryTotal[this.day6].Confirmed,this.countryTotal[this.day7].Confirmed,this.countryTotal[this.day8].Confirmed,this.countryTotal[this.day9].Confirmed,this.countryTotal[this.day10].Confirmed,this.countryTotal[this.day11].Confirmed,this.countryTotal[this.day12].Confirmed,this.countryTotal[this.day13].Confirmed,this.countryTotal[this.day14].Confirmed]
    },
    {
      data:[ this.countryTotal[this.day1].Recovered, this.countryTotal[this.day2].Recovered, this.countryTotal[this.day3].Recovered, this.countryTotal[this.day4].Recovered,this.countryTotal[this.day5].Recovered, this.countryTotal[this.day6].Recovered,this.countryTotal[this.day7].Recovered,this.countryTotal[this.day8].Recovered,this.countryTotal[this.day9].Recovered,this.countryTotal[this.day10].Recovered,this.countryTotal[this.day11].Recovered,this.countryTotal[this.day12].Recovered,this.countryTotal[this.day13].Recovered,this.countryTotal[this.day14].Recovered]
    },
    {
      data:[ this.countryTotal[this.day1].Active, this.countryTotal[this.day2].Active, this.countryTotal[this.day3].Active, this.countryTotal[this.day4].Active,this.countryTotal[this.day5].Active, this.countryTotal[this.day6].Active,this.countryTotal[this.day7].Active,this.countryTotal[this.day8].Active,this.countryTotal[this.day9].Active,this.countryTotal[this.day10].Active,this.countryTotal[this.day11].Active,this.countryTotal[this.day12].Active,this.countryTotal[this.day13].Active,this.countryTotal[this.day14].Active]
    },
    {
      data:[ this.countryTotal[this.day1].Deaths, this.countryTotal[this.day2].Deaths, this.countryTotal[this.day3].Deaths, this.countryTotal[this.day4].Deaths,this.countryTotal[this.day5].Deaths, this.countryTotal[this.day6].Deaths,this.countryTotal[this.day7].Deaths,this.countryTotal[this.day8].Deaths,this.countryTotal[this.day9].Deaths,this.countryTotal[this.day10].Deaths,this.countryTotal[this.day11].Deaths,this.countryTotal[this.day12].Deaths,this.countryTotal[this.day13].Deaths,this.countryTotal[this.day14].Deaths]
    },           
  ]);
} else {

  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1,this.week2, this.week3, this.week4, this.week5, this.week6,this.week7, this.week8, this.week9, this.week10, this.week11, this.week12, this.week13, this.week14, this.week15]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ this.countryTotal[this.day1].Confirmed, this.countryTotal[this.day2].Confirmed, this.countryTotal[this.day3].Confirmed, this.countryTotal[this.day4].Confirmed,this.countryTotal[this.day5].Confirmed, this.countryTotal[this.day6].Confirmed,this.countryTotal[this.day7].Confirmed,this.countryTotal[this.day8].Confirmed,this.countryTotal[this.day9].Confirmed,this.countryTotal[this.day10].Confirmed,this.countryTotal[this.day11].Confirmed,this.countryTotal[this.day12].Confirmed,this.countryTotal[this.day13].Confirmed,this.countryTotal[this.day14].Confirmed,this.countryTotal[this.day15].Confirmed]
    },
    {
      data:[ this.countryTotal[this.day1].Recovered, this.countryTotal[this.day2].Recovered, this.countryTotal[this.day3].Recovered, this.countryTotal[this.day4].Recovered,this.countryTotal[this.day5].Recovered, this.countryTotal[this.day6].Recovered,this.countryTotal[this.day7].Recovered,this.countryTotal[this.day8].Recovered,this.countryTotal[this.day9].Recovered,this.countryTotal[this.day10].Recovered,this.countryTotal[this.day11].Recovered,this.countryTotal[this.day12].Recovered,this.countryTotal[this.day13].Recovered,this.countryTotal[this.day14].Recovered,this.countryTotal[this.day15].Recovered]
    },
    {
      data:[ this.countryTotal[this.day1].Active, this.countryTotal[this.day2].Active, this.countryTotal[this.day3].Active, this.countryTotal[this.day4].Active,this.countryTotal[this.day5].Active, this.countryTotal[this.day6].Active,this.countryTotal[this.day7].Active,this.countryTotal[this.day8].Active,this.countryTotal[this.day9].Active,this.countryTotal[this.day10].Active,this.countryTotal[this.day11].Active,this.countryTotal[this.day12].Active,this.countryTotal[this.day13].Active,this.countryTotal[this.day14].Active,this.countryTotal[this.day15].Active]
    },
    {
      data:[ this.countryTotal[this.day1].Deaths, this.countryTotal[this.day2].Deaths, this.countryTotal[this.day3].Deaths, this.countryTotal[this.day4].Deaths,this.countryTotal[this.day5].Deaths, this.countryTotal[this.day6].Deaths,this.countryTotal[this.day7].Deaths,this.countryTotal[this.day8].Deaths,this.countryTotal[this.day9].Deaths,this.countryTotal[this.day10].Deaths,this.countryTotal[this.day11].Deaths,this.countryTotal[this.day12].Deaths,this.countryTotal[this.day13].Deaths,this.countryTotal[this.day14].Deaths,this.countryTotal[this.day15].Deaths]
    },           
  ]);
}


},
changeData_TemmuzAgustos() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: ['1-7 Temmuz', '8-14 Temmuz','15-21 Temmuz', '22-28 Temmuz', '1-4 Ağustos', '5-11 Ağustos','12-18 Ağustos']
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data: [ '0', '0', '0', '0','0', '0', '0']
    }
  ]);
},  
    selectDays(opt) {
    //  this.options = options
      this.days1 = opt.name

      this.changeData(opt)
                
    },
    
    ProfileChange() {

    },
   
    selectDorm (opt) {
      this.id = opt.id

              this.changeData()
    },         
  },
  created() {
    
    var self = this
        const country =   {
          Country: "Türkiye",
          Slug: "turkey",
          ISO2: "TR"
  }
    this.getSummary()
    this.getCountryTotal(country)
    /*
    this.getInfectionNumbers(country)
    this.getActive(country)
    this.getDeath(country)
    this.getRecovered(country)
    this.selectCountry(country)
    */
    //    this.getCountries()

  },
computed: {
    mobileCheck() {
     var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check
  },
  }

}
</script>

<style lang="scss">
  @import "../assets/scss/variables";

  .istatistik {
    .dorm-account-wrp{
      width: 100%;
    }
    .gen-container{
      flex-direction: column;
    }

    .select__placeholder{
      font-size: 16px;
      font-weight: 100;
    }

    .select__caret{
      background-color: #f5f8fc;
      width: 28px;
      height: 28px;
      font-size:10px;
    }
    .user-settings__profil {
      width: 100%;

    }
    .select-box {
      border-bottom: 0 !important;
    }

    .user-settings__top{
      border-bottom: 1px solid #cbd0dd6b;
    }

    .user-settings__profil{
      display: flex;
      justify-content: space-between;
      .left-one{
        display: flex;
        align-items: center;
      }
    }
    .user-settings__profil-img {
      width: 100%;
      border: 3px solid white;
      border-radius: 10px;
      background-color: white;
      padding: 13px;
      box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
    }
    .user-settings__profil-mail {
      margin-right: 102px;
      color: #656e8d;
      font-size: 19px;
      font-weight: bold;
    }
    .user-settings__profil-name.mail {
      font-size: 16px;
      padding-right: 35px;
      .sign-out{
        margin-left: 16px;
        font-size: 24px;
        font-weight: bold;
      }

    }

    .container2 {
      display: block;
      position: relative;
      padding-bottom: 8px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 48%;
      margin-right: 16px;
    }

    .container2 input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      left: 6px;
      height: 14px;
      width: 14px;
      border-radius: 3px;
      background-color: #eff3fb;
      border: 1px solid #d8d8d8;
    }

    /* On mouse-over, add a grey background color */
    .container2:hover input ~ .checkmark {
      background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .container2 input:checked ~ .checkmark {
      background-color: #15d2a3;
      border-color: #15d2a3;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* Show the checkmark when checked */
    .container2 input:checked ~ .checkmark:after {
      display: block;
    }

    /* Style the checkmark/indicator */
    .container2 .checkmark:after {
      left: 4px;
      top: 1px;
      width: 5px;
      height: 9px;
      border: 1px solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .dorm-statistic {
      margin-top: 20px;

      .statistic {
        &-top {
          display: flex;
          justify-content: space-between;
          @include bp(mobile) {
            flex-wrap: wrap;
          }
        }

        &__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: white;
          padding: 31px 0px;
          border-radius: 14px;
          box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
          position: relative;
          width: 25%;
          margin-right: 17px;
          @include bp(mobile) {
          width: 47% !important;
            margin-right: 0 !important;
            margin-bottom: 20px;
          }

          &:last-child {
            margin-right: 0;
          }

          &-title {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
            padding: 22px 0 11px 0px;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 1px solid #f9f9f9;
            color: #4b5da1;
          }

          &-middle {
            text-align: center;
            margin-top: 21px;
            margin-bottom: 11px;
          }

          &-text {
            position: relative;
            top: -21px;
            @include bp(mobile) {
              font-size: 15px;
            }
          }

          &-number {
            font-size: 60px;
          }

          &-days {
            position: absolute;
            bottom: 11px;
            left: 0;
            width: 100%;
            text-align: center;
            border-top: 1px solid #f9f9f9;
            padding: 12px 0 0px 0;
            color: #a1a7be;
            font-size: 16px;
            margin-left: 3px;

            .oclcok {
              position: relative;
              top: -2px;
              font-size: 15px;
              color: #4face2;
              position: relative;
              left: -5px;
            }
          }
        }
      }
    }

    .report {
      background-color: white;
      border-radius: 9px;
      margin-top: 29px;
      padding: 20px 28px;
      box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);

      &__top {
        display: flex;
        align-items: center;
      }

      &-right {
        width: 30%;
        margin-left: 0;
        display: flex;       
        &__item {
          width: 50%;
        }
      }

      &__title {
        color: #4b5da1;
        font-weight: bold;
        font-size: 16px;
      }

      &__text {
        color: #a1a7be;
        font-size: 16px;
      }

      &__bottom {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid whitesmoke;
        padding: 20px 0;
        margin: 15px 0;
        @include bp(mobile) {
          flex-wrap: wrap;
        }

        &-item {
          display: flex;
          width: 24%;
          background-color: #f5f8fc;
          align-items: center;
          justify-content: space-evenly;
          padding: 15px 0;
          border-radius: 8px;
          @include bp(mobile) {
           width: 100% !important;
            margin-bottom: 10px;
          }
        }
      }

      &-icon {
        color: white;
        background-color: #62b2eb;
        padding: 11px 15px;
        border-radius: 100%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;

        .oclcok {
          position: relative;
          left: 0px;
        }
      }

      &-detail {
        &__number {
          color: #62b2eb;
          font-weight: bold;
        }

        &__text {
          color: #a1a7be;
          font-size: 15px;
          position: relative;
          margin-top: -9px;
        }
      }

    }
  }
  .mywidth {
    width: 130%;
            margin-left: 0;

  }

</style>
