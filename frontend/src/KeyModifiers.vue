<style scoped>
@import "@/assets/app.css";
.my-class{
    border: solid 3px red;
}

.my-other-class{
    border: solid 3px blue;
}
</style>



<!-- **OPTIONS API:** -->

<template>


    <img :src="imgSrc" alt="" class="my-default-class" :class="{'my-class':is_admin, 'my-other-class':!is_admin}">

    <button @click="count++">Clique Aqui {{ count }}</button> 
    <!-- <input type="text" @keyup="add" name="" id="" placeholder="Qualquer coisa"> -->

    <form action="http://google.com.br" @submit.prevent="search">
        <input type="text" placeholder="Buscar" name="" id="">
        <button type="submit" >Buscar </button>
        <button @click.submit.prevent="search" >Buscar com at Click</button>
    </form>

    <a href="http://google.com.br" @click.prevent="search"> Ir para o google A</a>
    {{  age }}
    <button @click.once="age++"> Age ++ com Once</button>


    <input type="text" placeholder="Digite algo aqui" @keyup.enter="keyModifier">



    {{ userName }}
    <input type="text" v-model="userName" name="" id="" placeholder="Qualquer coisa">


    <span v-show="showHeader">

        <Header />

    </span>
 
    <template v-if="showHeader">
        <Header />
    </template>
    <span v-else-if="showHeader" >Sem Header</span>
    <template v-else="showHeader" >Sem Header</template>

    <hr>

    <h2> Lista de Usuários:</h2>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.firstName }} 
            <button  v-if="user.is_admin === 1">Change to not admin</button>
            <button  v-else>Change to admin</button>

        </li>
    </ul>

</template>
<script>

import http from '@/services/http';
import Header from './components/Header.vue';
export default {

    components: { Header },
    data() {
        return {
            users: [],
            userName: "",
            count : 0,
            showHeader: true,
            is_admin: false,
            imgSrc : "https://picsum.photos/200/300",
            myClass: "my-class",
            age:40,
        }
    },
    async mounted() {
        try {
            const { data } = await http.get('api/users');
            this.users = data;


        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        add(event){
            this.count+=Number(event.target.value);
            console.log(event.target.value);
        },
        myName(event){
            this.userName =  event.target.value;
        },
        search(){
            console.log('buscou');
        },
        keyModifier(){
            console.log("pressionou")
        }
    }


}

</script>  

<!-- **Composition API** -->
<!-- 
<template>
    <img :src="imgSrc" alt="" class="my-default-class" :class="{'my-class':is_admin, 'my-other-class':!is_admin}">
    <button @click="add('teste')">Clique Aqui {{ count }}</button>

    {{  userName }}
    <input type="text" placeholder="Name" v-model="userName" name="" id="">
    
    <template v-if="showHeader">
        <Header />
    </template>
    <hr>

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
const showHeader = true;
const imgSrc = ref("https://picsum.photos/200/300");
const is_admin = ref(false);

let users = reactive({users:[]});

function add(teste){
    count.value++;
    console.log(teste);
}
function changeName(event){
    userName.value = event.target.value
}

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

</script>   -->