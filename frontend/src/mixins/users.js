import http from "@/services/http.js";
import { computed } from "vue";
export default {

    data(){
        return{
            users: []
        }
    },

    async mounted() {
        this.users = await this.getUsers()
    },
    computed:{
        getTotalUsers(){
            return this.users.length;
        }
    },

    methods: {
        async getUsers(){
            try {
                const {data} = await http.get('api/users');
                return data
            } catch (error) {
                console.log(error)
            }
        }
    },
}