<template>
<div class="icon-sprite">
  <div class="custom-container">
    <div class="icon-sprite__title">ICONS</div>
    <div class="icon-sprite__list">
      <div class="icon-sprite__item" v-for="icon in icons" :key="icon.id">
        <div class="icon-sprite__icon">
          <svg-icon :type="icon.name"></svg-icon>
        </div>
        <div class="icon-sprite__name">{{ icon.name }}</div>
      </div>
    </div>

    <div class="height-500"></div>
  </div>
</div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
import ArrowDown from '@/assets/icons/icon-arrow-down.svg'
import ArrowUp from '@/assets/icons/icon-arrow-up.svg'
import ArrowLongRight from '@/assets/icons/icon-arrow-long-right.svg'
import ArrowLongLeft from '@/assets/icons/icon-arrow-long-left.svg'
import Vaccine from '@/assets/icons/vaccine.svg'
import Virus from '@/assets/icons/virus.svg'
import Exclamation from '@/assets/icons/exclamation-mark.svg'
import Oclock from '@/assets/icons/icon-oclock.svg'

export default {
  name: 'icon-sprite',
  components: {
    SvgIcon,
    ArrowDown,
    ArrowUp,
    ArrowLongRight,
    ArrowLongLeft,
    Oclock,
    Vaccine,
    Virus,
    Exclamation,
  },
  data () {
    return {
      icons: [
        {
          id: 0,
          name: 'icon-arrow-down'
        },
        {
          id: 1,
          name: 'icon-arrow-up'
        },
        {
          id: 2,
          name: 'icon-arrow-long-right'
        },
        {
          id: 3,
          name: 'icon-arrow-long-left'
        },
        {
          id: 4,
          name: 'vaccine'
        },
        {
          id: 5,
          name: 'virus'
        },
        {
          id: 6,
          name: 'exclamation-mark'
        },
        {
          id: 7,
          name: 'icon-oclock'
        },

      ]
    }
  }
}
</script>

<style scoped>
.icon-sprite {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 288;
  overflow: auto;
  background: #f0f4f9;
}

.icon-sprite__title {
  margin-top: 50px;
  font-size: 55px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  color: #546391;
}

.icon-sprite__list {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
}

.icon-sprite__item {
  width: 265px;
  text-align: center;
  border: 1px solid #bac2cb;
  margin: 10px;
  border-radius: 9px;
  padding: 20px;
  background: #fff;
}

.icon-sprite__icon {
  font-size: 45px;
  margin-bottom: 10px;
  display: inline-flex;
}

.icon-sprite__name {
  font-size: 20px;
  font-weight: 600;
  background: #e3e9f0;
  border-radius: 6px;
  padding: 3px;
  margin-top: 15px;
}
</style>
