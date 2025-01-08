<template>
    <input type="text" placeholder="firstName" v-model="firstName">
    <input type="text" placeholder="lastName" v-model="lastName">


    <br>
    <hr>

    <input type="text" placeholder="firstName" v-model="user.firstName">
    <input type="text" placeholder="lastName" v-model="user.lastName">
    <input type="text" placeholder="Street Adress" v-model="user.adress.street">

    <br>
    <hr>

    <ul>
        <li v-for="(item, index) in itens" :key="index" >{{ item.name }} <input type="text" v-model="item.price" id=""></li>
    </ul>

</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            user: {
                firstName: '',
                lastName: '',
                adress: {
                    street: ''
                }
            },

            itens:[
                {
                    id:1,
                    name: "teste1",
                    price: 10
                },
                {
                    id:2,
                    name: "teste2",
                    price:20
                }
            ]
        }
    },
    watch: {
        itens:{
            handler(itensObject, oldValue){
                console.log('carregou');
                itensObject.forEach(element => {
                    if(!Number.isInteger(Number(element.price)))
                    console.log('Não é um inteiro '+ element.price);
                });
            }, 
            deep: true,
            // para o immediate true tem que cuidar para o DOM ja estar carregado
            immediate: true
        },



        firstName(value, oldValue) {

            console.log('new =>' + value + ' old =>' + oldValue)

        },
        lastName(value, oldValue) {

            console.log('new =>' + value + ' old =>' + oldValue)

        },
        'user.firstName': function (value, oldValue) {

            console.log('new =>' + value + ' old =>' + oldValue)

        },
        'user.lastName': function (value, oldValue) {

            console.log('new =>' + value + ' old =>' + oldValue)

        },
        'user.adress.street': function (value, oldValue) {

            console.log('new =>' + value + ' old =>' + oldValue)

        },
    }
}
</script>