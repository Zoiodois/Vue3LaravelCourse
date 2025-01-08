<template>
    <button @click="increment(10)">Add</button>
    {{ count }} 
    {{ getCounter }}
    <hr>
    <button @click="$store.commit('counter/increment', 10)">Add +10</button>
    <!-- {{ getCounter }} -->

    <hr>

    <h2>Users:</h2>
    
    <template v-if="data.length > 0">
        <button @click="updateUsers([])">Hide Users - Uses mutation</button>
        
        <ul>
            <li v-for="(user, index) in data" :key="index">
                {{ user.firstName }}
            </li>
        </ul>
    </template>
    <template v-else>
        <button @click="getUsers">Get Users</button>

    </template>

</template>

<script>

import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

export default {

computed:{
    ...mapState({
        count: state => state.counter.count,
        data: state => state.users.data
    }),
    ...mapGetters({
        getCounter: 'counter/getCounter'
    })

},

methods: {
     ...mapActions('users', ['getUsers']),

    ...mapMutations('counter',['increment']),
    ...mapMutations('users',['updateUsers']),
}
}

</script>