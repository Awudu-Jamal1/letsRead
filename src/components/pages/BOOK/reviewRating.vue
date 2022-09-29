<template>
     <div class="ratin">
    <h2 class="mb-5">Ratings & reviews</h2>
      <div class="text-center mb-4">
        <div class=""><Rating :bookid="bookid"/></div>
        <p>Rate this book</p>
        <button @click="review" class="btn btn-dark">Write Review</button>
      </div>
     </div>
</template>

<script>
import Rating from '../../Widget/rating.vue';
export default {
    methods:{
      review(){
        this.$router.push("/review");
      }
    },
    components: { Rating},
    props:['bookid']
}
</script>