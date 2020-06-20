<template>
  <div class="select" v-on-clickaway="closeSelect" :class="[ selectOpen ? 'active' : '' ]">
    <div class="select-header"
         :class="[{
         active : selected || currentOption !== null,
         open : selectOpen,
         disabled: disabled
         }]"
         @click="selectToggle">
      <input ref="myinput" type="text" class="select__list-search" v-model="search" v-on:click="refreshList">
      <div class="form-placeholder">{{ myplaceholder }}</div>
      <span class="select__caret">
        <svg-icon type="icon-arrow-down"/>
      </span>
    </div>
    <div class="select__wrp" :class="[ selectOpen ? 'active' : '' ]">

      <div class="select__list">

        <div
          class="select__option"
          v-for="(option, index) in filteredItems"
          :key="index"
          :data-value="option.value"
          :class="{ selected : option.value === currentOption && currentOption.value }"
          @click="selectItem(option, option.value)"
        >
          <span class="icon-font" v-if="option.icon">
            <img :src="option.icon" alt="" class="icon">
          </span>

          <div class="select__option-title">
            {{ option.name }}
          </div>

        </div>
      </div>
    </div>

    <select hidden>
      <option
        v-for="(option, $index) in options"
        :key="$index"
        :value="option.value"
        :selected="option.value === currentOption && currentOption.value">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  name: 'SelectBox',
  components: {
  },
  data () {
    return {
      current: '',
      search: '',
      // title: 'Seçiniz',
      currentOption: null,
      selected: false,
      selectOpen: false,
      name: ''
    }
  },
  props: {
    myplaceholder: String,
    options: {
      type: Array,
      require: true
    },
    icon: Boolean,
    title: {
      type: String,
      default: 'Select Genre'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selectedValue: Number
  },
  methods: {
    refreshList () {
      // console.log('refresh list')
    },
    selectItem (option, value) {
      // this.$refs.myinput.placeholder = option.name
      this.current = option.name
      this.currentOption = option
      this.selected = true
      this.selectOpen = false
      // this.$refs.myinput.value = 'heyyo'
      // Fill input (auto complete)  only in search pages (auto complete) othwersise we need to clear inout when clicked
    //   if(this.$route.fullPath ==='/' || this.$route.fullPath.includes('movie-search') || this.$route.fullPath.includes('-y-') || this.$route.fullPath.includes('sehirler') || this.$route.fullPath.includes('universiteler') ) {
        if(option.name != 'No results!') {
         this.search = option.name
       }
     //  }
      this.$emit('onselect', this.currentOption)
    },
    selectToggle () {
      if (!this.disabled) {
        this.selectOpen = !this.selectOpen
      }
    },
    closeSelect () {
      this.selectOpen = false
    },
    getSelectedValue () {
      if (this.selectedValue) {
        const selectedItem = this.options.find((item) => item.id === this.selectedValue)
        this.currentOption = selectedItem || null
      } else {
        this.currentOption = null
      }
    },
    getFiltered (options) {
        return options.filter(item => {
          if(item.name) {
          return item.name.toLocaleUpperCase().indexOf(this.search.toLocaleUpperCase()) !== -1
          } else return ''
        })
    },    
  },
  computed: {
    filteredItems () {
      if (this.options) {
        const result = this.getFiltered(this.options)
        const noresult = [{name:'No Result!'}]
        if(result.length) {
          return result
        } else {
          return noresult
        }
      } else {
        return null
      }
    }
  },
  watch: {
    options () {
      this.selected = false
      this.getSelectedValue()
    }
  },
  mounted () {
    this.getSelectedValue()
    this.current = this.title
    if (!this.title) {
      this.current = 'Select Genre'
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/components/selectbox";
</style>
