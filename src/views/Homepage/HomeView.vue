<template>
  <div>

    <div class="container-fluid mb-3 p-5">
      <div class="container mt-5">
        <p class="mt-5 pt-4 subtitle">Let Get Our Mid Busy With Books</p>
        <p style="width: 400px" class="mb-4">
          If you want to get your mind busy and do not what read. This is the
          right place for you
        </p>
        <button class="btn btns">Explore Now</button>
      </div>
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div>
            <div class="p-3">
              <p class="subtitle">Top Trending Books</p>
              <hr />
              <BookSlider :books="books" />
            </div>
            <div class="d-flex align-items-center justify-content-around m-3">
              <div>
                <img
                  src="https://images.booksamillion.com/content/images/042d04073c7eaf97dfa51a18ec62445a.jpg"
                />
              </div>
              <div>
                <img
                  src="https://images.booksamillion.com/content/images/6f787f41d2cb7115f533f98c9b30c88f.jpg"
                />
              </div>
            </div>
            <div class="p-3">
              <p class="subtitle">Monthly Release Book</p>
              <BookSlider :books="sList" />
            </div>
            <div class="p-3">
              <p class="subtitle">Most Reviewed Book</p>
              <BookSlider :books="books" />
            </div>
          </div>
        </div>
      </div>
      <div class="container d-flex align-items-center justify-content-around">
        <div>
          <img
            style="height: 400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVETv0Oa4Q__hjMKWL6Tqe1jo2q3nZcuLhg&usqp=CAU"
            alt=""
          />
          <p></p>
        </div>
        <div>
          <h5>Are you an author or a publisher?</h5>
          <p>
            Gain access to a massive audience of book lovers. LetRead is a great
            place to promote your books.
          </p>
        </div>
      </div>
      <div class="container d-flex align-items-center justify-content-around">
        <div class="container-fluid p-4" style="width: ">
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
        <div>
          <img
            style="height: 400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVETv0Oa4Q__hjMKWL6Tqe1jo2q3nZcuLhg&usqp=CAU"
            alt=""
          />
          <p></p>
        </div>
      </div>
    </section>

    <footer>
      <FooterView />
    </footer>
  </div>
</template>

<script>
import BookList from "../../services/BookList";
import FooterView from "../../components/Widget/FooterView.vue";
import BookCard from "../../components/Widget/bookCard.vue";
import BookSlider from "../../components/Widget/bookSlider.vue";
import SignUpCard from "../../components/Widget/signUpCard.vue";
import SearchBar from "../../components/Widget/searchBar.vue";
import GenreCard from "../../components/Widget/genreCard.vue";
import Navdesign from "../../components/Widget/navdesign.vue";

export default {
  async mounted() {
    this.books =  ((await BookList.index()).data).slice(1,10);
   this.sList = ((await BookList.index()).data).slice(11,20);
    console.log(this.sList);
  },
  data() {
    return {
      books: null,
      sList:null
    };
  },
 
  
  components: {
    FooterView,
    BookSlider
  },
};
</script>

<style scoped>
.subtitle {
  font-family: "Lobster Two", cursive;
  color: #123c69;
  font-size: 25px;
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
  color: var(--subtitle-color);
}

.btns:hover:after {
  opacity: 1;
  right: 10px;
}
.btns {
  border-radius: 4px;
  background-color: var(--subtitle-color);
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
