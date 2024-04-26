export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        const token = localStorage.getItem('token')
        const blockedPages = ["user-profile"];
        const isUserTryToAccessBlockedPage = blockedPages.includes((to.matched[0]?.name?.toString() ?? ""));
        if (!token && isUserTryToAccessBlockedPage) {
            return navigateTo('/login')
        }

        if (to.path === '/login' || to.path === '/register') {
            if (token) {
                return navigateTo('/')
            }
        }
        if (to.path === '/user-profile') {
            return navigateTo('user-profile/my-resume')
        }
    }
   
  });