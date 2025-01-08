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

<!-- <template>


    <img :src="imgSrc" alt="" class="my-default-class" :class="{'my-class':is_admin, 'my-other-class':!is_admin}">

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
            showHeader: true,
            is_admin: false,
            imgSrc : "https://picsum.photos/200/300",
            myClass: "my-class",
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

<!-- **Composition API** -->

<template>
    <img :src="imgSrc" alt="" class="my-default-class" :class="{'my-class':is_admin, 'my-other-class':!is_admin}">
    
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