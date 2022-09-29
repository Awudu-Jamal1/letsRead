<script>
    export default {
        setup() {
            
        },props:["rate"],
      
    }

    </script>

<template>
    <div>
        <div class="stars-outer">
            <div style="" class="stars-inner " id="nice"></div>
          </div>
    </div>
</template>
<style scoped>
@import "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
#nice{
    width:v-bind(rate)

}
.stars-outer {
  position: relative;
  display: inline-block;
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.stars-outer::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #ccc;
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  color: #f8ce0b;
}
</style>