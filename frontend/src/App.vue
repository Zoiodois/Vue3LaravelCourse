<!-- Using the cpomposition API -->

<template>

    <h2> Lista de Usuários:</h2>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.firstName }}</li>
    </ul>
</template>

<!-- OPTIONS API: -->
<script>

import http from '@/services/http';

export default {


    data() {
        return {
            users: []
        }
    },
    async mounted() {
        try {
            const { data } = await http.get('http://localhost:8000/api/users');
            this.users = data;


        } catch (error) {
            console.log(error);
        }
    }


}

</script>

<!-- Composition API -->
<!-- <script setup>
    import Header from './components/Header.vue';
    import { onMounted, onUpdated, ref, reactive } from 'vue';
    const count = ref(0);
    const userName = ref('Alexandre');
    const showHeader = false;

    const users = reactive([
      {   
        id: 1,
        firstName:'Alexandre',
        age: 36,
        is_admim:1,
       },
       {
        id: 2,
        firstName:'Maria',
        age: 33,
        is_admim:0,
       },
       {
        id: 3,
        firstName:'Mario',
        age: 58,
        is_admim:0,
       },
       {
        id: 4,
        firstName:'Marina',
        age: 23,
        is_admim:0,
       }
    ])
    
    onMounted(()=>{
        console.log('montado');
    })

    onUpdated(()=> {
        console.log('updaed');
    })

</script> -->

<style>
@import "@/assets/app.css";
</style>