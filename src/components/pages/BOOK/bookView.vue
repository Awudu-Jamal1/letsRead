<template>
    <div class="main container" >
     <div class="  bookimg">
      <img  style="height:312px; width: 208px; " :src="book.img_Url"/>
      <div><button class="btn">Want to Read</button></div>
      <div><button class="btn btn-success">Want to Read</button></div>
     </div>
     <div class="px-5" style="height:100vh;">
     <div>
      <h1>{{book.title}}</h1>
      <p style="font-size:18px;">{{book.author}}</p>
      <Rated :rate="rating"/>
      <div class="desc" style="font-size:16px;">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquid reprehenderit qui voluptas omnis reiciendis atque inventore in iste ducimus corporis vero, error dignissimos cum praesentium blanditiis consequuntur dicta repudiandae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita porro atque autem perferendis eius numquam molestias, reiciendis consequuntur repellendus consequatur perspiciatis harum reprehenderit doloribus. Impedit!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptate deserunt eos, officiis dicta enim nostrum ad, architecto molestiae voluptas perferendis inventore reprehenderit temporibus eaque nam! Sapiente minima impedit rem alias quaerat dicta modi reiciendis unde. Tempora id est accusantium, ducimus consequatur ex rem blanditiis a voluptate doloribus facere cumque. Rerum fugiat quia accusantium velit. Saepe quia libero omnis fuga aut nemo tenetur ducimus incidunt ipsum quam tempore sequi autem perferendis blanditiis asperiores accusantium, eaque quas earum repudiandae quaerat suscipit doloremque dolorum esse! In alias temporibus itaque delectus inventore perferendis recusandae dignissimos sunt? Obcaecati, provident quam. Optio repellat sunt repellendus.
  
      </div>
      <p>450 pages</p>
      <p>First published in Feb 10, 2010 </p>
      <p class="bold">Book Details & editions</p>
      <div></div>
     </div>
     <hr>
     <div class="people">
      <div class="d-flex">
        <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1296686275i/39755._UY200_CR33,0,200,200_.jpg" alt=""></div>
        <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1259557649i/1215681._UY200_CR33,0,200,200_.jpg" alt=""></div>
        <div><img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/users/1218232979i/1403663._UY200_CR18,0,200,200_.jpg" alt=""></div>
        <span class="m-2">22k.2k people are currently reading</span>
      </div>
     </div>
     <hr>
     <div  class="author">
      <h2>About Author</h2>
      <div class="d-flex">
        <div>
          <img :src="author.img_Url" alt="">
      </div>
      <div class="align-self-center m-3">
  <a href="">{{author.name}}</a> <br>
  <p>{{author.no_Books}}books 13.3k followers</p></div>
        </div>
         </div>
     <div class="oedition">
      <BookSlider/>
     </div>
     <hr>
    <ReviewRating :bookid="ids"/>
     <hr>
     <ReviewsBox/>
    
  
     </div>
    </div>
  </template>
  
  <script>
  import BookList from "../../../services/BookList";
import ReviewsBox from '../../Widget/reviewsBox.vue';
import BookSlider from '../../Widget/bookSlider.vue';
import Rated from "../../Widget/rated.vue";
import ReviewRating from "./reviewRating.vue";
  export default {
    setup() {
    },
    async mounted() {
        this.books = (await BookList.index()).data;
       // console.log(this.books);
        const bookID= this.$route.params.bookId
        this.ids=bookID
        this.book = (await BookList.show(bookID)).data
        this.author=(await BookList.show(bookID)).data.Author

       const review = this.book.review
this.rating=`${(review/5)* 100}%`
    
    },
    data() {
        return {
            books: null,
            book:{},
            author:{},
            ids: null,
            rating:null
        };
    },
    components: { ReviewsBox, BookSlider, Rated, ReviewRating },
   
}
  </script>
  
  <style scoped>
    div{
      font-size: 16px;
    }
    .bookimg{
      display: block;
      height: 100vh;
    }
    h1{
      font-size: 32px;
    }
    .main{
      display: flex;
      justify-content: center;
      align-items:  center;
      height: 100vh;
      
    }
    .people img{
  width: 30px;
  border-radius:100% ;
    }
    .author img{
      height: 100px;
      border-radius: 100%;
    }
    .symbols .comments{
      margin-bottom: 20px;
      
    }
    @media (max-width: 768px) {
    .main {
      display: flex;
      flex-direction: column;
      
    }
  }
  </style>
  