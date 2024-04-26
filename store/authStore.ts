import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth-store',
    state: () => ({
        token: ''
    }),
    getters:{

    },
    actions: {
        setToken(token: string) {
        this.token = token
        }
    }
})