<template>
    <input ref="inputRef" type="text">
</template>  
  
  
  
  
  <script setup>
  import { useCurrencyInput } from 'vue-currency-input';

  const props = defineProps(['modelValue', 'options'])

  const {inputRef} = useCurrencyInput(props.options)
</script>