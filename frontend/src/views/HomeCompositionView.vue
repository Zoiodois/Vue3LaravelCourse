<template>

   {{ store.state.counter.count}}
   <button @click="increment">Add:</button>

   <hr>
   {{  store.getters['counter/getCounter'] }}
   <hr>
   {{  counted }}
   <hr>
   <h2>Users</h2>

   <template v-if="data.length > 0">
        <button @click="updateUsers">Hide Users - Uses mutation</button>
        
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


<script setup>
import { computed } from 'vue';
import {useStore} from 'vuex';

const store = useStore();
const increment = () => store.commit('counter/increment', 10);
const data = computed(() => store.state.users.data)

const counted = computed(()=> store.getters['counter/getCounter'])
const getUsers = () => store.dispatch('users/getUsers');
const updateUsers = () => store.commit('users/updateUsers', [])


</script>