<template>
    <h2>Users com Modulo Importado Composables</h2>
    <ul>
        <li v-for="(user, index) in users['users']" :key="index">{{ user.firstName }}</li>
    </ul>

    <hr><br>
    <hr>
    <h2>Composables:</h2>
    <button @click="increment">Add : {{ count }}</button>


    <br>
    <hr><br>

    <teleport to='#modal' v-if="showModal">
        <ModalSimples>Modal Chamado daqui</ModalSimples>
    </teleport>
    <button @click="showModal = !showModal">Show Modal</button>
    <br>
    <hr>

    <button @click="showSomething()">Show</button>
    <input type="text" v-if="showElement" ref="inputElement">
</template>

<script setup>
import { nextTick, ref } from 'vue';
import ModalSimples from '@/components/icons/ModalSimples.vue';
import { useCount } from '@/composables/count.js';
import { useUsers } from '@/composables/users.js';

const { users } = useUsers();

const { count, increment } = useCount();

const showElement = ref(false);
const inputElement = ref(null);
const showModal = ref(false);

async function showSomething() {

    console.log('something');
    showElement.value = true;
    console.log(inputElement.value);
    await nextTick(() => {
        inputElement.value.focus();
        console.log(inputElement.value);

    })
    console.log('carregou');

}

</script>