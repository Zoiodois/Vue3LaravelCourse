<!-- **Composition API** -->
<template>
    <input type="text" v-model="userName">

    <template v-for="user in users" :key="user.id">

        <input type="checkbox" @click="userName = user.firstName" :checked="userName === user.firstName"
           
            >{{ user.firstName }}

    </template>

    <select name="" v-model="userName">
        <option :value="user.firstName" v-for="user in users">{{ user.firstName }}</option>

    </select>


</template>

<script setup>

import { reactive, ref } from 'vue';

const users = reactive([
    {
        id: 1,
        firstName: 'Felipe'
    },
    {
        id: 2,
        firstName: 'Pedro'
    },
    {
        id: 3,
        firstName: 'Maria'
    }
]);

const userName = ref('Felipe')


</script>





<!-- **Option Api** -->
<!-- <template>
    <input type="text" v-model="userName">

    <template v-for="user in users" :key="user.id">

        <input type="checkbox" name="" @click="userName = user.firstName" v-bind:checked="userName === user.firstName" >{{ user.firstName}}

    </template>

    <select name="" v-model="userName">
        <option :value="user.firstName" v-for="user in users">{{ user.firstName}}</option>
       
    </select>


</template>

<script>


export default {
    data(){
        return {
            userName: "Felipe",
            users:[
                {
                    id: 1,
                    firstName: 'Felipe'
                },
                {
                    id: 2,
                    firstName: 'Pedro'
                },
                {
                    id: 3,
                    firstName: 'Maria'
                }
            ]

        }
    }


}

</script>

<style scoped>

</style> -->