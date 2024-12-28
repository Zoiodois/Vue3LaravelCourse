<template>

  <Header />

  <button v-on:click="add">Add {{  count }}</button>
  
  <h2>App</h2>

  <Footer />

</template>

<script setup>
import {ref} from "vue";

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


//Exempl 4 - Composition api Better way
const count = ref(0);
function add(){
  count.value ++;
}



// //Exemple 3 - Composition api - Remove "setup" from script tag
// export default {
//     components:{Header, Footer},
//     setup(){
//       const count = ref(0);

//       function add(){
//         count.value ++;
//       }

//       return {
//         count, add
//       }
//     },
// }
//End exemple 3.



//Exemple 2 - options api
// export default {
//   components:{Header, Footer},
//   data(){
//     return {
//       count : 0,
//     }
//   },
//   methods: {
//     add(){
//       this.count++;
//     }
//   }
// }
//EndExemple 2

</script>

<style>
@import "@/assets/app.css";
</style>
