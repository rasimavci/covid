import Vue from 'vue'

export const login = (email, password) => {
  return Vue.axios({
    method: 'POST',
    url: '/user/login',
    data: { email, password }
  })
}

export const register = (first_name, last_name, university_id, faculty_id, phone, email, password) => {
  return Vue.axios({
    method: 'POST',
    url: '/user/register',
    data: { first_name, last_name, university_id, faculty_id, phone, email, password }
  })
}

export const logout = () => {
  return Vue.axios({
    method: 'POST',
    url: '/user/logout'
  })
}

export const profile = () => {
  return Vue.axios({
    method: 'GET',
    url: '/user'
  })
}

export const addresses = () => {
  return Vue.axios({
    method: 'GET',
    url: '/addresses'
  })
}

export const orders = () => {
  return Vue.axios({
    method: 'GET',
    url: '/orders'
  })
}
