<template>
    <div class="d-flex justify-content-center">
        <section>
            <div mb-3><h3><a href="">Traffic: Why We Drive the Way We Do and What It Says About Us</a></h3></div>
            <div class="d-flex">
                <div>
                    <img  style="width:50px; height:73px;" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320428955l/2776527._SX50_.jpg" alt="">
                </div>
                <div>
                    <p class="h5">Traffic: Why We Drive the Way We Do and What It Says About Us (Hardcover)</p>
                <p>by Tom Vanderbilt</p></div>
            </div>
            <div class="separator"></div>
            <div style="display:inline-block;">My rating: <span class="px-1" style="display:inline-block;"> <Rated/></span> <span>Clear</span></div>
            <div class="separator"></div>
            <form action="">
                <p>What did you think?</p>
                <textarea name="" id="" cols="124" rows="15"></textarea>
                <div class="separator"></div>
                <button class="btn"> Post</button>
            </form>
        </section>

    </div>
</template>

<script>
import Rated from '../../Widget/rated.vue';
export default {
    components: { Rated }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #000;
}
.separator {
    border-bottom: 1px solid #eee;
    margin-top: 14px;
}
</style>