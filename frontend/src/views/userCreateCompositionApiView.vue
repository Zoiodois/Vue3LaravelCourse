<template>
      <h2>Composition API</h2>


    <form action="" @submit.prevent="create">
        <input type="text" placeholder="firstName" v-model="user.firstName">
        <span v-if="errorsForm['errors'].firstName" class="error">{{  errorsForm['errors'].firstName[0] }}</span>
        <input type="text" placeholder="lasttName" v-model="user.lastName">
        <span v-if="errorsForm['errors'].lastName" class="error">{{  errorsForm['errors'].lastName[0] }}</span>
        <input type="text" placeholder="Email" v-model="user.email">
        <span v-if="errorsForm['errors'].email" class="error">{{  errorsForm['errors'].email[0]}}</span>
        <input type="text" placeholder="Password" v-model="user.password">
        <span v-if="errorsForm['errors'].password" class="error">{{  errorsForm['errors'].password[0] }}</span>
        <button type="submit">Enviar</button>
    </form>

</template>

<script setup>
import http from '@/services/http';
import { reactive } from 'vue';

const user = reactive({});
const errorsForm = reactive({errors:{}});
async function create(){
    try {
        const data = await http.post('api/user',user);
        console.log(data);
    } catch (errors) {
      console.log(errors.response.data);
      if(errors.response?.data){

         errorsForm['errors'] = errors.response.data['errors'];
       }

        console.log(errorsForm)
    }
}


</script>

<style>
.error{
    color: red;
}
</style>