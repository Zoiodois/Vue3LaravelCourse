export default {
    namespaced:true,
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            console.log(payload);
            // state.count++;
            state.count += payload;
        }
    },
    actions: {
        increment(state, payload) {
            state.commit('increment');
        }
    },
    getters: {
        getCounter(state, payload) {
            return 'Totla Count = ' + state.count;
        }
    }
}