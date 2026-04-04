export default defineNuxtRouteMiddleware((to, from) => {
  const { currentUser } = useAuth()
  
  if (!currentUser.value && to.path !== '/login') {
    return navigateTo('/login')
  }
  
  if (currentUser.value && to.path === '/login') {
    return navigateTo('/')
  }
})
