<template>


    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot name="header"></slot>
                <slot></slot>

                <slot name="footer"></slot>
           

            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="close">Botao do modal</button>
    </div>

</template>

<script>
export default {
    name: 'Modal.vue',
    methods: {
        close() {
            this.$emit('closeModal');
        }
    },
}

</script>

<style scoped>
/* @import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"; */
</style>