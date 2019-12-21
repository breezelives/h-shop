import Vue from "vue"

export default {
    login(params) {
        return Vue.axios.post('/login', params)
    }
}