<template>
  <div class="featured-dorms__list dorm-card__list user__list-wrp istatistik">
    <container class="gen-container">

      <div class="user-settings__top">
        <div class="user-settings__profil">
          <div class="left-one">
<!--             <div class="left">
             <img src="@/assets/img/campuscity-logo.png" alt="" class="user-settings__profil-img">
              </div> -->
            <div class="right" style="margin-left: -45px;">
              <img :src="logo" alt="" class="user-settings__profil-img2">
              <p class="user-settings__profil-name">
              Hoşgeldin ! </p>
              <p class="user-settings__profil-mail">
                Covid 91
              </p>
              <p class="user-settings__profil-name mail">
                Mail adresi
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
      <div class="user__list-offer">

        <!--//components-->
        <Messages/>
        <!--//components-->

      </div>
    </container>
  </div>
</template>

<script>
import Messages from '@/components/Messages'
//mport Pagination from '@/components/Pagination'
 import axios from 'axios'
export default {
  name: 'DormUserMessages',
  components: {
    Messages
  },
  metaInfo () {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Mesajlarım',
      link: [
        { rel: 'canonical', href: window.location.origin + '/yurtlar/mesajlar/' }
      ]
    }
  },  
  data () {
    return {
      logo: '',
      mail: '',
      messages: [],
      errors: [],
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
      ]
    }
  },
  created() {
 
    // this.getMessages()
    // this.getDorms()
  },
    computed: {
 
  }, 
  methods: {
    getDorms () {
      let self = this
      axios.get(`/dorm/dorms`)
        .then(response => {
           self.logo = response.data[0].logo    
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getMessages () {  
      let self = this
      axios.get(`/dorm/messages`)
        .then(response => {
          //self.messages = response.data.reverse()
         self.pagination = response.data.data
          //self.messages = message.reverse()
          let dene = 5
/*           self.dorms.dataforEach((data) => {
            const city = self.cities.find((city) => city.id == data.city_id)
            data.city_name = city.name
            })  */     
        })
        .catch(e => {
          this.errors.push(e)
        })
    },        
  }
}
</script>

<style lang="scss">

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
        margin-left: auto;
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

        &-item {
          display: flex;
          width: 24%;
          background-color: #f5f8fc;
          align-items: center;
          justify-content: space-evenly;
          padding: 15px 0;
          border-radius: 8px;
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

  .dorm-msg-list{
    .user-settings__top{
      border-bottom: 1px solid #cbd0dd6b;
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
  }


     .user-settings__profil-img2 {
    width: 25%;
    height: 25%;
    border: 3px solid white;
    border-radius: 10px;
    background-color: white;
    padding: 13px;
    box-shadow: 0px 8px 60px 0px rgba(62, 62, 141, 0.05);
  }

</style>
