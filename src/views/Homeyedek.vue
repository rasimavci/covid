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

              <div class="right" style="margin-left: -45px;">
                <img :src="logo" alt="" class="user-settings__profil-img2">
                <p class="user-settings__profil-name">
                Country Report </p>
                <p class="user-settings__profil-mail">
                 11
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

      <ContentLoader v-if="!statistics && !mobileCheck" 
        :height="700">
        <rect x="2" y="0" rx="3" ry="3" width="95" height="80" />
        <rect x="103" y="0" rx="3" ry="3" width="95" height="80" /> 
        <rect x="202" y="0" rx="3" ry="3" width="95" height="80" />
        <rect x="303" y="0" rx="3" ry="3" width="95" height="80" />      
        <rect x="0" y="90" rx="3" ry="3" width="410" height="300" />
      </ContentLoader>

      <ContentLoader v-if="!statistics && mobileCheck" 
        :height="700">
        <rect x="2" y="0" rx="3" ry="3" width="200" height="280" />
        <rect x="230" y="0" rx="3" ry="3" width="200" height="280" /> 
        <rect x="2" y="320" rx="3" ry="3" width="200" height="280" />
        <rect x="230" y="320" rx="3" ry="3" width="200" height="280" />      
      </ContentLoader>

        <div class="user__list-offer" v-if="statistics">
          <div class="dorm-statistic">
            <div class="statistic-top">

              <div class="statistic__item">
                <h3 class="statistic__item-title">ACTIVE CASE</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number" v-if="liveData"> {{liveData.Active}}</p>
                  <p class="statistic__item-text">Active Cases</p>
                </div>
                <p class="statistic__item-days">
                  
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">DEATHS</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number" v-if="liveData">{{liveData.Deaths}}</p>
                  <p class="statistic__item-text">People Dead</p>
                </div>
                <p class="statistic__item-days">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  All Times Total
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">Confirmed</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number" v-if="liveData"> {{liveData.Confirmed}}</p>
                  <p class="statistic__item-text">People Infected</p>
                </div>
                <p class="statistic__item-days">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  All Times Total
                </p>
              </div>

              <div class="statistic__item">
                <h3 class="statistic__item-title">Recovered</h3>
                <div class="statistic__item-middle">
                  <p class="statistic__item-number" v-if="liveData"> {{liveData.Recovered}}</p>
                  <p class="statistic__item-text">People Recovered</p>
                </div>
                <p class="statistic__item-days">
                     <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                  All Times Total
                </p>
              </div>
            </div>
          </div>

          <div class="report">
            <div class="report__top">
              <div class="report-left">
                <p class="report__title">STATISTIC REPORT</p>
                <!-- <p class="report__text">1 Aralık -22 Ocak tarihleri arasında yayında olan {{dormStats.length}} Yurt‘un raporu</p> -->
                <p class="report__text">There are {{dormStats.length}} Cases in Your Country</p>
              </div>

      <div class="hero-search__left searchDesktop">
       <div class="hero-search__select">
        <SelectBoxNoFilter :options="countries" myplaceholder="Select Country"
        @onselect="getLiveData"/>
      </div>
      <div class="hero-search__select">
        <SelectBoxDate
          :options="days"
          myplaceholder="Select Date"
          @onselect="selectDays"
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

            <div class="report__bottom" v-if="statistics">
              <div class="report__bottom-item">
                <div class="report-icon">
                 <span class="oclcok">
                    <svg-icon type="icon-oclock"/>
                  </span>
                </div>
                <div class="report-detail" >
                  <p class="report-detail__number">1111</p>
                  <p class="report-detail__text">Yorum</p>
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
                    <svg-icon type="icon-mail"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">123</p>
                  <p class="report-detail__text">Mesaj</p>
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
                    <svg-icon type="icon-headphone"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">555</p>
                  <p class="report-detail__text">Numara Görüntüleme</p>
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
                    <svg-icon type="icon-heart"/>
                  </span>
                </div>
                <div class="report-detail">
                  <p class="report-detail__number">99</p>
                  <p class="report-detail__text">Favori Ekleme</p>
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
                             :series="series" @click.native="ProfileChange('')"></VueApexCharts>
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
import SelectBoxNoFilter from '@/components/SelectBoxTempNoFilter'
import SelectBoxDate from '@/components/SelectBoxDate'
import { ContentLoader } from 'vue-content-loader'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'DormUserStatistic',
  components: {
    VueApexCharts, SelectBoxNoFilter, SelectBoxDate, ContentLoader
  },
  metaInfo () {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'İstatistik',
      link: [
        { rel: 'canonical', href: window.location.origin + '/yurtlar/istatistik/' }
      ]
    }
  },  
  data () {
    return {
      liveData: null,
      countries: [],
      messages: [],
      ConfirmedCases: [],
      months: [ "", "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
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
          title: 'İstatistik Özeti',
          to: '/yurtlar-istatistik'
        },
        {
          id: 1,
          title: 'Bilgilerim',
          to: '/yurt-hesap-bilgileri'
        },
        {
          id: 2,
          title: 'Rezervasyonlar',
          to: '/kullanici-teklifler'
        },
        {
          id: 3,
          title: 'Mesajlar',
          to: '/mesaj-liste'
        },
        {
          id: 4,
          title: 'Yurtlarım',
          to: '/yurt-sube'
        },
        {
          id: 5,
          title: 'İlanlarım',
          to: '/kullanici-favoriler'
        },
        {
          id: 6,
          title: 'Yorumlar',
          to: '/yurtlar-yorumlar'
        }
      ],
      days: [        
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
        name: 'Yorum',
        data: [ 0, 0, 0, 0, 0, 0, 0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana'],
      },{
        name: 'Mesaj',
        data: [ 0, 0, 0, 0,0, 0, 0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Numara Görüntüleme',
        data: [ 0, 0, 0, 0,0, 0, 0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }/*,{
        name: 'Favori Ekleme',
        data: [ 25, 45, 15, 55,25, 45, 35, 55],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }   */    
      ],
      series1yok: [ 
        {
        name: 'Yorum',
        data: [0,0,0,0 ],
      //  labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Mesaj',
        data: [ 205, 155, 205, 255, 19 ],
      //  labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }/* ,{
        name: 'Numara Görüntüleme',
        data: [ 205, 455, 105, 55, 359 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Favori Ekleme',
        data: [ 25, 455, 105, 55, 559 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      } */      
      ],
      series90: [ 
        {
        name: 'Yorum',
        data: [0, 0, 0, 0,0, 0, 0, 0,0 ],
        //labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Mesaj',
        data: [  0, 0, 0, 0,0, 0, 0, 0,0],
       //labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      } ,{
        name: 'Numara Görüntüleme',
        data: [ 0, 0, 0, 0,0, 0, 0, 0,0],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      } /*,{
        name: 'Favori Ekleme',
        data: [ 25, 455, 105, 55, 559 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }  */     
      ],      
      series3yok: [ 
        {
        name: 'Görüntülenme',
        data: [ 205, 155, 205, 255, 19 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Mesaj',
        data: [ 205, 155, 205, 255, 19 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Numara Görüntüleme',
        data: [ 0, 0, 0, 0, 0 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Favori Ekleme',
        data: [ 25, 455, 105, 55, 559 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }      
      ],
      series4yok: [ 
        {
        name: 'Görüntülenme',
        data: [ 205, 155, 205, 255, 19 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Mesaj',
        data: [ 205, 155, 205, 255, 19 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Numara Görüntüleme',
        data: [ 205, 155, 205, 255, 19 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
        name: 'Favori Ekleme',
        data: [ 0,0,0,0 ],
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }      
      ],              
      series2: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
    }
  },
  methods: {
     getInfectionNumbers(opt) {
      let self = this
      axios.get(`/country/${opt.Slug}/status/confirmed?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.ConfirmedCases = response.data
          
          self.ConfirmedCases.map((content, index, array) => {
            if(array[index+1]) {
              self.ConfirmedCases[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxInfection = self.ConfirmedCases.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getDeath(opt) {
      let self = this
      axios.get(`/country/${opt.Country}/status/deaths?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataDeath = response.data

          self.covidDataDeath.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataDeath[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxDeath = self.covidDataDeath.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
     getRecovered(opt) {
      let self = this
      axios.get(`/country/${opt.Country}/status/recovered?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataRecovered = response.data

          self.covidDataRecovered.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataRecovered[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxRecovered = self.covidDataRecovered.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
     getActive(opt) {
      let self = this
      axios.get(`/country/${opt.Country}/status/confirmed?from=2020-03-11T00:00:00Z&to=2020-05-27T00:00:00Z`)
        .then(response => {
          self.covidDataActive = response.data

          self.covidDataActive.map((content, index, array) => {
            if(array[index+1]) {
              self.covidDataActive[index].Lon = array[index+1].Cases - array[index].Cases
              }
          })

          self.maxActive = self.covidDataActive.reduce(function(prev, current) {
          return (prev.Lon > current.Lon) ? prev : current
           })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },          
    getLiveData(opt) {
      let self = this
      axios.get(`/country/${opt.Country}`)
        .then(response => {
          self.liveData = response.data[[response.data.length-2]]
          self.days = response.data
          let newdate = ''
          let newdata = {Date:''}
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
    getDeaths (opt) {  
      
      let self = this
      axios.get(`/country/${opt.Country}/status/deaths/live?from=2020-03-11T00:00:00Z&to=2020-04-01T00:00:00Z`)
        .then(response => {
          self.statistics = response.data      
           response.data.dorms.forEach((data) => {

        //     data.name = data.name + ', ' + data.city.name
        //     self.getDormStats(data)
        self.getMessages(1)
        self.getClicks(1)
        self.getComments(1)
            })      
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
changeData_Son30Gun() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1, this.week2, this.week3, this.week4, this.week5]
    }
  });

var dene = this.ConfirmedCases.slice(5)

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ '0', '0', '0', '0','0']
    }
  ]);
},
changeData_Son60Gun() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1_pre, this.week2_pre, this.week3_pre, this.week4_pre, this.week2, this.week3, this.week4, this.week5, ]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ '0', '0', '0', '0','0', '0', '0', '0']
    }
  ]);
},
changeData_Son90Gun() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1_pre2,this.week2_pre2, this.week4_pre2, this.week1_pre, this.week2_pre,this.week4_pre, this.week1, this.week2, this.week5 ]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ '0', '0', '0', '0','0', '0', '0', '0']
    }
  ]);
},
changeData_Son120Gun() {
  ApexCharts.exec('chart1', "updateOptions", {
    xaxis: {
      categories: [ this.week1_pre3, this.week4_pre3,this.week1_pre2, this.week4_pre2, this.week1_pre, this.week4_pre, this.week1, this.week5 ]
    }
  });

  ApexCharts.exec('chart1', "updateSeries", [
    {
      data:[ '0', '0', '0', '0','0', '0', '0', '0']
    }
  ]);
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
      if(!this.id) {
      this.getMessages(1)
      this.getComments(1)
      this.getClicks(1)
      } else {
      this.getMessages(this.id)
      this.getComments(this.id)
      this.getClicks(this.id)
            }
            if (opt.name === 'Son 30 Gün') {
              this.changeData_Son30Gun()
            } else if (opt.name === 'Son 60 Gün') {
              this.changeData_Son60Gun()
            } else if (opt.name === 'Son 90 Gün') {
              this.changeData_Son90Gun()
            } else if (opt.name === 'Son 120 Gün') {
              this.changeData_Son120Gun()
            }                        
    },
    
    ProfileChange() {

    },
        getComments (id) {
      this.commentNumber = 0

            if (this.days1 === 'Son 30 Gün') {
                this.dataY = [ '0', '0', '0', '0','0']
            } else if (this.days1 === 'Son 90 Gün') {
             this.dataC = [ '0', '0', '0', '0','0', '0', '0', '0', '0']
            } else if (this.days1 === 'Son 60 Gün'  || this.days1 === 'Son 120 Gün') {
              this.dataY = [ '0', '0', '0', '0','0', '0', '0', '0']
            } 
          var self = this    
          this.week1DataY = 0
          this.week2DataY = 0
          this.week3DataY = 0
          this.week4DataY = 0
          this.week1DataY_pre = 0
          this.week2DataY_pre = 0
          this.week3DataY_pre = 0
          this.week4DataY_pre = 0   
          
          this.week1DataY_pre2 = 0
          this.week4DataY_pre2 = 0 
          this.week1DataY_pre3 = 0
          this.week4DataY_pre3 = 0 
      axios.get(`/dorm/comments`)
        .then(response => {
//          self.comments = response.data
     //   var data = []

           
           response.data.forEach((comment) => {
               let time1 = comment.created_at.split(' ')
               if(comment.dorm.id === id || id === 1) {
          if (self.days1 === 'Son 30 Gün' ) {
                if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4DataY++
                    self.dataY[0] = self.week4DataY.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3DataY++
                    self.dataY[1] = self.week3DataY.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2DataY++
                    self.dataY[2] = self.week2DataY.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30) {
                    self.week1DataY++
                    self.dataY[3] = self.week1DataY.toString()    
                }
}
                else if (self.days1 === 'Son 60 Gün' ) {         
                 if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre) {
                    self.week4DataY_pre++
                    self.dataY[0] = self.week4DataY_pre.toString()
                } else if(time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week3DataY_pre++
                    self.dataY[1] = self.week3DataY_pre.toString()                   
                }                
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre) {
                    self.week2DataY_pre++
                    self.dataY[2] = self.week2DataY_pre.toString()    
                }
                else if(time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week1DataY_pre++
                    self.dataY[3] = self.week1DataY_pre.toString()    
                } 
                } 
                else if (self.days1 === 'Son 90 Gün' || self.days1 === 'Son 120 Gün' ) {
                  //1.ci ay ilk 2 hafta    
                 if(time1[0] === self.day_1_pre2 || time1[0] === self.day_2_pre2 || time1[0] === self.day_3_pre2 || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre2 || time1[0] === self.day_6_pre2 || time1[0] === self.day_7_pre2 || time1[0] === self.day_8_pre2 || time1[0] === self.day_9_pre2 || self.day_10_pre2 || time1[0] === self.day_11_pre2 || time1[0] === self.day_12_pre2 || time1[0] === self.day_13_pre2 || time1[0] === self.day_14_pre2 || time1[0] === self.day_15_pre2 || time1[0] === self.day_16_pre2) {
                    self.week1DataY_pre2++
                    self.dataY[0] = self.week1DataY_pre2.toString()
                } //1.ci ay son 2 hafta    
                   else if( time1[0] === self.day_17_pre2 || time1[0] === self.day_18_pre2 || time1[0] === self.day_19_pre2 || time1[0] === self.day_20_pre2 || time1[0] === self.day_21_pre2 || time1[0] === self.day_22_pre2 || time1[0] === self.day_23_pre2 || time1[0] === self.day_24_pre2 || time1[0] === self.day_25_pre2 || time1[0] === self.day_26_pre2 || time1[0] === self.day_27_pre2 || time1[0] === self.day_28_pre2 || time1[0] === self.day_29_pre2 || time1[0] === self.day_30_pre2) {
                    self.week4DataY_pre2++
                    self.dataY[1] = self.week4DataY_pre2.toString()    
                } 
                // 2.ci ay ilk 2 hafta                   
                 else if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre || time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week1DataY_pre++
                    self.dataY[2] = self.week4DataY_pre.toString()
                } // 2.ci ay son 2 hafta                   
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre || self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week2DataY_pre++
                    self.dataY[3] = self.week2DataY_pre.toString()    
                }  //3.ci ay     
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4DataY++
                    self.dataY[4] = self.week4DataY.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3DataY++
                    self.dataY[5] = self.week3DataY.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2DataY++
                    self.dataY[6] = self.week2DataY.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30) {
                    self.week1DataY++
                    self.dataY[7] = self.week1DataY.toString()    
                }                
                }                 
               }

             })
             if (self.days1 === 'Son 30 Gün' )
        self.commentNumber = parseInt(self.dataY[0]) + parseInt(self.dataY[1]) + parseInt(self.dataY[2]) + parseInt(self.dataY[3]) 
        else if (self.days1 === 'Son 60 Gün' || self.days1 === 'Son 90 Gün'|| self.days1 === 'Son 120 Gün')
        self.commentNumber = parseInt(self.dataY[0]) + parseInt(self.dataY[1]) + parseInt(self.dataY[2]) + parseInt(self.dataY[3]) + parseInt(self.dataY[4]) + parseInt(self.dataY[5]) + parseInt(self.dataY[6]) + parseInt(self.dataY[7])
        self.series[0].data = self.dataY
            })  
        .catch(e => {
          this.errors.push(e)
        })
  
    },
    getClicks (id) {

      // this.clickNumber = 0
      var self = this
      var data = []

          this.week1DataC = 0
          this.week2DataC = 0
          this.week3DataC = 0
          this.week4DataC = 0

          this.week1DataC_pre = 0
          this.week2DataC_pre = 0
          this.week3DataC_pre = 0
          this.week4DataC_pre = 0

          this.week1DataC_pre2 = 0
          this.week2DataC_pre2 = 0
          this.week1DataC_pre3 = 0
          this.week2DataC_pre3 = 0

              if (this.days1 === 'Son 30 Gün') {
               this.dataC = [ '0', '0', '0', '0','0']
            } else if (this.days1 === 'Son 90 Gün') {
             this.dataC = [ '0', '0', '0', '0','0', '0', '0', '0', '0']
            } else if (this.days1 === 'Son 60 Gün'  || this.days1 === 'Son 120 Gün') {
             this.dataC = [ '0', '0', '0', '0','0', '0', '0', '0']
            }

           this.statistics.counts.normalClicks.forEach((message) => {
             if(id === 1  || message.dorm_id === id) {
      let time1 = message.created_at.split(' ')
        if (self.days1 === 'Son 30 Gün' ) {
                if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4DataC++
                    self.dataC[0] = self.week4DataC.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3DataC++
                    self.dataC[1] = self.week3DataC.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2DataC++
                    self.dataC[2] = self.week2DataC.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30) {
                    self.week1DataC++
                    self.dataC[3] = self.week1DataC.toString()    
                }
}
                else if (self.days1 === 'Son 60 Gün' ) {         
                 if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre) {
                    self.week4DataC_pre++
                    self.dataC[0] = self.week4DataC_pre.toString()
                } else if(time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week3DataC_pre++
                    self.dataC[1] = self.week3DataC_pre.toString()                   
                }                
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre) {
                    self.week2DataC_pre++
                    self.dataC[2] = self.week2DataC_pre.toString()    
                }
                else if(time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week1DataC_pre++
                    self.dataC[3] = self.week1DataC_pre.toString()    
                }else 
                if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4DataC++
                    self.dataC[4] = self.week4DataC.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3DataC++
                    self.dataC[5] = self.week3DataC.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2DataC++
                    self.dataC[6] = self.week2DataC.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30) {
                    self.week1DataC++
                    self.dataC[7] = self.week1DataC.toString()    
                }               
                  }   else if (self.days1 === 'Son 90 Gün' ) {
                  // pre 2                
                 if(time1[0] === self.day_1_pre2 || time1[0] === self.day_2_pre2 || time1[0] === self.day_3_pre2 || time1[0] === self.day_4_pre2 || time1[0] === self.day_5_pre2 || time1[0] === self.day_6_pre2 || time1[0] === self.day_7_pre2 || time1[0] === self.day_8_pre2 || time1[0] === self.day_9_pre2) {
                    self.week1DataC_pre2++
                    self.dataC[0] = self.week1DataC_pre2.toString()
                } else if(time1[0] === self.day_10_pre2 || time1[0] === self.day_11_pre2 || time1[0] === self.day_12_pre2 || time1[0] === self.day_13_pre2 || time1[0] === self.day_14_pre2 || time1[0] === self.day_15_pre2 || time1[0] === self.day_16_pre2 || time1[0] === self.day_17_pre2 || time1[0] === self.day_18_pre2 || time1[0] === self.day_19_pre2 || time1[0] === self.day_20_pre2) {
                    self.week2DataC_pre2++
                    self.dataC[1] = self.week2DataC_pre2.toString()                   
                } else  if(time1[0] === self.day_21_pre2 || time1[0] === self.day_22_pre2 || time1[0] === self.day_23_pre2 || time1[0] === self.day_24_pre2 || time1[0] === self.day_25_pre2 || time1[0] === self.day_26_pre2 || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre2 || time1[0] === self.day_29_pre2 || time1[0] === self.day_30_pre2) {
                    self.week4DataC_pre2++
                    self.dataC[2] = self.week4DataC_pre2.toString()
                } 
                 // pre
                 else if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre || time1[0] === self.day_10_pre) {
                    self.week1DataC_pre++
                    self.dataC[3] = self.week1DataC_pre.toString()                   
                }
                else if( time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre || time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre ) {
                    self.week2DataC_pre++
                    self.dataC[4] = self.week2DataC_pre.toString()    
                }
                else if(time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre || time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week4DataC_pre++
                    self.dataC[5] = self.week4DataC_pre.toString()    
                }  
                  // son ay
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9 || time1[0] === self.day_10 ) {
                    self.week1DataC++
                    self.dataC[6] = self.week1DataC.toString()
                } else if(time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16 || time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 ) {
                    self.week2DataC++
                    self.dataC[7] = self.week2DataC.toString()                   
                }                
                else if( time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23 || time1[8] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week4DataC++
                    self.dataC[8] = self.week4DataC.toString()    
                }                     

                  }
                else if (self.days1 === 'Son 120 Gün') {
                  // pre 3
                 if(time1[0] === self.day_1_pre3 || time1[0] === self.day_2_pre3 || time1[0] === self.day_3_pre3 || time1[0] === self.day_4_pre3|| time1[0] === self.day_5_pre3 || time1[0] === self.day_6_pre3 || time1[0] === self.day_7_pre3 || time1[0] === self.day_8_pre3 || time1[0] === self.day_9_pre3) {
                    self.week1DataC_pre3++
                    self.dataC[0] = self.week1DataC_pre3.toString()
                } else if(time1[0] === self.day_10_pre3 || time1[0] === self.day_11_pre3 || time1[0] === self.day_12_pre3 || time1[0] === self.day_13_pre3 || time1[0] === self.day_14_pre3 || time1[0] === self.day_15_pre3 || time1[0] === self.day_16_pre3) {
                    self.week1DataC_pre3++
                    self.dataC[0] = self.week1DataC_pre3.toString()                   
                }   else if( time1[0] === self.day_17_pre3 || time1[0] === self.day_18_pre3 || time1[0] === self.day_19_pre3 || time1[0] === self.day_20_pre3 || time1[0] === self.day_21_pre3 || time1[0] === self.day_22_pre3 || time1[0] === self.day_23_pre3) {
                    self.week4DataC_pre3++
                    self.dataC[1] = self.week4DataC_pre3.toString()    
                } else if(time1[0] === self.day_24_pre3 || time1[0] === self.day_25_pre3 || time1[0] === self.day_26_pre3 || time1[0] === self.day_27_pre3 || time1[0] === self.day_28_pre3 || time1[0] === self.day_29_pre3 || time1[0] === self.day_30_pre3) {
                    self.week4DataC_pre3++
                    self.dataC[1] = self.week4DataC_pre3.toString()    
                } 
                
                // pre 2
                else if(time1[0] === self.day_1_pre2 || time1[0] === self.day_2_pre2 || time1[0] === self.day_3_pre2 || time1[0] === self.day_4_pre2 || time1[0] === self.day_5_pre2 || time1[0] === self.day_6_pre2 || time1[0] === self.day_7_pre2 || time1[0] === self.day_8_pre2 || time1[0] === self.day_9_pre2) {
                    self.week1DataC_pre2++
                    self.dataC[2] = self.week1DataC_pre2.toString()
                } else if(time1[0] === self.day_10_pre2 || time1[0] === self.day_11_pre2 || time1[0] === self.day_12_pre2 || time1[0] === self.day_13_pre2 || time1[0] === self.day_14_pre2 || time1[0] === self.day_15_pre2 || time1[0] === self.day_16_pre2) {
                    self.week1DataC_pre2++
                    self.dataC[2] = self.week1DataC_pre.toString()                   
                }               
                else if( time1[0] === self.day_17_pre2 || time1[0] === self.day_18_pre2 || time1[0] === self.day_19_pre2 || time1[0] === self.day_20_pre2 || time1[0] === self.day_21_pre2 || time1[0] === self.day_22_pre2 || time1[0] === self.day_23_pre2) {
                    self.week4DataC_pre2++
                    self.dataC[3] = self.week4DataC_pre2.toString()    
                }
                else if(time1[0] === self.day_24_pre2 || time1[0] === self.day_25_pre2 || time1[0] === self.day_26_pre2 || time1[0] === self.day_27_pre2 || time1[0] === self.day_28_pre2 || time1[0] === self.day_29_pre2 || time1[0] === self.day_30_pre2) {
                    self.week4DataC_pre2++
                    self.dataC[3] = self.week4DataC_pre2.toString()    
                }    
  
                  // pre 1
                else if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre) {
                    self.week1DataC_pre++
                    self.dataC[4] = self.week4DataC_pre2.toString()
                } else if(time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week1DataC_pre++
                    self.dataC[4] = self.week1DataC_pre.toString()                   
                }               
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre) {
                    self.week4DataC_pre++
                    self.dataC[5] = self.week4DataC_pre.toString()    
                }
                else if(time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pr2 || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week4DataC_pre++
                    self.dataC[5] = self.week4DataC_pre.toString()    
                }  
                // last month
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week1DataC++
                    self.dataC[6] = self.week1DataC.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week1DataC++
                    self.dataC[6] = self.week1DataC.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week4DataC++
                    self.dataC[7] = self.week4DataC.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week4DataC++
                    self.dataC[7] = self.week4DataC.toString()    
                }                
}                 
             }

                         self.clickNumber = 0;
            if (self.days1 === 'Son 30 Gün') 
        self.clickNumber = parseInt(self.dataC[0]) + parseInt(self.dataC[1]) + parseInt(self.dataC[2]) + parseInt(self.dataC[3])
        else if (self.days1 === 'Son 60 Gün' || self.days1 === 'Son 90 Gün' || self.days1 === 'Son 120 Gün')
        self.clickNumber = parseInt(self.dataC[0]) + parseInt(self.dataC[1]) + parseInt(self.dataC[2]) + parseInt(self.dataC[3]) + parseInt(self.dataC[4]) + parseInt(self.dataC[5]) + parseInt(self.dataC[6]) + parseInt(self.dataC[7])
     
            })


     
    this.series[2].data = this.dataC
      /*  })
        .catch(e => {
          this.errors.push(e)
        })
        */
    },    
        getMessages (id) {
          // verileri sıfırla
          this.week1Data = 0
          this.week2Data = 0
          this.week3Data = 0
          this.week4Data = 0

          this.week1Data_pre = 0
          this.week2Data_pre = 0
          this.week3Data_pre = 0
          this.week4Data_pre = 0

          this.week1Data_pre2 = 0
          this.week2Data_pre2 = 0
          this.week4Data_pre2 = 0
          
          this.week1Data_pre3 = 0
          this.week2Data_pre3 = 0
          this.week4Data_pre3 = 0

      var self = this
         //      var data = []
                    if (this.days1 === 'Son 30 Gün') {
               this.data = [ '0', '0', '0', '0','0']
            } else if (this.days1 === 'Son 90 Gün') {
             this.data = [ '0', '0', '0', '0','0', '0', '0', '0', '0']
            } else if (this.days1 === 'Son 60 Gün' || this.days1 === 'Son 120 Gün') {
             this.data = [ '0', '0', '0', '0','0', '0', '0', '0']
            }
    // veri çek        
    //  this.messageNumber = 0;
   //   axios.get(`/dorm/messages`)
   //     .then(response => {
           this.messages.forEach((message) => {
             if(id === 1  || message.dorm.id === id) {
              let time1 = message.created_at.split(' ')
                if (self.days1 === 'Son 30 Gün' ) {
                if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4Data++
                    self.data[0] = self.week4Data.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3Data++
                    self.data[1] = self.week3Data.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2Data++
                    self.data[2] = self.week2Data.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week1Data++
                    self.data[3] = self.week1Data.toString()    
                }
                }
                else if (self.days1 === 'Son 60 Gün' ) {         
                 if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre) {
                    self.week4Data_pre++
                    self.data[0] = self.week4Data_pre.toString()
                } else if(time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week3Data_pre++
                    self.data[1] = self.week3Data_pre.toString()                   
                }                
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre) {
                    self.week2Data_pre++
                    self.data[2] = self.week2Data_pre.toString()    
                }
                else if(time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week1Data_pre++
                    self.data[3] = self.week1Data_pre.toString()    
                }       
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week4Data++
                    self.data[4] = self.week4Data.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week3Data++
                    self.data[5] = self.week3Data.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week2Data++
                    self.data[6] = self.week2Data.toString()    
                 }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week1Data++
                    self.data[7] = self.week1Data.toString()    
                }                
                } 
                
                else if (self.days1 === 'Son 90 Gün') {  
                  // pre 2                
                 if(time1[0] === self.day_1_pre2 || time1[0] === self.day_2_pre2 || time1[0] === self.day_3_pre2 || time1[0] === self.day_4_pre2 || time1[0] === self.day_5_pre2 || time1[0] === self.day_6_pre2 || time1[0] === self.day_7_pre2 || time1[0] === self.day_8_pre2 || time1[0] === self.day_9_pre2) {
                    self.week1Data_pre2++
                    self.data[0] = self.week1Data_pre2.toString()
                } else if(time1[0] === self.day_10_pre2 || time1[0] === self.day_11_pre2 || time1[0] === self.day_12_pre2 || time1[0] === self.day_13_pre2 || time1[0] === self.day_14_pre2 || time1[0] === self.day_15_pre2 || time1[0] === self.day_16_pre2 || time1[0] === self.day_17_pre2 || time1[0] === self.day_18_pre2 || time1[0] === self.day_19_pre2 || time1[0] === self.day_20_pre2) {
                    self.week2Data_pre2++
                    self.data[1] = self.week2Data_pre2.toString()                   
                } else  if(time1[0] === self.day_21_pre2 || time1[0] === self.day_22_pre2 || time1[0] === self.day_23_pre2 || time1[0] === self.day_24_pre2 || time1[0] === self.day_25_pre2 || time1[0] === self.day_26_pre2 || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre2 || time1[0] === self.day_29_pre2 || time1[0] === self.day_30_pre2) {
                    self.week4Data_pre2++
                    self.data[2] = self.week4Data_pre2.toString()
                } 
                 // pre
                 else if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre || time1[0] === self.day_10_pre) {
                    self.week1Data_pre++
                    self.data[3] = self.week1Data_pre.toString()                   
                }
                else if( time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre || time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre ) {
                    self.week2Data_pre++
                    self.data[4] = self.week2Data_pre.toString()    
                }
                else if(time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre || time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pre || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week4Data_pre++
                    self.data[5] = self.week4Data_pre.toString()    
                }  
                  // son ay
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9 || time1[0] === self.day_10 ) {
                    self.week1Data++
                    self.data[6] = self.week1Data.toString()
                } else if(time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16 || time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 ) {
                    self.week2Data++
                    self.data[7] = self.week2Data.toString()                   
                }                
                else if( time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23 || time1[8] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week4Data++
                    self.data[8] = self.week4Data.toString()    
                }
                
                
              }   else if (self.days1 === 'Son 120 Gün' ) {
                // pre 3                
                 if(time1[0] === self.day_1_pre3 || time1[0] === self.day_2_pre3 || time1[0] === self.day_3_pre3 || time1[0] === self.day_4_pre3|| time1[0] === self.day_5_pre3 || time1[0] === self.day_6_pre3 || time1[0] === self.day_7_pre3 || time1[0] === self.day_8_pre3 || time1[0] === self.day_9_pre3) {
                    self.week1Data_pre3++
                    self.data[0] = self.week1Data_pre3.toString()
                } else if(time1[0] === self.day_10_pre3 || time1[0] === self.day_11_pre3 || time1[0] === self.day_12_pre3 || time1[0] === self.day_13_pre3 || time1[0] === self.day_14_pre3 || time1[0] === self.day_15_pre3 || time1[0] === self.day_16_pre3) {
                    self.week1Data_pre3++
                    self.data[0] = self.week1Data_pre3.toString()                   
                }   else if( time1[0] === self.day_17_pre3 || time1[0] === self.day_18_pre3 || time1[0] === self.day_19_pre3 || time1[0] === self.day_20_pre3 || time1[0] === self.day_21_pre3 || time1[0] === self.day_22_pre3 || time1[0] === self.day_23_pre3) {
                    self.week4Data_pre3++
                    self.data[1] = self.week4Data_pre3.toString()    
                }
                else if(time1[0] === self.day_24_pre3 || time1[0] === self.day_25_pre3 || time1[0] === self.day_26_pre3 || time1[0] === self.day_27_pre3 || time1[0] === self.day_28_pre3 || time1[0] === self.day_29_pre3 || time1[0] === self.day_30_pre3) {
                    self.week4Data_pre3++
                    self.data[1] = self.week4Data_pre3.toString()    
                } 
                
                // pre 2
                else if(time1[0] === self.day_1_pre2 || time1[0] === self.day_2_pre2 || time1[0] === self.day_3_pre2 || time1[0] === self.day_4_pre2 || time1[0] === self.day_5_pre2 || time1[0] === self.day_6_pre2 || time1[0] === self.day_7_pre2 || time1[0] === self.day_8_pre2 || time1[0] === self.day_9_pre2) {
                    self.week1Data_pre2++
                    self.data[2] = self.week1Data_pre2.toString()
                } else if(time1[0] === self.day_10_pre2 || time1[0] === self.day_11_pre2 || time1[0] === self.day_12_pre2 || time1[0] === self.day_13_pre2 || time1[0] === self.day_14_pre2 || time1[0] === self.day_15_pre2 || time1[0] === self.day_16_pre2) {
                    self.week1Data_pre2++
                    self.data[2] = self.week1Data_pre.toString()                   
                }               
                else if( time1[0] === self.day_17_pre2 || time1[0] === self.day_18_pre2 || time1[0] === self.day_19_pre2 || time1[0] === self.day_20_pre2 || time1[0] === self.day_21_pre2 || time1[0] === self.day_22_pre2 || time1[0] === self.day_23_pre2) {
                    self.week4Data_pre2++
                    self.data[3] = self.week4Data_pre2.toString()    
                }
                else if(time1[0] === self.day_24_pre2 || time1[0] === self.day_25_pre2 || time1[0] === self.day_26_pre2 || time1[0] === self.day_27_pre2 || time1[0] === self.day_28_pre2 || time1[0] === self.day_29_pre2 || time1[0] === self.day_30_pre2) {
                    self.week4Data_pre2++
                    self.data[3] = self.week4Data_pre2.toString()    
                }    
  
                  // pre 1
                else if(time1[0] === self.day_1_pre || time1[0] === self.day_2_pre || time1[0] === self.day_3_pre || time1[0] === self.day_4_pre || time1[0] === self.day_5_pre || time1[0] === self.day_6_pre || time1[0] === self.day_7_pre || time1[0] === self.day_8_pre || time1[0] === self.day_9_pre) {
                    self.week1Data_pre++
                    self.data[4] = self.week1Data_pre.toString()
                } else if(time1[0] === self.day_10_pre || time1[0] === self.day_11_pre || time1[0] === self.day_12_pre || time1[0] === self.day_13_pre || time1[0] === self.day_14_pre || time1[0] === self.day_15_pre || time1[0] === self.day_16_pre) {
                    self.week1Data_pre++
                    self.data[4] = self.week1Data_pre.toString()                   
                }               
                else if( time1[0] === self.day_17_pre || time1[0] === self.day_18_pre || time1[0] === self.day_19_pre || time1[0] === self.day_20_pre || time1[0] === self.day_21_pre || time1[0] === self.day_22_pre || time1[0] === self.day_23_pre) {
                    self.week4Data_pre++
                    self.data[5] = self.week4Data_pre.toString()    
                }
                else if(time1[0] === self.day_24_pre || time1[0] === self.day_25_pre || time1[0] === self.day_26_pre || time1[0] === self.day_27_pre || time1[0] === self.day_28_pr2 || time1[0] === self.day_29_pre || time1[0] === self.day_30_pre) {
                    self.week4Data_pre++
                    self.data[5] = self.week4Data_pre.toString()    
                }  
                // last month
                else if(time1[0] === self.day_1 || time1[0] === self.day_2 || time1[0] === self.day_3 || time1[0] === self.day_4 || time1[0] === self.day_5 || time1[0] === self.day_6 || time1[0] === self.day_7 || time1[0] === self.day_8 || time1[0] === self.day_9) {
                    self.week1Data++
                    self.data[6] = self.week1Data.toString()
                } else if(time1[0] === self.day_10 || time1[0] === self.day_11 || time1[0] === self.day_12 || time1[0] === self.day_13 || time1[0] === self.day_14 || time1[0] === self.day_15 || time1[0] === self.day_16) {
                    self.week1Data++
                    self.data[6] = self.week1Data.toString()                   
                }                
                else if( time1[0] === self.day_17 || time1[0] === self.day_18 || time1[0] === self.day_19 || time1[0] === self.day_20 || time1[0] === self.day_21 || time1[0] === self.day_22 || time1[0] === self.day_23) {
                    self.week4Data++
                    self.data[7] = self.week4Data.toString()    
                }
                else if(time1[0] === self.day_24 || time1[0] === self.day_25 || time1[0] === self.day_26 || time1[0] === self.day_27 || time1[0] === self.day_28 || time1[0] === self.day_29 || time1[0] === self.day_30 || time1[0] === self.day_31) {
                    self.week4Data++
                    self.data[7] = self.week4Data.toString()    
                }               
              } 
             }
        //    })
        
        self.messageNumber = 0
        if (self.days1 === 'Son 30 Gün' )
        self.messageNumber = parseInt(self.data[0]) + parseInt(self.data[1]) + parseInt(self.data[2]) + parseInt(self.data[3]) 
        else if (self.days1 === 'Son 60 Gün' || self.days1 === 'Son 120 Gün')
        self.messageNumber = parseInt(self.data[0]) + parseInt(self.data[1]) + parseInt(self.data[2]) + parseInt(self.data[3]) + parseInt(self.data[4]) + parseInt(self.data[5]) + parseInt(self.data[6]) + parseInt(self.data[7])
        else if (self.days1 === 'Son 90 Gün')
        self.messageNumber = parseInt(self.data[0]) + parseInt(self.data[1]) + parseInt(self.data[2]) + parseInt(self.data[3]) + parseInt(self.data[4]) + parseInt(self.data[5]) + parseInt(self.data[6]) + parseInt(self.data[7])
     self.series[1].data = self.data       
        })
        // dormStat.counts.messages

/*         .catch(e => {
          this.errors.push(e)
        }) */
        
    },     
    selectDorm (opt) {
      this.id = opt.id
      this.dormStat = this.dormStats.find(function (dorm) { return opt.id == dorm.id } )
      //this.series[0].data = data
       this.getMessages(opt.id)
      this.getComments(opt.id)
    //  this.getClicks(opt.id)
      // this.getClicks(opt.id)
       if(opt.name === 'Tüm Yurtlar') {
         this.id = null
/*          let dormStat = {
           counts: this.statistics.counts.messages
         }
         this.dormStat = dormStat */
         this.dormStat = {counts: {messages:0}}
         this.dormStat.counts.messages = this.statistics.counts.messages
         this.dormStat.counts.views = this.statistics.counts.views
       }
       
                   if (this.days1 === 'Son 30 Gün') {
              this.changeData_Son30Gun()
            } else if (this.days1 === 'Son 60 Gün') {
              this.changeData_Son60Gun()
            } else if (this.days1 === 'Son 90 Gün') {
              this.changeData_Son90Gun()
            } else if (this.days === 'Son 120 Gün') {
              this.changeData_Son120Gun()
            }  

    },    
    getDormStats (data) {  
      let self = this
      axios.get(`/dorm/statistics/${data.id}`)
        .then(response => {
          let dormStat = {id: data.id, name: data.name, counts: response.data.counts}
          self.totalView = self.totalView + response.data.counts.views
          self.dormStat.counts.views = self.totalView
          self.dormStats.push(dormStat)
          self.selectDays({name: 'Son 30 Gün'})
          // self.dormStat = this.dormStats[0]
        })
        .catch(e => {
          this.errors.push(e)
        })
    },     
    getStats () {  
      
      let self = this
      axios.get(`/country/turkey/status/deaths/live?from=2020-03-11T00:00:00Z&to=2020-04-01T00:00:00Z`)
        .then(response => {
          self.statistics = response.data
          self.dormStat.counts.messages = response.data.counts.messages
          self.dormStat.counts.likes = 0
//           self.dorms = response.data.dorms         
           response.data.dorms.forEach((data) => {

        //     data.name = data.name + ', ' + data.city.name
        //     self.getDormStats(data)

            })      
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
      getDorms () {
      let self = this
      axios.get(`/dorm/dorms`)
        .then(response => {
           self.logo = response.data[0].logo
           //self.dorms = response.data
           //let dorm =  {id: 1, name: 'Tüm Yurtlar', slug:'tum_yurtlar', value: 'Tüm YUrtlar'}
           let dorm = response.data[0]
           dorm.name = 'Tüm Yurtlar'
           dorm.id = 1
         //  self.dorms.push(dorm)
           response.data.forEach((data) => {
             // data.name = data.name + ', ' + data.city.name + ', ' + data.district.name

             self.dorms.push(data)
             self.getDormStats(data)
            })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },  
  },
  created() {
    this.getCountries()
    const country =   {
    "Country": "Turkey",
    "Slug": "turkey",
    "ISO2": "TR"
  }
    this.getInfectionNumbers(country)
    this.getActive(country)
    this.getDeath(country)
    this.getRecovered(country)
    this.getLiveData(country)
    this.getStats(country)
    this.getDeaths(country)

    var self = this

      var today = new Date();
      var today1 = new Date();

      
      today.setDate(today1.getDate());
       var dd_ = String(today.getDate()).padStart(2, '0');
       var mm_ = String(today.getMonth() + 1).padStart(2, '0');
       var yyyy_ = today.getFullYear();
      this.day_30 = yyyy_ + '-' + mm_ + '-' + dd_
      this.day_31 = yyyy_ + '-' + mm_ + '-' + dd_



    //this.getDorms(1)
    //this.getMessages(1)
    
    
    // initial numbers
    // this.dormStat = {counts: {views:0, messages:0, likes:0,comments:0}}
    //this.dormStat.counts.views = this.getTotalView

  //  this.mail = window.localStorage.getItem('mail')
  //  this.username = window.localStorage.getItem('username')
  },
computed: {
  ...mapGetters(['first_name', 'last_name', 'phone', 'mail1']),
    mobileCheck() {
     var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check
  },  
  getCommentNumber() {
    if(this.id) {
    return this.commentNumber
    } else {
      return this.statistics.counts.comments
    }
  },
  getClickNumber() {
    if(this.id) {
    return this.clickNumber
    } else {
      return this.statistics.counts.normalClicks.length
    }
  },
  getTotalView() {
    if (this.statistics) {
    let str = this.statistics.counts.views.toString()
    //let str = this.totalView.toString()
    if(str.length === 6) {
        return str.slice(0, 3) + "," + str.slice(3)
    } else if(str.length === 4) {
        return str.slice(0, 1) + "," + str.slice(1)
    } else if(str.length === 5) {
        return str.slice(0, 2) + "," + str.slice(2)
    }
    } else return 0

  },
    getTotalMessages() {
    let str = this.statistics.counts.messages.toString()
    if(str.length === 6) {
        return str.slice(0, 3) + "," + str.slice(3)
    } else if(str.length === 4) {
        return str.slice(0, 1) + "," + str.slice(1)
    } else if(str.length === 5) {
        return str.slice(0, 2) + "," + str.slice(2)
    } else {
        return this.statistics.counts.messages
    }
  },
  getSeries() {
    if(this.checked1) {
      return [ {
          name: 'Görüntülenme',
          data: [0,0,0,0 ],
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      }    
      ]
    } else if(this.checked1 && this.checked2) {
      return [ {
          name: 'Görüntülenme',
          data: [0,0,0,0 ],
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
      },{
          name: 'Mesaj',
          data: [ 205, 155, 205, 255, 19 ],
          labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana']
        }
        ]
      }
    }
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
