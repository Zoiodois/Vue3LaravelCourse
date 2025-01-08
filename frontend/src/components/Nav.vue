<template >

     <router-link class="botao" to="/">Home Option</router-link>
     <router-link class="botao" to="/homecomputed">Home Composition</router-link>
     <router-link class="botao" to="/about">About</router-link>
     <router-link class="botao" to="/user/createOptionApi">User create - OptApi</router-link>
     <router-link class="botao" to="/user/createCompositionApi">User create - CompApi</router-link>
     <router-link class="botao" to="/products">Produtos</router-link>
</template>
<script>
export default {
    name:"Nav"
}
</script>
<style scoped>
    .botao{
        outline: solid 1px black;
        margin: 2px;
    }
</style>