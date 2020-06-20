<template>
  <div class="form-container">
    <!--<input type="text" class="form-input" placeholder=" " @input="handleInput" v-model="content" @focus="inputFocus"-->
           <!--v-bind:class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"-->
           <!--v-on:blur="emailBlured = true">-->
    <input
      :type="type"
      class="form-input form-control"
      placeholder=" "
      @input="handleInput"
      v-model="content"
      autocomplete="off"
      v-if="type !== 'textarea'"
      @blur="inputFocusOut(content)"
    >
    <textarea
      v-if="type === 'textarea'"
      :type="type"
      class="form-input textarea form-control"
      placeholder=" "
      @input="handleInput"
      v-model="content"
      @blur="inputFocusOut(content)"
      autocomplete="off"></textarea>
    <div class="form-placeholder">{{ placeholder }}</div>
    <slide-up-down :active="showError" :duration="300">
      <div class="form-message" :class="formStatus">{{ formMessage }}</div>
    </slide-up-down>
  </div>
</template>

<script>
export default {
  name: 'VueInput',
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    autocomplete: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      email: '',
      emailBlured: false,
      showError: false,
      valid: false,
      submitted: false,
      content: this.value,
      formMessage: 'Bu kısım boş geçilemez!',
      formStatus: ''
    }
  },
  methods: {
    inputFocusOut (value) {
      if(!value) {
      if (value === undefined || value.trim() === '' || value.trim() === ' ') {
        if (this.required) {
          this.formMessage = 'Bu kısım boş geçilemez!'
          this.formStatus = 'error'
          this.showError = true
        }
      } else if (this.type === 'email' && !this.validEmail(value)) {
        this.formMessage = 'Geçersiz e-posta formatı!'
        this.formStatus = 'error'
        this.showError = true
      } else {
        this.showError = false
      }
      this.$emit('inputFocusOut', value, this.formStatus)
      }
    },
    handleInput () {
      this.showError = false
      this.$emit('input', this.content)
    },
    validate () {
      this.emailBlured = true
      if (this.validEmail(this.email)) {
        this.valid = true
      }
    },

    validEmail (email) {
      const re = /(.+)@(.+){2,}\.(.+){2,}/
      return re.test(email.toLowerCase())
    }
  }
}
</script>

<style scoped>
  .form-control {
    border: none;
    border-bottom: 1px solid #dadce2;
    border-radius: 0;
    outline: 0;
  }

  .form-control:focus {
    box-shadow: none;
  }

  .custom-select.is-invalid, .form-control.is-invalid, .was-validated .custom-select:invalid, .was-validated .form-control:invalid {
    border-color: transparent;
    border-bottom-color: #dc3545;
    outline: 0;
  }
</style>
