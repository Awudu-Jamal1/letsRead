<template>
  <div>
    <div class="main-container">
      <div class="title">
        <h4>My Books: Want to Read <span>(3)</span>x</h4>
      </div>
      <div class="content">
        <div class="left-col" style="width: 200px">
          <div>
            <p>
              Bookshelves <span><a href="">Edit</a></span>
            </p>
            <p>All <a href="">3</a></p>
            <p>Read <a href="">0</a></p>
            <p>Currently Reading <a href="">0</a></p>
            <p>Want to Read <a href="">(3)</a></p>
          </div>
          <hr />
          <div>
            <p>life <a href="">(0)</a></p>
            <button class="btn">Add shelf</button>
          </div>
        </div>

        <div class="right-col">
          <table style="width: 100%">
            <thead class="">
              <tr style="width: 100%">
                <th>cover</th>
                <th style="width: 25%">title</th>
                <th>author</th>
                <th>avg rating</th>
                <th>rating</th>
                <th>shelves</th>
                <th>date read</th>
                <th>date added</th>
              </tr>
            </thead>
            <tbody class="text-align-center">
              <tr>
                <td>
                  <img
                    src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649286799l/59364173._SY75_.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <a href="">I'm Glad My Mom Died</a>
                </td>
                <td>
                  <a href="">McCurdy Jennette</a>
                </td>
                <td>4.70</td>
                <td>4.70</td>
                <td><a href="">to-read</a></td>
                <td>not set</td>
                <td>Sep 05,2022</td>
                <td><a href="">edit view</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-col {
  float: right;
  width: 750px;
}
.left-col {
  float: left;
}

td {
  line-height: 18px;
  padding: 12px 5px 5px 0;
}
a {
  color: var(--text-color);
}
tr {
  border-spacing: 2px;
  border-bottom: 1px solid #eee;
}
</style>
