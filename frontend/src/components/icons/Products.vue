<!-- Composition API exemple -->
<template>
    <ul>
        <slot v-for="(product,index) in products" :key="index" v-bind:product="product"></slot>
    </ul>
</template>

<script setup>
    defineProps(['products'])
</script>


<!-- Option API Exemple -->
<!-- <template>

    <ul>
        <slot v-for="(product, index) in products" :key="index" v-bind:product="product"></slot>
    </ul>
</template>

<script>

export default {
    props: ['products']
}

</script> -->