import Vue from 'vue'

export const settings = () => {
  return Vue.axios({
    method: 'GET',
    url: '/site/settings'
  })
}
