<template>
Option Api:
<br>
<h2>Mixins: Disponivel somente na optionApi</h2>
<br>
<button @click="increment"> Add: {{ count }}</button>

<hr>
{{ getTotalUsers }}
<ul>
    <li v-for="(user,index) in users" :key="index">{{ user.firstName }}</li>
</ul>

<hr>
<br>
<h2>Teleport Exemple:</h2>

<button @click="showModal = !showModal">Open Modal</button>
<teleport to='#modal' >
<Modal v-if="showModal">
    Qualquer coisa dentro do modal
</Modal>
</teleport>

<teleport to='#input' >
    <input type="text" ref="inputElement">
     
</teleport>
<!-- <teleport to='#lorem' >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta minus a, consectetur dolore illo, est eum perferendis facere tempora expedita modi animi deserunt sit harum odit, magnam explicabo asperiores?</p>
     
</teleport> -->


<br><hr>
<br>
<h2>nextTick Exemple:</h2>
<input type="text" ref="inputElement-2" v-if="showElement">
<button @click="showSomething()">Show</button>
</template>

<script>
import Modal from '@/components/icons/Modal.vue';
import count from '@/mixins/count.js';
import users from '@/mixins/users';
export default{
    components: {
        Modal,
    },
    mixins: [count, users],
    data(){
        return{
            showElement: false,
            showModal: false,
        }

    },
    methods: {
    
        async showSomething(){
            this.showElement = true;
            await this.$nextTick(()=>{
                this.$refs.inputElement.focus();
                console.log( this.$refs.inputElement)
            })
            console.log('carregou')
        }
    }
    
}

</script>