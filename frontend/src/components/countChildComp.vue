<template>
    <button @click="add">Add countChild Component</button>
</template>

<script setup>

const emit = defineEmits(['addCount']);

function add(){
    emit('addCount', 10)
}

</script>