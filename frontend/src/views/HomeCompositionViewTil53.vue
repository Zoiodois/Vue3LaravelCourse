<style>
.notFound {
    color: red;
}

/* importar modal novamente */
</style>

<template>

   <h2>WatchEffect - Somente na Composition API - Single Elemten</h2>
   <input type="text" v-model="firstName">
   <input type="text" v-model="lastName">
   <br>
   <br>
   <h2>WatchEffect - Somente na Composition API - Object</h2>
   <input type="text" v-model="user.firstName">
   <input type="text" v-model="user.lastName">

   <br><hr><br>


    <h2>Watch Dolar Exemple</h2>
    <CurrencyComp type="text" v-model="dolar" placeholder="dolar" :options="{ currency: 'USD'}"></CurrencyComp>
    <hr>
    <ul>
      <li>{{  dolarTodayValue }}</li>
      <li>{{ dolarToReaisValue}}</li>
    </ul>



    <br><hr><br>
    <h3>Home Computed - Users Exemple Deactivated</h3>
    <!-- {{ fullName }}

    <h3>Admins</h3>
    <ul v-for="(user, index) in users" :key="index">

        <li v-if="user.is_admin">{{ user.firstName }}</li>
    </ul>

    <h3>Not Admins</h3>
    <ul v-for="(user, index) in userNotAdmin" :key="index">
        <li>{{ user.firstName }}</li>
    </ul> -->
    <br>
    <hr>
    <h2>Watch Exemple: Single or Array elements </h2>
    <input type="text" name="" id="" v-model="firstName" placeholder="firstName">
    <input type="text" name="" id="" v-model="lastName" placeholder="lastName">
    <br>
    <h2>Watch Exemple: Objects</h2>
    <input type="text" name="" id="" v-model="user.firstName" placeholder="firstName">
    <input type="text" name="" id="" v-model="user.lastName" placeholder="lastName">
    <br>
    <h2>Watch and Watch Effect Exemple: Objects of Objects</h2>
    <div v-for="(item, index) in itens" :key="index">{{ item.name }}    <input type="text" v-model="item.name" placeholder="item Name"> </div>
    
    <br>

    <br>
    <hr>
    <br>
    <h3>Counte Exemples</h3>
    {{ countComputed }}
    <button @click="computedCount++"> Add Computed</button>

    <br>
    {{ countFunction() }}
    <button @click="functionCount++"> Add Function</button>

    <br>
    <hr>
    <br>

    <button @click="openModal = !openModal">Open Modal</button>

    <br>
    <hr>
    <br>

    <Modal v-if="openModal" @closeModal="openModal = false">
        <template v-slot:header>
            <h2>Header do Modal</h2>
        </template>

        <template #default>
            <form action="">
                <input type="text" placeholder="email">
                <input type="text" placeholder="Senha">
                <button>Logar</button>
            </form>
        </template>

        <template #footer>
            <h2>Footer do Modal</h2>
        </template>

    </Modal>

    <br>
    <hr>
    <br>


    <!-- composition api reference exemple -->
    <h2>Users Search Exemple Composition API</h2>

    <input type="text" placeholder="search usr" v-model="userSearch" @keyup="searchUserAr">

    <ul>
        <li v-for="(user, index) in users['users'].data" :key="index" :limit="3" size="small">{{ user.firstName }} {{
            user.lastName }}</li>
    </ul>
    <Bootstrap5Pagination :data="users['users']" @pagination-change-page="handleEventePagination">

        <template #prev-nav>
            <span>&lt; Anterior</span>
        </template>
        <template #next-nav>
            <span>&lt; Proxima</span>
        </template>
    </Bootstrap5Pagination>


    <div v-html="userNotFound"></div>



</template>

<script setup>

import Modal from '@/components/icons/Modal.vue';
import { ref, onMounted, reactive, computed, watch, watchEffect } from 'vue';
import _ from 'lodash';
import http from '@/services/http';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import format from '@/services/format';
import CurrencyComp from '@/components/CurrencyComp.vue';


const dolar = ref(0);
const dolarHoje = ref(0);
const dolarToReal = ref(0);

const dolarToReaisValue = computed(()=> {
    return `O valor em reais de ${format(dolar.value,'en-US','USD')} é ${format(dolarToReal.value,'pt-BR','BRL')} `
})

const dolarTodayValue = computed(()=>{
    return `O valor do dolar hoje é ${format(dolarHoje.value,'pt-BR','BRL')}`
})

async function getDolar(typeCurrency = 'USD-BRL') {
    const {data} = await http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const currency = typeCurrency.split('-').join('');

    return data[currency];
}
onMounted(async () => {
    try {
        const dolar = await getDolar();
        dolarHoje.value = dolar['high'];
        // console.log(dolarToReal.value);

    } catch (error) {
        console.log(error);
    }

})

watch(dolar, (value)=> {
    dolarToReal.value = value * Number(dolarHoje.value);
    console.log(dolarToReal.value);

})






const users = reactive({ users: [] });
const userSearch = ref();
const loading = ref(true);
const userNotFound = computed(() => {
    return (!loading.value && users['users'].data.length <= 0) ? '<span class="notFound">Nenhum User Encontrado.</span>' : '';
});
const firstName = ref('');
const lastName = ref('');

let openModal = ref(false);

const user = reactive({
    firstName: 'Felipe',
    lastName: 'Bsr'

})

// watch([firstName, lastName], ([newValueFirst, newValueLast],[oldFirst, oldLast]) => {
//     console.log('new =>' + [newValueFirst] + ' old =>' + [newValueLast])
// })

watchEffect(()=> {
    console.log(firstName.value, lastName.value)
})



// Exemple de uma propriedade em um objeto
// watch(
//     () =>user.firstName,
//     (value, oldValue)=> {
//         console.log(value + oldValue)
//     }
// )

watch(
    // nao observa o valor antigo, ele é sempre igual
    user,
    (value)=> {
        console.log(value.firstName)
    }
)



const itens = reactive([
    {
        id: 1,
        name: 'MacBook'
    },
    {
        id: 2,
        name: 'windows'
    },
])

watchEffect(()=> {
    itens.forEach((item) => {
        console.log(item.name)
    })
})

watch(
    itens, (value) => {
        value.forEach((item) => {
            if(!Number.isInteger(Number(item))){
                console.log('not a number' + item.name)
            }
        })
       
    }
)

function handleEventePagination(page) {
    return userSearch.value ? searchUser(page) : getUsers(page);
}

async function searchUser(page = 1) {
    try {
        const { data } = await http.get('/api/users/search?page=' + Number(page), {
            params: {
                user: userSearch.value
            }
        });

        if (!userSearch.value) {
            getUsers();
            return;
        }

        users['users'] = data;

        loading.value = false;
        console.log(data);


    } catch (error) {
        console.log(error.response.data)
    }
}
async function getUsers(page = 1) {
    try {
        const { data } = await http.get('/api/users?page=' + Number(page));
        console.log(data);
        users['users'] = data;
    } catch (error) {
        console.log(error.response.data);
    }
}

const fullName = computed(() => {
    return user.firstName + ' ' + user.lastName;
})

// const userNotAdmin = computed(() => {
//     return users.filter((user) => user.is_admin === 0);
// })

const computedCount = ref(0);
const functionCount = ref(0);

const searchUserAr = _.debounce(async () => {
    searchUser();
}, 1000)

onMounted(async () => {
    getUsers();
    //Na compisition API poara selecionar vairos elemento, é melhor usar o querySelectorAll
    // console.log(document.querySelector('#img'))
    // console.log(document.querySelectorAll('#product'))
    // console.log(img.value);
    // console.log(img.value['src']);
    // console.log(product.value); 
})

const countComputed = computed(() => {
    console.log('called computed count');
    return computedCount.value;
})

function countFunction() {
    console.log('called function count');
    return functionCount.value;
}

</script>