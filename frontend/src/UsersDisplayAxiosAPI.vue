
<style>
@import "@/assets/app.css";
</style>

<!-- Composition API -->
<template>
    <h2> Lista de Usuários:</h2>
    <ul>
        <li v-for="user in users['users'].data" :key="user.id">{{ user.firstName }}</li>
    </ul>
</template>


<script setup>
import http from '@/services/http';
import Header from './components/Header.vue';
import { onMounted, onUpdated, ref, reactive } from 'vue';
const count = ref(0);
const userName = ref('Alexandre');
const showHeader = false;

let users = reactive({users:[]})

onMounted(async ()=>{
        try {
            const data = await http.get('api/users');
            users['users'] = data;
            console.log(users.users);
        } catch (error) {
            
            console.log(error);
        }
})

onUpdated(()=> {
    console.log('updated');
})

</script>


<!-- OPTIONS API: -->
<!-- <template>
    <Header />

    <h2> Lista de Usuários:</h2>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
    </ul>
</template> -->
<!-- <script>

import http from '@/services/http';

export default {


    data() {
        return {
            users: []
        }
    },
    async mounted() {
        try {
            const { data } = await http.get('api/users');
            this.users = data;


        } catch (error) {
            console.log(error);
        }
    }


}

</script> -->

