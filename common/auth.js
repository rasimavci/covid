const AUTH_TOKEN = 'access_token'

export const getToken = () => {
  return window.localStorage.getItem(AUTH_TOKEN)
}

export const setToken = (token) => {
  return window.localStorage.setItem(AUTH_TOKEN, token)
}

export const removeToken = () => {
  return window.localStorage.removeItem(AUTH_TOKEN)
}

export const loggedIn = () => {
  return window.localStorage.getItem(AUTH_TOKEN)
}
