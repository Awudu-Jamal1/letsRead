<template>
  <div>
    <header>
      <div class="container-fluid text-center"><p>LetsRead</p></div>
    </header>
    <div class="container-fluid mb-3 p-5" style="background: #eee2dc">
      <div class="mt-5">
        <p class="mt-5 pt-4 subtitle">Let Get Our Mid Busy With Books</p>
        <p style="width: 400px" class="mb-4">
          If you want to get your mind busy and do not what read. This is the
          right place for you
        </p>
        <button class="btn btns">Explore Now</button>
      </div>
    </div>
<section >
  <div>
    <SearchBar/>
  </div>
  <div class="container">
    <div class="row " >
      <div class=" border">
        <div class=" p-3">
           <p class="subtitle">Top Trending Books</p>
        <BookSlider :books="books" />
      </div>
      <div class="p-3">
        <p class="subtitle">Monthly Release Book</p>
        <BookSlider :books="books" />
        
      </div>
      </div>
    </div>
  </div>

</section>
    
    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import BookList from "../services/BookList";
import FooterView from "../components/Widget/FooterView.vue";
import BookCard from "../components/Widget/bookCard.vue";
import BookSlider from "../components/Widget/bookSlider.vue";
import SignUpCard from "../components/Widget/signUpCard.vue";
import SearchBar from "../components/Widget/searchBar.vue";

export default {
  async mounted() {
    this.books = (await BookList.index()).data;
    console.log(this.books);
  },
  data() {
    return {
      books: null,
    };
  },
  components: { FooterView, BookCard, SignUpCard, BookSlider, SignUpCard, SearchBar },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap");
header {
  font-size: 36px;
  font-family: "Rubik Dirt", cursive;
  color: #123c69;
}

.subtitle {
  font-family: "Lobster Two", cursive;
  color: #123c69;
  font-size: 40px;
}

.btns:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 14px;
  right: -20px;
  transition: 0.5s;
}

.btns:hover {
  padding-right: 24px;
  padding-left: 8px;
}

.btns:hover:after {
  opacity: 1;
  right: 10px;
}
.btns {
  border-radius: 4px;
  background-color: #ac3b61;
  border: none;
  color: #fff;
  text-align: center;
  padding: 13px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  /*box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);*/
  margin: 35px;
}

.btns {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.col {
  padding: 10px;
}
/*.signUp{
  display: flex;
  flex-direction: row;}
@media(min-width: 1200px){
  .signUp{flex-direction : column;
}
}*/

</style>
