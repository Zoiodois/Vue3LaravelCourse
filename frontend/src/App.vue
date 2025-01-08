<style>


</style>
<template>
    <div>

        <div>
            <Nav />
        </div>
        <hr>
        <div>
            <h1>Counter:</h1>
            <Counter></Counter>
        </div>

        <h1>Router View :</h1>
        <div>
            <router-view></router-view>
        </div>

<!--         
        <br><hr>
        <h1>Exemples Fro APP . VUE</h1>

        <div>
            <h2>Add Exemple. From App.vue:</h2>
            {{ count }}
            <button @click="count++">Add -</button>
            <countChildComp v-on:addCount="(value)=> count+=value" /> 
             <countChildComp v-on:addCount="add" /> 

            <CountChildOption v-on:addCount="add"/>
                    <CountChildOption v-on:addCount="(value) => count+=value"/> 
        </div>

        <br>
        <hr>

        <div>
            <h2>Query Selector Exemple</h2>
            <ul>
                <li v-for="(item,index) in itens" :key="index" ref="item"> {{ item.name }}</li>
                <li v-for="(product, index) in products" :key="index" id="product" ref="product"> {{ product.name }}
                </li>
            </ul>
            <img src="https://picsum.photos/200/300" alt="" id="img" ref="img">
        </div>

        <br>
        <hr>
        <div>
            <h2>Search Exemple: </h2>
            <input type="text" placeholder="search text" @keyup="search">
            <input type="text" placeholder="throttle" @keyup="throttle">

        </div> -->       

       
    </div>

</template>

<!-- Composition API -->
<!-- <script setup>
import countChildComp from './components/countChildComp.vue';
import Nav from './components/Nav.vue';
import {ref, onMounted, reactive} from 'vue';
import _ from 'lodash';

const count = ref(0);
const img = ref(null);
const product = ref([]);

const products = reactive([
{
        id: 1,
        name: 'MacBook'
    },
    {
        id: 2,
        name: 'Teclado'
    },
    {
        id: 3,
        name: 'IMac'
    },
    {
        id: 4,
        name: 'Lenovo'
    }
])

function add(value) {
    count.value += value;
}

const search = _.debounce(()=> {
    console.log('debounde');
}, 1000);
const throttle = _.throttle(()=> {
    console.log('throttle');
}, 1000);

// function search(){
//     console.log('search');
// }

onMounted(()=> {
    //Na compisition API poara selecionar vairos elemento, é melhor usar o querySelectorAll
    // console.log(document.querySelector('#img'))
    // console.log(document.querySelectorAll('#product'))
    // console.log(img.value);
    // console.log(img.value['src']);
    // console.log(product.value); 


})


</script>  -->


<!-- Option API -->
<script>
import Nav from '@/components/nav';
import CountChildOption from './views/countChildOption.vue';
import _ from 'lodash';
import Counter from './components/Counter.vue';
export default {
    components: { Nav, CountChildOption, Counter },
    data() {
        return {
            count: 0,
            users: [],
            userSearch: '',
            loading: true,
            itens: [
                {
                    name: 'teste1'
                },
                {
                    name: 'teste'
                }
            ],
            products: [
                {
                    id: 1,
                    name: 'MacBook'
                },
                {
                    id: 2,
                    name: 'Teclado'
                },
                {
                    id: 3,
                    name: 'IMac'
                },
                {
                    id: 4,
                    name: 'Lenovo'
                }
            ]
        }
    },
    computed:{
    },
    methods: {
        add(value) {
            this.count += value;
        },
        search: _.debounce(() => {
            console.log('search')
        }, 1000),
        throttle: _.throttle(() => {
            console.log('trhottle')
        }, 1000),
       

    },


    async mounted() {
        // selector exemples
        // console.log(document.querySelector('#img')['src'])
        // console.log(this.$refs.item)
        // console.log(this.$refs.img['src'])

    }
}

</script>
