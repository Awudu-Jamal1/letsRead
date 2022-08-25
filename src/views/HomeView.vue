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

    <div class="container justify-content-center d-flex mt-5">
      <div class="row">
        <div class="col-md">
          <div class="text-center">
            <p class="subtitle">Top Trending Books</p>
            <BookCard :books="books"/> 
          </div>
          <div class="text-center">
            <p class="subtitle">Monthly Release Book</p>
            <BookCard />
          </div>
        </div>
        <div class="col-2 text-center">
          <SignUpCard/>
          <div class="container-fluid p-4" style="width: 260px">
            <h5>Are you an author or a publisher?</h5>
            <p>
              Gain access to a massive audience of book lovers. Goodreads is a
              great place to promote your books.
            </p>
            <div class="d-flex justify-content-evenly">
              <div>
                <button class="btn border" style="font-size: 10px">
                  Advertise
                </button>
              </div>
              <div>
                <button class="btn border" style="font-size: 10px">
                  Add program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BookSlider />
    <footer>
      <FooterView/>
    </footer>
  </div>
</template>

<script>
import BookList from "../services/BookList";
import FooterView from "../components/Widget/FooterView.vue";
import BookCard from "../components/Widget/bookCard.vue";
import SignUpCard from "../components/Widget/signUpCard.vue";

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
    components: { FooterView, BookCard, SignUpCard }
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
</style>
