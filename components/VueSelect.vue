<template>
  <div class="form-container">
    <select-box
      :options="options"
      :disabled="disabled"
      @onselect="selectChange"
      form-element
      :title="title"
      :myplaceholder="placeholder"
      class="select-box"/>
  </div>
</template>

<script>
import SelectBox from '@/components/SelectBox'
export default {
  name: 'VueSelect',
  components: {
    SelectBox
  },
  props: {
    title: String,
    value: String,
    placeholder: String,
    options: Array,
    selectedValue: Number,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectChange (opt) {
      this.$emit('onselect', opt)
    }
  }
}
</script>

<style scoped>
.select-box{
  border-bottom: 1px solid #e4e4e4;
}
  .select__placeholder{
    font-size: 12px;
  }
</style>
