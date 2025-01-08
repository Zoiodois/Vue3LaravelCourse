<style>
.notFound {
  color: red;
}

/* importar modal novamente */
</style>

<template>
  <main>
    <h2>Home Option Api - Users Exemple deactivated</h2>

    <!-- <template v-for="(user, index) in users" :key="index">
      <li v-if="user.is_admin">{{ user.firstName }}</li>
    </template>

{{ fullName }}

<h2>Not Admin</h2>
<ul>
  <li v-for="(user, index) in userIsNotAdmin" :key="index"> {{ user.firstName }}</li>
</ul> -->
<br>
<hr>

<h2>Watch Exemple: FirstName e LastName</h2>
<input type="text" name="" id="" v-model="firstName" placeholder="firstName">
<input type="text" name="" id="" v-model="lastName" placeholder="lastName">
    <br>
    <hr>
    <h2> Conversor de Moeadas - Exemple</h2>


    <Currency type="text" v-model="dolar" placeholder="dolar" :options="{ currency: 'USD'}"></Currency>
    <hr>
    <ul>
      <li>{{  dolarTodayValue }}</li>
      <li>{{ dolarToReaisValue}}</li>
    </ul>


    <br>
    <hr>

    <h2>Modal Exemple</h2>

    <button @click="openModal = !openModal"> Abrir Modal</button>

    <template v-if="openModal">
      <Modal>

        <template #header>
          <h2>Modal Header</h2>
        </template>

        <template #default>

          <form action="">
            <input type="text" placeholder="email">
            <input type="text" placeholder="Senha">
            <button>Logar</button>
          </form>
        </template>

        <template v-slot:footer>
          <h2>Modal Footer</h2>
        </template>



      </Modal>
    </template>


    <br>
    <hr>


    <!-- option api reference -->
    <h2>Users Search Exemple Option API</h2>

    <input type="text" placeholder="search usr" @keyup="searchUserAr" v-model="searchInput">

    <ul>
      <li v-for="(user, index) in users.data" :key="index">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>

    <div v-html="userNotFound"></div>

    <Bootstrap5Pagination :data="users" @pagination-change-page="handlePagination" :limit="1" :show-disable="true" size="large" align="center">
      <template #prev-nav>
        <span>&lt; Anterior</span>
      </template>
      <template #next-nav>
        <span> Proxima&lt;</span>
      </template>

    </Bootstrap5Pagination>


    <!-- Watcher Exemple -->
     <WatchOption />

    





  </main>
</template>

<script>
import Modal from '@/components/icons/Modal.vue';
import format from '@/services/format';
import Currency from '@/components/Currency.vue';
import _ from 'lodash';
import http from '@/services/http';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';
import WatchOption from '@/components/WatchOption.vue';


export default {
  components: { Modal, Bootstrap5Pagination, WatchOption, Currency  },
  data() {
    return {
      openModal: false,
      firstName: '',
      lastName:'',
      users: [],
      userSearch: '',
      loading: true,
      searchInput: '',
      dolar :0,
      dolarToday : 0,
      dolarToReais: 0,
      user: {
        firstName: 'Felipe',
        lastName: 'Buhrer',
      },
      users: [{
        firstName: 'Maria',
        is_admin: 1,
      },
      {
        firstName: 'Joao',
        is_admin: 0,
      }, {
        firstName: 'Lucas',
        is_admin: 1,
      },
      {
        firstName: 'Pedro',
        is_admin: 0,
      },]
    }
  },
  computed: {
    dolarToReaisValue(){
      
      return `O valor em reais de ${format(this.dolar,'en-US', 'USD')} é de: ${format(this.dolarToReais,'pt-BR','BRL')} `;
    },
    dolarTodayValue(){
     return  `O dólar hoje esta em: ${format(this.dolarToday,'pt-BR','BRL') }`
    },
    fullName() {
      return this.user.firstName + ' ' + this.user.lastName
    },

    userIsNotAdmin() {
      return this.users.filter((user) => user.is_admin === 0);
    },

    userNotFound() {
      return (!this.loading && this.users.data.length <= 0) ? '<span class="notFound">Nenhum Usuário encontrado. </span>' : '';

    }
  }, 
  methods: {
   async  getDolar(type='USD-BRL'){
      const {data} = await http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const typeCurrency = type.split('-').join('');
      console.log(data);
      return data[typeCurrency];

    },

    handlePagination(page){
      return this.searchInput ? this.searchUser(page) : this.getUsers(page);
    },

   async searchUser(page=1){
     console.log('seacrh user')
      try {
        const { data } = await http.get('/api/users/search?page='+Number(page), {
          params: {
            user: this.searchInput
          }
        })

        if(!this.searchInput){ 
          this.getUsers();
        } else {
          this.users = data;
        }
        this.loading = false;
        // console.log(data)
        
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async getUsers(page = 1) {
      try {
        const { data } = await http.get('/api/users/search?page='+Number(page));
        this.users = data;
        console.log(this.users)
      } catch (error) {
        console.log(error.response.data)
      }
    },

 
    //for arrow function with debounce
    searchUserAr: _.debounce(function () {
      this.searchUser();
    }, 1000),
  },
  watch: {
    dolar(value){
     this.dolarToReais = value * this.dolarToday;
      // this.dolar
    }
  },
  async mounted() {
    // this.getUsers();

    try {
      const dolarToday = await this.getDolar();
      this.dolarToday = dolarToday['high']; 
      console.log(this.dolarToday);
    } catch (error) {
      console.log(error.message.data);
    }
  }
}

</script>