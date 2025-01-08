<!-- Composition Api Exemle -->
 <template>
 Likes: {{ likes }}
 Comments: {{  comments }}
 </template>

 <script setup>

 defineProps({
    likes: Number|String,
    comments: Number
 })
</script>





<!-- Option API Exemple -->
<!-- <template> 
    Likes: {{  likes }}
    Comments: {{ comments }}
</template>


<script>
export default{
    props:{
        likes:Number|String,
        comments: Number
    }
}
</script> -->