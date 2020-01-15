export default function ({ $axios, redirect, store }) {

  const token = store.getters['auth/token']
  $axios.interceptors.request.use(request => {
    if (store.getters['auth/isAuthenticated'] && !request.headers.common['Authorization']) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    return request

  })

  $axios.onError(error => {
    if (error.response) {
      if (error.response.status === 401) {
        redirect('/admin/login?message=session')
        store.dispatch('/auth/logout')
      }

      if (error.response.status === 500) {
        console.error('Server 500 error');
      }
    }
  })

}