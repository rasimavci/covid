import Vue from 'vue'

export const dorms = () => {
  return Vue.axios({
    method: 'GET',
    url: '/dorms'
  })
}
