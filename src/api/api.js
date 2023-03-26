import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "65d2d4b3-9c6d-4a67-99a8-50a467fd44da"
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}



