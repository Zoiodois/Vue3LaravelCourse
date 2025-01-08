import http from '@/services/http';
export default {
    namespaced: true,
    state: {
        data: []
    },
    mutations:{
        updateUsers(state, payload){
            console.log(payload)
            state.data = payload;
        }
    },
    actions: {
        async getUsers(state){
            try {
                const {data} = await http.get('api/users');
                state.commit('updateUsers', data)
            } catch (error) {
                console.log(error.response)
            }
        
        }

    },
    getters: {},
}