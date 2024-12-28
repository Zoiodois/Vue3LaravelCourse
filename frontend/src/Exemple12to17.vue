<!-- Using the cpomposition API -->

<template>

    {{ count }}

    <div :class="test">Teste</div>
    
    <ul>
      <template v-for="(user, key) in users" :key="user.id">
        <li v-if="user.is_admin === 1">
          {{ key }} - {{ user.firstName  }} -  {{  user.age }}

        </li>
       </template>
    </ul>
   
   
    <button v-on:click="count++">Add</button>
    
    <div v-if="showHeader">
      <Header />
    </div>


    <h2>App</h2>

    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>

    <router-view></router-view>
  
  </template>
  
<!-- OPTIONS API: -->
<script>
import Header from './components/Header.vue';

export default{

  components: {Header},
  data() {
    return {
      test : "class",
      count :0,
      showHeader: true,
      userName:"alexandre",
      users: [
           {   
        id: 1,
        firstName:'Alexandre',
        age: 36,
        is_admin:1,
       },
       {
        id: 2,
        firstName:'Maria',
        age: 33,
        is_admin:0,
       },
       {
        id: 3,
        firstName:'Mario',
        age: 58,
        is_admin:0,
       },
       {
        id: 4,
        firstName:'Marina',
        age: 23,
        is_admin:0,
       }
      ]

    }
  },
  mounted(){
    console.log(this.count )
  }


}

</script>

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