<style lang="">

</style>


<template>
    <h2>Produtos</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur unde, nihil iusto sapiente sint asperiores
        inventore ipsum sunt! Sapiente consectetur eveniet soluta vero exercitationem optio! Provident consequuntur
        incidunt dicta cumque.</p>
    <ProductInfo :likes="product.likes" :comments="product.comments" />

    <div>

        <Products v-bind:products="products" v-slot="props">
            <li @click="getProduct(props.product.id)">{{ props.product.name }}</li> 
        </Products>
    </div>
</template>




<!-- Option API Exemple -->

<!-- <script>
import ProductInfo from '@/components/ProductInfo.vue';
import Products from '@/components/icons/Products.vue';

export default {
    components: {ProductInfo , Products},
    name: "Products.vue",
    data(){
        return{
            products : [
                {
                    id: 1,
                    name: 'MacBook'
                },
                {
                    id: 2,
                    name: 'windows'
                },
                {
                    id: 3,
                    name: 'IMac'
                },
                {
                    id: 4,
                    name: 'Lenovo'
                }
            ],
            product : {
                likes: 10,
                comments: 15
            }
        }
    },
    methods: {
        getProduct(id){
            console.log(id);
        }
    }
}
</script> -->



<!-- Composition API -->

<script setup>
import ProductInfo from '@/components/ProductInfo.vue';
import Products from '@/components/icons/Products.vue';
import { ref, reactive } from 'vue';

const product = reactive({
    likes: ref(20),
    comment: ref("10"),
})
function getProduct(id){
    console.log(id)
}

const products = reactive([
    {
        id: 1,
        name: 'MacBook'
    },
    {
        id: 2,
        name: 'windows'
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

const likes = ref(20);
const comment = ref(10);

</script>
